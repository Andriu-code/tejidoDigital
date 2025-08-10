import './WhatsButton.css'

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
        >
            <i className="fab fa-whatsapp"></i>
        </a>
    )
}

export default WhatsAppButton