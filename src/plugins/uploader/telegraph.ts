import path from 'path'
import fs, { ensureDirSync, remove } from 'fs-extra'
import { ReadStream } from 'fs'

import { IPicGo, IPluginConfig, ITelegraphConfig, IOldReqOptions } from '../../types'
import { IBuildInEvent } from '../../utils/enum'
import { ILocalesKey } from '../../i18n/zh-CN'

const postOptions = async (options: ITelegraphConfig, image: ReadStream): Promise<IOldReqOptions> => {
  const requestOptions: IOldReqOptions = {
    method: 'POST',
    url: 'https://telegra.ph/upload',
    headers: {
      'content-type': 'multipart/form-data'
    },
    formData: {
      file: image
    }
  }
  if (options.proxy) {
    requestOptions.proxy = options.proxy
  }
  return requestOptions
}

const handle = async (ctx: IPicGo): Promise<IPicGo> => {
  let tgOptions = ctx.getConfig<ITelegraphConfig>('picBed.telegraphplist')
  if (!tgOptions) {
    tgOptions = {}
  }
  try {
    const imgList = ctx.output
    for (const img of imgList) {
      if (img.fileName && img.buffer) {
        let image = img.buffer
        if (!image && img.base64Image) {
          image = Buffer.from(img.base64Image, 'base64')
        }
        const uploadTempPath = path.join(ctx.baseDir, 'uploadTemp')
        ensureDirSync(uploadTempPath)
        const tempFilePath = path.join(uploadTempPath, img.fileName)
        fs.writeFileSync(tempFilePath, image)
        const options = await postOptions(tgOptions, fs.createReadStream(tempFilePath))
        const res: string = await ctx.request(options)
        const body = typeof res === 'string' ? JSON.parse(res) : res
        remove(tempFilePath)
        if (body?.[0]?.src) {
          delete img.base64Image
          delete img.buffer
          img.imgUrl = `https://telegra.ph${body[0].src}`
        } else {
          throw new Error('Server error, please try again')
        }
      }
    }
    return ctx
  } catch (err: any) {
    ctx.emit(IBuildInEvent.NOTIFICATION, {
      title: ctx.i18n.translate<ILocalesKey>('UPLOAD_FAILED'),
      body: ctx.i18n.translate<ILocalesKey>('CHECK_SETTINGS_AND_NETWORK'),
      text: ''
    })
    throw err?.response?.data || err
  }
}

const config = (ctx: IPicGo): IPluginConfig[] => {
  const userConfig = ctx.getConfig<ITelegraphConfig>('picBed.telegraphplist') || {}
  const config: IPluginConfig[] = [
    {
      name: 'proxy',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_IMGUR_PROXY')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_IMGUR_PROXY')
      },
      get message() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_IMGUR_MESSAGE_PROXY')
      },
      default: userConfig.proxy || '',
      required: false
    }
  ]
  return config
}

export default function register(ctx: IPicGo): void {
  ctx.helper.uploader.register('telegraphplist', {
    get name() {
      return ctx.i18n.translate<ILocalesKey>('PICBED_TELEGRAPH')
    },
    handle,
    config
  })
}
