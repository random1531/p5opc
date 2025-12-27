import "./globals.css";
import Header from "../app/components/header/header";

export const metadata = {
  title: "Fisheye",
  description: "Trouvez votre photogrpahe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
