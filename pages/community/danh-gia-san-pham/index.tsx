
import styles from '../../../styles/Community.module.scss';
import Image from 'next/image';
import Blog from '../../../components/Blog/Blog';
import Icon from '../../../components/Icon/Icon';
import IconLink from '../../../components/IconLink/IconLink';
import React, { useState,useEffect } from 'react';
import CommunityLeftSideBar from '../../../components/CommunityLeftSideBar/CommunityLeftSideBar';
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

const rating = [
    // {
    //     name:"Laneige Radient Cream",
    //     address: "Hồ Chí Minh",
    //     date: "11/11/2023",
    //     imgSrc:""
    // },
    // {
    //     name:"Laneige Radient Cream",
    //     address: "Hồ Chí Minh",
    //     date: "11/11/2023",
    //     imgSrc:""
    // },
    // {
    //     name:"Laneige Radient Cream",
    //     address: "Hồ Chí Minh",
    //     date: "11/11/2023",
    //     imgSrc:""
    // }
]

const rated= [
    {
        name:"Laneige Radient Cream",
        address: "Hồ Chí Minh",
        date: "11/11/2023",
        imgSrc:""
    },
    {
        name:"Laneige Radient Cream",
        address: "Hồ Chí Minh",
        date: "11/11/2023",
        imgSrc:""
    },
    {
        name:"Laneige Radient Cream",
        address: "Hồ Chí Minh",
        date: "11/11/2023",
        imgSrc:""
    }
]

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


const renderProduct = function(datas) {
    return (
        <>
        {datas.map((data,index) =>(
            <div className={styles.product_rating_panel}>
                <div className={styles.product_info}>
                    <Image 
                        src={require('../../../public/test-avt.png')}              
                        width={33}
                        height={33}
                        alt=""
                    />
                    <div className={styles.product_info_text}>
                        <h4>{data.name}</h4>
                        <p>{data.address} - {data.date}</p>
                    </div>
                </div>
                <button className={styles.rating_button}>Đánh giá ngay</button>
            </div>
        ))}
        </>
    )
}

const renderEmty = function() {
    return (
        <div className={styles.empty_rating_wrapper}>
                                <div className={styles.circle_empty}>
                                    <IconLink 
                                        key={0}
                                        className={styles.item}
                                        href=''
                                        iconName='empty-rate'
                                        iconSize={18}
                                        iconBefore={true}
                                        text=''
                                    />
                                </div>
                                <p>Chưa đánh giá sản phẩm nào</p>
                            </div>
    )
}

export default function Community() {
    const [currentOpt,setCurrentOpt] = useState(1);
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
                <div className={styles.community_main_content}>
                    <div className={styles.write_commment_box}>
                        <Image 
                            src={require('../../../public/test-avt.png')}              
                            width={64}
                            height={64}
                            alt=""
                        />
                        <div className={styles.user_info_wrapper}>
                            <h4>Eastplayer 3001</h4>
                            <p>Hồ Chí Minh - Tham gia 11/8/2020</p>
                            <div className={styles.user_role}>#member</div>
                            <div className={styles.user_blog_wrapper}>
                                <div className={styles.blog_block}>
                                    <h3>0</h3>
                                    <p>bài viết</p>
                                </div>
                                <div className={styles.blog_block}>
                                    <h3>0</h3>
                                    <p>bài viết</p>
                                </div>
                                <div className={styles.blog_block}>
                                    <h3>0</h3>
                                    <p>bài viết</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.user_rating}>
                        <div className={styles.title_rating_wrapper}>
                            <div id="rated-btn"className={styles.product_rated+" "+ (currentOpt==1 ? styles.active:"")}
                            onClick={() => {
                                setCurrentOpt(1)
                            }} >
                                <h5>Sản phẩm đã đánh giá</h5>
                            </div>
                            <div id="rating-btn"className={styles.product_rating+" "+ (currentOpt==2 ? styles.active:"")}  
                              onClick={() => {
                                setCurrentOpt(2)
                            }} >
                                <h5>Sản phẩm chờ đánh giá</h5>
                            </div>
                        </div>
                        <div className={styles.show_product_rating_wrapper}>
                            {(currentOpt==1 && rating.length!==0 &&renderProduct(rating)) 
                            || (currentOpt==2 && rated.length!==0 &&renderProduct(rated)) 
                            || renderEmty()}    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}