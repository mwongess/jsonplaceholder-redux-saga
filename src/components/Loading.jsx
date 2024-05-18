import React, { useState, useEffect, useRef } from 'react';

const Loading = () => {
    return (
        <>
            <div className="border rounded p-4">
                <div className="flex justify-between mb-4">
                    <div className="flex gap-2">
                        <div className="rounded-full h-[3rem] w-[3rem] bg-gray-300"></div>
                        <div>
                            <div className="font-bold bg-gray-300 w-20 h-4 mb-4 rounded"></div>
                            <div className='text-gray-500 text-sm bg-gray-300 w-40 h-3 rounded'></div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="cursor-pointer more-options" >
                            <div className="w-6 h-1 rounded bg-gray-300"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-bold bg-gray-300 w-1/2 h-4 mb-4 rounded"></div>
                    <div className="bg-gray-300 rounded w-full h-3"></div>
                </div>
            </div>
            <div className="border rounded p-4">
                <div className="flex justify-between mb-4">
                    <div className="flex gap-2">
                        <div className="rounded-full h-[3rem] w-[3rem] bg-gray-300"></div>
                        <div>
                            <div className="font-bold bg-gray-300 w-20 h-4 mb-4 rounded"></div>
                            <div className='text-gray-500 text-sm bg-gray-300 w-40 h-3 rounded'></div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="cursor-pointer more-options" >
                            <div className="w-6 h-1 rounded bg-gray-300"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-bold bg-gray-300 w-1/2 h-4 mb-4 rounded"></div>
                    <div className="bg-gray-300 rounded w-full h-3"></div>
                </div>
            </div>
            <div className="border rounded p-4">
                <div className="flex justify-between mb-4">
                    <div className="flex gap-2">
                        <div className="rounded-full h-[3rem] w-[3rem] bg-gray-300"></div>
                        <div>
                            <div className="font-bold bg-gray-300 w-20 h-4 mb-4 rounded"></div>
                            <div className='text-gray-500 text-sm bg-gray-300 w-40 h-3 rounded'></div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="cursor-pointer more-options" >
                            <div className="w-6 h-1 rounded bg-gray-300"></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-bold bg-gray-300 w-1/2 h-4 mb-4 rounded"></div>
                    <div className="bg-gray-300 rounded w-full h-3"></div>
                </div>
            </div>
        </>
    );
}

export default Loading;
