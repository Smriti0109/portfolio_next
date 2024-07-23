import React from "react";

type Props = {
  href: string;
  Icon: React.FC<{ className: string }>;
};

const ClickableIcon = ({ href, Icon }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Icon className="w-5 h-5 text-blue-500 hover:text-AAsecondary transition duration-800 fill-current hover:cursor-pointer hover:animate-bounce" />
    </a>
  );
};

export default ClickableIcon;
