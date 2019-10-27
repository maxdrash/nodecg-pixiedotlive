import classnames from 'classnames'
import { FunctionComponent, h } from 'preact'

interface SocialLinkItemProps {
  service: string
  username: string
  className?: string
}

const SocialLinkItem: FunctionComponent<SocialLinkItemProps> = ({ service, className, username }) => (
  <span className={classnames('c-social-account', className, service)}>
    <svg className="c-social-account__icon o-icon">
      <use xlinkHref={`#${service}`} />
    </svg>

    <span className="c-social-account c-social-account__name">{username}</span>
  </span>
)

export default SocialLinkItem
