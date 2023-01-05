import { Howl } from 'howler'
import BGMUrl from '../assets/bgm.mp3'
import SoundUrl_1 from '../assets/sound_1.mp3'
import SoundUrl_2 from '../assets/sound_2.mp3'

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
 * 点击音效 Class
 */
export class useSound {
  static HowlList = [SoundUrl_1, SoundUrl_2]
  howl: Howl
  constructor(index: number) {
    this.howl = new Howl({
      src: [useSound.HowlList[index]]
    })
  }

  changeHowl(index: number) {
    this.howl = new Howl({
      src: [useSound.HowlList[index]]
    })
  }

  play() {
    if (!this.howl) return
    this.howl.play()
  }
}
