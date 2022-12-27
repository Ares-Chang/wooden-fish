export function SoundEffect() {
  return (
    <div w-full>
      <div text-3xl mb-10>
        音效选择
      </div>
      <div flex='~ wrap' justify-center gap-6>
        {new Array(10).fill(null).map((_, index) => {
          return (
            <div border p-10 rd-2>
              音效{index + 1}
            </div>
          )
        })}
      </div>
    </div>
  )
}
