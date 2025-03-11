import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  imageSrc: string;  // Changed from Svg to imageSrc
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '奥克兰暴雨，我拖着行李手足无措',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    imageSrc: require('@site/static/img/airport.jpg').default,
    description: (
      <>
        晚上八点落地，手机彻底失灵。我拖着行李，在机场出口的 food truck 旁一脸懵逼，不知道车在哪里。看到『NZ 生存指南』，发现这本该是我出发前就知道的事。
      </>
    ),
  },
  {
    title: '基督城房东不能说的秘密',
    imageSrc: require('@site/static/img/rents.jpg').default,
    description: (
      <>
        小范签租房合同时，不知道押金可以砍 50%；Leo 花 200刀买的二手家具，在 Trademe 上有人免费转让。这些用刀乐换来的经验，现在浓缩成可搜索的『NZ 生存指南』
      </>
    ),
  },
  {
    title: '从湖南到汉密尔顿，找到归属感',
    imageSrc: require('@site/static/img/noodle.jpg').default,
    description: (
      <>
        长沙姑娘阿玲想做碗粉时，发现 Countdown 的食材最接近家乡味；东北的阿彪找到了钓点，现在每周都去 Waikato 蹲鳟鱼。『NZ 生存指南』正在和你一同续写新篇章。
      </>
    ),
  },
];

// function Feature({title, Svg, description}: FeatureItem) {
function Feature({title, imageSrc, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <img className={styles.featureSvg} src={imageSrc} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
