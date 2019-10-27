import { h } from 'preact'
import { useSelector } from 'react-redux'

import { getSocialAccounts } from 'nodecg-twitchie-graphics'

import SocialLinkItem from './SocialLinkItem'

const SocialLinks = () => {
  const services = useSelector(getSocialAccounts)

  return (
    <div className="c-social-accounts">
      {services.map(({ service, username }) => (
        <SocialLinkItem className="c-social-accounts__item" service={service} username={username} />
      ))}
    </div>
  )
}
export default SocialLinks
