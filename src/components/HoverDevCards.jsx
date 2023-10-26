import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { AiOutlineRobot } from 'react-icons/ai'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { PiChalkboardTeacher } from 'react-icons/pi'
import { AiOutlineEdit } from "react-icons/ai";
import { GiTreeBranch } from 'react-icons/gi'

// icons
import { BiLeaf } from 'react-icons/bi'

const HoverDevCards = () => {
    return (
        <div className=" my-7 py-10 container  ">

            <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                <Card
                    title="Sustainable"
                    subtitle="sustainable and renewable resource"
                    href="#"
                    Icon={BiLeaf}
                />
                <Card title="Bio Degradable" subtitle="broken down naturally without harming the
              environment" href="#" Icon={GiTreeBranch} />
                <Card title="Customizable" subtitle=" offer customized designs that cater to the specific needs of your
              customers" href="#" Icon={AiOutlineEdit} />
                <Card
                    title="Consumer appeal"
                    subtitle="consumers are increasingly looking for"
                    href="#"
                    Icon={PiChalkboardTeacher}
                />
            </div>
        </div>
    );
};

const Card = ({ title, subtitle, Icon, href }) => {
    return (
        <a
            href={href}
            className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
        >
            <div className="absolute inset-0 bg-gradient-to-r orange-700 to-orange-700 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

            <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
            <Icon className="mb-2 text-2xl group-hover:text-black transition-colors relative z-10 duration-300" />
            <h3 className="font-medium text-lg text-slate-950 group-hover:text-black relative z-10 duration-300">
                {title}
            </h3>
            <p className="text-gray-500 group-hover:text-black relative z-10 duration-300">
                {subtitle}
            </p>
        </a>
    );
};

export default HoverDevCards