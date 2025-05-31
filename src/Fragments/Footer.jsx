const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="flex justify-center items-center gap-6">
        <a
          href="https://wa.me/6282196978033"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-green-400"
        >
          <img src="https://img.icons8.com/ios-filled/24/ffffff/whatsapp.png" alt="WhatsApp" />
          Chat via WhatsApp
        </a>
        <a
          href="https://www.linkedin.com/in/vito-julianto-a8091135b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
