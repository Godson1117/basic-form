import React, { useState } from 'react';

const Modal = ({ data }) => {

    const [open, setOpen] = useState(data ? true : false);

    return (
        open && (
            <div
                className="fixed inset-0 z-50 overflow-y-auto"
                aria-labelledby="modal-title"
                aria-modal="true"
                role="dialog"
            >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                        className="fixed inset-0 transition-opacity duration-300"
                        aria-hidden="true"
                    >
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>

                    <div
                        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                    >
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3
                                        className="text-lg leading-6 font-medium text-gray-900"
                                        id="modal-title"
                                    >
                                        Form Submitted
                                    </h3>
                                    <div className="mt-2 p-6">
                                        <p className="text-sm text-gray-500">
                                            Name: {data.name}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            Email: {data.email}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            Age: {data.age}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            Attending with a guest: {data.attendingWithGuest}
                                        </p>

                                        <p className="text-sm text-gray-500">
                                            {data.guestName && `Guest Name: ${data.guestName}`}
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => {
                                    setOpen(false)
                                    window.location.reload()
                                }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Modal;