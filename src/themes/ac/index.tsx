import { Fragment, h } from 'preact'
import OverlayProvider from '../../overlay-provider'

import BRB from '../../scenes/BRB'
import Player from './scenes/Player'

import '../../style/ac.scss'

const ACOverlay = () => (
  <Fragment>
    <svg>
      <symbol id="bubble" viewBox="0 0 240 64" preserveAspectRatio="none">
        <path
          fill="currentColor"
          d="M53.3955932,64 C17.0079396,64 10.7479546,57.8352637 7.00797992,54.1497734 L7.00797992,54.1497734 L6.72002743,53.8666283 C2.47059832,49.7069276 1.0658141e-13,42.5523344 1.0658141e-13,31.997698 C1.0658141e-13,21.4453636 2.47059832,14.2930724 6.72002743,10.1310697 L6.72002743,10.1310697 L7.00968378,9.84562262 C10.7496585,6.16473635 17.0079396,0 53.3955932,0 L53.3955932,0 L186.604407,0 C222.99206,0 229.250342,6.16473635 232.990316,9.84562262 L233.279973,10.1310697 C237.529402,14.2930724 240,21.4453636 240,31.997698 C240,42.5523344 237.529402,49.7069276 233.279973,53.8666283 L232.99202,54.1497734 C229.252045,57.8352637 222.99206,64 186.604407,64 Z"
        />
      </symbol>

      <symbol id="nameplate-left" preserveAspectRatio="none" viewBox="0 0 35 61">
        <path fill="currentColor" d="M0 34.5c0 14 15 24.9 35 26.6V3.6C15 7.8 0 20.5 0 34.5z" />
      </symbol>

      <symbol id="nameplate-middle" preserveAspectRatio="none" viewBox="0 0 179 61.4">
        <path
          fill="currentColor"
          d="M172.1 2.2S135.4 0 91 0 9.9 2.2 9.9 2.2c-3.4.3-6.7.7-9.9 1.4v57.5c3.2.3 6.5.3 9.9.1 0 0 36.7-2.2 81.1-2.2s81.1 2.2 81.1 2.2c2.4.1 4.7.2 6.9.1V3c-2.3-.3-4.6-.6-6.9-.8z"
        />
      </symbol>

      <symbol id="nameplate-right" preserveAspectRatio="none" viewBox="0 0 38 61">
        <path fill="currentColor" d="M38 34.5C38 19.8 21.5 6.5 0 3v58.3c21.5-.9 38-12.1 38-26.8z" />
      </symbol>

      <symbol id="chat-top" preserveAspectRatio="none" viewBox="0 0 774 41">
        <path
          fill="currentColor"
          d="M756.5 36c-9.9-8.4-22.4-13.4-32.5-16C644-1 495 .4 419 2c-9.2.2-20.1.3-32 .4-11.9-.1-22.8-.2-32-.4C279 .4 130-1 50 20c-10.1 2.6-22.6 7.6-32.5 16-1.8 1.5-3.5 3.2-5.2 5h749.3c-1.5-1.8-3.3-3.5-5.1-5z"
        />
      </symbol>

      <symbol id="chat-middle" preserveAspectRatio="none" viewBox="0 0 774 144">
        <path
          fill="currentColor"
          d="M750 140c1-19-8.3-19.6-1-37 5-12 10.5-13 17-27 1.2-2.5 14.3-38 4-63-2-4.9-4.9-9.2-8.3-13H12.3C8.9 3.8 6 8.1 4 13-6.3 38 6.8 73.5 8 76c6.5 14 12 15 17 27 7.3 17.4-2 18-1 37 .1 1.4.3 2.7.8 4h724.5c.4-1.3.6-2.6.7-4z"
        />
      </symbol>

      <symbol id="chat-bottom" preserveAspectRatio="none" viewBox="0 0 774 36">
        <path
          fill="currentColor"
          d="M24.8 1c.3 1 .8 2 1.3 3C35.8 20.9 75.8 25 85 26c111.5 12.1 255.7 8.9 302 7.5 46.3 1.4 190.5 4.5 302-7.5 9.2-1 49.2-5.1 58.9-22 .5-1 1-2 1.3-3H24.8z"
        />
      </symbol>
    </svg>

    <OverlayProvider>
      <BRB />
      <Player />
    </OverlayProvider>
  </Fragment>
)

export default ACOverlay
