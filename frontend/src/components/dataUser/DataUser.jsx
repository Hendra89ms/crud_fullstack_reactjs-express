import React from 'react'
import axios from 'axios'

function DataUser(props) {

    const { item, index, allData, setData, fetchData, openModalEdit } = props;

    const deleteData = async (id) => {

        try {
            const resp = await axios.delete('http://localhost:5000/users/' + id)
            const newData = resp.data
            alert('BERHASIL DIHAPUS!')
            setData([...allData, newData])
            fetchData()
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }

    return (
        <tr className='text-center'>
            <td className='p-2'>{index + 1}.</td>
            <td className='p-2'>{item.name}</td>
            <td className='p-2'>{item.email}</td>
            <td className='p-2'>{item.gender}</td>

            <td className='p-2 cursor-pointer text-center '>
                <div className='flex gap-3 justify-center items-center'>
                    <button onClick={() => openModalEdit(item)} className='bg-blue-500 hover:bg-blue-700 duration-300 text-white py-1 px-2'>Edit</button>
                    <button onClick={() => deleteData(item._id)} className='bg-red-500 hover:bg-red-700 duration-300 text-white py-1 px-2'>Delete</button>
                </div>
            </td>

        </tr>
    )
}

export default DataUser;