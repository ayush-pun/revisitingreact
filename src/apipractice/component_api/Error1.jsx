import React from "react";

const Error = ({ message }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-red-600 text-2xl font-bold">
                {message}
            </h1>
        </div>
    );
};

export default Error;