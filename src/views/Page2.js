import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Page2() {
    const [total, setTotal] = useState(0)
    const state = useSelector(state => state.makananOn);

    const tableData = (data, key) => {
        return (
            <tr key={key}>
                <td>{data.id}</td>
                <td>{data.makanan}</td>
                <td align="right">{data.harga}</td>
            </tr>
        )
    };

    useEffect(() => {
        if (state.length > 0) state[0].forEach(d => setTotal(total => total + d.harga));
    }, []);

    return (
        <div className="w-25 p-2">
            <Link to={'/'}>goback</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Makanan</th>
                        <th className="text-right">Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {state.length > 0 && state[0].map((d, k) => tableData(d, k))}
                    <tr>
                        <td colSpan={3} align="right">
                            <span>{total}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}