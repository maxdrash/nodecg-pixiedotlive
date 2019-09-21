interface User {
  display_name?: string
  name: string
}

const getUsername = (user: User) => user.display_name || user.name

export default getUsername
