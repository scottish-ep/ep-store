import { useState } from 'react';
import classNames from 'classnames';
import styles from './SearchBar.module.scss';
import Icon from '../Icon/Icon';
import { isArray } from '../../utils';

interface SeachBarInterface {
  className?: string,
  placeholder?: string,
  searchHistory: any,
  popularTag: any,
  onFocus: boolean,
  toggleSearchBox: any
}

const SearchBar = (props: SeachBarInterface) => {
  const {className, placeholder, searchHistory, popularTag, onFocus, toggleSearchBox} = props;

  return (
    <div className={classNames(className, styles.search_bar, onFocus ? styles.active : "")}>
      <input 
        onClick={toggleSearchBox}
        type="text" 
        placeholder={placeholder} 
      />
      <div className={styles.icon__wrapper}>
        <Icon icon="black-search" size={18}/>
        <span>Tìm kiếm</span>
      </div>
      {onFocus && (
        <div className={styles.search_dial__wrapper}>
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
      )}
    </div>
  )
}

export default SearchBar;