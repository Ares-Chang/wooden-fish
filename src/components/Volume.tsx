export function Volume() {
  return (
    <div w-full>
      <div text-3xl>背景音量</div>
      <div my-20 onClick={e => e.stopPropagation()}>
        <Silder />
      </div>
    </div>
  )
}
