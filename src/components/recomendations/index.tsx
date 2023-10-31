import React from "react";
// import { VscArrowRight } from "react-icons/vsc";
import { RiChat1Fill } from "react-icons/ri";
import { TbBrandLine } from "react-icons/tb";
import { TbCheck } from "react-icons/tb";


export function Recomendations() {
    return (
        <div className="flex flex-row justify-around py-4 space-x-2">
        <section className="w-1/2">
          <h1 className="text-4xl font-bold text-white text-center mb-16">
            Mix completo de móveis em madeira, de forma personalizada e única para o cliente
          </h1>
          <ul className="text-xl text-white text-center space-y-10">
            <li className="flex items-center justify-center">
              <TbCheck /> Há quatro anos no mercado
            </li>
            <li className="flex items-center justify-center ">
              <TbCheck /> Entrega em toda Brasília
            </li>
            <li className="flex items-center justify-center">
              <TbCheck /> Atendimento personalizado
            </li>
            <li className="flex items-center justify-center ">
              <TbCheck /> Trabalhos executados em madeira
            </li>
            <li className="flex items-center justify-center">
              <TbCheck /> XX anos de garantia
            </li>
          </ul>
        </section>

        <section className="w-1/2 space-y-4">
           
            <p className="bg-slate-100 my-2 rounded p-4">  <TbBrandLine/> Parte separada para o comentário do primeiro cliente, entre aspas <br/>
            <strong> NOME DO CLIENTE 1 </strong></p> 
            <p className="bg-slate-100 my-2 rounded p-4"> <TbBrandLine/> Parte separada para o comentário do segundo cliente, entre aspas <br/>
            <strong> NOME DO CLIENTE 2 </strong></p>
            <p className="bg-slate-100 my-2 rounded p-4"> <TbBrandLine/> Parte separada para o comentário do terceiro cliente, entre aspas <br/>
            <strong> NOME DO CLIENTE 3 </strong></p>
            <p className="bg-slate-100 my-2 rounded p-4"> <TbBrandLine/> Parte separada para o comentário do quarto cliente, entre aspas <br/>
            <strong> NOME DO CLIENTE 4 </strong></p>
        </section>
       </div>
    )
}

