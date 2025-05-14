import { useState } from "react";
// import { useMediaQuery } from "react-responsive";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Overlay from "./components/overlay/Overlay";
import { navbar, secondNavbar } from "./components/sidebar/Sidebar";
import { useMediaQuery } from "react-responsive";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const nav = navbar.concat(secondNavbar);

  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const handleIsOpen = (state: boolean) => {
    setIsOpen(state);
  };

  return (
    <div className="h-dvh flex overflow-hidden bg-white">
      <Sidebar
        open={isOpen}
        onOpen={handleIsOpen}
      />
      {isMobile && !isOpen ? (
        <Overlay onOpened={() => handleIsOpen(true)} />
      ) : (
        <></>
      )}
      <div className="h-full w-full overflow-y-scroll">
        <Header
          onOpen={handleIsOpen}
          open={isOpen}
        />
        <div className="mt-[60px]"></div>
        <main className="p-3">
          <Routes>
            {nav.map((value, key) => (
              <Route
                key={key}
                path={value.path}
                element={value.element}
              />
            ))}
          </Routes>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
