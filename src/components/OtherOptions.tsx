import { setStore } from '../store'

export function OtherOptions() {
  function clearCache() {
    setStore('count', 0)
    alert('清除成功！')
  }

  return (
    <div w-full>
      <div text-3xl mb-10>
        其它设置
      </div>
      <div>
        <div mb-2>
          缓存: <span>开启</span>
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
