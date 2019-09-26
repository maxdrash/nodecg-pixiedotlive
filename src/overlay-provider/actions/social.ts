const SOCIAL_UPDATE = 'social/UPDATE'

interface SocialAccount {
  service: string
  username: string
}

interface UpdateSocialAccountsAction {
  type: typeof SOCIAL_UPDATE
  payload: SocialAccount[]
}

type SocialActions = UpdateSocialAccountsAction

const updateSocialAccounts = (accounts: SocialAccount[]): SocialActions => ({
  type: SOCIAL_UPDATE,
  payload: accounts,
})

export { SOCIAL_UPDATE, updateSocialAccounts, SocialActions }
