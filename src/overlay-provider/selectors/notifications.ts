const getNotifications = (state: any) => state.notifications

const getNextNotification = (state: any) => getNotifications(state)[0]

export { getNotifications, getNextNotification }
