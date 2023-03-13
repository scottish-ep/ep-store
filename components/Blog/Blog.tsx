import styles from './Blog.module.scss';
import Image from 'next/image';

export interface userData {
    name : string,
    avatar: string,
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

const renderListImage =function(images) {
    return (
        <>
        {images.map(image => (
            <Image 
                src={image.src}              
                width={15}
                height={14}
                alt=""
            />
        ))}
        </>
    )
}
export default function Blog({commentData}) {


    let votes = Array(commentData.vote).fill('../../public/star.png');
    return (
        <div className={styles.blog_comment}>
            <div className={styles.comment_header}>
                <div className={styles.comment_header_left}>
                <Image 
                    src={commentData.user.avatar}              
                    width={61}
                    height={61}
                    alt=""
                />
                </div>
                <div className={styles.comment_header_right}>
                    <div className={styles.comment_info}>
                        <h5>Eastplayers
                        <span> đã viết đánh giá cho</span>
                        </h5>
                        <h5>{commentData.forUser.name}</h5>
                    </div>
                    <div className={styles.vote_date}>
                        <div className={styles.star}>
                           { renderVote(votes)}
                        </div>
                        <div className={styles.date}>
                            11/11/2021
                        </div>
                    </div>
                    <div className={styles.comment_content}>
                        Vừa nhận được hàng là mình dùng ngay, trải nghiệm rất đã, mới sử dụng nên chưa biết kết quả. Nhưng sản phẩm của halio khỏi bàn rồi mình.
                    </div>
                </div>
            </div>
            <div className={styles.comment_images}>
                {renderListImage(commentData.listImage) }
            </div>
        </div>
    );
}