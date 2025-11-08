const Footer = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center mb-6">
        <h1 className="text-3xl font-bold">Gadget Heaven</h1>
        <p className="text-base font-medium opacity-60">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>

      <footer className="footer sm:footer-horizontal p-10 w-11/12 sm:w-2/3 mx-auto border-t-2 border-gray-300">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shopping & Delivery</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
