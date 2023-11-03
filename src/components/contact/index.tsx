import { BsWhatsapp } from "react-icons/bs";

export function Contact() {
  return (
    <div className="flex justify-center items-center my-6">
      <button className="bg-green-500 hover:bg-lime-500 text-white text-xl p-3 hover:p-4 rounded-lg inline-flex items-center space-x-4">
        <BsWhatsapp className="text-white mr-2" /> 
        Faça agora o seu orçamento pelo WhatsApp
      </button>
    </div>
  );
}