import instagramIcon from './asset/instagram.png';
import "./globals.css";


export const metadata = {
  title: "Curiculum Vitae",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
