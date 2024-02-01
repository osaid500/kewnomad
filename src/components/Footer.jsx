import React from "react";

const Footer = () => {
  const FooterItem = (props) => {
    const { link, iconClasses } = props;
    return (
      <li className="w-7 h-7 rounded-full bg-gray-100 flex justify-center items-center transition hover:bg-gray-300">
        <a href={link} target="_blank">
          <i class={`${iconClasses} text-lg`}></i>
        </a>
      </li>
    );
  };

  return (
    <footer className="bg-gray-800 h-full mt-auto flex flex-col items-center p-5 gap-3">
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
      <p class="text-sm text-gray-300">
        &copy; 2024 KewNomad. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
