import brb, { BRBState } from './brb'
import chat, { ChatState } from './chat'
import cutout, { CutoutState } from './cutout'
import game, { GameState } from './game'
import notifications, { NotificationsState } from './notifications'
import social, { SocialState } from './social'
import timer, { TimerState } from './timer'

export interface OverlayState {
  brb: BRBState
  chat: ChatState
  cutout: CutoutState
  game: GameState
  notifications: NotificationsState
  social: SocialState
  timer: TimerState
}

export { brb, social, game, chat, cutout, notifications, timer }
