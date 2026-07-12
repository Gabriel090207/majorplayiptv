import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;