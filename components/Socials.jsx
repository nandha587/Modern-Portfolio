import Link from "next/link";

import {
  RiLinkedinLine,
  RiGithubLine,
  RiMailLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nandha-kishore-d-b49bb2289",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/nandha587",
    Icon: RiGithubLine,
  },
  {
    name: "Email",
    link: "mailto:nandhakishoredineshkumar@gmail.com",
    Icon: RiMailLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3 text-sm flex-wrap gap-y-2">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-x-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 group text-white"
        >
          <social.Icon className="text-base group-hover:scale-110 transition-transform" aria-hidden />
          <span className="font-medium">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
