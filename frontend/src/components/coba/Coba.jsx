import React, { useState, useRef, useEffect } from 'react';

function Coba() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center">
            <h2 className="text-2xl mb-4">Modal Example</h2>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={openModal}

            >
                Open Modal
            </button>
            {isModalOpen && (
                <div className="modal fixed inset-0 flex items-center justify-center">
                    <div className="modal-content bg-white p-6 rounded-lg" ref={modalRef}>
                        <span className="close text-gray-600 hover:text-gray-800" onClick={closeModal}>
                            &times;
                        </span>
                        <p>Some text in the Modal..</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Coba;
