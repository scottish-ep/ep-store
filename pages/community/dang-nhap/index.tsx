import styles from '../../../styles/Community.module.scss';
import Image from 'next/image';
import Blog from '../../../components/Blog/Blog';
import Icon from '../../../components/Icon/Icon';
import IconLink from '../../../components/IconLink/IconLink';
import CommunityLeftSideBar from '../../../components/CommunityLeftSideBar/CommunityLeftSideBar';

const currentUser = {
    name: 'Eastplayer',
    address: 'Hồ Chí Minh',
    role: 'member',
    avatar:'',
    blog: {
        first: 0,
        second: 0,
        third: 0
    },
    joinDate: '11/11/2023'
}

const leftSideBarItems = {
    topItems : [
        {
            icon:'news-feed',
            title:'News feed'
        },
        {
            icon:'menu-gift',
            title:'Unboxing'
        },
        {
            icon:'menu-best-deals',
            title:'Best deals'
        }
    ],
    botItems: [
        {
            icon:'menu-user-name',
            title:'Easplayers 3001'
        },
        {
            icon:'menu-star',
            title:'Đánh gía sản phẩm'
        },
    ]
}

const hastags = [
    "Kem chống nắng",
    "Kem dưỡng",
    "Dưỡng da",
    "Trang điểm"
]

const rightSideBarProducts = [
    {
        name:'Máy Rửa mặt Halio & Massage',
        imageSrc:''
    }
]

const menuOptions = [
    {
        icon:"menu-tag",
        title: "Được đề cập nhiều nhất tuần"
    },
    {
        icon:"menu-like",
        title: "Bài viết được bình chọn"
    },
    {
        icon:"menu-3-stars",
        title: "Được đánh giá nhiều nhất"
    },
    {
        icon:"menu-1-star",
        title: "Sản phẩm nổi tiếng nhất tuần"
    },
    {
        icon:"menu-medal",
        title: "Đáng mua nhất tuần"
    }
];

const renderLeftSidebar = function(topItems,botItems){
    let key =1;
    return (
        <>
            <div className={styles.right_sidebar_top}>
                {topItems.map((item,index) => (
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
                {botItems.map((item,index) => (
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
                    src={require('../../../public/test-avt.png')}              
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
            avatar: ''
        },
        forUser: {
            name: 'Super Volcanic Pore Clay Duo Set 380 mL',
            avatar: ''
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
            avatar: ''
        },
        forUser: {
            name: 'Super Volcanic Pore Clay Duo Set 380 mL',
            avatar: ''
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
    const renderRightSideBar = function (hastags,products) {
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
                <div className={styles.right_side_bot}>
                    <div className={styles.hastag_title}>
                        Từ khoá nổi bật
                    </div>
                    <a href="">Xem tất cả</a>
                    <p>Đánh giá sản phẩm đã mua và chia sẻ link đập hộp để nhận thưởng lên đến 200 Cheri Xu</p>
                    {products.map(product => (
                        <div className={styles.right_side_product}>
                            <Image
                                    src=''             
                                    width={40}
                                    height={40}
                                    alt=""
                            />
                            <h5>{product.name}</h5>
                        </div>
                    ))}
                </div>
            </>
        )
    }
    return (
        <div className={styles.community_page}>
            <div className={styles.community_page_wrapper}>
                <div className={styles.left_flower}>
                    <Image
                            src={require('../../../public/left-flower.png')}              
                            width={396}
                            height={342}
                            alt=""
                    />
                </div>
                <div className={styles.right_flower}>
                    <Image
                        src={require('../../../public/right-flower.png')}              
                        width={335}
                        height={289}
                        alt=""
                    />
                </div>
                <div className={styles.left_community_wrapper}>
                    <CommunityLeftSideBar Items ={leftSideBarItems} />
                </div>
                <div className={styles.right_community}>
                    {renderRightSideBar(hastags,rightSideBarProducts )}
                </div>
                <div className={styles.community_main_content}>
                    <div className={styles.write_commment_box}>
                        <Image 
                            src={require('../../../public/test-avt.png')}              
                            width={64}
                            height={64}
                            alt=""
                        />
                        <div className={styles.user_info_wrapper}>
                            <h4>{currentUser.name}</h4>
                            <p>{currentUser.address}- Tham gia {currentUser.joinDate}</p>
                            <div className={styles.user_role}>#{currentUser.role}</div>
                            <div className={styles.user_blog_wrapper}>
                                <div className={styles.blog_block}>
                                    <h3>{currentUser.blog.first}</h3>
                                    <p>bài viết</p>
                                </div>
                                <div className={styles.blog_block}>
                                    <h3>{currentUser.blog.second}</h3>
                                    <p>bài viết</p>
                                </div>
                                <div className={styles.blog_block}>
                                    <h3>{currentUser.blog.third}</h3>
                                    <p>bài viết</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.community_show_post}>
                        <h4>Hoạt động nổi bật</h4>
                    </div>
                    <div className={styles.blog_comment_wrapper}>
                        {renderComments(commentsData)}
                    </div>
                </div>
            </div>
        </div>
    );
}