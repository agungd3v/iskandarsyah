import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { adMakan } from "../stores/actions/makananAction"


export default function Home() {
    const [total, setTotal] = useState(0)
    const dispatch = useDispatch();

    const data = [
        {id: 1, makanan: 'Bakso', harga: 12000},
        {id: 2, makanan: 'Ayam Bakar', harga: 15000},
        {id: 3, makanan: 'Mie Ayam', harga: 13000},
    ];
    
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
        dispatch(adMakan(data.filter(d => d.harga > 12500)));
        data.forEach(d => setTotal(total => total + d.harga));
    }, []);

    return (
        <div className="w-25 p-2">
            <Link to={'/page'}>showmen</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Makanan</th>
                        <th className="text-right">Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, k) => tableData(d, k))}
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