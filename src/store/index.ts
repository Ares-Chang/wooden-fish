import {
  useGetConfig,
  useSetConfig,
  UseConfigOptions
} from '../composables/useConfig'

/**
 * 不需要缓存的字段类型
 */
interface StoreProps extends UseConfigOptions {
  [key: string]: any
}

const [configData, setConfigData] = createSignal<StoreProps>(useGetConfig()) // 本地缓存数据
const [cacheList, setCacheList] = createSignal(getCacheList(configData()))

/**
 * 获取需要缓存的字段名称
 * @param configData 缓存配置项
 * @returns 需要缓存的字段名称
 */
function getCacheList(configData: StoreProps) {
  const keyList = Object.keys(configData)
  const judgeList = keyList.filter(item => item.includes('is')) // 获取所有包含 isXxx 字段
  const noCacheList = judgeList
    .filter(item => !configData[item])
    .map(item => item.substring(2).replace(/^\S/, s => s.toLowerCase())) // 本地不缓存

  return keyList.filter(item => !noCacheList.includes(item))
}

/**
 * 获取缓存并初始化 store 存储
 */
export const [store, setStore] = createStore({
  ...configData()
})

/**
 * 数据修改后，同步至 localStorage
 */
createEffect(() => {
  cacheList().forEach(key => {
    useSetConfig(key, store[key])
    // 判断是否缓存属性产生改变，如果改变，触发 cacheList 重新获取
    if (key.includes('is') && store[key] !== configData()[key]) {
      setConfigData(useGetConfig())
      setCacheList(getCacheList(configData()))
    }
  })
})
