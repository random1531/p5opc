import "./globals.css";
import Header from "../app/components/header/header";
import { DM_Sans } from 'next/font/google'

export const metadata = {
  title: "Fisheye",
  description: "Trouvez votre photogrpahe",
};

const dmSans = DM_Sans({
  subsets:['latin'],
  variable:'--font-dm-sans',
})

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={dmSans.variable}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
