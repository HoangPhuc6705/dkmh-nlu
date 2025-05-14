import {
  MdSearch,
  MdDarkMode,
  MdNotifications,
  MdMenu,
  MdMail,
} from "react-icons/md";
import nonglam from "../../assets/Logo-Dai-Hoc-Nong-Lam-HCM-HCMUAF.webp";
import { Route, Routes } from "react-router-dom";
import { navbar, secondNavbar } from "../sidebar/Sidebar";
import Icon from "../icon/Icon";
import { useMediaQuery } from "react-responsive";
import Bagde from "../Bagde";
import NotificationsList from "./NotifiationList";
import React, { useEffect, useRef, useState } from "react";

const nav = navbar.concat(secondNavbar);

interface HeaderProps {
  onOpen(state: boolean): void;
  open: boolean;
}

function Header(props: HeaderProps) {
  const [ring, setRing] = useState<boolean>(false);
  const [mailBox, setMailBox] = useState<boolean>(false);

  const isPhone = useMediaQuery({ maxWidth: 640 });

  const mailboxRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!mailboxRef.current?.contains(event.target as Node)) {
        setMailBox(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="bg-white flex w-[calc(100%-250px)] max-lg:w-full items-center justify-between shrink-0 p-4 max-sm:p-3 grow-0 h-[60px] border-b border-b-stone-400 font-roboto fixed z-40">
      {/* typography */}
      <div className="text-xl flex gap-4 max-sm:gap-2 items-center">
        <div className="lg:hidden">
          <Icon
            icon={<MdMenu />}
            onClick={() => props.onOpen(!props.open)}
          />
        </div>
        <div className="flex gap-2 items-center font-bold sm:hidden">
          <img
            src={nonglam}
            alt="nonglam"
            className="size-6"
          />
          <h3 className="font-roboto text-stone-700">NLU</h3>
        </div>
        <h4 className="font-semibold text-stone-700 select-none max-sm:text-[16px] max-sm:hidden">
          <Routes>
            {nav.map((value, key) => (
              <Route
                key={key}
                path={value.path}
                element={value.name}
              />
            ))}
          </Routes>
        </h4>
      </div>
      <div className="flex gap-3 items-center">
        {/* search bar */}
        {isPhone ? (
          <Icon icon={<MdSearch />} />
        ) : (
          <div className="w-[210px] h-8 border border-stone-300 rounded-full cursor-pointer flex justify-between items-center px-2 select-none">
            <div className="flex gap-2 items-center">
              <MdSearch />
              <span className="text-sm text-stone-500">Tìm kiếm...</span>
            </div>
            <div className="h-5 px-3 py-2 border border-stone-300 rounded-full flex justify-center items-center">
              <span className="text-[10px] text-stone-500 font-semibold">
                Ctrl + K
              </span>
            </div>
          </div>
        )}
        {/* icon */}
        <div className="flex gap-2 max-sm:gap-[10px]">
          <div className="relative">
            <div
              className="relative overflow-visible"
              onClick={() => {
                setMailBox(true);
              }}
            >
              <Icon
                icon={<MdMail />}
                badge={
                  <Bagde
                    x={20}
                    y={-20}
                  />
                }
              />
            </div>
            {!mailBox || (
              <div ref={mailboxRef}>
                <NotificationsList />
              </div>
            )}
          </div>
          {/* notifications ring */}
          <div>
            <div
              className="relative overflow-visible"
              onClick={() => { }}
            >
              <Icon
                icon={<MdNotifications />}
                badge={
                  <Bagde
                    x={20}
                    y={-20}
                  />
                }
              />
              <div>{/* <NotificationsList /> */}</div>
            </div>
          </div>

          <Icon imageUri={"https://i.pinimg.com/736x/ea/ff/e0/eaffe081617efd3c77e702d127180686.jpg"} />
        </div>
      </div>
    </header>
  );
}

export default Header;
