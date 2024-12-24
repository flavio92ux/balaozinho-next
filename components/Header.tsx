"use client";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleMenuLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const fromTop = e.clientY < e.currentTarget.getBoundingClientRect().top;
    const fromLeft = e.clientX < e.currentTarget.getBoundingClientRect().left;
    const fromRight = e.clientX > e.currentTarget.getBoundingClientRect().right;

    if (fromTop || fromLeft || fromRight) {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex justify-center items-center shadow-custom">
      <div className="flex flex-row justify-between min-w-[1200px] relative px-6 py-3">
        <div className="absolute">
          <Image src={Logo} alt="logo escola" />
        </div>

        <div className="flex flex-col gap-2 max-w-[960px] ml-auto">
          <nav className="flex justify-end font-fredoka gap-2 text-base">
            <button className="w-[179px] text-red-default border-[3px] border-red-default rounded-[50px] flex justify-center text-center">
              Agende sua visita
            </button>
            <button className="w-[179px] bg-red-default text-white rounded-[50px]">
              Portal balãozinho
            </button>
          </nav>
          <nav className="flex justify-end font-fredoka gap-4 text-base text-[#333]">
            <div
              className="relative flex items-center gap-1 group hover:text-red-default"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMenuLeave}
            >
              <span>Balãozinho mágico</span>
              <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-transparent border-t-[#333] group-hover:border-t-red-default" />

              {isOpen && (
                <div
                  onMouseLeave={handleMouseLeave}
                  className="absolute w-36 top-full right-0 mt-2 bg-white shadow-md rounded-md py-2"
                >
                  <a
                    href="#sobre"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-red-default"
                  >
                    Sobre
                  </a>
                  <a
                    href="#galeria"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-red-default"
                  >
                    Galeria
                  </a>
                </div>
              )}
            </div>
            <div className="hover:text-red-default">Diferenciais</div>
            <div className="hover:text-red-default">Novidades</div>
            <div className="hover:text-red-default">Depoimentos</div>
            <div className="hover:text-red-default">Trabalhe Conosco</div>
            <div className="hover:text-red-default">Fale Conosco</div>
            <div className="hover:text-red-default">Aplicativo</div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
