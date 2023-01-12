import styles from './Header.module.scss';
import Link from 'next/link';
import Icon from '../Icon/Icon';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

const headerContent = {
  promotionText: {
    text: "Free Quà",
    link: "#"
  },
  shop: {
    text: "Cửa hàng",
    link: "#"
  },
  shipping: {
    text: "Kiểm tra đơn hàng",
    link: "#"
  },
  lixicoin: {
    text: "Lixicoin",
    link: "#"
  },
  searchPlaceholder: "Tìm kiếm",
  menuItems: [
    {
      text: "Shop Beauty",
      link: "#"
    },
    {
      text: "Ưu đãi",
      link: "#"
    },
    {
      text: "Thương hiệu",
      link: "#"
    },
    {
      text: "Thương hiệu",
      link: "#"
    },
    {
      text: "Thương hiệu",
      link: "#"
    },
    {
      text: "Thương hiệu",
      link: "#"
    }
  ]
}

const searchHistory = [
  "test1",
  "test2",
  "test3",
  "test4",
  "test5"
]

const popularTag = [
  "test1",
  "test2",
  "test3",
  "test4",
  "test5"
]

const useDeviceSize = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [width, height]

}

const Header = () => {
  const windowSize = useDeviceSize();
  const [searchBox, setSearchBox] = useState(false);
  
  return windowSize[0] > 1040 ? (
    <div>
      <div 
        className={classNames(styles.overlay, searchBox && styles.active)}
        onClick={() => setSearchBox(false)}
      ></div>
      
      <div className={styles.upper_bar}>
        <div className={styles.upper_bar__wrapper}>
          <Link className={styles.item} href={headerContent.promotionText.link}>
            {headerContent.promotionText.text}
          </Link>
          <div className={styles.right_side__wrapper}>
            <Link className={styles.item} href={headerContent.shop.link}>
              <Icon 
                icon='white-shop-icon'
                size={16}
              />
              {headerContent.shop.text}
            </Link>
            <Link className={styles.item} href={headerContent.shipping.link}>
              <Icon 
                icon='white-shipping'
                size={18}
              />
              {headerContent.shipping.text}
            </Link>
            <Link className={styles.item} href={headerContent.lixicoin.link}>
              <Icon 
                icon='white-coin'
                size={16}
              />
              {headerContent.lixicoin.text}
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.lower_bar}>
        <div className={styles.lower_bar__wrapper}>
          <Link href="/">
            <Image 
              src={require("../../public/logo.svg")}
              width={145}
              height={60}
              alt=""
            />
          </Link>

          <div className={classNames(styles.search_bar, searchBox ? styles.active : "")}>
            <input 
              onClick={() => setSearchBox(true)} 
              type="text" 
              placeholder={headerContent.searchPlaceholder} 
            />
            <div className={styles.icon__wrapper}>
              <Icon icon="black-search" size={18}/>
              <span>Tìm kiếm</span>
            </div>
            {searchBox && (
              <div className={styles.search_dial__wrapper}>
                <div className={styles.history__wrapper}>
                  <h4>Lịch sử tìm kiếm</h4>
                  {Array.isArray(searchHistory) && searchHistory.map((item, index) => (
                    <p className={styles.result} key={index}>
                      <span>{item}</span>
                      <Icon
                        icon='black-45-arrow'
                        size={14}
                      />
                    </p>
                  ))}
                </div>
                <div className={styles.popular__wrapper}>
                  <h4>Tìm kiếm phổ biến</h4>
                  <div className={styles.chip__wrapper}>
                    {Array.isArray(popularTag) && popularTag.map((item, index) => (
                      <span className={styles.chip} key={index}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.right_side__wrapper}>
            <Link className={styles.item} href="#">
              Đăng nhập / Đăng ký
            </Link>

            <Link className={styles.item} href="#">
              <Icon icon="black-shopping-bag" size={24}/>
            </Link>
          </div>
        </div>

        <div className={styles.nav_bar__wrapper}>
          {Array.isArray(headerContent.menuItems) && headerContent.menuItems.map((item, index) => (
            <Link className={styles.item} href={item.link} key={index}>
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.mobile_menu}>
      <Link href="/">
        <Image 
          src={require("../../public/logo.svg")}
          width={100}
          height={30}
          alt=""
        />
      </Link>

      <div className={styles.icons__wrapper}>
        <Icon icon="black-search" size={20}/>
        <Link className={styles.item} href="#">
          <Icon icon="black-shopping-bag" size={20}/>
        </Link>
      </div>
    </div>
  )
}

export default Header;