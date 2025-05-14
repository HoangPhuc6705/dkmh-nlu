import React, { useEffect, useRef } from "react";
import { semester } from "./data";
import { Subject } from "./type";

/**
 * @description thời khoá biểu học kì theo tuần. giao diện linh hoạt với cột thứ và hàng ca học, người dùng có thể dùng mũi tên để xem các tuần vào theo dõi chúng trong thanh tiến trình các tuần. Có thể collapse hoặc expand thời khoá biểu xem chi tiết hoặc xem nhanh. Dưới thời khoá biểu có thanh tiến trình thể hiện thời gian hoạc của học kì đó
 * @description ô ca học có 2 thạng thái là lí thuyết và thực hành (ô lí thuyết là màu xanh còn ô thực hành là màu tím lịm tìm sim)
 * @param param
 * @returns
 */
const Scheduler: React.FC<{}> = ({}) => {
  const dayInWeek: string[] = [
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
    "Chủ Nhật",
  ];

  const times: string[] = ["7:00", "9:35", "12:15", "14:50", "15:25"];

  const currentWeek: Subject[] = semester.week[0].subject.flat();

  // this code cannot use now!
  const schedulerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col w-full font-roboto text-sm">
      <div className="grid grid-cols-8 grid-rows-6 text-stone-700">
        <div></div>
        <div className="col-span-7 grid grid-cols-7">
          {dayInWeek.map((value, key) => (
            <div
              key={key}
              className="flex items-center justify-center font-semibold"
            >
              <div>{value}</div>
            </div>
          ))}
        </div>
        <div className="row-span-5 row-start-2 grid grid-rows-5">
          {times.map((value, key) => (
            <div
              key={key}
              className="text-center flex p-3 border-t border-stone-200 font-semibold"
            >
              <div>{value}</div>
            </div>
          ))}
        </div>
        <div
          className="col-span-7 row-span-5 row-start-2 grid grid-cols-7 grid-rows-5"
          ref={schedulerRef}
        >
          {currentWeek.map((subject, idx) => (
            <div
              key={idx}
              className="border-l nth-[7n]:border-r border-t nth-last-[-n+7]:border-b  border-stone-200 p-2 h-60"
            >
              {subject ? (
                <div className="border-2 border-nonglam bg-nonglam-100 w-full h-full rounded-md p-1 font-semibold text-stone-700">
                  <span>{subject.name}</span>
                  <br />
                  <span className="font-normal">Giảng viên: {subject.teacher}</span>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scheduler;