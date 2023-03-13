import styles from './CommunityLeftSideBar.module.scss'
import IconLink from '../IconLink/IconLink';
export default function CommunityRightSideBar({Items}) {
    return (
        <div className={styles.left_community}>
            <div className={styles.right_sidebar_top} >
                {Items.topItems.map((item,index) => (
                     <IconLink 
                        key={index}
                        className={styles.item}
                        href=''
                        iconName={item.icon}
                        iconSize={18}
                        iconBefore={true}
                        text={item.title}
                    />
                    // <h4 key={key++}>{item.title}</h4>
                ))}
            </div>
            <div className={styles.right_sidebar_bot}>
                {Items.botItems.map((item,index) => (
                    <IconLink 
                        key={index}
                        className={styles.item}
                        href=''
                        iconName={item.icon}
                        iconSize={18}
                        iconBefore={true}
                        text={item.title}
                    />
                ))}
            </div>
        </div>
    )
}
