import { FunctionComponent, h } from 'preact'

interface SocialLinkProps {
  service: string
  username: string
}

const SocialLink: FunctionComponent<SocialLinkProps> = ({ service, username }) => (
  <span className={`social ${service}`}>
    <svg className="social-icon">
      <use xlinkHref={`#${service}`} />
    </svg>

    <span className="social-account">{username}</span>
  </span>
)

export default SocialLink
