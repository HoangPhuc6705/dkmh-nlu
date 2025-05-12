import React from "react";
import { tuititionList, Tuitition } from "./data";
import { CgCheckO } from "react-icons/cg";

const Paid: React.FC<{}> = ({ }) => {
    const paidList: Tuitition[] = tuititionList.filter((value) => value.state);
    const trName: string[] = [
        'Học phí',
        'Thanh toán',
        'Thời gian',
        'Trạng thái'
    ]
    const total = paidList.reduce((sum, curr) => sum + curr.total, 0);
    const formatNumber = (n: number): string => {
        let s: string = n.toString();
        let index = s.length ;

        return s;
    }
    const insertDot = (s: string, index: number) => {
        return s.slice(0, index) + "." + s.slice(index);
    }

    return (
        <div className="font-roboto">
            <h1 className="font-semibold text-lg mb-3 text-stone-700">Học phí đã đóng</h1>
            <div className="flex flex-col gap-3 overflow-hidden rounded-md">
                <table className="table-auto">
                    <thead>
                        <tr className="font-semibold bg-nonglam text-white *:px-4 *:py-2 *:text-center">
                            {trName.map((value, key) => (
                                <td key={key}>{value}</td>
                            ))}
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
                        <tr>
                            <td
                                colSpan={1}
                                className="font-semibold bg-nonglam text-white px-4 py-2 *:text-center">
                                Tổng
                            </td>
                            <td
                                colSpan={1}
                                className="font-semibold bg-nonglam text-white px-4 py-2 *:text-center
                                text-center">
                                {formatNumber(total)} VND
                            </td>
                            <td
                                colSpan={2}
                                className="font-semibold bg-nonglam text-white px-4 py-2 *:text-center
                                text-center"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Paid;