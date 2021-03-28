import React from "react";
// import GoogleLogo from "../google-color.svg";
import logo from '../logo.png';

const Header = () => {

    return <div className="flex flex-grow-1 items-center justify-center py-6 px-6 bg-white rounded-t-lg">
        <div className="flex items-center justify-center">
            <div className="bg-gray-50 rounded-full min-w-16 w-16 h-16 bg-contain bg-no-repeat bg-center" style={{backgroundImage: `url(${logo})`}}>
                {/*<GoogleLogo/>*/}
            </div>
        </div>

        <div className="flex flex-col flex-wrap pl-2 justify-center">
            <h1 className="text-lg px-2 py-1 font-bold subpixel-antialiased whitespace-nowrap text-gray-900 text-opacity-90">Google
                Account Override</h1>
            <h2 className="text-xs px-2 text-gray-900">Select account to open your calendar, docs & other G-Suite aps
                with - Simple as that!</h2>
        </div>
    </div>;
}

export {Header}