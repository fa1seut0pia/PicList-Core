/* eslint-disable no-template-curly-in-string */
export const ZH_CN = {
  UPLOAD_FAILED: '上传失败',
  CHECK_SETTINGS: '请检查你的配置项是否正确',
  CHECK_SETTINGS_AND_NETWORK: '请检查你的配置项以及网络',
  UPLOAD_FAILED_REASON: '错误码：${code}，请打开浏览器粘贴地址查看相关原因',
  SERVER_ERROR: '服务端出错，请重试',
  AUTH_FAILED: '认证失败',

  // smms
  PICBED_SMMS: 'SM.MS',
  PICBED_SMMS_TOKEN: '设定Token',
  PICBED_SMMS_BACKUP_DOMAIN: '备用上传域名',
  PICBED_SMMS_MESSAGE_BACKUP_DOMAIN: '例如 smms.app',

  // local
  PICBED_LOCAL: '本地上传',
  PICBED_LOCAL_PATH: '设定路径',
  PICBED_LOCAL_MESSAGE_PATH: '例如 /usr/local/images/',
  PICBED_LOCAL_CUSTOMURL: '设定自定义域名',
  PICBED_LOCAL_MESSAGE_CUSTOMURL: '例如 https://test.com',
  PICBED_LOCAL_WEBPATH: '设定网站路径',
  PICBED_LOCAL_MESSAGE_WEBPATH: '用于拼接网址路径',

  // Ali-cloud
  PICBED_ALICLOUD: '阿里云OSS',
  PICBED_ALICLOUD_ACCESSKEYID: '设定accessKeyId',
  PICBED_ALICLOUD_ACCESSKEYSECRET: '设定accessKeySecret',
  PICBED_ALICLOUD_BUCKET: '设定Bucket',
  PICBED_ALICLOUD_AREA: '设定存储区域',
  PICBED_ALICLOUD_PATH: '设定存储路径',
  PICBED_ALICLOUD_CUSTOMURL: '设定自定义域名',
  PICBED_ALICLOUD_OPTIONS: '设定网址后缀',
  PICBED_ALICLOUD_MESSAGE_AREA: '例如：oss-cn-beijing',
  PICBED_ALICLOUD_MESSAGE_PATH: '例如：test/',
  PICBED_ALICLOUD_MESSAGE_OPTIONS: '例如：?x-oss-process=xxx',
  PICBED_ALICLOUD_MESSAGE_CUSTOMURL: '例如：https://test.com',

  // Tencent-cloud
  PICBED_TENCENTCLOUD: '腾讯云COS',
  PICBED_TENCENTCLOUD_VERSION: 'COS版本',
  PICBED_TENCENTCLOUD_SECRETID: '设定SecretId',
  PICBED_TENCENTCLOUD_SECRETKEY: '设定SecretKey',
  PICBED_TENCENTCLOUD_APPID: '设定AppId',
  PICBED_TENCENTCLOUD_BUCKET: '设定Bucket',
  PICBED_TENCENTCLOUD_AREA: '设定存储区域',
  PICBED_TENCENTCLOUD_ENDPOINT: '设定接入点',
  PICBED_TENCENTCLOUD_PATH: '设定存储路径',
  PICBED_TENCENTCLOUD_OPTIONS: '设定网址后缀',
  PICBED_TENCENTCLOUD_CUSTOMURL: '设定自定义域名',
  PICBED_TENCENTCLOUD_MESSAGE_APPID: '例如：1234567890',
  PICBED_TENCENTCLOUD_MESSAGE_AREA: '例如：ap-beijing',
  PICBED_TENCENTCLOUD_MESSAGE_PATH: '例如：test/',
  PICBED_TENCENTCLOUD_MESSAGE_CUSTOMURL: '例如：https://test.com',
  PICBED_TENCENTCLOUD_MESSAGE_OPTIONS: '例如：?imageMogr2',
  PICBED_TENCENTCLOUD_MESSAGE_ENDPOINT: '例如：cos-internal.accelerate.tencentcos.cn',
  PICBED_TENCENTCLOUD_SLIM: '极智压缩',
  PICBED_TENCENTCLOUD_SLIM_TIP:
    '图片极智压缩，详情请参考[文档说明](https://cloud.tencent.com/document/product/436/86438)',
  PICBED_TENCENTCLOUD_SLIM_CONFIRM: '开启',
  PICBED_TENCENTCLOUD_SLIM_CANCEL: '关闭',

  // GitHub
  PICBED_GITHUB: 'GitHub',
  PICBED_GITHUB_TOKEN: '设定Token',
  PICBED_GITHUB_REPO: '设定仓库名',
  PICBED_GITHUB_PATH: '设定存储路径',
  PICBED_GITHUB_BRANCH: '设定分支名',
  PICBED_GITHUB_CUSTOMURL: '设定自定义域名',
  PICBED_GITHUB_MESSAGE_REPO: '格式：username/repo',
  PICBED_GITHUB_MESSAGE_BRANCH: '例如：main',
  PICBED_GITHUB_MESSAGE_PATH: '例如：test/',
  PICBED_GITHUB_MESSAGE_CUSTOMURL: '例如：https://test.com',

  // qiniu
  PICBED_QINIU: '七牛云',
  PICBED_QINIU_ACCESSKEY: '设定AccessKey',
  PICBED_QINIU_SECRETKEY: '设定SecretKey',
  PICBED_QINIU_BUCKET: '设定Bucket',
  PICBED_QINIU_PATH: '设定存储路径',
  PICBED_QINIU_URL: '设定访问网址',
  PICBED_QINIU_OPTIONS: '设定网址后缀',
  PICBED_QINIU_AREA: '设定存储区域',
  PICBED_QINIU_MESSAGE_PATH: '例如：test/',
  PICBED_QINIU_MESSAGE_AREA: '例如：z0',
  PICBED_QINIU_MESSAGE_OPTIONS: '例如：?imageslim',
  PICBED_QINIU_MESSAGE_URL: '例如：https://xxx.yyy.glb.clouddn.com',
  PICBED_TELEGRAPH: 'Telegraph',
  // imgur
  PICBED_IMGUR: 'Imgur',
  PICBED_IMGUR_CLIENTID: '设定ClientId',
  PICBED_IMGUR_USERNAME: '设定用户名',
  PICBED_IMGUR_ACCESS_TOKEN: '设定accessToken',
  PICBED_IMGUR_ALBUM: '设定相册名',
  PICBED_IMGUR_PROXY: '设定代理',
  PICBED_IMGUR_MESSAGE_CLIENTID: '匿名上传时填写',
  PICBED_IMGUR_MESSAGE_USERNAME: '需要上传到账户时填写',
  PICBED_IMGUR_MESSAGE_ACCESS_TOKEN: '需要上传到账户时填写',
  PICBED_IMGUR_MESSAGE_ALBUM: '例如：test',
  PICBED_IMGUR_MESSAGE_PROXY: '例如：http://127.0.0.1:1080',

  // upyun
  PICBED_UPYUN: '又拍云',
  PICBED_UPYUN_BUCKET: '设定Bucket',
  PICBED_UPYUN_OPERATOR: '设定操作员',
  PICBED_UPYUN_PASSWORD: '设定操作员密码',
  PICBED_UPYUN_PATH: '设定存储路径',
  PICBED_UPYUN_URL: '设定加速域名',
  PICBED_UPYUN_OPTIONS: '设定网址后缀',
  PICBED_UPYUN_ENDPOINT: '设定自定义API接入点',
  PICBED_UPYUN_ANTI_LEECH_TOKEN: '设定防盗链Token',
  PICBED_UPYUN_EXPIRE_TIME: '设定过期时间(秒)',
  PICBED_UPYUN_MESSAGE_OPERATOR: '例如：me',
  PICBED_UPYUN_MESSAGE_PASSWORD: '输入操作员密码',
  PICBED_UPYUN_MESSAGE_URL: '例如：http://xxx.test.upcdn.net',
  PICBED_UPYUN_MESSAGE_OPTIONS: '例如：!imgslim',
  PICBED_UPYUN_MESSAGE_PATH: '例如：test/',
  PICBED_UPYUN_MESSAGE_ENDPOINT: '例如：https://v0.api.upyun.com',

  // webdavplist
  PICBED_WEBDAVPLIST: 'WebDAV',
  PICBED_WEBDAVPLIST_HOST: '设定接口网址',
  PICBED_WEBDAVPLIST_SSLENABLED: '启用SSL',
  PICBED_WEBDAVPLIST_USERNAME: '设定用户名',
  PICBED_WEBDAVPLIST_PASSWORD: '设定密码',
  PICBED_WEBDAVPLIST_PATH: '设定存储路径',
  PICBED_WEBDAVPLIST_WEBSITE_PATH: '设定网址路径',
  PICBED_WEBDAVPLIST_CUSTOMURL: '设定自定义域名',
  PICBED_WEBDAVPLIST_AUTHTYPE: '设定认证方式',
  PICBED_WEBDAVPLIST_OPTIONS: '设定网址后缀',
  PICBED_WEBDAVPLIST_MESSAGE_HOST: '例如：https://example.com/webdav',
  PICBED_WEBDAVPLIST_MESSAGE_SSLENABLED: '需要HTTPS时启用',
  PICBED_WEBDAVPLIST_MESSAGE_USERNAME: '例如：me',
  PICBED_WEBDAVPLIST_MESSAGE_PASSWORD: '输入密码',
  PICBED_WEBDAVPLIST_MESSAGE_PATH: '例如：test/',
  PICBED_WEBDAVPLIST_MESSAGE_WEBSITE_PATH: '拼接网址时使用',
  PICBED_WEBDAVPLIST_MESSAGE_CUSTOMURL: '例如：https://test.com',
  PICBED_WEBDAVPLIST_MESSAGE_OPTIONS: '例如：?key=123456',

  // sftpplist
  PICBED_SFTPPLIST: '内置SFTP',
  PICBED_SFTPPLIST_HOST: '设定主机',
  PICBED_SFTPPLIST_PORT: '设定端口',
  PICBED_SFTPPLIST_USERNAME: '设定用户名',
  PICBED_SFTPPLIST_PASSWORD: '设定密码',
  PICBED_SFTPPLIST_PRIVATEKEY: '设定私钥',
  PICBED_SFTPPLIST_PRIVATEKEY_PASSPHRASE: '设定私钥密码',
  PICBED_SFTPPLIST_UPLOADPATH: '设定上传路径',
  PICBED_SFTPPLIST_CUSTOMURL: '设定自定义域名',
  PICBED_SFTPPLIST_WEBSITE_PATH: '设定网站路径',
  PICBED_SFTPPLIST_FILE_USER: '设定文件用户:组',
  PICBED_SFTPPLIST_FILE_MODE: '设定文件权限',
  PICBED_SFTPPLIST_DIR_MODE: '设定文件夹权限',
  PICBED_SFTPPLIST_MESSAGE_HOST: '例如：1.1.1.3',
  PICBED_SFTPPLIST_MESSAGE_PORT: '默认22',
  PICBED_SFTPPLIST_MESSAGE_PRIVATEKEY: '例如：/Users/xxx/.ssh/id_rsa',
  PICBED_SFTPPLIST_MESSAGE_PRIVATEKEY_PASSPHRASE: '输入私钥密码',
  PICBED_SFTPPLIST_MESSAGE_UPLOADPATH: '例如：test/',
  PICBED_SFTPPLIST_MESSAGE_CUSTOMURL: '例如：https://test.com',
  PICBED_SFTPPLIST_MESSAGE_WEBSITE_PATH: '拼接网址时使用',
  PICBED_SFTPPLIST_MESSAGE_FILE_USER: '例如：www:data',
  PICBED_SFTPPLIST_MESSAGE_FILE_MODE: '例如：0664',
  PICBED_SFTPPLIST_MESSAGE_DIR_MODE: '例如：0775',

  // PicList
  PICBED_PICLIST: 'PicList',
  PICBED_PICLIST_HOST: '设定主机',
  PICBED_PICLIST_PORT: '设定端口',
  PICBED_PICLIST_PICBED: '设定图床',
  PICBED_PICLIST_CONFIGNAME: '设定配置名',
  PICBED_PICLIST_KEY: '设定鉴权Key',

  // Lsky Pro
  PICBED_LSKY_PLIST: 'Lsky',
  PICBED_LSKY_VERSION: '设定版本',
  PICBED_LSKY_MESSAGE_VERSION: '例如V1',
  PICBED_LSKY_HOST: '设定主机',
  PICBED_LSKY_MESSAGE_HOST: '例如：https://example.com',
  PICBED_LSKY_TOKEN: '设定Token',
  PICBED_LSKY_MESSAGE_TOKEN: '例如：1234567890',
  PICBED_LSKY_STRATEGY_ID: '设定策略ID',
  PICBED_LSKY_MESSAGE_STRATEGY_ID: '例如：1',
  PICBED_LSKY_ALBUM_ID: '设定相册ID',
  PICBED_LSKY_MESSAGE_ALBUM_ID: '选填，V2版本限定',
  PICBED_LSKY_PERMISSION: '设定权限',
  PICBED_LSKY_MESSAGE_PERMISSION: '例如：public',

  // AwsS3Plist
  PICBED_AWSS3PLIST: 'AWS S3',
  PICBED_AWSS3PLIST_ACCESSKEYID: '设定AccessKeyId',
  PICBED_AWSS3PLIST_SECRET_ACCESSKEY: '设定SecretAccessKey',
  PICBED_AWSS3PLIST_BUCKET: '设定Bucket',
  PICBED_AWSS3PLIST_REGION: '设定Region',
  PICBED_AWSS3PLIST_UPLOADPATH: '设定上传路径',
  PICBED_AWSS3PLIST_ENDPOINT: '设定自定义节点',
  PICBED_AWSS3PLIST_PROXY: '设定代理',
  PICBED_AWSS3PLIST_URLPREFIX: '设定自定义域名',
  PICBED_AWSS3PLIST_PATHSTYLEACCESS: '启用s3ForcePathStyle',
  PICBED_AWSS3PLIST_REJECTUNAUTHORIZED: '拒绝无效TLS证书连接',
  PICBED_AWSS3PLIST_ACL: '设定上传资源的访问策略',
  PICBED_AWSS3PLIST_DISABLEBUCKETPREFIXTOURL: '开启 `pathStyleAccess` 时，是否要禁用最终生成URL中添加 bucket 前缀',
  PICBED_AWSS3PLIST_MESSAGE_ACCESSKEYID: '例如：AKIAxxxxxxxxxxxxx',
  PICBED_AWSS3PLIST_MESSAGE_SECRET_ACCESSKEY: '例如：xxxxxxxxxx',
  PICBED_AWSS3PLIST_MESSAGE_BUCKET: '例如：test',
  PICBED_AWSS3PLIST_MESSAGE_REGION: '例如：us-east-1',
  PICBED_AWSS3PLIST_MESSAGE_UPLOADPATH: '例如：test/{fullName}',
  PICBED_AWSS3PLIST_MESSAGE_ENDPOINT: '例如：https://s3.us-east-1.amazonaws.com',
  PICBED_AWSS3PLIST_MESSAGE_PROXY: '例如：http://127.0.0.1:1080',
  PICBED_AWSS3PLIST_MESSAGE_URLPREFIX: '例如：https://test.com',
  PICBED_AWSS3PLIST_MESSAGE_PATHSTYLEACCESS: '需要时启用',
  PICBED_AWSS3PLIST_MESSAGE_REJECTUNAUTHORIZED: '需要时启用',
  PICBED_AWSS3PLIST_MESSAGE_ACL: '例如：public-read',
  PICBED_AWSS3PLIST_MESSAGE_DISABLEBUCKETPREFIXTOURL: '需要时启用',

  BUILDIN_WATERMARK_ISADDWATERMARK: '是否添加水印',
  BUILDIN_WATERMARK_MESSAGE_ISADDWATERMARK: '需要添加水印时启用',
  BUILDIN_WATERMARK_WATERMARKTYPE: '设定水印类型',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKTYPE: '请选择水印类型',
  BUILDIN_WATERMARK_ISFULLSCREENWATERMARK: '是否全屏水印',
  BUILDIN_WATERMARK_MESSAGE_ISFULLSCREENWATERMARK: '需要全屏水印时启用',
  BUILDIN_WATERMARK_WATERMARKDEGREE: '设定水印角度',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKDEGREE: '请输入数字',
  BUILDIN_WATERMARK_WATERMARKTEXT: '设定水印文字',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKTEXT: '请输入水印文字',
  BUILDIN_WATERMARK_WATERMARKTEXTFONTPATH: '设定水印字体文件路径',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKFONTPATH: '请输入水印字体文件路径',
  BUILDIN_WATERMARK_WATERMARKFONTRATIO: '设定水印相对于图片的比例',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKFONTRATIO: '请输入0-1的小数',
  BUILDIN_WATERMARK_WATERMARKFONTCOLOR: '设定水印字体颜色',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKFONTCOLOR: '请输入rgb颜色值',
  BUILDIN_WATERMARK_WATERMARKIMAGEPATH: '设定水印图片路径',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKIMAGEPATH: '请输入水印图片路径',
  BUILDIN_WATERMARK_WATERMARKPOSITION: '设定水印位置',
  BUILDIN_WATERMARK_MESSAGE_WATERMARKPOSITION: '请选择水印位置',

  BUILDIN_RENAME_FORMAT: '设定重命名格式',
  BUILDIN_RENAME_ENABLE: '是否启用重命名',

  BUILDIN_COMPRESS_QUALITY: '设定图片质量',
  BUILDIN_COMPRESS_MESSAGE_QUALITY: '请输入0-100的整数',
  BUILDIN_COMPRESS_ISCONVERT: '是否进行格式转换',
  BUILDIN_COMPRESS_MESSAGE_ISCONVERT: '需要转换时启用',
  BUILDIN_COMPRESS_CONVERTFORMAT: '设定转换格式',
  BUILDIN_COMPRESS_MESSAGE_CONVERTFORMAT: '请选择转换格式',
  BUILDIN_COMPRESS_ISRESIZE: '是否进行图片缩放',
  BUILDIN_COMPRESS_MESSAGE_ISRESIZE: '需要缩放时启用',
  BUILDIN_COMPRESS_RESIZEWIDTH: '设定缩放宽度',
  BUILDIN_COMPRESS_MESSAGE_RESIZEWIDTH: '请输入数字',
  BUILDIN_COMPRESS_RESIZEHEIGHT: '设定缩放高度',
  BUILDIN_COMPRESS_MESSAGE_RESIZEHEIGHT: '请输入数字',
  BUILDIN_COMPRESS_ISRESIZEBYPERCENT: '是否按百分比进行缩放',
  BUILDIN_COMPRESS_MESSAGE_ISRESIZEBYPERCENT: '需要按百分比缩放时启用',
  BUILDIN_COMPRESS_ISFLIP: '是否垂直翻转图片',
  BUILDIN_COMPRESS_ISFLOP: '是否水平翻转图片',
  BUILDIN_COMPRESS_RESIZEPERCENT: '设定缩放百分比',
  BUILDIN_COMPRESS_MESSAGE_RESIZEPERCENT: '请输入数字',
  BUILDIN_COMPRESS_SKIPRESIZEOFSMALLIMG: '是否跳过小图缩放',
  BUILDIN_COMPRESS_ISROTATE: '是否进行图片旋转',
  BUILDIN_COMPRESS_MESSAGE_ISROTATE: '需要旋转时启用',
  BUILDIN_COMPRESS_ROTATEDEGREE: '设定旋转角度',
  BUILDIN_COMPRESS_MESSAGE_ROTATEDEGREE: '请输入数字，可为负数',
  BUILDIN_COMPRESS_ISREMOVEEXIF: '是否移除EXIF信息',
  BUILDIN_COMPRESS_MESSAGE_ISREMOVEEXIF: '需要移除EXIF信息时启用',

  // Plugin Handler
  PLUGIN_HANDLER_PLUGIN_INSTALL_SUCCESS: '插件安装成功',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED: '插件安装失败',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED_REASON: '插件安装失败，失败码为${code}，错误日志为 \n ${data}',
  PLUGIN_HANDLER_PLUGIN_INSTALL_FAILED_PATH: '插件安装失败，请输入合法插件名或合法安装路径',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_SUCCESS: '插件卸载成功',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED: '插件卸载失败',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED_REASON: '插件卸载失败，失败码为${code}，错误日志为 \n ${data}',
  PLUGIN_HANDLER_PLUGIN_UNINSTALL_FAILED_VALID: '插件卸载失败，请输入合法插件名',
  PLUGIN_HANDLER_PLUGIN_UPDATE_SUCCESS: '插件更新成功',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED: '插件更新失败',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED_REASON: '插件更新失败，失败码为${code}，错误日志为 \n ${data}',
  PLUGIN_HANDLER_PLUGIN_UPDATE_FAILED_VALID: '插件更新失败，请输入合法插件名'
}

export type ILocalesKey = keyof typeof ZH_CN
export type ILocales = typeof ZH_CN
