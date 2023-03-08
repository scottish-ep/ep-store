import styles from '../styles/Community.module.scss';
import Image from 'next/image';
import Blog from '../components/Blog/Blog';


const leftSidebarTop = [
    {
        icon:'',
        title:'News feed'
    },
    {
        icon:'',
        title:'Unboxing'
    },
    {
        icon:'',
        title:'Best deals'
    }
];

const leftSidebarBot = [
    {
        icon:'',
        title:'Easplayers 3001'
    },
    {
        icon:'',
        title:'Đánh gía sản phẩm'
    },
]

const hastags = [
    "Kem chống nắng",
    "Kem dưỡng",
    "Dưỡng da",
    "Trang điểm"
]

const menuOptions = [
    {
        icon:"",
        title: "Được đề cập nhiều nhất tuần"
    },
    {
        icon:"",
        title: "Bài viết được bình chọn"
    },
    {
        icon:"",
        title: "Được đánh giá nhiều nhất"
    },
    {
        icon:"",
        title: "Sản phẩm nổi tiếng nhất tuần"
    },
    {
        icon:"",
        title: "Đáng mua nhất tuần"
    }
];

const renderLeftSidebar = function(topItems,botItems){
    let key =1;
    return (
        <>
            <div className={styles.right_sidebar_top}>
                {topItems.map(item => (
                    <h4 key={key++}>{item.title}</h4>
                ))}
            </div>
            <div className={styles.right_sidebar_bot}>
                {botItems.map(item => (
                    <h4 key={key++}>{item.title}</h4>
                ))}
            </div>
        </>
    )
}

const renderHastags = function (hastags) {
    return (
        <>
            <div className={styles.hastag_title}>
                Từ khoá nổi bật
            </div>
            {hastags.map((item,index) => (
                <div className={styles.hastag}>
                    #{item}
                </div>
            ))}
        </>
    )
}

const renderMenu = function(options) {
    return (

        options.map((option) => (
            <div className={styles.item}>
                <Image 
                    src={require('../public/test-avt.png')}              
                    width={33}
                    height={33}
                    alt=""
                />
                <p>{option.title}</p>
            </div>
        ))
    )
}


const commentsData =[
    {
        user: {
            name: 'Eastplayer',
            avatar: 'https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg'
        },
        forUser: {
            name: 'Super Volcanic Pore Clay Duo Set 380 mL',
            avatar: 'https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg'
        },
        vote: 5,
        date: '11/11/2021',
        content:'Vừa nhận được hàng là mình dùng ngay, trải nghiệm rất đã, mới sử dụng nên chưa biết kết quả. Nhưng sản phẩm của halio khỏi bàn rồi mình.',
        listImage: [
            'https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=2000',
            'https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=2000',
        ]
    },
    {
        user: {
            name: 'Eastplayer',
            avatar: 'https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg'
        },
        forUser: {
            name: 'Super Volcanic Pore Clay Duo Set 380 mL',
            avatar: 'https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg'
        },
        vote: 5,
        date: '11/11/2021',
        content:'Vừa nhận được hàng là mình dùng ngay, trải nghiệm rất đã, mới sử dụng nên chưa biết kết quả. Nhưng sản phẩm của halio khỏi bàn rồi mình.',
        listImage: [
            'https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=2000',
            'https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=2000',
        ]
    }
]

const renderComments = function(comments) {
    return (
        comments.map(comment => (
            <Blog commentData={comment}/>
        ))
    );
}
export default function Community() {
    return (
        <div className={styles.community_page}>
            <div className={styles.community_page_wrapper}>
                <div className={styles.left_flower}>
                    <Image
                            src={require('../public/left-flower.png')}              
                            width={396}
                            height={342}
                            alt=""
                    />
                </div>
                <div className={styles.right_flower}>
                    <Image
                        src={require('../public/right-flower.png')}              
                        width={335}
                        height={289}
                        alt=""
                    />
                </div>
                <div className={styles.left_community}>
                    {renderLeftSidebar(leftSidebarTop,leftSidebarBot)}
                </div>
                <div className={styles.right_community}>
                    {renderHastags(hastags)}
                </div>
                <div className={styles.community_main_content}>
                    <div className={styles.write_commment_box}>
                        <Image 
                            src={require('../public/test-avt.png')}              
                            width={64}
                            height={64}
                            alt=""
                        />
                        <div className={styles.comment_box} >
                            <input type="text" id="write_comment" placeholder="Chia sẻ review sản phẩm và nhận xu"/>
                        </div>
                    </div>
                    <div className={styles.community_show_post}>
                        <div className={styles.post_choose}>
                            <h4>Nổi bật</h4>
                            <div className={styles.menu_choose}>
                                {renderMenu(menuOptions)}
                            </div>
                        </div>
                    </div>
                    <div className={styles.blog_comment_wrapper}>
                        <Blog commentData={commentsData[0]}/>
                    </div>
                </div>
            </div>
        </div>
    );
}