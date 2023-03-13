import styles from './ProductItem.module.scss';
import Image from 'next/image';
const renderHotDeal  = function () {
    return ( <div className={styles.hot_deal}>Hot deal</div>);
}
const renderVote =function(votes) {
    return (
        <>
        {votes.map(vote => (
            <Image 
                src={require('../../public/star.png')}              
                width={15}
                height={14}
                alt=""
            />
        ))}
        </>
    )
}
export default function ProductItem ({props}) {
    let saledPrice = props.price * props.sale / 100 ;
    let votes = Array(props.vote).fill('../../public/star.png');
    return(
        <div className={styles.product_panel}>
            <div className={styles.product_image_wrapper}>
                <Image 
                    src={require('../../public/product-test.png')}              
                    width={122}
                    height={102}
                    alt=""
                />
                {props.hotDeal && renderHotDeal()}
            </div>
            <div className={styles.product_info}>
                <div className={styles.product_branch}>
                    <p>{props.branch}
                    <span className={styles.sale}>{props.sale}%</span>
                    </p>
                </div>
                <p>{props.name}</p>
                <div className={styles.vote_wrapper}>
                    {renderVote(votes)}
                    <span>( {props.quanityVote} )</span>
                </div>
                <h4>{new Intl.NumberFormat(["ban", "id"]).format(saledPrice)}đ</h4>
                <p>{new Intl.NumberFormat(["ban", "id"]).format(props.price)}</p>
            </div>
        </div>
    );
    
}