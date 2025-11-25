import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const { nav, ...base } = baseOptions();
  return (
    <DocsLayout
      tree={source.pageTree}
      tabMode="navbar"
      {...base}
      nav={{ ...nav, mode: 'top' }}
    >
      {children}
    </DocsLayout>
  );
}
