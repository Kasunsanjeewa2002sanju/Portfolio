import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === 'dark' || !theme && prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  const navItems = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'services',
    label: 'Services'
  }, {
    id: 'portfolio',
    label: 'Portfolio'
  }, {
    id: 'achievements',
    label: 'Achievements'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-gradient">KASUN SANJEEWA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground'}`}>
                {item.label}
              </button>)}
            <Button variant="outline" size="icon" onClick={toggleTheme} className="ml-4">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors hover:text-primary ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground'}`}>
                  {item.label}
                </button>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;