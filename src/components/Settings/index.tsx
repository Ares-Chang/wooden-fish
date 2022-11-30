import { splitProps } from 'solid-js'
import Volume from './Volume'

export default function Setting(props: {
  volume: number
  onSetVolume: (val: number) => void
  close: () => void
}) {
  const [local, others] = splitProps(props, ['close'])
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
      onClick={local.close}>
      <Volume {...others} />
    </div>
  )
}
