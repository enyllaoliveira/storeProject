import React from "react";
// import { IconName } from "react-icons/tfi";

export function Recomendations() {
    return (
       <div className="flex flex-row justify-between">
        <section >
        <h1> Mix completo de móveis em madeira, de forma personalizada e única para o cliente</h1>
        <p> Há quatro anos no mercado </p>
        <p> Entrega em toda Brasília </p>
        <p> Atendimento personalizado </p>
        <p> Trabalhos executados em madeira </p>
        <p> XX anos de garantia</p>
        </section>

        <section>
            <p className="bg-slate-100 my-2 rounded"> Parte separada para o comentário do primeiro cliente, entre aspas <br/>
            <strong> NOME DO CLIENTE 1 </strong></p>
            <p className="bg-slate-100 my-2 rounded"> Parte separada para o comentário do segundo cliente, entre aspas <br/>
            <strong> NOME DO CLIENTE 2 </strong></p>
            <p className="bg-slate-100 my-2 rounded"> Parte separada para o comentário do terceiro cliente, entre aspas <br/>
            <strong> NOME DO CLIENTE 3 </strong></p>
            <p className="bg-slate-100 my-2 rounded"> Parte separada para o comentário do quarto cliente, entre aspas <br/>
            <strong> NOME DO CLIENTE 4 </strong></p>
        </section>
       </div>
    )
}
