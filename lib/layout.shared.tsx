import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <img 
            src="/favicon.svg" 
            alt="MrScraper" 
            className="h-6 w-6"
          />
          <span>MrScraper</span>
        </div>
      ),
    },
    links: [
      {
        text: 'Support',
        url: '/support',
      },
      {
        text: 'Dashboard',
        url: '/dashboard',
      },
    ],
  };
}
