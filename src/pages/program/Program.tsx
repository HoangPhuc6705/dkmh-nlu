import React from "react";
import { programsEducation } from "./data";
import { FaFileExcel, FaPrint } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

const Program: React.FC = () => {

  const creditsSum: number = programsEducation.flatMap(s => s.subjects).reduce((sum, sub) => sum + sub.credit, 0);

  const CheckIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {icon}
      </div>
    );
  };

  const Dot: React.FC<{}> = ({}) => {
    return (
      <div className="bg-green-500 size-2 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 font-roboto">
        <button className="flex gap-2 items-center p-2 px-5 bg-nonglam text-stone-50 rounded-full cursor-pointer">
          <FaPrint /> In
        </button>
        <button className="flex gap-2 items-center p-2 px-5 bg-nonglam text-stone-50 rounded-full cursor-pointer">
          <FaFileExcel />
          Xuất Excel
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto border border-stone-600 w-full text-sm text-left overflow-hidden rounded-lg font-roboto relative ">
          <thead className="bg-nonglam text-stone-50">
            <tr className="">
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Mã môn học
              </th>
              <th className="border-y border-stone-300 px-4 py-2 min-w-44">
                Tên môn học
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Tín chỉ
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Bắt buộc
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Hoàn thành
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Lý thuyết
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Thực hành
              </th>
            </tr>
          </thead>
          <tbody>
            {programsEducation.map((value, key) => (
              <React.Fragment key={key}>
                <tr className="bg-nonglam text-stone-50">
                  <td
                    colSpan={7}
                    className="font-bold text-left px-4 py-2"
                  >
                    {value.name}
                  </td>
                </tr>
                {value.subjects.map((subject, subKey) => (
                  <tr
                    key={subKey}
                    className={`*:border-y *:border-stone-300`}
                  >
                    <td className="px-4 py-2 text-center">{subject.id}</td>
                    <td className="px-4 py-2">{subject.name}</td>
                    <td className="px-4 py-2 text-center">{subject.credit}</td>
                    <td className="px-4 py-2 text-center relative">
                      {subject.forceSubject ? <Dot /> : <></>}
                    </td>
                    <td className="px-4 py-2 text-center relative">
                      {subject.complete ? (
                        <CheckIcon
                          icon={<MdCheckCircle className="text-green-500" />}
                        />
                      ) : (
                        <></>
                      )}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {subject.theoryHours}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {subject.practiceHours}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
            <tr className="bg-nonglam text-stone-50">
              <td 
              colSpan={2}
              className="font-bold text-left px-4 py-2">
                Tổng số tín chỉ
              </td>
              <td 
              colSpan={1}
              className="font-bold text-center px-4 py-2">
                {creditsSum}
              </td>
              <td 
              colSpan={5}
              className="font-bold text-left px-4 py-2">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Program;
