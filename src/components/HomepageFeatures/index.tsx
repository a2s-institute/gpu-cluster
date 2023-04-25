import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '5x AMD ThreadRipper PRO 5965WX',
    Svg: require('@site/static/img/AMD_Threadripper_Pro_Lockup_RGB_Blk.svg').default,
    description: (
      <>
        24 Core CPUs 3.8GHz, 128GB RAM and 8TB Raid 10 storage.
      </>
    ),
  },
  {
    title: '12x NVIDIA GPUs',
    Svg: require('@site/static/img/Nvidia.svg').default,
    description: (
      <>
        4x RTX 3090 24GB and 8x RTX A5000 24GB with the option for GPU sharing or 
        dedicated GPU for users.
      </>
    ),
  },
  {
    title: 'Kubernetes and Jupyter Environment',
    Svg: require('@site/static/img/kubernetes-jupyterhub.svg').default,
    description: (
      <>
        Built using Kubernetes and Jupyter Notebook environment.
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
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
