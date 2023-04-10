import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const randomise_disciplines = true
const disciplines = [
  'Radio Operator', 
  'Fox',
  'Photographer',
  'Guitarist',
  'Maker',
  'Modder',
  '3D Modeler',
  'Tinkerer',
  '3D Printerist',
  'Python Dev',
  'Ruby Dev',
  'Scala Dev',
  'Fullstack Dev',
  'Kotlin Dev',
  'DevOps',
  'Rust Dev',
  'C++ Dev',
  'AWS Cloud Dev',
  'Arduino Dev'
];

function RandomiseIterable(arr) {
  return arr
  .map(value => ({ value, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ value }) => value)
}

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const [display_disciplines, randomiseDisciplines] = useState(disciplines)

  const intro = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, details];

    randomiseDisciplines(randomise_disciplines ? RandomiseIterable(disciplines) : disciplines)

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Software & ECSE Engineer"
        description="Portfolio and personal site of MolarFox / RJ: 
          A Melbourne based software engineer with a passion for learning, and an eye for optimisation.
          Interests include Amateur Radio, 3D Printing, Cybersecurity, Music, 4x4 Off-Roading, Hiking, and Tinkering.
          "
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={display_disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
