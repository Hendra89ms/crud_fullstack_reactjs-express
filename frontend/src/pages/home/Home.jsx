import React, { useEffect, useState } from 'react'
import { getAllData } from '../../service/Service'
import AddData from '../../components/addData/AddData'
import DataUser from '../../components/dataUser/DataUser'
import EditData from '../../components/editData/EditData'

function Home() {

    const [allData, setGetData] = useState([])
    const [addData, setAddData] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [editData, setEditData] = useState()

    const fetchData = async () => {
        try {
            const resp = await getAllData()
            const data = resp.data
            setGetData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const addDataModal = () => {
        setAddData(true)
    }

    const closeAddDataModal = () => {
        setAddData(false)
    }

    const openModalEdit = (data) => {
        setEditModal(true)

        setEditData(data)
    }

    return (
        <div className='w-full flex justify-center items-center '>

            <div>

                <h1 className='text-3xl text-center mt-10 mb-10 font-semibold'>Applikasi FullStack CRUD</h1>

                <div className='w-full flex justify-between items-center'>
                    <button
                        onClick={addDataModal}
                        className='bg-blue-500 text-white p-2.5 rounded-md my-5 hover:bg-blue-600 duration-300 w-[150px]'>Add Data
                    </button>

                </div>

                <div className='overflow-x-auto md:w-[800px] w-full'>
                    <table className='min-w-full  overflow-auto border-collapse border border-black table-auto'>
                        <thead className='bg-gray-200'>
                            <tr className='text-center'>
                                <th className='p-2'>No</th>
                                <th className='p-2'>Name</th>
                                <th className='p-2'>Email</th>
                                <th className='p-2'>Gender</th>
                                <th className='p-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                allData.map((item, index) => {
                                    return (
                                        <DataUser
                                            key={index}
                                            index={index}
                                            item={item}
                                            allData={allData}
                                            setData={setGetData}
                                            fetchData={fetchData}
                                            setEditModal={setEditModal}
                                            openModalEdit={openModalEdit}

                                        />
                                    )
                                })
                            }
                        </tbody>
                    </table>

                    {/* MODAL ADD DATA */}
                    <div>
                        {
                            addData && (
                                <AddData
                                    closeModal={closeAddDataModal}
                                    fetchData={fetchData}
                                />
                            )
                        }
                    </div>

                    {/* MODAL EDIT DATA */}
                    {
                        editModal && (
                            <EditData
                                setEditModal={setEditModal}
                                editData={editData}
                                setGetData={setGetData}
                                allData={allData}
                                fetchData={fetchData}
                            />
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Home;