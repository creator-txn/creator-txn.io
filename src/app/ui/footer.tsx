import Link from "next/link";

const Footer = () => {

  /* Variable that stores the values for todays date */
  const currentDate = new Date();

  return (
    <footer className="footer mt-5">
      <small>
        {currentDate.getFullYear()} Copyright &copy;  CREATOR TXN
      </small>
    </footer>
  );
}

export default Footer;