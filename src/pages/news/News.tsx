import Card from "../../components/Card";
import { newsList } from "./data";

/**
 * Trang thông tin trường, trong trang này có 3 phần chính: tin tức (thông tin về tuyển sinh, tốt nghiệp, các cuộc thi, doanh nghiệp, ...), đăng kí học phần (thời gian đăng kí học phần, huỷ học phần, ...), thông báo về học phí (thời hạn đóng học phí, điều chỉnh học phí, ...).
 * Mỗi phần là một object, mỗi object chứa tiêu đề, và các card
 * @returns component
 */
const News: React.FC = () => {
  return (
    <div className="flex flex-col">
      {newsList.map((value, key) => (
        <div key={key}>
          <h3 className="font-roboto text-lg font-semibold text-stone-700 mb-3">
            {value.name}
          </h3>
          <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
            {value.datas.map((value, key) => (
              <Card
                key={key}
                title={value.title}
                image={value.image}
                uploadTime={value.dateTime}
              />
            ))}
          </div>
          <hr className="my-3 text-stone-300" />
        </div>
      ))}
    </div>
  );
};

export default News;
