import React from "react";
import { tuititionList, Tuitition } from "./data";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { insertDot } from "./Paid";

const WillPaid: React.FC<{}> = ({ }) => {
    const willpaid: Tuitition[] = tuititionList.filter((value) => !value.state);


    return (
        <div className="font-roboto">
            <h1 className="font-semibold text-lg mb-3 text-stone-700">Học phí đang nợ</h1>
            <div className="flex flex-col gap-3 overflow-hidden rounded-md">
                <table className="table-auto">
                    <thead>
                        <tr className="font-semibold bg-nonglam text-white *:px-4 *:py-2 *:text-center">
                            <td>Học phí</td>
                            <td>Thanh toán</td>
                            <td>Đóng tiền</td>
                        </tr>
                    </thead>
                    <tbody>
                        {willpaid.map((value, key) => (
                            <tr
                                key={key}
                                className="border-y border-stone-300 *:px-4 *:py-2">
                                <td>{value.name}</td>
                                <td className="text-center">{ insertDot( value.total.toString())} VND</td>
                                <td className="flex justify-center cursor-pointer">
                                    <MdCheckBoxOutlineBlank className="text-nonglam" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WillPaid;