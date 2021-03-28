import React, {useState, useEffect, useCallback} from "react";
import {CheckCircle} from "./svgs/CheckCircle";

let gAccounts = [/*
    {
        "userId": "0",
        "avatar": "https://lh3.googleusercontent.com/ogw/ADGmqu_GvNDuMu4fdNcyg8rKNiuO6Kz2pYhhDgCIMwW5ZQ=s48-c-mo",
        "name": "Dariusz Kobuszewski (mock)",
        "email": "dariusz.kobuszewski@gmail.com",
        "isDefault": true
    },
    {
        "userId": "1",
        "avatar": "https://lh3.googleusercontent.com/ogw/ADGmqu-Czkfazu69fAIrCO30PxOQp0D7llsis_TDxbFY=s48-c-mo",
        "name": "Dariusz Kobuszewski",
        "email": "quack.code.dk@gmail.com",
        "isDefault": false
    },
    {
        "userId": "2",
        "avatar": "https://lh3.google.com/u/2/ogw/ADGmqu8G8zbR7hBuXXW2RmS_3J7TTS2HTra_EM74pC6N=s48-c-mo",
        "name": "Dariusz Kobuszewski",
        "email": "dariusz.kobuszewski@tdsoft.pl",
        "isDefault": false
    },
    {
        "userId": "3",
        "avatar": "https://lh3.google.com/u/3/ogw/ADGmqu9Wdc1YIKoa41ru6P1XovytvNZgB1O-2k7PQrxQ=s48-c-mo",
        "name": "TDSoft Bot",
        "email": "bot@tdsoft.pl",
        "isDefault": false
    },
    {
        "userId": "4",
        "avatar": "https://lh3.google.com/u/4/ogw/ADGmqu9AFkxk-mwuGu_zeceqoH1952FUNYqfymS3O7cM=s48-c-mo",
        "name": "Developer Account",
        "email": "dev-info@fusion.app",
        "isDefault": false
    }
*/]

if (!chrome?.storage)
    chrome.storage = {local: {get: () => null, set: () => null}};


const Accounts = () => {
    const [googleAccounts, setGoogleAccounts] = useState(gAccounts)
    const [selectedAccount, setSelectedAccount] = useState()

    useEffect(() => {
        chrome.storage.local.get(['googleSelectedAccount', 'googleAccounts'],
            ({googleAccounts, googleSelectedAccount}) => {
                console.log("chrome storage update!", {googleAccounts, googleSelectedAccount});
                setGoogleAccounts(googleAccounts);
                setSelectedAccount(googleSelectedAccount);
            });
    }, [])
    const selectAccount = useCallback((userId) => {
        if (selectedAccount == userId) userId = null; // deselect

        chrome.storage.local.set({googleSelectedAccount: userId}, () => {
                setSelectedAccount(userId);
                console.log("Selected override account: ", userId)
            }
        )
    }, [selectedAccount])


    return <div className="bg-white">
        <div className="flex flex-grow-1 flex-col items-stretch rounded-t-lg bg-gray-200">
            <div className="text-xs text-blue-800 uppercase font-bold mx-4 mb-4 mt-6">Accounts</div>
            <div>
                {googleAccounts
                    .map(acc => <div className="flex flex-grow-1 flex-row py-3 px-4
                hover:bg-white transition-colors cursor-pointer group"
                                     key={acc.userId} onClick={() => selectAccount(acc.userId)}>
                        <div
                            className={`flex w-12 h-12 rounded-full ${selectedAccount == acc.userId ? "ring-blue-800 ring-2" : ""}`}
                            style={{backgroundImage: `url(${acc.avatar})`}}>
                        </div>
                        <div className="flex flex-col flex-grow ml-3">
                            <div className="text-base font-light">{acc.name}</div>
                            <div className="text-sm text-gray-700">{acc.email}</div>
                        </div>
                        {selectedAccount == acc.userId ?
                            <div className="opacity-100 transition-opacity fill-current text-blue-500
                    flex items-center justify-center">
                                <div className="w-8 h-8 mx-2">
                                    <CheckCircle/>
                                </div>
                            </div> :
                            <div className="opacity-0 group-hover:opacity-50 transition-opacity fill-current text-blue-500
                    flex items-center justify-center">
                                <div className="w-8 h-8 mx-2">
                                    <CheckCircle/>
                                </div>
                            </div>
                        }

                    </div>)}
            </div>
        </div>
    </div>;
}

export {Accounts}