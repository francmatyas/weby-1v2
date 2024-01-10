import React from "react";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import { FaInstagram, FaFacebookF, FaPatreon, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const iconMap = {
  mail: <HiOutlineMail />,
  phone: <HiOutlinePhone />,
  address: <HiOutlineLocationMarker />,
  instagram: <FaInstagram />,
  facebook: <FaFacebookF />,
  twitter: <FaXTwitter />,
  patreon: <FaPatreon />,
  youtube: <FaYoutube />,
};

export default function getIcon(name, size = 20) {
  if (iconMap[name] == null) {
    return null;
  }
  return React.cloneElement(iconMap[name], {
    size: size,
    style: { display: "flex" },
  });
}
