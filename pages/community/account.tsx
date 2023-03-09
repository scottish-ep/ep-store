import styles from '../../styles/CommunityAccount.module.scss';
import Image from 'next/image';
import Blog from '../../components/Blog/Blog';
import React, { useState ,useEffect} from 'react';


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

const account = {
    name:'Eastplayer',
    role:'memmber',
    address:'Hồ Chí Minh',
    join:'11/11/2023',
    listBlog: [0,0,0],
}

const renderComments = function(comments) {
    return (
        comments.map(comment => (
            <Blog commentData={comment}/>
        ))
    );
}

const renderAccountInfo = function (data) {
    return (
        <div className={styles.user_info_box}>
            <Image 
                src={require('../../public/test-avt.png')}              
                width={64}
                height={64}
                alt=""
            />
            <div className={styles.user_info_right} >
                <h4>{data.name}</h4>
                <div className={styles.user_address}>
                    {data.address} - {data.join}
                </div>
                <div className={styles.user_role}>
                    #{data.role}
                </div>
                <div className={styles.user_blog_info_wrapper}>
                    <div className={styles.user_blog_info_wrapper}>
                        <div className={styles.blog_info}>
                            <h3>{data.listBlog[0]}</h3>
                            <p>bài viết</p>
                        </div>
                    </div>
                    <div className={styles.user_blog_info_wrapper}>
                        <div className={styles.blog_info}>
                            <h3>{data.listBlog[1]}</h3>
                            <p>bài viết</p>
                        </div>
                    </div>
                    <div className={styles.user_blog_info_wrapper}>
                        <div className={styles.blog_info}>
                            <h3>{data.listBlog[2]}</h3>
                            <p>bài viết</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// const [currentOpt, setCurrentOpt] = useState(1);
// useEffect(() => {
//     const handleClick = (opt) => {
//         setCurrentOpt(opt)
//     }
// },[currentOpt])

export default function Community() {
    return (
        <div className={styles.community_page}>
            <div className={styles.community_page_wrapper}>
                <div className={styles.left_flower}>
                    <Image
                            src={require('../../public/left-flower.png')}              
                            width={396}
                            height={342}
                            alt=""
                    />
                </div>
                <div className={styles.right_flower}>
                    <Image
                        src={require('../../public/right-flower.png')}              
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
                    {/* <div className={styles.user_info_box}>
                        <Image 
                            src={require('../../public/test-avt.png')}              
                            width={64}
                            height={64}
                            alt=""
                        />
                        <div className={styles.user_info_right} >
                            <h4>Eastplayers</h4>
                            <div className={styles.user_address}>
                                Hồ Chí Minh - Tham gia 11/8/2020
                            </div>
                            <div className={styles.user_role}>
                                #member
                            </div>
                            <div className={styles.user_blog_info_wrapper}>
                                <div className={styles.blog_info}>
                                    <h3>0</h3>
                                    <p>bài viết</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {renderAccountInfo(account)}
                    <h4>Hoạt động của bạn</h4>
                    <div className={styles.blog_comment_wrapper}>
                        {renderComments(commentsData)}
                    </div>
                </div>
            </div>
        </div>
    );
}