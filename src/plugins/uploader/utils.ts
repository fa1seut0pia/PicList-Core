export function formatPathHelper({
  path,
  startSlash = false,
  endSlash = true,
  rootToEmpty = true
}: {
  path?: string
  startSlash?: boolean
  endSlash?: boolean
  rootToEmpty?: boolean
}): string {
  const cleanPath = path?.replace(/^\/+|\/+$/g, '').replace(/\/{2,}/g, '/')
  if (!cleanPath) {
    return rootToEmpty ? '' : '/'
  }
  return `${startSlash ? '/' : ''}${cleanPath}${endSlash ? '/' : ''}`
}

export function encodePath(path: string): string {
  return path
    .replace(/\/{2,}/g, '/')
    .split('/')
    .map(p => encodeURIComponent(p))
    .join('/')
}

export const buildInUploaderNames = {
  advancedplist: 'advancedplist',
  alistplist: 'alistplist',
  aliyun: 'aliyun',
  'aws-s3-plist': 'aws-s3-plist',
  github: 'github',
  imgur: 'imgur',
  local: 'local',
  lskyplist: 'lskyplist',
  piclist: 'piclist',
  qiniu: 'qiniu',
  sftpplist: 'sftpplist',
  smms: 'smms',
  tcyun: 'tcyun',
  telegraphplist: 'telegraphplist',
  upyun: 'upyun',
  webdavplist: 'webdavplist'
}
