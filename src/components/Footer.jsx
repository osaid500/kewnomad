import React from "react";

const Footer = () => {
  const FooterItem = (props) => {
    const { link, iconClasses } = props;
    return (
      <li className="rounded-full bg-gray-100 flex justify-center items-center transition hover:bg-gray-300">
        <a className="w-7 h-7 text-center" href={link} target="_blank">
          <i className={`${iconClasses} text-lg`}></i>
        </a>
      </li>
    );
  };

  return (
    <footer className="bg-gray-800 h-full mt-10 flex flex-col items-center p-5 gap-3">
      <ul className="flex gap-2">
        <FooterItem
          link="https://github.com/osaid500"
          iconClasses="fa-brands fa-github"
        />
        <FooterItem
          link="https://www.linkedin.com/in/osaid-zedki/"
          iconClasses="fa-brands fa-linkedin"
        />
      </ul>
      <p className="text-sm text-gray-300">
        &copy; 2024 KewNomad. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
