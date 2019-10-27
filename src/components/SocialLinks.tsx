import { h } from 'preact'
import { useSelector } from 'react-redux'

import { getSocialAccounts } from 'nodecg-twitchie-graphics'

import SocialLink from './SocialLink'

import '../assets/icons/twitch.svg'
import '../assets/icons/twitter.svg'

const SocialLinks = () => {
  const services = useSelector(getSocialAccounts)

  return (
    <div>
      {services.map(({ service, username }) => (
        <SocialLink service={service} username={username} />
      ))}
    </div>
  )
}
export default SocialLinks
