import React, { useEffect, useState } from "react";
import Button from "./RegButton";
import { registList, Subject } from "./data";
import SearchBar from "../../components/SearchBar";
import Icon from "../../components/icon/Icon";
import { MdFilterAlt, MdPrint } from "react-icons/md";
import ButtonGreen from "../../components/Button";
import { FaFileExcel } from "react-icons/fa";

/**
 * Chức năng lọc môn, tìm kiếm môn học
 * @returns
 */
const Register: React.FC = () => {
  const [subject, setSubject] = useState<Subject[]>([]);
  const [total, setTotal] = useState<number>(0);

  function handleAddSubject(newSubject: Subject): void {
    if (!newSubject.regist) {
      newSubject.regist = true;
      setSubject([...subject, newSubject]);
    } else {
      newSubject.regist = false;
      setSubject(subject.filter((subj) => subj.id !== newSubject.id));
    }
  }
  
  useEffect(() => {
    setTotal(subject.reduce((ac, s) => ac + s.credits, 0));
  }, [subject])

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <h3 className="font-semibold font-roboto text-lg text-stone-700 mb-3">
          Môn học đăng kí
        </h3>

        <div className="flex gap-3 mb-3">
          <SearchBar />
          <Icon icon={<MdFilterAlt />} />
        </div>

        <table className="table-auto border border-stone-600 w-full text-sm text-left overflow-hidden rounded-lg font-roboto relative ">
          <thead className="bg-nonglam text-stone-50">
            <tr className="">
              <th className="border-y border-stone-300 px-4 py-2 text-center min-w-28">
                Đăng kí
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Mã môn học
              </th>
              <th className="border-y border-stone-300 px-4 py-2 min-w-44 text-center">
                Tên môn học
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Tín chỉ
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Lớp
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Số lượng
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Còn lại
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Thời khoá biểu
              </th>
            </tr>
          </thead>
          <tbody>
            {registList.map((value, key) => (
              <React.Fragment key={key}>
                <tr
                  className={` *:border-y *:border-b-stone-300 ${
                    value.left > 0 ? "text-stone-700" : "text-stone-400"
                  }`}
                >
                  <td className="text-center px-4 py-2">
                    <div
                      onClick={() => {
                        handleAddSubject(value);
                      }}
                    >
                      <Button slot={value.left > 0} />
                    </div>
                  </td>
                  <td className="text-center px-4 py-2">{value.id}</td>
                  <td className="text-left px-4 py-2">{value.name}</td>
                  <td className="text-center px-4 py-2">{value.credits}</td>
                  <td className="text-center px-4 py-2">{value.classname}</td>
                  <td className="text-center px-4 py-2">{value.quantity}</td>
                  <td className="text-center px-4 py-2">{value.left}</td>
                  <td className="text-left px-4 py-2">{value.scheduler}</td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="text-stone-300 my-3" />

      <div className="overflow-x-auto">
        <h3 className="font-semibold font-roboto text-lg text-stone-700 mb-3">
          Môn học đã đăng kí
        </h3>
        <div className="flex gap-3 my-3">
          <ButtonGreen
            text="In"
            icon={<MdPrint />}
          />
          <ButtonGreen
            text="Xuất excel"
            icon={<FaFileExcel />}
          />
        </div>
        <table className="table-auto border border-stone-600 w-full text-sm text-left overflow-hidden rounded-lg font-roboto relative ">
          <thead className="bg-nonglam text-stone-50">
            <tr className="">
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Mã môn học
              </th>
              <th className="border-y border-stone-300 px-4 py-2 min-w-44 text-center">
                Tên môn học
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Tín chỉ
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Lớp
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Số lượng
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Còn lại
              </th>
              <th className="border-y border-stone-300 px-4 py-2 text-center">
                Thời khoá biểu
              </th>
            </tr>
          </thead>
          <tbody>
            {subject.length ? (
              <></>
            ) : (
              <tr className="text-stone-400">
                <td
                  colSpan={7}
                  className="font-semibold px-4 py-2 text-center border-y border-stone-500"
                >
                  Chưa có môn học nào đăng kí
                </td>
              </tr>
            )}
            {subject.map((value, key) => (
              <React.Fragment key={key}>
                <tr
                  className={` *:border-y *:border-b-stone-300 text-stone-700`}
                >
                  <td className="text-center px-4 py-2">{value.id}</td>
                  <td className="text-left px-4 py-2">{value.name}</td>
                  <td className="text-center px-4 py-2">{value.credits}</td>
                  <td className="text-center px-4 py-2">{value.classname}</td>
                  <td className="text-center px-4 py-2">{value.quantity}</td>
                  <td className="text-center px-4 py-2">{value.left}</td>
                  <td className="text-left px-4 py-2">{value.scheduler}</td>
                </tr>
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
                {total}
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

export default Register;
