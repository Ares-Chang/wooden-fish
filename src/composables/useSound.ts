import { Howl } from 'howler'
import BGMUrl from '../assets/bgm.mp3'
import SoundUrl from '../assets/sound.mp3'

/**
 * 创建背景音乐
 * @param volume 音量
 * @returns Howl Object
 */
export function useCreateBGM(volume: number) {
  return new Howl({
    src: [BGMUrl],
    html5: true,
    loop: true,
    volume
  })
}

/**
 * 创建点击音效
 * @returns Howl Object
 */
export function useCreateSound() {
  return new Howl({
    src: [SoundUrl]
  })
}
