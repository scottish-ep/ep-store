import styles from './ProductPanel.module.scss';

import Image from 'next/image';
import Link from 'next/link';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

import { isArray } from '../../utils';

interface ProductPanelProps {
  productInfo: any
}

const ProductPanel = (props: ProductPanelProps) => {
  const { productInfo } = props;
  const [variant, setVariant] = useState(productInfo.variance[0]);

  return (
    <Link
      className={styles.link}
      href={productInfo.link}
    >
      <div className={styles.panel__wrapper}>
        <div className={styles.thumbnail__wrapper}>
          <Image 
            className={styles.thumbnail}
            src={variant.bigImage}
            width={160}
            height={160}
            alt=""
          />
          {
            variant.soldOut && (
              <div className={styles.sold_out__overlay}>
                <span>Hết hàng</span>
              </div>
            )
          }
        </div>

        {isArray(productInfo.variance)  && (
          <div className={styles.var_gallery}>
            {productInfo.variance.slice(0, 4).map((item: any, index: number) => (
              <div
                className={styles.image__wrapper}
                key={index}
              >
                <Image 
                onMouseEnter={() => {setVariant(item)}}
                src={item.smallImage}
                alt=""
              />
                {productInfo.variance.length > 4 && index === 3 && (
                  <div className={styles.more_item}>
                    {"+" + (productInfo.variance.length - 4)}
                  </div>
                )}
              </div>
            ))}
            
          </div>
        )}
        <div className={styles.info__wrapper}>
          <div className={styles.brand}>
            <span>{productInfo.brand}</span>
          </div>

          <p className={styles.title}>{productInfo.title}</p>
          
          <div className={styles.rating}>
            <Rating 
              size="small" 
              icon={<StarIcon htmlColor='#000000' fontSize='inherit'/>}
              value={productInfo.rating.star} 
              readOnly 
            />
            {productInfo.rating.number > 0 && (
              <div className={styles.number}>
                ({productInfo.rating.number})
              </div>
            )}
          </div>

          <div className={styles.price}>
            <div className={styles.origin_price}>{productInfo.saledPrice ? productInfo.price + " ₫" : ""}</div>
            <div className={styles.show_price}>
              {productInfo.saledPrice ? productInfo.saledPrice + " ₫" : productInfo.price + " ₫"}
              <div className={styles.discount}>
                <span>{"-" + Math.floor((parseFloat(productInfo.price) - parseFloat(productInfo.saledPrice)) * 100.0 / parseFloat(productInfo.price)) + "%"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductPanel;