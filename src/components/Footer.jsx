function Footer() {
  return (
    <footer className="bg-white py-6 border-t border-gray-200 text-center">
      <p className="text-gray-600 font-medium">
        Mira Imóveis - Todos os direitos reservados - {new Date().getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;