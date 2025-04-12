import Title from '@/components/title';
import GradientText from '@/components/gradient-text';
import Button from '@/components/button';
import Image from 'next/image';

import someday from '@/assets/logos/someday.png';
import accent from '@/assets/logos/accent.png';
import irene from '@/assets/logos/irene.png';
import na from '@/assets/logos/na.png';

import chart1 from '@/assets/charts/chart-1.png';
import chart2 from '@/assets/charts/chart-2.png';
import chart3 from '@/assets/charts/chart-3.png';
import chart4 from '@/assets/charts/chart-4.png';
import ChartCard from './chart-card';

const HeroSection = () => {
  return (
    <section className="my-30 landscape:my-20 lg:landscape:my-40 md:my-40 gap-10 md:gap-15 flex w-full flex-col lg:flex-row items-stretch lg:justify-stretch lg:items-start">
      <div className="grow space-y-8 ">
        <Title className="text-4xl/[100%] md:text-6xl/[100%] lg:text-7xl/[100%]">
          Powerful data <br />
          insights <GradientText>for all</GradientText>
        </Title>
        <p className="text-sm lg:text-lg/normal 2xl:text-xl font-light md:max-w-10/12">
          Torch makes data analysis easy for everyone. Visualise key metrics,
          track performance, and discover trends without needing a data science
          background.
        </p>
        <div className="space-y-4 portrait:flex landscape:space-x-4 landscape:block portrait:sm:block landscape:sm:block flex-col sm:space-x-4">
          <Button>Get started</Button>
          <Button variant="secondary">Learn more</Button>
        </div>
        <div className="flex gap-8 gap-y-0 w-fit justify-center sm:flex-nowrap flex-wrap *:object-contain">
          <Image
            className="w-[100px] max-w-1/4"
            src={someday}
            alt="someday logo"
          />
          <Image
            className="w-[90px] max-w-1/4"
            src={accent}
            alt="accent logo"
          />
          <Image className="w-[100px] max-w-1/4" src={irene} alt="irene logo" />
          <Image className="w-[56px] max-w-1/5" src={na} alt="na logo" />
        </div>
      </div>
      <div className="flex bg-dark rounded-3xl gap-4 sm:gap-7 p-6 sm:p-8 lg:p-14 2xl:p-20 grow *:flex *:flex-col *:gap-4 *:sm:gap-7 *:w-1/2">
        <div>
          <ChartCard image={chart1} altImage="chart 1" />
          <ChartCard image={chart3} altImage="chart 3" />
        </div>
        <div>
          <ChartCard
            className="p-4 sm:px-10 2xl:py-4 2xl:px-12"
            image={chart2}
            altImage="chart 2"
          />
          <ChartCard image={chart4} altImage="chart 4" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
