import React, { useState } from 'react'
import axios, { all } from 'axios'
import { useNavigate } from 'react-router-dom'

const EditData = ({ setEditModal, editData, fetchData }) => {

    const closeModal = () => {
        setEditModal(false)
    }

    const [data, setData] = useState({ ...editData })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };


    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { name, email, gender, _id } = data;

        if (name.length === 0 && email.length === 0 && gender.length === 0) {
            return alert('You Must input Data!');
        }

        if (name.trim() === '' && email.trim() === '' && gender.trim() === '') {
            return alert('You Not Input Spasi !')
        }

        try {
            const resp = await axios.patch(`http://localhost:5000/users/${_id}`, data)
            fetchData()

            alert('SUKSES UPDATE DATA')
            closeModal()

        } catch (error) {
            alert(error.message)
            console.log(error)
        }

    }

    return (

        <div>
            <div className='fixed inset-0 bg-[#999999] z-10 opacity-75' >

            </div>
            <div className=' fixed inset-0 z-30 flex justify-center items-center'>
                <div className=''>


                    <form onSubmit={handleSubmit} className=' shadow-md md:w-[500px] w-full mx-5 p-8 flex flex-col gap-3 bg-white rounded-md opacity-100 relative'>

                        <div onClick={closeModal} className='absolute right-[-10px] top-[-15px] text-3xl cursor-pointer hover:text-blue-500 duration-300  '>&times;</div>

                        <h1 className='text-center font-semibold mb-4'>EDIT YOUR DATA</h1>

                        <div className='flex flex-col'>
                            <label htmlFor="name">Name</label>
                            <input
                                autoFocus
                                name="name"
                                value={data.name}
                                onChange={handleInputChange}
                                type="text"
                                className='border-[1px] border-gray-300 outline-none p-3' placeholder='Name' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                value={data.email}
                                onChange={handleInputChange}
                                type="email"
                                className='border-[1px] border-gray-300 outline-none p-3' placeholder='email' />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="name">Gender</label>
                            <select
                                value={data.gender}
                                onChange={handleInputChange}
                                name="gender"
                                id="gender"
                                className=' outline-none p-3 cursor-pointer '>
                                <option value="male" className=''>male</option>
                                <option value="female" className='p-2'>female</option>
                            </select>
                        </div>

                        <button type='submit' className='bg-orange-500 p-2.5 rounded-md text-white mt-3 font-bold'>Update</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default EditData;

