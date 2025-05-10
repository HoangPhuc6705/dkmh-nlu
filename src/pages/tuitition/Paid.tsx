import React, { useEffect } from "react";
import { tuititionList, Tuitition } from "./data";
import { MdCheckBox } from "react-icons/md";
import { CgCheckO } from "react-icons/cg";

const Paid: React.FC<{}> = ({ }) => {
    const paidList: Tuitition[] = tuititionList.filter((value) => value.state);


    return (
        <div className="font-roboto">
            <h1 className="font-semibold text-lg mb-3 text-stone-700">Học phí đã đóng</h1>
            <div className="flex flex-col gap-3 overflow-hidden rounded-md">
                <table className="table-auto">
                    <thead>
                        <tr className="font-semibold bg-nonglam text-white *:px-4 *:py-2 *:text-center">
                            <td>Học phí</td>
                            <td>Thanh toán</td>
                            <td>Thời gian</td>
                            <td>Trạng thái</td>
                        </tr>
                    </thead>
                    <tbody>
                        {paidList.map((value, key) => (
                            <tr
                                key={key}
                                className="border-y border-stone-300 *:px-4 *:py-2">
                                <td>{value.name}</td>
                                <td className="text-center">{value.total} VND</td>
                                <td className="text-center">{value.date}</td>
                                <td className="flex justify-center">
                                    <CgCheckO className="text-nonglam" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Paid;