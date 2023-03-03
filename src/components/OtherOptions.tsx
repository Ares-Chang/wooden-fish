import { store, setStore } from '../store'

export function OtherOptions() {
  const [tips, setStips] = createSignal('')
  createEffect(() => setStips(store.isCount ? '开启' : '关闭'))

  function setCacheSetting(checked: boolean) {
    setStore('isCount', checked)
    // alert(`缓存功能已${tips()}`)
  }

  function clearCache() {
    setStore('count', 0)
    alert('叮 ~ 功德已清空！')
  }

  return (
    <div w-full>
      <div text-3xl mb-10>
        其它设置
      </div>
      <div>
        <div
          flex
          justify-center
          items-center
          gap-2
          mb-2
          onClick={e => e.stopPropagation()}>
          缓存:
          <USwitch checked={store.isCount} onChange={setCacheSetting} />
        </div>
        <div>
          <div color-blue onClick={clearCache}>
            清除缓存
          </div>
        </div>
      </div>
    </div>
  )
}
