import * as actions from '../actions/notifications'

let currentNotificationId = 0

interface Notification {
  id: number
  user: any
  topic: any
  scale?: any
  message?: any
}

type NotificationsState = Notification[]

const defaultState: NotificationsState = []

const createNotificationFilter = (idToRemove: number) => (notification: Notification) => notification.id !== idToRemove

export default (state: NotificationsState = defaultState, action: actions.NotificationActions): NotificationsState => {
  switch (action.type) {
    case actions.QUEUE_NOTIFICATION:
      currentNotificationId += 1

      return [
        ...state,
        {
          ...action.payload,
          id: currentNotificationId,
        },
      ]
    case actions.CLEAR_NOTIFICATION:
      return state.filter(createNotificationFilter(action.payload.id))
    default:
      return state
  }
}
