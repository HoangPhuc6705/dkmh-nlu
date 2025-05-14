// subject
interface Subject {
  name: string,
  groupIdx: number,
  theoryOrPractice: boolean,
  teacher: string,
  room: string
}

// week
interface Week {
  order: number,
  subject: Subject[][];
}


// semester
interface Semester {
  name: string,
  week: Week[]
}

export type { Subject, Week, Semester } 