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
