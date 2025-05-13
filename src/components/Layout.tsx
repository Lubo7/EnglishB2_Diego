import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const title = getPageTitle(location.pathname);

  // Update document title
  React.useEffect(() => {
    document.title = `${title} | B2 English Prep`;
  }, [title]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function getPageTitle(pathname: string): string {
  switch (pathname) {
    case '/':
      return 'Home';
    case '/week-one':
      return 'Week 1';
    case '/week-two':
      return 'Week 2';
    case '/resources':
      return 'Resources';
    case '/about':
      return 'About';
    default:
      return 'B2 English Preparation';
  }
}

export default Layout;