import type { AttributifyAttributes } from '@unocss/preset-attributify'

/**
 * 解决部分 Unocss Attributes 模式下 TypeScript 检查报错问题
 * 解决方法 {@link https://github.com/unocss/unocss/tree/main/packages/preset-attributify/#solidjs}
 * 问题链接 {@link https://github.com/unocss/unocss/issues/742}
 */
declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}
