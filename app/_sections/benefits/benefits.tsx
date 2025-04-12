import SectionTitle from '@/components/section-title';
import GradientText from '@/components/gradient-text';
import Section from '@/components/section';
import BenefitCard from './card';

import iconGrid from '@/assets/icons/icon-grid.png';
import iconCircle from '@/assets/icons/icon-circle.png';
import iconClick from '@/assets/icons/icon-click.png';
import iconStick from '@/assets/icons/icon-stick.png';

const BenefitsSection = () => {
  return (
    <Section>
      <SectionTitle>
        Take action from <GradientText>insights</GradientText>
      </SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-[1fr_80px_1fr] gap-5">
        <BenefitCard
          grow
          icon={iconGrid}
          altIcon="grid"
          title="Easy-to-use dashboards"
          description="Create intuitive, custom dashboards to visualize your most important metrics. No coding or technical skills required."
        />
        <BenefitCard
          icon={iconCircle}
          altIcon="circle"
          title="Real-time data updates"
          description="Keep your teams aligned with real-time data refreshes. Stay on top of changes as they happen, keeping your team informed."
        />
        <BenefitCard
          grow
          icon={iconStick}
          altIcon="stick"
          title="Automated reports"
          description="Set up automated reports to be delivered directly to your inbox. Save time and focus on making decisions, not creating reports."
        />
        <BenefitCard
          icon={iconClick}
          altIcon="click"
          title="Collaborative analytics"
          description="Share dashboards and reports with your team for seamless collaboration. Comment, edit, and review data insights together."
        />
      </div>
    </Section>
  );
};

export default BenefitsSection;
