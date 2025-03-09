import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '轻松起步零烦恼',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        刚到新西兰？我们为你准备了详细的生活入门指南，从手机卡到银行开户，一站解决所有问题，让你轻松适应新生活。
      </>
    ),
  },
  {
    title: '实用攻略与技巧',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        从租房买车到找兼职工作，这里汇集了最新、最实用的技巧与攻略，帮助你快速掌握必备技能，省时省力。
      </>
    ),
  },
  {
    title: '快速了解融入当地',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        助你掌握当地文化与社交礼仪，快速融入社群，建立自信与归属感，从容开启你的新西兰生活。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
