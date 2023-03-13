import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import { isArray } from '../../utils';
import Icon from '../Icon/Icon';
import IconLink from '../IconLink/IconLink';
import SearchBar from '../SearchBar/SearchBar';
import MobileSearchBox from '../MobileSearchBox/MobileSearchBox';

import styles from './Header.module.scss';

const headerContent = {
  promotionText: {
    text: "FREESHIP cho đơn hàng từ 399k. Mua ngay!",
    link: "#"
  },
  quickNaviUpper: [
    {
      iconName: 'black-left-cadet',
      text: "Thông báo",
      link: "#"
    },
    {
      iconName: 'white-shipping',
      text: "Theo dõi đơn hàng",
      link: "#"
    },
    {
      iconName: 'white-coin',
      text: "032 583 9032",
      link: "#"
    }
  ],
  searchPlaceholder: "Tìm kiếm",
  menuItems: [
    {
      text: "Danh mục sản phẩm",
      link: "#"
    },
    {
      text: "Sản phẩm mới",
      link: "#"
    },
    {
      text: "Thương hiệu",
      link: "#"
    },
    {
      text: "Góc làm đẹp",
      link: "#"
    },
    {
      text: "Quà tặng",
      link: "#"
    },
    {
      text: "Cộng đồng",
      link: "#"
    },
    {
      text: "Khuyến mãi",
      link: "#"
    },

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
    <div className={styles.header}>
      <div 
        className={classNames(styles.overlay, searchBox && styles.active)}
        onClick={() => setSearchBox(false)}
      />
      
      <div className={styles.upper_bar}>
        <div className={styles.upper_bar__wrapper}>
          <Link className={styles.item} href={headerContent.promotionText.link}>
            {headerContent.promotionText.text}
          </Link>
          <div className={styles.right_side__wrapper}>
            {isArray(headerContent.quickNaviUpper) && headerContent.quickNaviUpper.map((item: any, index: number) => (
              <IconLink 
                key={index}
                className={styles.item}
                href={item.link}
                iconName={item.iconName}
                iconSize={18}
                iconBefore={true}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.lower_bar}>
        <div className={styles.lower_bar__wrapper}>
          <Link href="/">
            <Image 
              src={require("../../public/cherict.png")}
              width={138}
              height={20}
              alt=""
            />
          </Link>

          <SearchBar
            className={styles.search_bar}
            placeholder={headerContent.searchPlaceholder}
            searchHistory={searchHistory}
            popularTag={popularTag}
            onFocus={searchBox}
            toggleSearchBox={() => setSearchBox(true)}
          />
            
          <div className={styles.right_side__wrapper}>
            <Link className={styles.item} href="#">
              Đăng nhập / Đăng ký
            </Link>

            <IconLink 
              className={styles.item}
              href="#"
              iconName="black-shopping-bag"
              iconSize={24}
              iconBefore={true}
            />
          </div>
        </div>

        <div className={styles.nav_bar__wrapper}>
          {isArray(headerContent.menuItems) && headerContent.menuItems.map((item, index) => (
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
        <div onClick={() => setSearchBox(true)}>
          <Icon  icon="black-search" size={20}/>
        </div>
        <IconLink 
          className={styles.item}
          href="#"
          iconName="black-shopping-bag"
          iconSize={24}
          iconBefore={true}
        />
      </div>
      
      {searchBox && (
        <MobileSearchBox 
          searchHistory={searchHistory}
          popularTag={popularTag}
          placeholder={headerContent.searchPlaceholder}
          toggleSearchBox={() => setSearchBox(false)}
        />
      )}
      
    </div>
  )
}

export default Header;