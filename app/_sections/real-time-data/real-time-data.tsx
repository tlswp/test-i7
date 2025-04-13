import Image from 'next/image';
import SectionTitle from '@/components/section-title';
import GradientText from '@/components/gradient-text';
import Section from '@/components/section';
import Card from './card';

import chart5 from '@/assets/charts/chart-5.png';
import iconZap from '@/assets/icons/icon-zap.png';
import iconSetting from '@/assets/icons/icon-settings.png';
import iconCollab from '@/assets/icons/icon-collab.png';

const RealTimeDataSection = () => {
  return (
    <Section>
      <SectionTitle subtitle="Data at your fingertips">
        Real-time insights for <br />
        faster <GradientText>decisions</GradientText>
      </SectionTitle>

      <div className="bg-dark rounded-2xl p-4 md:p-20">
        <div className="bg-secondary-bg rounded-xl p-2 md:p-10">
          <Image src={chart5} alt="chart 5" />
        </div>
      </div>
      <div className="grid grid-cols-1 portrait:grid-cols-1 portrait:sm:grid-cols-3 landscape:sm:grid-cols-3 gap-10 md:gap-10">
        <Card
          icon={iconZap}
          altIcon="zap"
          title="Instant updates"
          description="Always stay up-to-date with live data flowing directly into your dashboard. Track changes as they happen."
        />
        <Card
          icon={iconSetting}
          altIcon="settings"
          title="Customisable views"
          description="Tailor your dashboards to show the metrics that matter most. Create multiple views for different team members or purposes."
        />
        <Card
          icon={iconCollab}
          altIcon="collab"
          title="Collaborative tools"
          description="Easily share your insights with the team. Comment, edit, or collaborate on reports without leaving the platform."
        />
      </div>
    </Section>
  );
};

export default RealTimeDataSection;
