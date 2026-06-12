import Image from "next/image";

const Avatar = () => {
  return (
    <div className="pointer-events-none select-none w-full h-full relative">
      <Image
        src="/avatar.png"
        alt="Nandha Kishore D"
        fill
        priority
        className="object-cover object-top"
      />
    </div>
  );
};

export default Avatar;
