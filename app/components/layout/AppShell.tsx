'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideShell =
    pathname?.startsWith('/dashboard') || pathname?.startsWith('/login');

  return (
    <>
      {!hideShell && <Header />}
      {!hideShell && <div aria-hidden="true" className="h-[92px] shrink-0" />}
      <div id="contenido" className="flex flex-1 flex-col">
        {children}
      </div>
      {!hideShell && <Footer />}
    </>
  );
}
