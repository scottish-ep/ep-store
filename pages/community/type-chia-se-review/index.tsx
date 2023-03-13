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
            title: currentUser.name,
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

const neededNote=  Array(6).fill(
    {
        text: 'Cherict chỉ xác nhận những chia sẻ được đặt ở chế độ Public, những chia sẻ.'
    }
);

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

const rendereNotes = function(notes) {
    return (
        <ul>
            {notes.map(note => (
                <li>{note.text}</li>
            ))}
        </ul>
    )
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
                    <h3 className={styles.share_title}>Chia sẻ link đập hộp</h3>
                    <div className={styles.share_box}>
                        <Image 
                            src={require('../../../public/test-avt.png')}              
                            width={44}
                            height={44}
                            alt=""
                        />
                        <div className={styles.user_info_wrapper}>
                            <h4>{currentUser.name}</h4>
                        </div>
                    </div>
                    <div className={styles.share_container}>
                        <input id='link-copy-area' type="text" placeholder='Dán link chia sẻ của bạn đã copy tại đây.'/>
                        <div className={styles.get_link_guide}>
                            <div className={styles.info}>i</div>
                            <a href="#">Cách lấy link chia sẻ</a>
                        </div>
                        <div className={styles.note_container}>
                            <h5>Những lưu ý cần thiết</h5>
                            {rendereNotes(neededNote)}

                            <button id='link-search'>Tìm kiếm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}