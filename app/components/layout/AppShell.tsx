'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideShell = pathname?.startsWith('/dashboard');

  return (
    <>
      {!hideShell && <Header />}
      {children}
      {!hideShell && <Footer />}
    </>
  );
}
