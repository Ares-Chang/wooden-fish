import type { Component } from 'solid-js'
import { Howl } from 'howler'

import styles from './App.module.css'
import BGMUrl from './assets/bgm.mp3'
import SoundUrl from './assets/sound.mp3'
import WoodenFish from './assets/WoodenFish.svg'

const config = JSON.parse(localStorage.getItem('config') || '{}') // 读取配置
if (JSON.stringify(config) === '{}')
  localStorage.setItem('config', JSON.stringify({ volume: 30 })) // 初始化配置

/**
 * 设置本地存储
 * @param key 属性名
 * @param val 属性值
 */
function updateConfig(key: string, val: any) {
  localStorage.setItem(
    'config',
    JSON.stringify({
      ...config,
      [key]: val
    })
  )
}

const [count, setCount] = createSignal(0)
const [zoom, setZoom] = createSignal(false)
const [show, setShow] = createSignal(false) // 设置 Settings 显隐
const [volume, setVolume] = createSignal(config?.volume || 30) // 设置背景音量

const bgm = new Howl({
  src: [BGMUrl],
  html5: true,
  loop: true,
  volume: volume() / 100
})
const sound = new Howl({
  src: [SoundUrl]
})
const isPC =
  !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )

function handle() {
  // if (sound.playing()) sound.stop() // 添加后连续点击断续感会很强
  sound.play()
  setCount(count() + 1)
  setZoom(true)
}
function release() {
  setZoom(false)
}

function handleBGM() {
  if (!bgm.playing()) bgm.play()
  else bgm.pause()
}

// 绑定全局 keyboard 事件
document.onkeydown = handleKeyBoard
document.onkeyup = handleKeyBoard
function handleKeyBoard({ key, code, type }: KeyboardEvent) {
  if (key !== ' ' || code !== 'Space') return
  type === 'keydown' ? handle() : release()
}

const App: Component = () => {
  // 监听控制声音变化
  createEffect(() => bgm.volume(volume() / 100))

  return (
    <div
      w-100vw
      h-100vh
      px-6
      md:px-10
      py-4
      md:py-6
      text-center
      bg='#111'
      color-white
      flex='~ col'
      justify-between
      select-none
      overflow-hidden
      style={{
        'font-family': "'Roboto', sans-serif"
      }}>
      <header>
        <div flex justify-between items-center>
          <AresChang />
          <div text-2xl flex items-center gap-2>
            <i
              i-carbon-music
              inline-block
              cursor-pointer
              onClick={handleBGM}></i>
            <i
              i-carbon-settings
              inline-block
              cursor-pointer
              onClick={() => setShow(true)}></i>
          </div>
        </div>
        <div
          text-10rem
          font-bold
          transition-300
          style={{
            'line-height': 1,
            'font-family': "'Pacifico', cursive",
            transform: `scale(${zoom() ? 1.1 : 1})`
          }}>
          {count()}
        </div>
        <div
          color='#444'
          text-xl
          mt-2
          font-bold
          style={{
            'font-family': "'Pacifico', cursive"
          }}>
          功德
        </div>
      </header>

      <main flex justify-center>
        <img
          src={WoodenFish}
          alt='WoodenFish'
          onMouseDown={isPC ? handle : () => {}}
          onMouseUp={isPC ? release : () => {}}
          onTouchStart={handle}
          onTouchEnd={release}
          transition-300
          cursor-pointer
          draggable={false}
          style={{
            transform: `scale(${zoom() ? 0.99 : 1})`
          }}
        />
      </main>

      <footer color='#444'>
        <div font-bold text-sm>
          <div mb='1.5'>
            按下
            <code class={styles.code}>Space</code>或
            <code class={styles.code}>Click</code>
            积攒功德
          </div>
          <div>
            点击
            <code class={styles.code}>
              右上角
              <i
                i-carbon-music
                inline-block
                text='0.6rem'
                v-middle
                ml='0.4'></i>
            </code>
            开启/关闭 沉浸模式
          </div>
        </div>
        <div flex justify-between md:text-lg mt-6 font-bold>
          <a
            href='https://www.github.com/ares-chang/wooden-fish'
            target='_blank'
            color='hover:#eee'
            flex
            items-center
            gap-1>
            <i i-carbon-logo-github inline-block></i>
            <span>GitHub</span>
          </a>
          <a href='https://www.github.com/ares-chang' color='hover:#eee'>
            @AresChang
          </a>
        </div>
      </footer>
      <Show when={show()}>
        <Settings
          volume={volume()}
          onUpdateVolume={e => {
            setVolume(e)
            updateConfig('volume', e)
          }}
          onClose={() => setShow(false)}
        />
      </Show>
    </div>
  )
}

export default App
