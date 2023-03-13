import goldMedal from "../public/gold-medal.png";
import alterImg from "../public/alternative-image.png";
import leftFlower from "../public/left-flower.png";
import rightFlower from "../public/right-flower.png";
import Image from "next/image";
import { LeadBoardCharityFund } from "../type";
import { isArray } from "../utils";

const report: LeadBoardCharityFund[] = Array(7).fill({
  name: "Trần Thái Ân",
  point: "1400000",
});

export default function CharityFund() {
  const renderLevel = (level: string) => {
    const parseNumber = parseFloat(level);
    if (parseNumber >= 1300000) {
      return (
        <Image
          src={require("../public/gold-medal.png")}
          alt=""
          width={29}
          height={29}
        />
      );
    }
    return "";
  };

  const renderCharityFundBoard = (report: LeadBoardCharityFund[]) => {
    return (
      isArray(report) &&
      report.map((item, index) => {
        return (
          <tr key={index}>
            <td className="chart-column">{renderLevel(item.point)}</td>
            <td className="chart-column">{item.name}</td>
            <td className="chart-column">
              {parseFloat(item.point || "0").toLocaleString()}đ
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <div className="charityfund-page">
      <div className="section-1-container">
        <div className="section-1-wrapper">
          <Image
            src={require("../public/left-flower.png")}
            width={30}
            height={30}
            alt=""
          />
          <img className="right-flower" src={rightFlower.src} alt="" />
          <div className="section-1-left">
            <h1>Đóng góp cho quỹ từ thiện cùng CheriCT</h1>
            <div className="content">
              Nóng, rát, nổi mụn, da nổi mẩn đỏ hoặc ngứa sưng là tình trạng
              thường thấy của da nhạy cảm khi sử dụng các sản phẩm tẩy trang
              không phù hợp. Vậy làm thế nào để lựa chọn đúng sản phẩm tẩy trang
              sạch hiệu quả nhưng vẫn nhẹ nhàng với làn da? Ghi nhớ ngay 3 tiêu
              chí dưới đây, đảm bảo làn da sẽ không còn mẩn đỏ vì tẩy trang nữa.
              Nóng, rát, nổi mụn, da nổi mẩn đỏ hoặc ngứa sưng là tình trạng
              thường thấy của da nhạy cảm khi sử dụng các sản phẩm tẩy trang
              không phù hợp. Vậy làm thế nào để lựa chọn đúng sản phẩm tẩy trang
              sạch hiệu quả nhưng vẫn nhẹ nhàng với làn da? Ghi nhớ ngay 3 tiêu
              chí dưới đây, đảm bảo làn da sẽ không còn mẩn đỏ vì tẩy trang nữa.
              Nóng, rát, nổi mụn, da nổi mẩn đỏ hoặc ngứa sưng là tình trạng
              thường thấy của da nhạy cảm khi sử dụng các sản phẩm tẩy trang
              không phù hợp. Vậy làm thế nào để lựa chọn đúng sản phẩm tẩy trang
              sạch hiệu quả nhưng vẫn nhẹ nhàng với làn da? Ghi nhớ ngay 3 tiêu
              chí dưới đây, đảm bảo làn da sẽ không còn mẩn đỏ vì tẩy trang nữa.
            </div>
          </div>
          <div className="section-1-right">
            <div className="contribution-ranking">
              <div className="title-ranking">Top đóng góp</div>
              <div className="chart">
                <table>
                  <tr>
                    <th className="title-chart chart-column">Hạng</th>
                    <th className="title-chart chart-column">Tên người dùng</th>
                    <th className="title-chart chart-column">Đóng góp</th>
                  </tr>
                  {renderCharityFundBoard(report)}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2-container">
        <div className="section-2-wrapper">
          <h1 className="section-2-header">Quỹ từ thiện trẻ em </h1>
          <div className="content">
            <div className="section-2-left">
              <h3>Người đại diện: Vỹ Lê Yến Vu </h3>
              <div className="content">
                Đối với làn da nhạy cảm, điều quan trọng nhất chính là hãy luôn
                quan tâm đến thành phần trong sản phẩm tẩy trang để tránh bị
                kích ứng. Bạn sẽ khá bất ngờ khi nhìn thấy một số thành phần phổ
                biến như alcohol (cồn), paraben (chất bảo quản), mineral oil
                (dầu khoáng), fragrance (hương liệu),... sẽ có thể là nguyên
                nhân gây ra tình trạng kích ứng, mẩn đỏ cho làn da nhạy cảm. Vì
                thế, hãy kiểm tra thật kỹ bảng thành phần và loại ngay các sản
                phẩm chứa những chất trên để “đảm bảo an toàn” cho làn da nhạy
                cảm.Đối với làn da nhạy cảm, điều quan trọng nhất chính là hãy
                luôn quan tâm đến thành phần trong sản phẩm tẩy trang để tránh
                bị kích ứng. Bạn sẽ khá bất ngờ khi nhìn thấy một số thành phần
                phổ biến như alcohol (cồn), paraben (chất bảo quản), mineral oil
                (dầu khoáng), fragrance (hương liệu),... sẽ có thể là nguyên
                nhân gây ra tình trạng kích ứng, mẩn đỏ cho làn da nhạy cảm. Vì
                thế, hãy kiểm tra thật kỹ bảng thành phần và loại ngay các sản
                phẩm chứa những chất trên để “đảm bảo an toàn” cho làn da nhạy
                cảm.
              </div>
            </div>
            <div className="section-2-right">
              <div className="contribution-ranking">
                <div className="title-ranking">Top đóng góp cho quỹ</div>
                <div className="chart">
                  <table>
                    <tr>
                      <th className="title-chart chart-column">Hạng</th>
                      <th className="title-chart chart-column">
                        Tên người dùng
                      </th>
                      <th className="title-chart chart-column">Đóng góp</th>
                    </tr>
                    <tr>
                      <td className="chart-column">
                        <img src={goldMedal.src} alt="" />
                      </td>
                      <td className="chart-column">Trần Thái Ân</td>
                      <td className="chart-column">1.400.000</td>
                    </tr>
                    <tr>
                      <td className="chart-column">
                        <img src={goldMedal.src} alt="" />
                      </td>
                      <td className="chart-column">Trần Thái Ân</td>
                      <td className="chart-column">1.400.000</td>
                    </tr>
                    <tr>
                      <td className="chart-column">
                        <img src={goldMedal.src} alt="" />
                      </td>
                      <td className="chart-column">Trần Thái Ân</td>
                      <td className="chart-column">1.400.000</td>
                    </tr>
                    <tr>
                      <td className="chart-column">
                        <img src={goldMedal.src} alt="" />
                      </td>
                      <td className="chart-column">Trần Thái Ân</td>
                      <td className="chart-column">1.400.000</td>
                    </tr>
                    <tr>
                      <td className="chart-column">
                        <img src={goldMedal.src} alt="" />
                      </td>
                      <td className="chart-column">Trần Thái Ân</td>
                      <td className="chart-column">1.400.000</td>
                    </tr>
                    <tr>
                      <td className="chart-column">
                        <img src={goldMedal.src} alt="" />
                      </td>
                      <td className="chart-column">Trần Thái Ân</td>
                      <td className="chart-column">1.400.000</td>
                    </tr>
                    <tr>
                      <td className="chart-column">
                        <img src={goldMedal.src} alt="" />
                      </td>
                      <td className="chart-column">Trần Thái Ân</td>
                      <td className="chart-column">1.400.000</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="donate-button-wrapper">
            <button className="donate-button">Quyên góp</button>
          </div>
          <div className="section-image">
            <img src={alterImg.src} alt="" />
            <img src={alterImg.src} alt="" />
            <img src={alterImg.src} alt="" />
            <img src={alterImg.src} alt="" />
          </div>
        </div>
      </div>
      <div className="section-3-container">
        <div className="section-3-wrapper">
          <div className="charity-nav">
            Quỹ từ thiện trẻ em
            <svg
              width="13"
              height="23"
              viewBox="0 0 13 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.375 21.75L11.625 11.5L1.375 1.25"
                stroke="#9596A3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="charity-nav">
            Quỹ từ thiện trẻ em
            <svg
              width="13"
              height="23"
              viewBox="0 0 13 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.375 21.75L11.625 11.5L1.375 1.25"
                stroke="#9596A3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>{" "}
          <div className="charity-nav">
            Quỹ từ thiện trẻ em
            <svg
              width="13"
              height="23"
              viewBox="0 0 13 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.375 21.75L11.625 11.5L1.375 1.25"
                stroke="#9596A3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>{" "}
          <div className="charity-nav">
            Quỹ từ thiện trẻ em
            <svg
              width="13"
              height="23"
              viewBox="0 0 13 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.375 21.75L11.625 11.5L1.375 1.25"
                stroke="#9596A3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="charity-nav">
            Quỹ từ thiện trẻ em
            <svg
              width="13"
              height="23"
              viewBox="0 0 13 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.375 21.75L11.625 11.5L1.375 1.25"
                stroke="#9596A3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
