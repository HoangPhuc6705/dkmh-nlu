interface Card {
  title: string,
  image: string,
  dateTime: string
}

interface Topic {
  name: string,
  datas: Card[]
}

/**
 * Represents a list of topics, each containing a collection of related data.
 * 
 * This structure is used to organize information for the university's news page.
 * The page is divided into three main sections:
 * 
 * 1. **Tin tức (News)**: Includes information about admissions, graduation, competitions, partnerships with businesses, etc.
 * 2. **Đăng kí học phần (Course Registration)**: Covers details about course registration periods, course cancellations, etc.
 * 3. **Thông báo về học phí (Tuition Fee Announcements)**: Provides updates on tuition payment deadlines, fee adjustments, etc.
 * 
 * Each section is represented as an object containing:
 * - `name`: The title of the section.
 * - `datas`: An array of cards, where each card includes:
 *   - `title`: The title of the card.
 *   - `image`: A placeholder or URL for the card's image.
 *   - `dateTime`: The date and time associated with the card's content.
 */
const newsList: Topic[] = [
  {
    name: 'Thông tin mới',
    datas: [
      {
        title: 'Trường Đại Học Nông Lâm thông báo chỉ tiêu xét tuyển năm 2025 - 2026',
        image: 'https://ff.hcmuaf.edu.vn/data/image/slide/nonglam1.jpg',
        dateTime: '16/05/2025'
      },
      {
        title: 'Hội thảo khoa học quốc tế về nông nghiệp bền vững',
        image: 'https://ff.hcmuaf.edu.vn/data/image/slide/nonglam1.jpg',
        dateTime: '20/06/2025'
      },
      {
        title: 'Ký kết hợp tác với doanh nghiệp trong lĩnh vực công nghệ sinh học',
        image: 'https://ff.hcmuaf.edu.vn/data/image/slide/nonglam1.jpg',
        dateTime: '10/07/2025'
      },
      {
        title: 'Tổ thức cuộc thi Én vàng thực phẩm 2025',
        image: 'https://ff.hcmuaf.edu.vn/data/image/slide/nonglam1.jpg',
        dateTime: '10/07/2025'
      },
      {
        title: 'Talkshow với nhà tuyển dụng',
        image: 'https://ff.hcmuaf.edu.vn/data/image/slide/nonglam1.jpg',
        dateTime: '10/07/2025'
      }
    ]
  },
  {
    name: 'Đăng kí học phần',
    datas: [
      {
        title: 'Thời gian đăng kí học phần học kỳ I năm học 2025 - 2026',
        image: 'https://ff.hcmuaf.edu.vn/data/image/slide/nonglam1.jpg',
        dateTime: '01/08/2025'
      },
      {
        title: 'Hướng dẫn huỷ học phần đã đăng kí',
        image: 'https://ff.hcmuaf.edu.vn/data/image/slide/nonglam1.jpg',
        dateTime: '15/08/2025'
      },
      {
        title: 'Thông báo mở học phần Tin học đại cương',
        image: 'https://ff.hcmuaf.edu.vn/data/image/slide/nonglam1.jpg',
        dateTime: '15/08/2025'
      }
    ]
  },
  {
    name: 'Học phí',
    datas: [
      {
        title: 'Thời hạn đóng học phí học kỳ I năm học 2025 - 2026',
        image: 'https://ff.hcmuaf.edu.vn/data/image/slide/nonglam1.jpg',
        dateTime: '30/09/2025'
      },
      {
        title: 'Điều chỉnh học phí cho sinh viên thuộc diện chính sách',
        image: 'https://ff.hcmuaf.edu.vn/data/image/slide/nonglam1.jpg',
        dateTime: '05/10/2025'
      },
      {
        title: 'Thông báo múc học phí học kì I',
        image: 'https://ff.hcmuaf.edu.vn/data/image/slide/nonglam1.jpg',
        dateTime: '05/10/2025'
      },
    ]
  }
];

export { newsList }
