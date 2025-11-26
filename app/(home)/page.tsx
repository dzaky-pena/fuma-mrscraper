import { FeaturesSection } from './components/features/features.component';
import { GetStartedSection } from './components/get-started/get-started.component';
import { HeroSection } from './components/hero-section/hero-section';
import { IntegrationsSection } from './components/integrations/integrations.component';
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/docs/getting-started/overview");
  // return (
  //   <div className="flex flex-col justify-center text-center">
  //     <HeroSection/>
  //     <GetStartedSection/>
  //     <FeaturesSection/>
  //     <IntegrationsSection/>
  //   </div>
  // );
}
