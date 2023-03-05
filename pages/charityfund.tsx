import goldMedal from '../public/gold-medal.png' ;
import alterImg from '../public/alternative-image.png';
import styles from '../styles/CharityFund.module.scss';
import Image from 'next/image'

export interface userInfo {
    name : string,
    donate: number,
}

export interface fundInfo {
    title: string,
    content: string,
}


const usersData = Array(10).fill({
    name : "Trần Thái Ân",
    donate: 1400000,
})

const funds= Array(4).fill({
    title:"Quỹ từ thiện trẻ em",
    content: "Đối với làn da nhạy cảm, điều quan trọng nhất chính là hãy luôn quan tâm đến thành phần trong sản phẩm tẩy trang để tránh bị kích ứng. Bạn sẽ khá bất ngờ khi nhìn thấy một số thành phần phổ biến như alcohol (cồn), paraben (chất bảo quản), mineral oil (dầu khoáng), fragrance (hương liệu),... sẽ có thể là nguyên nhân gây ra tình trạng kích ứng, mẩn đỏ cho làn da nhạy cảm. Vì thế, hãy kiểm tra thật kỹ bảng thành phần và loại ngay các sản phẩm chứa những chất trên để “đảm bảo an toàn” cho làn da nhạy cảm.Đối với làn da nhạy cảm, điều quan trọng nhất chính là hãy luôn quan tâm đến thành phần trong sản phẩm tẩy trang để tránh bị kích ứng. Bạn sẽ khá bất ngờ khi nhìn thấy một số thành phần phổ biến như alcohol (cồn), paraben (chất bảo quản), mineral oil (dầu khoáng), fragrance (hương liệu),... sẽ có thể là nguyên nhân gây ra tình trạng kích ứng, mẩn đỏ cho làn da nhạy cảm. Vì thế, hãy kiểm tra thật kỹ bảng thành phần và loại ngay các sản phẩm chứa những chất trên để “đảm bảo an toàn” cho làn da nhạy cảm."
})

const renderUser = function(user: {name: string, donate: string | number}) {
    return (
        <>
        <tr>
            <td className={styles.chart_column}><img src={goldMedal.src} alt="" /></td>
            <td className={styles.chart_column}>{user.name}</td>
            <td className={styles.chart_column}>{user.donate}</td>
        </tr>
        </>
    )
}

