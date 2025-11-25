import { FeaturesSection } from './components/features/features.component';
import { GetStartedSection } from './components/get-started/get-started.component';
import { HeroSection } from './components/hero-section/hero-section';
import { IntegrationsSection } from './components/integrations/integrations.component';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center">
      <HeroSection/>
      <GetStartedSection/>
      <FeaturesSection/>
      <IntegrationsSection/>
    </div>
  );
}
