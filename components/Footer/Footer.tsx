import styles from "./Footer.module.scss";
import Image from "next/image";
import Icon from "../Icon/Icon";
import Link from "next/link";
import classNames from "classnames";

const footer_logo_items = [
  {
    icon: "footer-delivery",
    content: "Giao hàng miễn phí trong nội thành"
  },
  {
    icon: "footer-authentic",
    content: "100% sản phẩm chính hãng"
  },
  {
    icon: "footer-return",
    content: "Hoàn trả trong 7 ngày" 
  }
];

const footer_items = {
  hotline: "+84 475 5830",
  column1: {
    title: "Danh mục sản phẩm",
    items: [
      {
        content: "Beauty Box",
        link: "#"
      },
      {
        content: "Beauty Box",
        link: "#"
      },
      {
        content: "Beauty Box",
        link: "#"
      },
      {
        content: "Beauty Box",
        link: "#"
      },
      {
        content: "Beauty Box",
        link: "#"
      },
      {
        content: "Beauty Box",
        link: "#"
      }
    ]
  },
  column2: {
    title: "Thông tin & Hướng dẫn",
    items: [
      {
        content: "Về CheriCT",
        link: "#"
      },
      {
        content: "Về CheriCT",
        link: "#"
      },
      {
        content: "Về CheriCT",
        link: "#"
      },
      {
        content: "Về CheriCT",
        link: "#"
      },
      {
        content: "Về CheriCT",
        link: "#"
      },
      {
        content: "Về CheriCT",
        link: "#"
      },
      {
        content: "Về CheriCT",
        link: "#"
      }
    ]
  },
  column3: {
    title: "Săn thưởng cùng với CheriCT Members",
    member_card: [
      {
        link:"/assets/footer/gold_member.png"
      },
      {
        link:"/assets/footer/gold_member.png"
      },
      {
        link:"/assets/footer/gold_member.png"
      }
    ],
    button: {
      content: "Tìm hiểu thêm",
      link: "#"
    }
  },
  column4: {
    content: "www.cherict.com là kênh mua sắm mỹ phẩm, làm đẹp hàng đầu Việt Nam được các beauty blogger lựa chọn để giới thiệu sản phẩm họ yêu thích tới khách hàng, người hâm mộ.",  
    social_button: [
      {
        icon: "twitter-grey",
        link: "#" 
      },
      {
        icon: "facebook-grey",
        link: "#" 
      },
      {
        icon: "instagram-grey",
        link: "#" 
      },
      {
        icon: "youtube-grey",
        link: "#" 
      }
    ]
  }
}

const Footer = (props: any) => {
  const { className } = props;

  return (
    <div className={classNames(styles.footer, className)}>
      <div className={styles.footer__wrapper}>
        <div className={styles.sm_column}>
          <div className={styles.title}>{footer_items.column1.title}</div>
          <div className={styles.list_item}>
            {footer_items.column1.items.map((item: any, index: any) => (
              <Link href="#" key={index}>
                {item.content}
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.sm_column}>
          <div className={styles.title}>{footer_items.column2.title}</div>
          <div className={styles.list_item}>
            {footer_items.column2.items.map((item: any, index: any) => (
              <Link href="#" key={index}>
                {item.content}
              </Link>
            ))}
          </div>
        </div>

        <div className={classNames(styles.sm_column, styles.member_column)}>
          <div className={styles.title}>{footer_items.column3.title}</div>
          <div className={styles.member_cards}>
            {footer_items.column3.member_card.map((item: any, index: any) => (
              <div className={classNames(styles.card, styles[`card_${index}`])} key={index}>
                <Image src={item.link} width={92} height={57} layout="responsive" alt="a"/>
              </div>
            ))}
          </div>
          <Link href="#" className={styles.button}>
            {footer_items.column3.button.content}
          </Link>
        </div>
        
        <div className={styles.lg_column}>
          <div>{footer_items.column4.content}</div>
          <div className={styles.social_buttons}>
            {footer_items.column4.social_button.map((item: any, index: any) => (
              <Link href="#" className={styles.button} key={index}>
                <Icon icon={item.icon} size={24}/>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.social_button_section}>
        <div className={styles.social_buttons}>
            {footer_items.column4.social_button.map((item: any, index: any) => (
              <Link href="#" className={styles.button} key={index}>
                <Icon icon={item.icon} size={24}/>
              </Link>
            ))}
        </div>

        <div>
          <Image src="/assets/footer/license.png" width={100} height={35} alt="" />
        </div>
      </div>
      
      <div className={styles.license}>
        <div className={styles.image}>
          <Image src="/assets/footer/license.png" width={100} height={35} alt="" />
        </div>
        <div>
          <div>CheriCT 2020 - 2028 | Privacy Policy | Made by CheriCT</div>
          <div>Giấy chứng nhận ĐKKD số 0314414731 do Sở Kế hoạch và Đầu tư Tp. HCM cấp ngày 19/05/2017</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;