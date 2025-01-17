import { lookup } from 'mime-types'
import { IPicListConfig, IPicGo, IPluginConfig, IOldReqOptionsWithFullResponse } from '../../types'
import { IBuildInEvent } from '../../utils/enum'
import { ILocalesKey } from '../../i18n/zh-CN'
import { buildInUploaderNames } from './utils'

const postOptions = (options: IPicListConfig, fileName: string, image: Buffer): IOldReqOptionsWithFullResponse => {
  const { host = '127.0.0.1', port = '', picbed = '', configName = 'Default', serverKey = '' } = options
  const isIp = host.match(/(\d+)\.(\d+)\.(\d+)\.(\d+)/)
  const protocol = host.startsWith('https://') ? 'https://' : 'http://'
  const formatHost = host.replace(/(http:\/\/|https:\/\/)/, '')
  const defaultPort = port || '36677'
  const endpoint = isIp
    ? `${protocol}${formatHost}:${defaultPort}`
    : `${protocol}${formatHost}${port ? `:${port}` : ''}`
  const url = `${endpoint}/upload?configName=${configName}${picbed ? `&picbed=${picbed}` : ''}${serverKey ? `&key=${serverKey}` : ''}`
  return {
    method: 'POST',
    url,
    headers: {
      'content-type': 'multipart/form-data'
    },
    formData: {
      file: {
        value: image,
        options: {
          filename: fileName,
          contentType: lookup(fileName)
        }
      }
    },
    resolveWithFullResponse: true
  }
}

const handle = async (ctx: IPicGo): Promise<IPicGo | boolean> => {
  const piclistOptions = ctx.getConfig<IPicListConfig>('picBed.piclist')
  if (!piclistOptions) {
    throw new Error("Can't find PicList config")
  }
  try {
    const imgList = ctx.output
    for (const img of imgList) {
      if (img.fileName && img.buffer) {
        let image = img.buffer
        if (!image && img.base64Image) {
          image = Buffer.from(img.base64Image, 'base64')
        }
        const options = postOptions(piclistOptions, img.fileName, image)

        const res = await ctx
          .request(options)
          .then((res: any) => res)
          .catch((err: Error) => {
            return {
              statusCode: 400,
              body: {
                msg: ctx.i18n.translate<ILocalesKey>('AUTH_FAILED'),
                err
              }
            }
          })
        if (res.statusCode === 200 && res.body?.success) {
          delete img.base64Image
          delete img.buffer
          img.imgUrl = res.body.result[0]
          img.fullResult = res.body.fullResult ? res.body.fullResult[0] : ''
        } else {
          throw new Error(res.body.message)
        }
      }
    }
    return ctx
  } catch (err: any) {
    ctx.emit(IBuildInEvent.NOTIFICATION, {
      title: ctx.i18n.translate<ILocalesKey>('UPLOAD_FAILED'),
      body: ctx.i18n.translate<ILocalesKey>('CHECK_SETTINGS')
    })
    throw err
  }
}

const config = (ctx: IPicGo): IPluginConfig[] => {
  const userConfig = ctx.getConfig<IPicListConfig>('picBed.piclist') || {}
  const config: IPluginConfig[] = [
    {
      name: 'host',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_PICLIST_HOST')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_PICLIST_HOST')
      },
      default: userConfig.host || '127.0.0.1',
      required: true
    },
    {
      name: 'port',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_PICLIST_PORT')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_PICLIST_PORT')
      },
      default: userConfig.port || 36677,
      required: false
    },
    {
      name: 'picbed',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_PICLIST_PICBED')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_PICLIST_PICBED')
      },
      default: userConfig.picbed || '',
      required: false
    },
    {
      name: 'configName',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_PICLIST_CONFIGNAME')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_PICLIST_CONFIGNAME')
      },
      default: userConfig.configName || '',
      required: false
    },
    {
      name: 'serverKey',
      type: 'input',
      get prefix() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_PICLIST_KEY')
      },
      get alias() {
        return ctx.i18n.translate<ILocalesKey>('PICBED_PICLIST_KEY')
      },
      default: userConfig.serverKey || '',
      required: false
    }
  ]
  return config
}

export default function register(ctx: IPicGo): void {
  ctx.helper.uploader.register(buildInUploaderNames.piclist, {
    get name() {
      return ctx.i18n.translate<ILocalesKey>('PICBED_PICLIST')
    },
    handle,
    config
  })
}
