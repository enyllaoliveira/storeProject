import React from "react";
import { TbBrandLine, TbCheck } from "react-icons/tb";

export function Recomendations() {
  return (
    <div className="flex flex-col md:flex-row justify-around py-4 space-y-4 md:space-y-0">
      <section className="w-full md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 md:mb-16">
          Mix completo de móveis industriais, personalizados e individuais.
        </h1>
        <ul className="text-lg md:text-xl text-white text-center space-y-4 md:space-y-10">
          <li className="flex items-center justify-center">
            <TbCheck className="mr-1" /> Há mais de quatro anos no mercado.
          </li>
          <li className="flex items-center justify-center">
            <TbCheck className="mr-1" /> Entrega em todo o DF.
          </li>
          <li className="flex items-center justify-center">
            <TbCheck className="mr-1" /> Atendimento personalizado.
          </li>
          <li className="flex items-center justify-center">
            <TbCheck className="mr-1" /> Trabalhos executados em madeira.
          </li>
          <li className="flex items-center justify-center">
            <TbCheck className="mr-1" /> 06 meses de garantia.
          </li>
        </ul>
      </section>

      <section className="w-full md:w-1/2 space-y-4">
        <div className="bg-slate-100 my-2 rounded p-4">
          <TbBrandLine /> A qualidade dos produtos superou minhas expectativas. Percebe-se cuidado e capricho em cada detalhe.
          <p>
            <strong> Zaira Castro </strong>
          </p>
        </div>

        <div className="bg-slate-100 my-2 rounded p-4">
          <TbBrandLine /> "Entrega rápida e antes do prazo prometido. Além disso, a qualidade é impressionante. Super recomendo!
          <p>
            <strong> Enylla Oliveira </strong>
          </p>
        </div>

        <div className="bg-slate-100 my-2 rounded p-4">
          <TbBrandLine /> O fornecedor está sempre disponível para assegurar que meus móveis permaneçam em perfeitas condições. De fato, a manutenção contínua é um grande diferencial. 
          <p>
            <strong> Suzanne Costa </strong>
          </p>
        </div>

        <div className="bg-slate-100 my-2 rounded p-4">
          <TbBrandLine /> O atendimento personalizado faz toda a diferença. Recomendo a todos!
          <p>
            <strong> Eleniza Fagundes </strong>
          </p>
        </div>
      </section>
    </div>
  );
}