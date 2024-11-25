import type { Metadata } from "next";
import "./globals.css";
import { ColorProvider } from '../context/ColorContext';
import { PasswordModalProvider } from '../context/PasswordModalContext';
import PasswordModal from '../components/PasswordModal';

export const metadata: Metadata = {
  title: "Nico Baldovino - Product Designer",
  description: "Portfolio of Nico Baldovino, Product Designer with +12 years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PasswordModalProvider>
          <ColorProvider>
            {children}
            <PasswordModal />
          </ColorProvider>
        </PasswordModalProvider>
      </body>
    </html>
  );
}
