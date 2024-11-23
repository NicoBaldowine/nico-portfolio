import { ColorProvider } from '../context/ColorContext';
import MainLayout from '../components/MainLayout';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <ColorProvider>
      <MainLayout />
      <Projects />
    </ColorProvider>
  );
}
