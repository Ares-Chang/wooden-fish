import { createSignal } from 'solid-js'
import Silder from './Slider'
export default function SwitchingSound(prop: { close: () => void }) {
  const [value, setValue] = createSignal(30)
  return (
    <div
      w-100vw
      h-100vh
      p-10
      fixed
      top-0
      left-0
      bg-black='/50'
      flex
      justify-center
      items-center
      onClick={prop.close}>
      <div flex-1>
        <div text-3xl>背景音量</div>
        <div my-20 onClick={e => e.stopPropagation()}>
          <Silder value={value()} onSetValue={e => setValue(e)} />
        </div>
      </div>
    </div>
  )
}