const renderUsersChart = function(users: userInfo[]) {
    return (
        <>
            <tr>
                <th className={styles.title_chart}>Hạng</th>
                <th className={styles.title_chart}>Tên người dùng</th>
                <th className={styles.title_chart}>Đóng góp</th>
            </tr>     
            {users.map((user : userInfo) => renderUser(user))}
        </>
    );

}
const renderFund = function (funds : fundInfo[]) {
    return (
        funds.map(fund => (
            <div className={styles.charity_nav}>
                {fund.title}           
                <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.375 21.75L11.625 11.5L1.375 1.25" stroke="#9596A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            )
        )
    );
}


export default function CharityFund() {
    return (
        <div className={styles.charityfund_page}>
            <div className={styles.section_1_container}>
                <div className={styles.section_1_wrapper}>
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
                    <div className={styles.section_1_left}>
                        <h1>Đóng góp cho quỹ từ thiện cùng CheriCT</h1>
                        <div className={styles.content}>
                            Nóng, rát, nổi mụn, da nổi mẩn đỏ hoặc ngứa sưng là tình trạng thường thấy của da nhạy cảm khi sử dụng các sản phẩm tẩy trang không phù hợp. Vậy làm thế nào để lựa chọn đúng sản phẩm tẩy trang sạch hiệu quả nhưng vẫn nhẹ nhàng với làn da? Ghi nhớ ngay 3 tiêu chí dưới đây, đảm bảo làn da sẽ không còn mẩn đỏ vì tẩy trang nữa. Nóng, rát, nổi mụn, da nổi mẩn đỏ hoặc ngứa sưng là tình trạng thường thấy của da nhạy cảm khi sử dụng các sản phẩm tẩy trang không phù hợp. Vậy làm thế nào để lựa chọn đúng sản phẩm tẩy trang sạch hiệu quả nhưng vẫn nhẹ nhàng với làn da? Ghi nhớ ngay 3 tiêu chí dưới đây, đảm bảo làn da sẽ không còn mẩn đỏ vì tẩy trang nữa. Nóng, rát, nổi mụn, da nổi mẩn đỏ hoặc ngứa sưng là tình trạng thường thấy của da nhạy cảm khi sử dụng các sản phẩm tẩy trang không phù hợp. Vậy làm thế nào để lựa chọn đúng sản phẩm tẩy trang sạch hiệu quả nhưng vẫn nhẹ nhàng với làn da? Ghi nhớ ngay 3 tiêu chí dưới đây, đảm bảo làn da sẽ không còn mẩn đỏ vì tẩy trang nữa.
                        </div>
                    </div>
                    <div className={styles.section_1_right}>
                        <div className={styles.contribution_ranking}>
                            <div className={styles.title_ranking}>Top đóng góp</div>
                            <div className={styles.chart}>
                                <table>
                                {renderUsersChart(usersData)}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.section_2_container}>
                <div className={styles.section_2_wrapper}>
                    <h1 className={styles.section_2_header}>Quỹ từ thiện trẻ em </h1>
                    <div className={styles.content}>
                        <div className={styles.section_2_left}>
                            <h3>Người đại diện: Vỹ Lê Yến Vu </h3>
                            <div className={styles.content}>
                                Đối với làn da nhạy cảm, điều quan trọng nhất chính là hãy luôn quan tâm đến thành phần trong sản phẩm tẩy trang để tránh bị kích ứng. Bạn sẽ khá bất ngờ khi nhìn thấy một số thành phần phổ biến như alcohol (cồn), paraben (chất bảo quản), mineral oil (dầu khoáng), fragrance (hương liệu),... sẽ có thể là nguyên nhân gây ra tình trạng kích ứng, mẩn đỏ cho làn da nhạy cảm. Vì thế, hãy kiểm tra thật kỹ bảng thành phần và loại ngay các sản phẩm chứa những chất trên để “đảm bảo an toàn” cho làn da nhạy cảm.Đối với làn da nhạy cảm, điều quan trọng nhất chính là hãy luôn quan tâm đến thành phần trong sản phẩm tẩy trang để tránh bị kích ứng. Bạn sẽ khá bất ngờ khi nhìn thấy một số thành phần phổ biến như alcohol (cồn), paraben (chất bảo quản), mineral oil (dầu khoáng), fragrance (hương liệu),... sẽ có thể là nguyên nhân gây ra tình trạng kích ứng, mẩn đỏ cho làn da nhạy cảm. Vì thế, hãy kiểm tra thật kỹ bảng thành phần và loại ngay các sản phẩm chứa những chất trên để “đảm bảo an toàn” cho làn da nhạy cảm.
                            </div>
                        </div>
                        <div className={styles.section_2_right}>
                            <div className={styles.contribution_ranking}>
                                <div className={styles.title_ranking}>Top đóng góp cho quỹ</div>
                                <div className={styles.chart}>
                                    <table>
                                    {renderUsersChart(usersData)}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.donate_button_wrapper}>
                        <button className={styles.donate_button}>Quyên góp</button>
                    </div>
                    <div className={styles.section_image}>
                        <img src={alterImg.src} alt="" />
                        <img src={alterImg.src} alt="" />
                        <img src={alterImg.src} alt="" />
                        <img src={alterImg.src} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.section_3_container}>
                <div className={styles.section_3_wrapper}>
                {renderFund(funds)}
                </div>
            </div>
        </div>
    )
}