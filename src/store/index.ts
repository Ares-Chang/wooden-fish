import {
  useGetConfig,
  useSetConfig,
  UseConfigOptions
} from '../composables/useConfig'

const configData = useGetConfig() // 本地缓存数据
const localList = Object.keys(configData) // 本地缓存字段名称

/**
 * 不需要缓存的字段类型
 */
interface StoreProps {
  [key: string]: any
}

/**
 * 获取缓存并初始化 store 存储
 */
export const [store, setStore] = createStore<UseConfigOptions & StoreProps>({
  ...configData
})

/**
 * 数据修改后，同步至 localStorage
 */
createEffect(() => {
  localList.forEach(key => useSetConfig(key, store[key]))
})
