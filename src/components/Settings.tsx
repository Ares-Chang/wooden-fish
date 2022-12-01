export function Settings(props: {
  volume: number
  onUpdateVolume: (val: number) => void
  onClose: () => void
}) {
  const [local, others] = splitProps(props, ['onClose'])
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
      onClick={local.onClose}>
      <Volume {...others} />
    </div>
  )
}
