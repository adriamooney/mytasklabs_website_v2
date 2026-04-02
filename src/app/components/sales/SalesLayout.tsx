import { Outlet } from 'react-router';
import { SalesHeader } from './SalesHeader';
import { SalesFooter } from './SalesFooter';
import { ScrollToTop } from '../ScrollToTop';
import { SeoHead } from '../SeoHead';

export function SalesLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SeoHead />
      <ScrollToTop />
      <SalesHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SalesFooter />
    </div>
  );
}
