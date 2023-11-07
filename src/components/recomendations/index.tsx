import React from "react";
import { TbBrandLine } from "react-icons/tb";
import { TbCheck } from "react-icons/tb";


export function Recomendations() {
    return (
        <div className="flex flex-row justify-around py-4 space-x-2">
        <section className="w-1/2">
          <h1 className="text-4xl font-bold text-white text-center mb-16">
            Mix completo de móveis industriais, personalizados e individuais.
          </h1>
          <ul className="text-xl text-white text-center space-y-10">
            <li className="flex items-center justify-center">
              <TbCheck className="mr-1"/> Há mais de quatro anos no mercado.
            </li>
            <li className="flex items-center justify-center ">
              <TbCheck className="mr-1"/> Entrega em todo o DF.
            </li>
            <li className="flex items-center justify-center">
              <TbCheck className="mr-1"/> Atendimento personalizado.
            </li>
            <li className="flex items-center justify-center ">
              <TbCheck className="mr-1" /> Trabalhos executados em madeira.
            </li>
            <li className="flex items-center justify-center">
              <TbCheck className="mr-1"/>06 meses de garantia.
            </li>
          </ul>
        </section>

        <section className="w-1/2 space-y-4">
           
            <p className="bg-slate-100 my-2 rounded p-4">  <TbBrandLine/> Parte separada para o comentário do primeiro cliente. 
            <p> <strong> NOME DO CLIENTE 1 </strong></p> </p>
            
            
            <p className="bg-slate-100 my-2 rounded p-4"> <TbBrandLine/> Parte separada para o comentário do segundo cliente. 
            <p> <strong> NOME DO CLIENTE 1 </strong></p> </p>
           
            <p className="bg-slate-100 my-2 rounded p-4"> <TbBrandLine/> Parte separada para o comentário do terceiro cliente. <br/>
            <p> <strong> NOME DO CLIENTE 3 </strong></p> </p>

            <p className="bg-slate-100 my-2 rounded p-4"> <TbBrandLine/> Parte separada para o comentário do quarto cliente. <br/>
            <p> <strong> NOME DO CLIENTE 4 </strong></p> </p>
        </section>
       </div>
    )
}

