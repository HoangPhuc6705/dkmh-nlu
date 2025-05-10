import React from "react";
import Icon from "../icon/Icon";
import { MdFacebook, MdYoutubeSearchedFor } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="p-3 flex items-center justify-between">
      <p className="text-sm text-gray-600 max-sm:text-[10px]">
        &copy; {new Date().getFullYear()} NLU. All
        rights reserved.
      </p>
      <div className="flex gap-3">
        <Icon icon={<MdFacebook />} />
        <Icon icon={<FaInstagram />} />
        <Icon icon={<FaYoutube />} />
      </div>
    </footer>
  );
};

export default Footer;
