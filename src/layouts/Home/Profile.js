import MolarHeadshotImg from 'assets/molar-headshot.jpeg';
import MolarHeadshotImgLarge from 'assets/molar-headshot.png';
import MolarHeadshotImgPlaceholder from 'assets/molar-headshot-placeholder.jpeg';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Link } from 'components/Link';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="G'Day!" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I&apos;m RJ, aka MolarFox: a Melbourne-based software engineer, amateur radio operator, and tinkerer. 
      In my day-to-day here in my current role at <Link href="https://www.lexer.io/">Lexer</Link>, I regularly bounce from software engineer to devops engineer, data scientist, and fullstack webapp dev to build, maintain, and oversee the dataflows through our system and its 85+ integrations.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      In my spare time you&apos;ll find me hiking up hills with my QRP radio gear, 3D printing my growing army of plastic foxes, playing <Link href="https://steamcommunity.com/id/MolarFox/">video games</Link>, listening to <Link href="https://bandcamp.com/molarfox">music</Link>, and making bottled chaos in my workshop.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Here&apos;s my <Link href="/404">gallery</Link>, my <Link href="https://blog.molarfox.io/">blog</Link>, and my list of <Link href="/404">preferred tools and gear</Link>. Chuck me a message, I&apos;d love to hear from you!
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={MolarHeadshotImgPlaceholder}
                  srcSet={[MolarHeadshotImg, MolarHeadshotImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Digital artwork of me / my fox character, Molar. He's depicted in this headshot in his bright orange / dark grey fur, with goggles on his head, a smiling expression, and a leather jacket on. Artwork by efi"
                />
                <svg
                  aria-hidden="true"
                  width="135"
                  height="765"
                  viewBox="0 0 135 765"
                  className={styles.svg}
                  data-visible={visible}
                >
                  {/* <use href={`${profileKatakana}#katakana-profile`} /> */}
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
