let line: HTMLDivElement
let point: HTMLDivElement

export function Silder(props: {
  value: number
  onSetValue: (val: number) => void
}) {
  let min = 0
  let max = 0
  let diff = 0
  let [moveX, setMoveX] = createSignal(0)
  /**
   * 鼠标按下事件
   * @param e
   */
  function mouseDown(e: MouseEvent) {
    diff = e.clientX - point.offsetLeft // 获取点击位置与 point 位置差值
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
    if (val >= max) val = max
    // val - (diff - 40) 修正点击位置带来的位置跳动
    setValue(val - (diff - 40), max)
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
    /**
     * @Todo 拖动范围计算方式错误，待优化
     */
    max = line.offsetWidth + 40

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
    props.onSetValue(val <= 0 ? 0 : Math.trunc((val / max) * 100))
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
          width: moveX() + 'px'
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
          onMouseDown={mouseDown}></div>
      </div>
    </div>
  )
}
