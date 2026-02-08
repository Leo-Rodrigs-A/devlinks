import ProfilePic from '@/components/ProfilePic';
import Links from '@/components/Links';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-blue-500 text-2xl font-bold">Meu app</h1>
      <ProfilePic />
      <Links />
      <Footer />
    </div>
  );
}
