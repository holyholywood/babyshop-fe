import Image from "next/image";
import { useState } from "react";
import { Menu } from "../../src/resources/menu";
import { BiPencil, BiFoodMenu } from "react-icons/bi";
import AppLogo from "../atoms/AppLogo";
import GridShadow from "../atoms/GridShadow";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "../atoms/Icon";

const clearUrlTitle = (url: string) => {
  return url.toLowerCase().replace("/", "");
};

const Sidebar = ({ NavOpen }: { NavOpen?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const active = "Transactions";

  const router = useRouter();
  return (
    <nav className="bg-gray-600 w-96 min-h-screen py-10">
      <div className="h-fit w-fit mx-auto">
        <AppLogo />
      </div>
      <figure className="mx-auto w-fit mt-20 relative">
        <div className="rounded-full overflow-hidden z-10">
          <GridShadow />
          <Image
            src={"https://i.pravatar.cc/150/woman"}
            alt="Your Profile Pic"
            width={100}
            height={100}
            className=" relative"
          />
        </div>
        <button className="absolute bottom-0 right-0 text-lg bg-gray-800 text-white h-fit w-fit rounded-full p-1">
          <BiPencil className="" />
        </button>
      </figure>
      <h1 className="text-center text-gray-200 text-lg mt-5">Bella Tanesia</h1>
      <ul className="w-full ml-6 pr-12 mt-20">
        <li>
          <h5 className="text-xl text-gray-200 font-bold tracking-wider">Menu</h5>
          <ul className="pl-5 flex flex-col py-4">
            {Menu.map((menu) => {
              return (
                <li key={menu.id} className={`tracking-wider w-full`}>
                  <Link
                    href={menu.url}
                    className={`hover:bg-gray-500 hover:text-gray-100 duration-500 w-full p-2 rounded flex items-center gap-3 ${
                      clearUrlTitle(router.pathname) === clearUrlTitle(menu.url)
                        ? "text-gray-200 bg-gray-800"
                        : "text-gray-300"
                    }`}
                  >
                    <Icon icon={menu.icon} /> {menu.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
