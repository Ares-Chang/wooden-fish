import Silder from './Slider'

export default function Volume(props: {
  volume: number
  onSetVolume: (val: number) => void
}) {
  return (
    <div w-full>
      <div text-3xl>背景音量</div>
      <div my-20 onClick={e => e.stopPropagation()}>
        <Silder value={props.volume} onSetValue={e => props.onSetVolume(e)} />
      </div>
    </div>
  )
}
