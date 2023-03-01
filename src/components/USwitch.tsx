import css from './USwitch/index.module.css'

export function USwitch() {
  return (
    <div inline-block>
      <input class={css.slider} type='checkbox' />
    </div>
  )
}
