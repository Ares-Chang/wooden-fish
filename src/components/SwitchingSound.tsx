export default function SwitchingSound(prop: { close: () => void }) {
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
          <div h-10px bg-white='/70'>
            <div w-100 h-full bg-white flex justify-end items-center>
              <div w-10 h-10 bg-white='/80' rd-5></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
