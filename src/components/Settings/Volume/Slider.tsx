import { onMount, createSignal } from 'solid-js'

let line: HTMLDivElement

export default function Silder(props: {
  value: number
  onSetValue: (val: number) => void
}) {
  let min = 0
  let max = 0
  let [moveX, setMoveX] = createSignal(0)
  /**
   * 鼠标按下事件
   * @param e
   */
  function mouseDown(e: MouseEvent) {
    // 绑定鼠标移动及松开事件
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
  }

  /**
   * 鼠标移动事件
   * @param e
   */
  function mouseMove(e: MouseEvent) {
    let val = e.clientX
    if (val <= min) val = min
    else if (val >= max) val = max

    setValue(val, max)
  }

  /**
   * 鼠标松开事件
   * @param e
   */
  function mouseUp(e: MouseEvent) {
    // 解除鼠标移动及松开事件绑定
    document.removeEventListener('mousemove', mouseMove)
    document.removeEventListener('mouseup', mouseUp)
  }

  // 组件挂载后
  onMount(() => {
    // 获取最大及最小边界范围
    min = line.offsetLeft
    max = line.offsetWidth

    initValue(props.value, max)
  })

  /**
   * 初始化音量条位置
   * @param val 目标值
   * @param max 总值
   */
  function initValue(val: number, max: number) {
    // 百分比 / 100 * 总值 = 目标值
    setMoveX((val / 100) * max)
  }

  /**
   * 设置音箱位置及百分比值
   * @param val 目标值
   * @param max 总值
   */
  function setValue(val: number, max: number) {
    setMoveX(val) // 设置进度
    // 目标值 / 总值  * 100 = 百分比
    props.onSetValue(Math.trunc((val / max) * 100))
  }

  return (
    <div ref={line} h-10px bg-white='/70'>
      <div
        h-full
        bg-white
        flex
        justify-end
        items-center
        style={{
          width: moveX() + 'px'
        }}>
        <div
          w-10
          h-10
          bg-white='/80'
          rd-5
          cursor-pointer
          onMouseDown={mouseDown}></div>
      </div>
    </div>
  )
}
