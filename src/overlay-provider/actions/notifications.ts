const QUEUE_NOTIFICATION = 'notifications/QUEUE_NOTIFICATION'
const CLEAR_NOTIFICATION = 'notifications/CLEAR_NOTIFICATION'

interface Notification {
  user: any
  topic: any
  scale?: any
  message?: any
}

interface QueueNotificationAction {
  type: typeof QUEUE_NOTIFICATION
  payload: Notification
}

interface ClearNotificationAction {
  type: typeof CLEAR_NOTIFICATION
  payload: {
    id: number
  }
}

type NotificationActions = QueueNotificationAction | ClearNotificationAction

const queueNotification = ({ user, topic, scale, message }: Notification): NotificationActions => ({
  type: QUEUE_NOTIFICATION,
  payload: {
    user,
    topic,
    scale,
    message,
  },
})

const clearNotification = (id: number): NotificationActions => ({
  type: CLEAR_NOTIFICATION,
  payload: {
    id,
  },
})

export { QUEUE_NOTIFICATION, CLEAR_NOTIFICATION, queueNotification, clearNotification, NotificationActions }
