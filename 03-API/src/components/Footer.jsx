const Footer = () => {
  return (
    <div className="bg-gray-400 fixed left-0 right-0 py-2 bottom-0 text-center font-Lora">
      Internship task provided by{" "}
      <a
        href="https://www.cyberdudenetworks.com/"
        target="blank"
        className="underline hover:text-slate-500 cursor-pointer"
      >
        CyberDude Networks Pvt. Ltd.
      </a>{" "}
      and designed by{" "}
      <a
        href="https://www.linkedin.com/in/gayathri-h-g-2151361ba/"
        target="blank"
        className="underline hover:text-slate-500 cursor-pointer"
      >
        Gayathri H G
      </a>
    </div>
  );
};

export default Footer;
