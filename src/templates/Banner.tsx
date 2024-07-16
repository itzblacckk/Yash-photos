import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Follow On Instagram"
      subtitle="→"
      button={
        <Link href="https://www.instagram.com/yashmhatre_625">
          <Button>yashmhatre_625</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
