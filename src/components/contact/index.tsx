import { BsWhatsapp } from "react-icons/bs"

export function Contact() {
  const handleWhatsappClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    let link = "https://web.whatsapp.com/send?phone=5561991368793"

    if (isMobile) {
      link = "whatsapp://send?phone=5561991368793"
    }

    window.open(link, '_blank', 'noopener,noreferrer')
  };

  return (
    <div className="flex justify-center items-center my-6">
      <a 
        href="https://web.whatsapp.com/send?phone=5561991368793" 
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 hover:bg-lime-500 text-white text-sm md:text-xl p-2 md:p-3 hover:p-4 rounded-lg inline-flex items-center space-x-2 md:space-x-4"
        onClick={handleWhatsappClick}  
      >
        <BsWhatsapp className="text-white" /> 
        <span className="md:inline">Faça agora o seu orçamento pelo WhatsApp</span>
      </a>
    </div>
  )
}