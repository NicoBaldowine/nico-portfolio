import { ColorProvider } from '../context/ColorContext';
import { PasswordModalProvider } from '../context/PasswordModalContext';
import MainLayout from '../components/MainLayout';
import Projects from '../components/Projects';
import PasswordModal from '../components/PasswordModal';

export default function Home() {
  return (
    <ColorProvider>
      <PasswordModalProvider>
        <MainLayout />
        <Projects />
        <PasswordModal />
      </PasswordModalProvider>
    </ColorProvider>
  );
}
