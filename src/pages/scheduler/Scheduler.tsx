import React, { useEffect, useRef, useState } from "react";
import { semester } from "./data";
import { Subject } from "./type";

interface Coordinate {
  x: number;
  y: number;
}

/**
 * @description thời khoá biểu học kì theo tuần. giao diện linh hoạt với cột thứ và hàng ca học, người dùng có thể dùng mũi tên để xem các tuần vào theo dõi chúng trong thanh tiến trình các tuần. Có thể collapse hoặc expand thời khoá biểu xem chi tiết hoặc xem nhanh. Dưới thời khoá biểu có thanh tiến trình thể hiện thời gian hoạc của học kì đó
 * @description ô ca học có 2 thạng thái là lí thuyết và thực hành (ô lí thuyết là màu xanh còn ô thực hành là màu tím lịm tìm sim)
 * @param param
 * @returns
 */
const Scheduler: React.FC<{}> = ({}) => {
  const [coor, setCoor] = useState<Coordinate>();
  const [showLine, setShowLine] = useState<boolean>(false);
  const [heightOfScheulder, setHeightOfScheduler] = useState<number>();
  const [perY, setPerY] = useState<number>();

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

  const schedulerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rect: DOMRect | undefined =
      schedulerRef.current?.getBoundingClientRect();
    if (rect) {
      setHeightOfScheduler(rect?.height);
    }
    const getLine = (e: MouseEvent) => {
      if (schedulerRef.current) {
        if (rect) {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          setCoor({
            x: x,
            y: y,
          });
          setPerY((y / rect.height) * 100);
        }
      }
    };

    const outOfBound = () => {
      setShowLine(false);
    };

    schedulerRef.current?.addEventListener("mousemove", (e: MouseEvent) => {
      setShowLine(true);
      getLine(e);
    });

    schedulerRef.current?.addEventListener("mouseleave", outOfBound);

    return () => {
      removeEventListener("mousemove", getLine);
      removeEventListener("mouseleave", outOfBound);
    };
  }, []);

  useEffect(() => {
    console.log(coor?.y);
  }, [coor]);

  return (
    <div className="flex flex-col w-full font-roboto text-sm" ref={mainRef}>
      <div className="grid grid-cols-8 grid-rows-[50px] text-stone-700">
        <div></div>
        <div className="col-span-7 grid grid-cols-7">
          {/* các thứ trong tuần */}
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
          {/* thời gian học */}
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
          className="col-span-7 row-span-5 row-start-2 grid grid-cols-7 grid-rows-5 relative"
          ref={schedulerRef}
        >
          {currentWeek.map((subject, idx) => (
            <div
              key={idx}
              className="border-l nth-[7n]:border-r border-t nth-last-[-n+7]:border-b  border-stone-200 p-2"
            >
              {subject ? (
                <div className="border-2 border-nonglam bg-nonglam-100 w-full h-full rounded-md p-1 font-semibold text-stone-700">
                  <span>{subject.name}</span>
                  <br />
                  <span className="font-normal">
                    Giảng viên: {subject.teacher}
                  </span>
                  <br />
                  <span className="font-normal">Phòng: {subject.room}</span>
                </div>
              ) : (
                <div></div>
              )}
              {!showLine || (
                <div
                  className="absolute left-0 w-full h-[2px] bg-purple-600 transition-all duration-[0.01s]"
                  style={{
                    top: `${perY}%`,
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scheduler;
