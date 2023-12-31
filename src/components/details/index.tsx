import React, { useEffect, useState } from 'react';

export function Details() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimated(true), 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="my-6 text-black text-center space-y-6">
      <p className={`transform ${isAnimated ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-1000 ease-in-out text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>
        A BSB INDUSTRIAL é uma empresa especializada na fabricação de móveis industriais planejados, com mais de quatro anos de experiência no mercado.
      </p>
      <p className={`transform ${isAnimated ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-1000 ease-in-out text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>
        Nossa abordagem combina uma estrutura base robusta, com ferro metalon na chapa 18 e madeira de Pinus tratada. O móvel é finalizado com verniz marítimo em diversas tonalidades, personalizados de acordo com as necessidades de cada cliente.
      </p>
      <p className={`transform ${isAnimated ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-1000 ease-in-out text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>
        Entregamos em todo o Distrito Federal, cobrando somente uma taxa equivalente ao valor da gasolina. Além disso, o pagamento ocorre apenas no ato da entrega, sem sinal prévio ou adiantamento. Garantimos ainda manutenção e garantia em nossos produtos por 6 meses.
      </p>
      <p className={`transform ${isAnimated ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-1000 ease-in-out text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}>
        Todos esses benefícios são oferecidos objetivando a viabilização do negócio e a <strong>satisfação total do cliente.</strong>
      </p>
    </div>
  );
}