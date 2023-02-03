import Icon from "../Icon/Icon";
import { isArray } from "../../utils";
import styles from "./MobileSearchBox.module.scss";

interface MobileSearchBoxInterface {
  searchHistory: any,
  popularTag: any
  placeholder?: string,
  toggleSearchBox: any
}

const MobileSearchBox = (props: MobileSearchBoxInterface) => {
  const {searchHistory, popularTag, placeholder, toggleSearchBox } = props;

  return (
    <div className={styles.search_dial__wrapper}>
      <div className={styles.search_bar__wrapper}>
        <div onClick={toggleSearchBox}>
          <Icon icon="black-left-cadet" size={24}/>
        </div>
        <div className={styles.input__wrapper}>
          <Icon className={styles.search_icon} icon="black-search" size={18}/>
          <input 
            type="text" 
            placeholder={placeholder} 
          />
        </div>
      </div>
     
      <div className={styles.history__wrapper}>
        {isArray(searchHistory) && <h4>Lịch sử tìm kiếm</h4>}
        {isArray(searchHistory) && searchHistory.map((item: any, index: number) => (
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
        {isArray(popularTag) && <h4>Tìm kiếm phổ biến</h4>}
        <div className={styles.chip__wrapper}>
          {isArray(popularTag) && popularTag.map((item: any, index: number) => (
            <span className={styles.chip} key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileSearchBox;