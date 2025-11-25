import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const { nav, ...base } = baseOptions();
  return (
    <div id="landing-page">
      <DocsLayout
        tree={source.pageTree}
        {...base}
        nav={{ ...nav, mode: 'top' }}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
