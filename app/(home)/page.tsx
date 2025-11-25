import { FeaturesSection } from './components/features/features.component';
import { GetStartedSection } from './components/get-started/get-started.component';
import { IntegrationsSection } from './components/integrations/integrations.component';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center">
      <GetStartedSection/>
      <FeaturesSection/>
      <IntegrationsSection/>
    </div>
  );
}
