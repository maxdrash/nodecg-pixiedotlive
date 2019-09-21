import { h, render } from 'preact'

import './style/index.scss'

if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require('preact/debug')
}

const PretendComponent = () => <div>dog</div>

render(<PretendComponent />, document.getElementById('app')!)
