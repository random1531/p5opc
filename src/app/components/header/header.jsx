import "./header.css";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import Link from "next/link";

export default function header() {
  return (
    <header>
      <Link href="/">
        <Image
          src={Logo.src}
          width={200}
          height={50}
          alt="Logo fisheye"
          aria-label="retour a l'accueil"
        />
      </Link>

      <h1>Nos photographes</h1>
    </header>
  );
}
