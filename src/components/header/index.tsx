import React, { useState } from "react";
import { ItemNav } from "../../interfaces/ItemNav";
import { FaBars } from "react-icons/fa"; // Importa o ícone do react-icons

export interface ChildProps {
  onClick: (identifier: ItemNav) => void;
}

export function Header(props: ChildProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const callback = (identifier: ItemNav) => {
    props.onClick(identifier);
    // Fechar o menu em telas menores após clicar em um item
    if (menuOpen) {
      toggleMenu();
    }
  };

  return (
    <div className="flex flex-row md:flex-row md:space-x-20 justify-between items-center">
      <section className="hover:underline cursor-pointer font-bold text-white mb-2 mx-4">
        Espaço para Logo
      </section>
      <button
        className="md:hidden hover:underline cursor-pointer font-bold text-white mb-2 mx-4"
        onClick={toggleMenu}
      >
        <FaBars />
      </button>
      <nav
        className={`${
          menuOpen ? "flex flex-col" : "hidden"
        } md:flex md:flex-row md:items-center`}
      >
        <button
          className="hover:underline cursor-pointer font-bold text-white mb-2 mx-4"
          onClick={() => callback({ type: "1" })}
        >
          Recomendações
        </button>

        <button
          className="hover:underline cursor-pointer font-bold text-white mb-2 mx-4"
          onClick={() => callback({ type: "2" })}
        >
          Galeria de fotos
        </button>

        <button
          className="hover:underline cursor-pointer font-bold text-white mb-2 mx-4"
          onClick={() => callback({ type: "3" })}
        >
          Detalhes do produto
        </button>

        <button
          className="hover:underline cursor-pointer font-bold text-white mb-2 mx-4"
          onClick={() => callback({ type: "4" })}
        >
          Contato
        </button>
      </nav>
    </div>
  );
}