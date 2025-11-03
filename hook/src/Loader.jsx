import React from "react";

function Loader({ grid = 3 , count }) {
    return (
        <div className={`grid grid-cols-4 gap-4 m-4`}>
            {Array.from({ length: count }).map((item, index) => (
                <div key={index} className="animate-pulse bg-gray-400 h-48 w-full">

                </div>
            ))}
        </div>
    );
}

export default Loader;