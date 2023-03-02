import css from './USwitch/index.module.css'

export function USwitch(props: {
  checked: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <div inline-block>
      <input
        class={css.slider}
        checked={props.checked}
        type='checkbox'
        onChange={(e: any) => props.onChange(e.target.checked)}
      />
    </div>
  )
}
