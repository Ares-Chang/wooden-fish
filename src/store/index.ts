import {
  useGetConfig,
  useSetConfig,
  UseConfigOptions
} from '../composables/useConfig'

// 本地缓存字段名称
const localList = ['volume']
interface StoreProps {
  [key: string]: any
}

/**
 * 获取缓存并初始化 store 存储
 */
export const [store, setStore] = createStore<UseConfigOptions & StoreProps>({
  ...useGetConfig()
})

/**
 * 数据修改后，同步至 localStorage
 */
createEffect(() => {
  localList.forEach(key => useSetConfig(key, store[key]))
})
