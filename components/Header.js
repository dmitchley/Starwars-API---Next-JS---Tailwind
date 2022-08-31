import Link from "next/link";
import logo from "../public/logo.png";
import Image from "next/image";
// logo component
const Header = () => (
  <div>
    <Link href="/">
      <Image src={logo} width="250px" height="200px" />
    </Link>
  </div>
);

export default Header;
