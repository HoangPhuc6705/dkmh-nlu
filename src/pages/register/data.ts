export interface Subject {
  id: string,
  name: string,
  group: number,
  credits: number,
  classname: string,
  quantity: number,
  left: number,
  scheduler: string,
  regist: boolean,
}

const registList: Subject[] = [
  {
    id: "CS101",
    name: "Cấu trúc dữ liệu",
    group: 1,
    credits: 3,
    classname: "CS101-A",
    quantity: 50,
    left: 10,
    scheduler: "Monday 8:00-10:00",
    regist: false
  },
  {
    id: "CS101",
    name: "Cấu trúc dữ liệu",
    group: 2,
    credits: 3,
    classname: "CS101-B",
    quantity: 50,
    left: 8,
    scheduler: "Monday 10:00-12:00",
    regist: false
  },
  {
    id: "CS102",
    name: "Giao tiếp người máy",
    group: 1,
    credits: 3,
    classname: "CS102-B",
    quantity: 40,
    left: 15,
    scheduler: "Wednesday 10:00-12:00",
    regist: false
  },
  {
    id: "CS102",
    name: "Giao tiếp người máy",
    group: 2,
    credits: 3,
    classname: "CS102-C",
    quantity: 40,
    left: 10,
    scheduler: "Wednesday 14:00-16:00",
    regist: false
  },
  {
    id: "SS101",
    name: "Chủ nghĩa xã hội khoa học",
    group: 1,
    credits: 2,
    classname: "SS101-C",
    quantity: 60,
    left: 0,
    scheduler: "Friday 14:00-16:00",
    regist: false
  },
  {
    id: "SS101",
    name: "Chủ nghĩa xã hội khoa học",
    group: 2,
    credits: 2,
    classname: "SS101-D",
    quantity: 60,
    left: 0,
    scheduler: "Friday 16:00-18:00",
    regist: false
  },
  {
    id: "SK101",
    name: "Kỹ năng giao tiếp",
    group: 1,
    credits: 2,
    classname: "SK101-D",
    quantity: 30,
    left: 5,
    scheduler: "Tuesday 9:00-11:00",
    regist: false
  },
  {
    id: "ST101",
    name: "Xác suất thống kê",
    group: 1,
    credits: 3,
    classname: "ST101-E",
    quantity: 45,
    left: 0,
    scheduler: "Thursday 13:00-15:00",
    regist: false
  },
  {
    id: "ST101",
    name: "Xác suất thống kê",
    group: 2,
    credits: 3,
    classname: "ST101-F",
    quantity: 45,
    left: 10,
    scheduler: "Thursday 15:00-17:00",
    regist: false
  }
]


export { registList }