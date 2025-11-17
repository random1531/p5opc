import "./header.css"
import Image from "next/image"
import Logo from "../../../../public/logo.png"
export default function header(){
    return(
        <header>
            <Image src={Logo.src} width={200} height={50} alt="Logo fisheye"/>
            <h1>
                Nos photographes
            </h1>
        </header>
    )
}