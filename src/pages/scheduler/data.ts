import { Semester, Subject, Week } from './type'


const s1: Subject = {
  name: 'Kinh tế chính trị Mác Lênin',
  room: "TV302",
  groupIdx: 21,
  theoryOrPractice: true,
  teacher: 'Ts. Nguyễn Văn Trọn'
}

const s2: Subject = {
  name: 'Cấu trúc máy tính',
  room: "RD201",
  groupIdx: 18,
  theoryOrPractice: true,
  teacher: 'Ths. Võ Tấn Linh'
}


const s3: Subject = {
  name: 'Lập trình nâng cao',
  room: "RD201",
  groupIdx: 19,
  theoryOrPractice: true,
  teacher: 'Nguyễn Thị Phương Trâm'
}

const s4: Subject = {
  name: 'Hệ điều hành',
  room: "TV304",
  groupIdx: 19,
  theoryOrPractice: true,
  teacher: 'Ths. Võ Tấn Linh'
}

const s5: Subject = {
  name: 'Thể chất 2',
  room: "Nhà đa năng số 7",
  groupIdx: 88,
  theoryOrPractice: true,
  teacher: 'Lương Phương Bình'
}

const semester: Semester = {
  name: 'Học kì 2 năm 2024 - 2025',
  week: []
}

for (let i = 1; i <= 10; ++i) {
  const week: Week = {
    order: i,
    subject: new Array(5).fill(null).map(() => new Array(7).fill(null))
  }
  
  week.subject[1][0] = s4;
  week.subject[1][2] = s2;
  week.subject[2][2] = s3;
  week.subject[3][6] = s1;
  week.subject[0][5] = s5;

  semester.week.push(week)
}

export { semester }