import { onMount, createSignal } from 'solid-js'

let line: HTMLDivElement

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

  setMoveX(val)
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

export default function Silder() {
  onMount(() => {
    // 获取最大及最小边界范围
    min = line.offsetLeft
    max = line.offsetWidth
    setMoveX(min)
  })
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
