import { Outlet } from 'react-router';
import { SalesHeader } from './SalesHeader';
import { SalesFooter } from './SalesFooter';
import { ScrollToTop } from '../ScrollToTop';

export function SalesLayout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ScrollToTop />
      <SalesHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SalesFooter />
    </div>
  );
}
