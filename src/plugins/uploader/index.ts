import type { IPicGo, IPicGoPlugin } from '../../types'
import smmsUploader from './smms'
import tcYunUploader from './tcyun'
import githubUploader from './github'
import qiniuUploader from './qiniu'
import imgurUploader from './imgur'
import aliYunUploader from './aliyun'
import upYunUploader from './upyun'
import webdavplistUploader from './webdav'
import localUploader from './local'
import sftpUploader from './sftp'
import telegraphUploader from './telegraph'
import piclistUploader from './piclist'
import lskyUploader from './lsky'
import awss3plistUploader from './awss3plist'

const buildInUploaders: IPicGoPlugin = () => {
  return {
    register (ctx: IPicGo) {
      aliYunUploader(ctx)
      awss3plistUploader(ctx)
      githubUploader(ctx)
      imgurUploader(ctx)
      localUploader(ctx)
      lskyUploader(ctx)
      piclistUploader(ctx)
      qiniuUploader(ctx)
      sftpUploader(ctx)
      smmsUploader(ctx)
      tcYunUploader(ctx)
      telegraphUploader(ctx)
      upYunUploader(ctx)
      webdavplistUploader(ctx)
    }
  }
}

export default buildInUploaders
