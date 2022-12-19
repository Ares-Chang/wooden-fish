interface UseConfigOptions {
  volume: number
}

/**
 * 获取配置 config，如初次使用将初始化配置
 * @returns 配置项
 */
export function useGetConfig(): UseConfigOptions {
  if (!localStorage.getItem('config'))
    localStorage.setItem('config', JSON.stringify({ volume: 30 })) // 初始化配置
  return JSON.parse(localStorage.getItem('config') || '{}')
}

/**
 * 设置本地存储
 * @param key 属性名
 * @param val 属性值
 */
export function useSetConfig(key: string, val: any) {
  localStorage.setItem(
    'config',
    JSON.stringify({
      ...useGetConfig(),
      [key]: val
    })
  )
}
