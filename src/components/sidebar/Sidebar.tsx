import { Link, useLocation } from "react-router-dom";
import {
  MdNewspaper,
  MdSchool,
  MdSubject,
  MdAttachMoney,
  MdCalendarMonth,
  MdBallot,
  MdAccountCircle,
  MdSettings,
  MdFavorite,
  MdHome,
  MdMenu,
} from "react-icons/md";
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/600.css';
import "@fontsource/roboto/700.css";
import nonglam from '../../assets/Logo-Dai-Hoc-Nong-Lam-HCM-HCMUAF.webp'
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import Icon from "../icon/Icon";
import { Homepage, News, Program, Register } from "../../pages/router-page";
import Tuitition from "../../pages/tuitition/Tuitition";

interface navbarDefine {
  name: string;
  path: string;
  icon: React.ReactNode;
  element: React.ReactElement;
}

const navbar: navbarDefine[] = [
  { name: "Trang chủ", path: "/", icon: <MdHome />, element: <Homepage /> },
  { name: "Tin tức", path: "/news", icon: <MdNewspaper />, element: <News /> },
  {
    name: "Chương trình đào tạo",
    path: "/programs",
    icon: <MdSubject />,
    element: <Program />,
  },
  {
    name: "Đăng kí môn học",
    path: "/register",
    icon: <MdSchool />,
    element: <Register />,
  },
  {
    name: "Học phí",
    path: "/tuition",
    icon: <MdAttachMoney />,
    element: <Tuitition />,
  },
  {
    name: "Thời khoá biểu",
    path: "/scheduler",
    icon: <MdCalendarMonth />,
    element: <></>,
  },
  { name: "Lịch thi", path: "/exam", icon: <MdBallot />, element: <></> },
];

const secondNavbar: navbarDefine[] = [
  {
    name: "Sinh viên",
    path: "/student",
    icon: <MdAccountCircle />,
    element: <></>,
  },
  { name: "Cài đặt", path: "/setting", icon: <MdSettings />, element: <></> },
  { name: "Liên hệ", path: "/contact", icon: <MdFavorite />, element: <></> },
];

const nav = navbar.concat(secondNavbar);

interface SidebarProps {
  open: boolean;
  onOpen(state: boolean): void;
}

function Sidebar(props: SidebarProps) {
  
  const location = useLocation();
  const path = location.pathname;

  const [current, setCurrent] = useState<string|undefined>(() => {
    const currentNav: string | undefined = nav.find((item) => item.path === path)?.name;
    return currentNav;
  });

  const isMobile = useMediaQuery({ maxWidth: 1024 });

  function handleCurrent(name: string): void {
    setCurrent(name);
  }

  useEffect(() => {
    if (!isMobile) {
      props.onOpen(true);
    }
  }, [props.open]);

  return (
    <nav
      className={`flex flex-col w-[250px] z-[100] bg-white font-roboto border-r border-stone-300 h-full shrink-0 grow-0 max-lg:w-[280px] max-lg:fixed transition`}
      style={{
        transform:
          isMobile && props.open ? "translateX(-100%)" : "translateX(0)",
      }}
    >
      <div className="h-[60px] flex items-center justify-between p-4 border-b border-b-stone-400 mb-1">
        <span className="text-md font-semibold text-stone-700 select-none flex gap-2 items-center max-sm:text-sm">
          <img src={nonglam} alt="nonglam" className="size-8" />
          NONG LAM UNIVERSITY
        </span>
        {isMobile ? (
          <Icon
            icon={<MdMenu />}
            onClick={() => props.onOpen(!props.open)}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="text-stone-500 p-3 font-semibold">
        <ul>
          {navbar.map((value, key) => (
            <Link
              to={value.path}
              key={key}
              onClick={() => {
                handleCurrent(value.name);
                props.onOpen(!props.open);
              }}
            >
              <li
                className={`p-[14px] flex items-center gap-6 text-sm rounded-md transition mb-0.5 ${
                  current === value.name
                    ? "bg-nonglam text-stone-50"
                    : "hover:bg-stone-400/20 hover:rounded-md"
                }`}
              >
                <div
                  className={`*:size-5 ${
                    current === value.name
                      ? "*:text-stone-50"
                      : "*:text-stone-500"
                  }`}
                >
                  {value.icon}
                </div>
                {value.name}
              </li>
            </Link>
          ))}
        </ul>
        <hr className="text-stone-300 my-1" />
        <ul>
          {secondNavbar.map((value, key) => (
            <Link
              to={value.path}
              key={key}
              onClick={() => {
                handleCurrent(value.name);
                props.onOpen(!props.open);
              }}
            >
              <li
                className={`p-[14px] flex items-center gap-6 text-sm rounded-md transition mb-0.5 ${
                  current === value.name
                    ? "bg-nonglam text-stone-50"
                    : "hover:bg-stone-400/20 hover:rounded-md"
                }`}
              >
                <div
                  className={`*:size-5 ${
                    current === value.name
                      ? "*:text-stone-100"
                      : "*:text-stone-500"
                  }`}
                >
                  {value.icon}
                </div>
                {value.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
export { navbar, secondNavbar };
export default Sidebar;
