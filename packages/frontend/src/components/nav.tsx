import { cn } from '@/lib/utils';
import { HomeIcon, LinkIcon, UserIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { name: 'Refs', href: '/ref', icon: <LinkIcon /> },
  { name: 'Home', href: '/', icon: <HomeIcon /> },
  { name: 'You', href: '/you', icon: <UserIcon /> },
];

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex w-full items-center pb-2 pt-4">
      {links.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={cn(
            'flex flex-1 flex-col items-center gap-2',
            pathname === link.href ? 'text-white' : 'text-muted-foreground',
          )}
        >
          <div className="h-6 w-6">{link.icon}</div>
          <p className="text-sm font-medium">{link.name}</p>
        </Link>
      ))}
    </nav>
  );
};
