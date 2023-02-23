export interface UseConfigOptions {
  volume: number
  sound: number
  count: number
  isCount: boolean
}
/**
 * 初始化配置
 */
const initConfigOptions: UseConfigOptions = {
  volume: 30,
  sound: 0,
  count: 0,
  isCount: true // 是否缓存 count
}

/**
 * 初始化 config
 */
function initConfig() {
  localStorage.setItem('config', JSON.stringify(initConfigOptions))
}

/**
 * 获取配置 config，如初次使用将初始化配置
 * @returns 配置项
 */
export function useGetConfig(): UseConfigOptions {
  if (!localStorage.getItem('config')) initConfig()
  return {
    ...initConfigOptions, // 防止添加字段后无法适配问题
    ...JSON.parse(localStorage.getItem('config') || '{}')
  }
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
