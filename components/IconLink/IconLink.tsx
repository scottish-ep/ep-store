import Link from "next/link"
import { Url } from "url";
import Icon from "../Icon/Icon";

interface IconLinkInterface {
  href: string,
  iconName: string,
  className?: string,
  text?: string,
  iconSize: number,
  iconBefore: boolean
}

const IconLink = (props: IconLinkInterface) => {
  const {href, iconName, className, text, iconSize, iconBefore} = props;
  return (
    <Link className={className} href={href}>
      {iconBefore && 
        <Icon 
          icon={iconName}
          size={iconSize}
        />
      }
      {text}
      {!iconBefore && 
        <Icon 
          icon={iconName}
          size={iconSize}
        />
      }
    </Link>
  )
}

export default IconLink;