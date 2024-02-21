import React from "react";
import { FaStar } from "react-icons/fa6";
import { VscDebug } from "react-icons/vsc";

export const Card = ({ user }) => {
    // the card component has no effect of the gobal state of the application
    return (
        <div className="flex flex-col rounded-3xl max-h-96 overflow-hidden max-w-96 border border-red-950">
            <div className="w-full h-1/2 ">
                <img src={user.avatar} className="w-full h-full" alt="" />
            </div>
            <div className="flex flex-col justify-between h-1/2 px-6 py-5 rounded-br-xl border border-green-800">
                <h2 className="text-2xl font-bold">{user.reposName}</h2>
                <p className="text-xl">{user.description}</p>
                <div className="flex justify-between">
                    <div className="flex text-xl justify-center gap-2 items-center">
                        <span><FaStar /></span>
                        <div>Stars :<span className=" font-bold">{user.stars}</span></div>
                    </div>
                    <div className="flex text-xl justify-center gap-2 items-center">
                        <span><VscDebug /></span>
                        <div>issues: <span className="font-bold">{user.issues}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
