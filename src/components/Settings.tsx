export function Settings(props: { onClose: () => void }) {
  return (
    <div
      w-100vw
      h-100vh
      p-10
      fixed
      top-0
      left-0
      bg-black='/50'
      flex='~ wrap'
      gap-6
      justify-center
      items-center
      onClick={props.onClose}>
      <SoundEffect />
      <Volume />
      <OtherOptions />
    </div>
  )
}
