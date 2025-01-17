import { IPicGo } from '../../types'
import ImgFromPath from './path'
import ImgFromBase64 from './base64'

const buildInTransformers = () => {
  return {
    register(ctx: IPicGo) {
      ctx.helper.transformer.register('path', ImgFromPath)
      ctx.helper.transformer.register('base64', ImgFromBase64)
    }
  }
}

export default buildInTransformers
