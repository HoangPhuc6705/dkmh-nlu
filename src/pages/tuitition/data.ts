
type Tuitition = {
  name: string,
  total: number,
  date: string
  state: boolean,
}

const tuititionList: Tuitition[] = [
  { name: "Học kì 1 năm 2023 - 2024", total: 6250000, state: true , date: '10/10/2024' },
  { name: "Học kì 2 năm 2023 - 2024", total: 7600500, state: true , date: '10/10/2024' },
  { name: "Học kì 3 năm 2023 - 2024", total: 2100000, state: true , date: '10/10/2024' },
  { name: "Học kì 1 năm 2024 - 2025", total: 6250000, state: true , date: '10/10/2024' },
  { name: "Học kì 2 năm 2024 - 2025", total: 7600500, state: false, date: '10/10/2024'  },
  { name: "Học kì 3 năm 2024 - 2025", total: 2100000, state: false, date: '10/10/2024'  },
];



export type { Tuitition };
export { tuititionList };