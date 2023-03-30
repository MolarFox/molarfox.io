import 'layouts/App/reset.css';
import 'layouts/App/global.css';

import { Navbar } from 'components/Navbar';
import { ThemeProvider } from 'components/ThemeProvider';
import { tokens } from 'components/ThemeProvider/theme';
import { VisuallyHidden } from 'components/VisuallyHidden';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { useFoucFix, useLocalStorage } from 'hooks';
import styles from 'layouts/App/App.module.css';
import { initialState, reducer } from 'layouts/App/reducer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, createContext, useEffect, useReducer } from 'react';
import { msToNum } from 'utils/style';
import { ScrollRestore } from '../layouts/App/ScrollRestore';

export const AppContext = createContext({});

const repoPrompt = "\u0020\u0020\u0020\u005f\u002c\u002d\u003d\u0027\u0022\u002d\u002e\u005f\u005f\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u002f\u005c\u005f\u002f\u005c\u0020\u0020\u000a\u0020\u0020\u0020\u0060\u002d\u002e\u007d\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0060\u003d\u002e\u005f\u002c\u002e\u002d\u003d\u003d\u002d\u002e\u005f\u002e\u002c\u0020\u0020\u005e\u0020\u005e\u002e\u005f\u002c\u0020\u0020\u0020\u002d\u002f\u0059\u0069\u0070\u0020\u0079\u0061\u0070\u0020\u0079\u006f\u0070\u002f\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0060\u002d\u002e\u005f\u005f\u0020\u0020\u0020\u005f\u002c\u002d\u002e\u0020\u0020\u0020\u0029\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u005f\u002c\u002e\u002d\u0027\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0060\u0022\u0020\u0020\u0020\u0020\u0020\u0047\u002e\u002e\u006d\u002d\u0022\u005e\u006d\u0060\u006d\u0027\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u000a\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u0020\u007e\u0020\u004d\u006f\u006c\u0061\u0072\u0046\u006f\u0078\u0020\u0032\u0030\u0031\u0039";
const App = ({ Component, pageProps }) => {
  const [storedTheme] = useLocalStorage('theme', 'dark');
  const [state, dispatch] = useReducer(reducer, initialState);
  const { route, asPath } = useRouter();
  const canonicalRoute = route === '/' ? '' : `${asPath}`;
  useFoucFix();

  useEffect(() => {
    console.info(`${repoPrompt}\n\n`);
  }, []);

  useEffect(() => {
    dispatch({ type: 'setTheme', value: storedTheme || 'dark' });
  }, [storedTheme]);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <ThemeProvider themeId={state.theme}>
        <LazyMotion features={domAnimation}>
          <Fragment>
            <Head>
              <link
                rel="canonical"
                href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${canonicalRoute}`}
              />
            </Head>
            <VisuallyHidden
              showOnFocus
              as="a"
              className={styles.skip}
              href="#MainContent"
            >
              Skip to main content
            </VisuallyHidden>
            <Navbar />
            <main className={styles.app} tabIndex={-1} id="MainContent">
              <AnimatePresence exitBeforeEnter>
                <m.div
                  key={route}
                  className={styles.page}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    type: 'tween',
                    ease: 'linear',
                    duration: msToNum(tokens.base.durationS) / 1000,
                    delay: 0.1,
                  }}
                >
                  <ScrollRestore />
                  <Component {...pageProps} />
                </m.div>
              </AnimatePresence>
            </main>
          </Fragment>
        </LazyMotion>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
