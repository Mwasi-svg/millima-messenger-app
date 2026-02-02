import { Hero } from '../components/hero';
import { Features } from '../components/features';
import { FAQ } from '../components/faq';
import { PlatformCTA } from '../components/platform_cta';

export const HomePage = () => {
    return (
        <div className="w-full">
            <Hero />
            <Features />
            <PlatformCTA />
            <FAQ />
        </div>
    );
};
