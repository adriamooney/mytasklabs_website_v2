import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { SeoHead } from './SeoHead';

export function Layout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead />
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
