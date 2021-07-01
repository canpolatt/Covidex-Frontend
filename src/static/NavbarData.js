import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GoIcons from "react-icons/go";

export const NavbarData = [
  {
    title: "Home",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Register",
    path: "/dashboard/patientregister",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/dashboard/patientSearch",
    icon: <GoIcons.GoSearch />,
    cName: "nav-text",
  },
];
