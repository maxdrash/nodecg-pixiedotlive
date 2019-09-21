import { AnyAction, Middleware } from 'redux'
import * as chatActions from '../actions/chat'
import * as notificationActions from '../actions/notifications'

interface NotificationAction {
  type: string
  payload: {
    user: string
    topic: string
    message: string
  }
}

const isNotificationAction = ({ type }: AnyAction) => type === notificationActions.QUEUE_NOTIFICATION

const notificationMiddleware: Middleware = () => next => (action: AnyAction | NotificationAction) => {
  if (!isNotificationAction(action)) {
    return next(action)
  }

  const { payload } = action
  const { user, topic, message } = payload

  const chatAction = chatActions.getMessage({ username: user }, message, topic)

  return next(chatAction)
}

export default notificationMiddleware
