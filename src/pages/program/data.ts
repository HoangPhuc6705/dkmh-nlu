/**
 * Dữ liệu về chương trình đào tạo.
 * Dữ liệu gồm mã môn học, tên môn học, môn cốt lõi, số tín chỉ, môn bắt buộc, đã học, tổng tiết, lý thuyết, thực hành, tiết thành phần
 * phân chia các môn vào các kì học
 * 
 */
interface Subject {
  id: string,
  name: string,
  credit: number,
  forceSubject: boolean,
  complete: boolean,
  totalHours: number,
  theoryHours: number,
  practiceHours: number
}

interface Semester {
  name: string
  subjects: Subject[]
}

const programsEducation: Semester[] = [
  {
    name: 'Học kì I (Năm học 2024 - 2025)',
    subjects: [
      { id: '200101', name: 'Triết học Mác Lenin', credit: 3, forceSubject: true, complete: true, totalHours: 45, theoryHours: 45, practiceHours: 0 },
      { id: '200108', name: 'Toán cao cấp A1', credit: 3, forceSubject: true, complete: true, totalHours: 45, theoryHours: 45, practiceHours: 0 },
      { id: '200109', name: 'Toán cao cấp A2', credit: 3, forceSubject: true, complete: true, totalHours: 45, theoryHours: 45, practiceHours: 0 },
      { id: '202206', name: 'Vật lý 2', credit: 2, forceSubject: true, complete: true, totalHours: 30, theoryHours: 30, practiceHours: 0 },
      { id: '202501', name: 'Giáo dục thể chất 1*', credit: 1, forceSubject: true, complete: true, totalHours: 45, theoryHours: 0, practiceHours: 45 },
      { id: '213603', name: 'Anh văn 1*', credit: 4, forceSubject: true, complete: true, totalHours: 60, theoryHours: 60, practiceHours: 0 },
      { id: '214302', name: 'Nhập môn công nghệ thông tin', credit: 3, forceSubject: true, complete: true, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214321', name: 'Lập trình cơ bản', credit: 4, forceSubject: true, complete: true, totalHours: 75, theoryHours: 45, practiceHours: 30 }
    ]
  },
  {
    name: 'Học kì II (Năm học 2024 - 2025)',
    subjects: [
      { id: '300102', name: 'Kinh tế chính trị Mác-Lênin', credit: 2, forceSubject: true, complete: true, totalHours: 30, theoryHours: 30, practiceHours: 0 },
      { id: '300201', name: 'Quân sự 1 (lý thuyết)', credit: 3, forceSubject: true, complete: false, totalHours: 45, theoryHours: 45, practiceHours: 0 },
      { id: '200202', name: 'Quân sự 2 (thực hành)', credit: 3, forceSubject: true, complete: false, totalHours: 90, theoryHours: 0, practiceHours: 90 },
      { id: '202110', name: 'Toán cao cấp A3', credit: 3, forceSubject: true, complete: true, totalHours: 45, theoryHours: 45, practiceHours: 0 },
      { id: '202502', name: 'Giáo dục thể chất 2*', credit: 1, forceSubject: true, complete: true, totalHours: 45, theoryHours: 0, practiceHours: 45 },
      { id: '213604', name: 'Anh văn 2*', credit: 3, forceSubject: true, complete: false, totalHours: 45, theoryHours: 45, practiceHours: 0 },
      { id: '214231', name: 'Cấu trúc máy tính', credit: 2, forceSubject: true, complete: true, totalHours: 30, theoryHours: 30, practiceHours: 0 },
      { id: '214294', name: 'Hệ điều hành', credit: 4, forceSubject: true, complete: true, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214331', name: 'Lập trình nâng cao', credit: 4, forceSubject: true, complete: true, totalHours: 75, theoryHours: 45, practiceHours: 30 }
    ]
  },
  {
    name: 'Học kì I (Năm học 2025 - 2026)',
    subjects: [
      { id: '200103', name: 'Chủ nghĩa xã hội khoa học', credit: 2, forceSubject: true, complete: false, totalHours: 30, theoryHours: 30, practiceHours: 0 },
      { id: '202121', name: 'Xác suất thống kê', credit: 3, forceSubject: true, complete: false, totalHours: 45, theoryHours: 45, practiceHours: 0 },
      { id: '202620', name: 'Kỹ năng giao tiếp', credit: 2, forceSubject: false, complete: false, totalHours: 30, theoryHours: 30, practiceHours: 0 },
      { id: '202622', name: 'Pháp luật đại cương', credit: 2, forceSubject: true, complete: false, totalHours: 30, theoryHours: 30, practiceHours: 0 },
      { id: '208453', name: 'Marketing căn bản', credit: 4, forceSubject: false, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214362', name: 'Giao tiếp người-máy', credit: 3, forceSubject: true, complete: false, totalHours: 45, theoryHours: 45, practiceHours: 0 },
      { id: '214389', name: 'Toán rời rạc', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214391', name: 'Cấu trúc dữ liệu', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 }
    ]
  },
  {
    name: 'Học kì II (Năm học 2025 - 2026)',
    subjects: [
      { id: '200107', name: 'Tư tưởng Hồ Chí Minh', credit: 2, forceSubject: true, complete: false, totalHours: 30, theoryHours: 30, practiceHours: 0 },
      { id: '214321', name: 'Mạng máy tính cơ bản', credit: 3, forceSubject: true, complete: false, totalHours: 45, theoryHours: 45, practiceHours: 0 },
      { id: '214352', name: 'Thiết kế hướng đối tượng', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214354', name: 'Lý thuyết đồ thị', credit: 3, forceSubject: true, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214442', name: 'Nhập môn cơ sở dữ liệu', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214990', name: 'Phương pháp nghiên cứu khoa học', credit: 2, forceSubject: true, complete: false, totalHours: 30, theoryHours: 30, practiceHours: 0 }
    ]
  },
  {
    name: 'Học kì I (Năm học 2026 - 2027)',
    subjects: [
      { id: '200105', name: 'Lịch sử Đảng Cộng sản Việt Nam', credit: 2, forceSubject: true, complete: false, totalHours: 30, theoryHours: 30, practiceHours: 0 },
      { id: '214252', name: 'Lập trình mạng', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214282', name: 'Mạng máy tính nâng cao', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214372', name: 'Lập trình .NET', credit: 4, forceSubject: false, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214386', name: 'Lập trình PHP', credit: 4, forceSubject: false, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214390', name: 'Lập trình Python', credit: 4, forceSubject: false, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214462', name: 'Lập trình Web', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214463', name: 'Nhập môn trí tuệ nhân tạo', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 }
    ]
  },
  {
    name: 'Học kì II (Năm học 2026 - 2027)',
    subjects: [
      { id: '214271', name: 'Quản trị mạng', credit: 3, forceSubject: false, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214274', name: 'Lập trình trên thiết bị di động', credit: 3, forceSubject: true, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214355', name: 'Đồ họa máy tính', credit: 3, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214360', name: 'Nhập môn công nghệ phần mềm', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214451', name: 'Hệ quản trị cơ sở dữ liệu', credit: 3, forceSubject: false, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214452', name: 'Phân tích và thiết kế hệ thống thông tin', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214464', name: 'An toàn và bảo mật hệ thống thông tin', credit: 3, forceSubject: false, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214465', name: 'Hệ thống thông tin địa lý ứng dụng', credit: 3, forceSubject: false, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214492', name: 'Máy học', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214493', name: 'Thực tập lập trình web', credit: 3, forceSubject: false, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 }
    ]
  },
  {
    name: 'Học kì I (Năm học 2027 - 2028)',
    subjects: [
      { id: '214273', name: 'Lập trình mạng nâng cao', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214290', name: 'IoT', credit: 3, forceSubject: true, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214291', name: 'Xử lý ảnh và thị giác máy tính', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214292', name: 'An ninh mạng', credit: 3, forceSubject: true, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214293', name: 'Thực tập lập trình trên thiết bị di động', credit: 3, forceSubject: true, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214294', name: 'Đảm bảo chất lượng và kiểm thử phần mềm', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214295', name: 'Quản lý dự án phần mềm', credit: 3, forceSubject: true, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214386', name: 'Lập trình Front End', credit: 3, forceSubject: true, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214387', name: 'Hệ thống thông tin quản lý', credit: 3, forceSubject: true, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214483', name: 'Thương mại điện tử', credit: 3, forceSubject: true, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214484', name: 'Data Mining', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214490', name: 'Phân tích dữ liệu lớn', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214491', name: 'Data Warehouse', credit: 3, forceSubject: true, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 }
    ]
  },
  {
    name: 'Học kì II (Năm học 2027 - 2028)',
    subjects: [
      { id: '214286', name: 'Chuyên đề Java', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214374', name: 'Chuyên đề WEB', credit: 4, forceSubject: true, complete: false, totalHours: 75, theoryHours: 45, practiceHours: 30 },
      { id: '214984', name: 'Đồ án chuyên ngành', credit: 2, forceSubject: true, complete: false, totalHours: 60, theoryHours: 30, practiceHours: 30 },
      { id: '214987', name: 'Khóa luận tốt nghiệp', credit: 12, forceSubject: true, complete: false, totalHours: 180, theoryHours: 0, practiceHours: 180 },
      { id: '214988', name: 'Tiểu luận tốt nghiệp', credit: 6, forceSubject: true, complete: false, totalHours: 90, theoryHours: 30, practiceHours: 60 },
      { id: '214989', name: 'Khởi nghiệp', credit: 2, forceSubject: false, complete: false, totalHours: 30, theoryHours: 30, practiceHours: 0 },
      { id: '214991', name: 'Thực tập doanh nghiệp', credit: 2, forceSubject: true, complete: false, totalHours: 120, theoryHours: 0, practiceHours: 120 }
    ]
  }
]

export { programsEducation }