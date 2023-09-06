import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddData = ({ closeModal, fetchData }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('male')

    const handleChangeGender = (e) => {
        setGender(e.target.value)
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (name.length === 0 || email.length === 0 || gender.length === 0) {
            return alert('You Must input Data!');
        }

        if (name.trim() === '' || email.trim() === '' || gender.trim() === '') {
            return alert('You Not Input Spasi !')
        }

        const data = {
            name, email, gender
        }

        try {
            const resp = await axios.post('http://localhost:5000/users', data)

            const newData = resp.data
            fetchData()
            alert('BERHASIL MENAMBAH DATA!')
            // TUTUP MODAL
            closeModal()
            // PINDAH KE HOME
            navigate('/')

        } catch (error) {
            alert(error)
            console.log(error)
        }

        setName('')
        setEmail('')
        setGender('')
    }

    return (

        <div>
            <div className='fixed inset-0 bg-[#999999] z-10 opacity-75' >

            </div>
            <div className=' fixed inset-0 z-30 flex justify-center items-center'>
                <div className=''>


                    <form onSubmit={handleSubmit} className=' shadow-md md:w-[500px] w-full mx-5 p-8 flex flex-col gap-3 bg-white rounded-md opacity-100 relative'>

                        <div onClick={closeModal} className='absolute right-[-10px] top-[-15px] text-3xl cursor-pointer hover:text-blue-500 duration-300  '>&times;</div>

                        <h1 className='text-center font-semibold mb-4'>ADD YOUR DATA</h1>

                        <div className='flex flex-col'>
                            <label htmlFor="name">Name</label>
                            <input
                                autoFocus
                                value={name}
                                onChange={e => setName(e.target.value)}
                                type="text"
                                className='border-[1px] border-gray-300 outline-none p-3' placeholder='Name' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                className='border-[1px] border-gray-300 outline-none p-3' placeholder='email' />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="name">Gender</label>
                            <select
                                value={gender}
                                onChange={handleChangeGender}
                                name="gender"
                                id="gender"
                                className=' outline-none p-3 cursor-pointer '>
                                <option value="male" className=''>male</option>
                                <option value="female" className='p-2'>female</option>
                            </select>
                        </div>

                        <button type='submit' className='bg-orange-500 p-2.5 rounded-md text-white mt-3 font-bold'>Add Data</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default AddData;

