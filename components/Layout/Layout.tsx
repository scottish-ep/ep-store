
import Icon from "../Icon/Icon";
import styles from "./Layout.module.scss"
import Link from "next/link";
import classNames from "classnames";

interface LayoutProps {
  title?: string,
  isShowMore: boolean,
  showMoreLink?: string,
  backgroundImage?: any,
  children: any,
  className?: any,
  contentWrapperClassname?: any
}

const Layout = (props: LayoutProps) => {
  const {title, isShowMore, showMoreLink, backgroundImage, children, className, contentWrapperClassname} = props;
  return (
    <div className={classNames(className, styles.layout__wrapper)}>
      <div className={styles.title__wrapper}>
        <h4>{title}</h4>
        {isShowMore && (
          <Link className={styles.show_more__wrapper} href={showMoreLink || "#"}>
            Xem tất cả 
            <Icon 
              icon="black-left-cadet"
              size={16}
              className={styles.arrow}
            />
          </Link>
        )}
      </div>

      <div className={classNames(styles.content__wrapper, contentWrapperClassname)}>
        {children}
      </div>
    </div>
  )
}

export default Layout;