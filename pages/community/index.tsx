import styles from '../../styles/Community.module.scss';
import Image from 'next/image';
import Blog from '../../components/Blog/Blog';
import ProductItem from '../../components/ProductItem/ProductItem';
import IconLink from '../../components/IconLink/IconLink';
import React, { useState,useEffect } from 'react';
import CommunityLeftSideBar from '../../components/CommunityLeftSideBar/CommunityLeftSideBar';
import Carousel from '../../components/Carousel/Carousel';
import HastagSlider from '../../components/HastagSlider/HastagSlider';
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

// const renderRightSideBar = function (hastags,products) {
//     return (
//         <>
//             <div className={styles.hastag_title}>
//                 Từ khoá nổi bật
//             </div>
//             {hastags.map((item,index) => (
//                 <div className={styles.hastag}>
//                     #{item}
//                 </div>
//             ))}
//             <div className={styles.hastag_title}>
//                 Từ khoá nổi bật
//             </div>
//             <a href="">Xem tất cả</a>
//             <p>Đánh giá sản phẩm đã mua và chia sẻ link đập hộp để nhận thưởng lên đến 200 Cheri Xu</p>
//             {products.map(product => (
//                 <div className={styles.right_side_productt}>
//                     <Image
//                             src={require('../../public/left-flower.png')}              
//                             width={40}
//                             height={40}
//                             alt=""
//                     />
//                     <h5>{product.name}</h5>
//                 </div>
//             ))}
//         </>
//     )
// }



const commentsData =[
    {
        user: {
            name: 'Eastplayer',
            avatar: ''
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
        ],
        loveNumber: 2,
        commentNumber: 2,
    },
    {
        user: {
            name: 'Eastplayer',
            avatar: ''
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
        ],
        loveNumber: 2,
        commentNumber: 2,
    }
]

const productData = Array(6).fill({
    name: 'Kem dưỡng da chiết xuất hoa lan...',
    branch: 'LANEIGE',
    sale: 40,
    vote: 5,
    quanityVote : 12,
    price: 950000,
})

const renderComments = function(comments) {
    return (
        comments.map(comment => (
            <Blog commentData={comment}/>
        ))
    );
}

const renderProducts = function(products) {
    return (
        <div className={styles.product_panel_container}>
            {products.map(product => (
                <div className={styles.product_panel_wrapper}>
                    <ProductItem props={product}/>
                </div>
            ))}
        </div>
    )
}


export default function Community() {
    const [currentOpt,setCurrentOpt] = useState(1);
    const [currentTag,setCurrentTag] = useState('');
    const renderMenu = function(options) {
        return (
    
            options.map((option,index) => (
    
                <div className={styles.item + " " + (currentOpt==index ? styles.active : "")}
                onClick={(e) => {
                    setCurrentOpt(index);
                }} >
                   <IconLink 
                            key={index}
                            className=''
                            href=''
                            iconName={option.icon}
                            iconSize={18}
                            iconBefore={true}
                            text=''
                    />
                    <p>{option.title + index}</p>
                </div>
            ))
        )
    }
    
    const renderRightSideBar = function (hastags,products) {
        return (
            <>
                <div className={styles.hastag_title}>
                    Từ khoá nổi bật
                </div>
                {hastags.map((item,index) => (
                    <div className={styles.hastag+ " " + (currentTag==item ? styles.active: "")} onClick={() => {
                        setCurrentTag(item);
                    }}>
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
                                    src={require('../../public/left-flower.png')}              
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

    const renderMenuMobile = function(items) {
        return (
            <div className={styles.menu_mobile_wrapper}>
                <select name="" id="" className={styles.menu_option_mobile}>
                    {items.topItems.map((item,index) => (
                        <option value={item.title}>{item.title}</option>
                    ))}
                    {items.botItems.map((item,index) => (
                        <option value={item.title}>{item.title}</option>
                    ))}
                </select>
            </div>
        )
    }
    

    const renderSlickTag  = function(items) {
        return (
            <div className={styles.hastag_slick_container}>
                <h4>Từ khóa nổi bật</h4>
                <HastagSlider className={styles.ads_banner__wrapper} isAuto={true} numberShow={2}>
                    {items.map((item ,index)=> (
                        <div className={styles.hastag +" "+(currentTag==item ? styles.active: "")} onClick={() => {
                            setCurrentTag(item);
                        }}>
                            #{item}
                        </div>
                    ))}
                </HastagSlider>
            </div>
        )
    }
    
    
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
                <div className={styles.left_community_wrapper}>
                    <CommunityLeftSideBar Items ={leftSideBarItems} />
                </div>
                <div className={styles.right_community}>
                    {renderRightSideBar(hastags,rightSideBarProducts )}
                </div>
                <div className={styles.community_main_content}>
                    <div className={styles.write_commment_box}>
                        <Image 
                            src={require('../../public/test-avt.png')}              
                            width={64}
                            height={64}
                            alt=""
                        />
                        <div className={styles.comment_box} >
                            <input type="text" id="write_comment" placeholder="Dán link chia sẻ của bạn đã copy tại đây."/>
                        </div>
                    </div>
                    {renderSlickTag(hastags)}
                    {renderMenuMobile(leftSideBarItems)}
                    <div className={styles.community_show_post}>
                        <div className={styles.post_choose}>
                            <h4>Nổi bật</h4>
                            <div className={styles.menu_choose}>
                                {renderMenu(menuOptions)}
                            </div>
                        </div>
                    </div>
                    <div className={styles.blog_comment_wrapper}>
                       {currentOpt == 0 && renderComments(commentsData)}
                       {currentOpt == 1 && renderComments(commentsData)}
                       {currentOpt == 2 && renderComments(commentsData)}
                       {currentOpt == 3 && renderComments(commentsData)}
                       {currentOpt == 4 && renderProducts(productData)}
                    </div>
                </div>
            </div>
        </div>
    );
}