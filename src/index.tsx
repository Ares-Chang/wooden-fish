/* @refresh reload */
import { render } from 'solid-js/web'

import 'uno.css'
import './index.css'
import '@unocss/reset/tailwind.css'

import App from './App'

render(() => <App />, document.getElementById('root') as HTMLElement)
