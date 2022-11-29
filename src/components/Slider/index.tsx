import { onMount, createSignal } from 'solid-js'

let line: HTMLDivElement
let point: HTMLDivElement

let downX // 点击时位置
let [moveX, setMoveX] = createSignal(10)
/**
 * 鼠标按下事件
 * @param e
 */
function mouseDown(e: MouseEvent) {
  downX = e.clientX
  console.log(e, downX)
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
  if (val <= line.offsetLeft) val = line.offsetLeft
  else if (val >= line.offsetWidth) val = line.offsetWidth

  setMoveX(val)

  console.log(moveX())
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
    console.log(line.offsetWidth, point)
    console.log(moveX())
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
          ref={point}
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
