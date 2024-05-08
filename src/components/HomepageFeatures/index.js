import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import StonePebble from '@site/static/img/stone_pebble.svg';
import StoneLearn from '@site/static/img/stone_learn.svg';
import StoneFoundation from '@site/static/img/stone_foundation.svg';

const FeatureList = [
  {
    title: 'Quick Start for Beginners',
    imgSrc: './img/stone_pebble.svg', // Assuming the SVGs are in the public/img folder
    description: (
      <>
        Start your Quality Assurance journey with easy-to-follow tutorials and practical guides.
      </>
    ),
  },
  {
    title: 'Dive Deep into QA Principles',
    imgSrc: './img/stone_learn.svg',
    description: (
      <>
        Explore essential QA principles and techniques through in-depth articles and <code>learning materials</code>.
      </>
    ),
  },
  {
    title: 'Build Quality into Your Future',
    imgSrc: './img/stone_foundation.svg',
    description: (
      <>
        Learn how to integrate quality practices into your development process, ensuring a solid foundation for future projects.
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgSrc} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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