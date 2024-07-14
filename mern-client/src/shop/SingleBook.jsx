import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa'; // Import download icon if not already imported

const SingleBook = () => {
    const { _id, bookTitle, imgUrl, bookDescription, authorName, bookPdfUrl } = useLoaderData();

    return (
        <div className='mt-28 px-4 lg:px-24'>
            <div className='max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden'>
                <img src={imgUrl} alt={bookTitle} className='w-auto h-auto' />
                <div className='p-6'>
                    <h2 className='text-3xl font-bold mb-4'>{bookTitle}</h2>
                    <p className='text-gray-600 mb-4'>{bookDescription}</p>
                    <p className='text-gray-700 mb-2'><strong>Author:</strong> {authorName}</p>

                    <div className='flex justify-end'>
                        <a
                            href={bookPdfUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md shadow-md transition duration-300 ease-in-out'
                        >
                            <FaDownload className='mr-2' />
                            Download PDF
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;
