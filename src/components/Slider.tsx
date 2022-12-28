import { store, setStore } from '../store'

let line: HTMLDivElement
let point: HTMLDivElement

export function Silder() {
  let min = 0
  let max = 0
  let [moveX, setMoveX] = createSignal(0)
  /**
   * 鼠标按下事件
   * @param e
   */
  function mouseDown(e: MouseEvent | TouchEvent) {
    // 绑定鼠标移动及松开事件
    document.addEventListener('touchmove', mouseMove)
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('touchend', mouseUp)
    document.addEventListener('mouseup', mouseUp)
  }

  /**
   * 鼠标移动事件
   * @param e
   */
  function mouseMove(e: MouseEvent | TouchEvent) {
    let val = 0
    if (e.type === 'mousemove') val = (e as MouseEvent)?.clientX
    else if (e.type === 'mousemove')
      val = (e as TouchEvent)?.targetTouches[0]?.clientX

    if (val <= 0) val = 0
    else if (val >= max) val = max
    setValue(val)
  }

  /**
   * 鼠标松开事件
   * @param e
   */
  function mouseUp(e: MouseEvent | TouchEvent) {
    // 解除鼠标移动及松开事件绑定
    document.removeEventListener('touchmove', mouseMove)
    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('touchend', mouseUp)
    document.removeEventListener('mouseup', mouseUp)
  }

  // 组件挂载后
  onMount(() => {
    // 获取最大及最小边界范围
    min = line.offsetLeft
    max = line.offsetWidth + min
    setMoveX(store.volume)
  })

  /**
   * 设置音箱位置及百分比值
   * @param num 当前位置数值
   */
  function setValue(num: number) {
    // 目标值 / 总值  * 100 = 百分比
    const val = Math.trunc((num / max) * 100)

    setMoveX(val) // 设置进度
    setStore('volume', val)
  }

  return (
    <div ref={line} h-10px bg-white='/70'>
      <div
        h-full
        bg-white
        flex
        justify-end
        items-center
        relative
        style={{
          width: moveX() + '%'
        }}>
        <div
          ref={point}
          w-10
          h-10
          bg-white='/80'
          rd-5
          absolute
          cursor-pointer
          style={{
            transform: 'translateX(20px)'
          }}
          onMouseDown={mouseDown}
          onTouchStart={mouseDown}></div>
      </div>
    </div>
  )
}
