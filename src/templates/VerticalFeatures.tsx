import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Our Services"
    description="Discover our range of services tailored to meet your needs. We specialize in app development and website development to help your business thrive in the digital world."
  >
    <VerticalFeatureRow
      title="Yash Photos"
      description="Yash Photos is a sophisticated photo gallery app designed to help you organize, manage, and share your precious memories effortlessly. With Yash Photos, you can create beautiful albums, edit images with advanced tools, and ensure your photos are always safe with our cloud backup feature. Experience the perfect blend of functionality and simplicity with our app."
      image="/logo2.png"
      imageAlt="Yash Photos app illustration"
    />
  </Section>
);

export { VerticalFeatures };
