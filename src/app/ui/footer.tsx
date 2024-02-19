import Link from "next/link";

const Footer = () => {

  /* Variable that stores the values for todays date */
  const currentDate = new Date();

  return (
    <footer className="footer">
      <small>
        Copyright &copy; {currentDate.getFullYear()} CREATOR TXN
      </small>
    </footer>
  );
}

export default Footer;