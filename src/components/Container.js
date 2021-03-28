import React from "react";

const Container = ({children}) => {

    return <div className="font-sans bg-gray-700 box-border p-1.5">
        <div className="container mx-sm flex flex-col flex-wrap rounded-lg bg-gray-200">

            {children}
        </div>
    </div>;
}

export {Container}