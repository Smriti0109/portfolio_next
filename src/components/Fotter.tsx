import React from "react";
import ClickableIcon from "./ClickableIcon";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
// import YoutubeIcon from "../Icons/YoutubeIcon";

type FooterProps = {
  link: string;
  className?: string;
};

const Footer = ({ link, className = "" }: FooterProps) => {
  return (
    <div className={`${className} bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4`} id="contact">
      <div className="flex flex-row space-x-8">
        <ClickableIcon href="https://github.com/Smriti0109" Icon={GithubIcon} />
        <ClickableIcon href="https://www.linkedin.com/in/smriti-singh-29588125b/" Icon={LinkedinIcon} />
        <ClickableIcon href="" Icon={InstagramIcon} />
        {/* <ClickableIcon href="https://www.youtube.com/c/NTTFT" Icon={YoutubeIcon} /> */}
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="group flex flex-col font-mono justify-center items-center text-gray-400 text-sm space-y-2">
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Designed & Built by Smriti Singh
          </span>
          <span className="text-xs flex flex-row items-center space-x-2 group-hover:text-AAsecondary">
            <GithubIcon className="w-4 h-4 text-gray-400 fill-current group-hover:text-AAsecondary duration-800" />
            <span>Source code - Github</span>
          </span>
        </div>
      </a>
    </div>
  );
};

export default Footer;
