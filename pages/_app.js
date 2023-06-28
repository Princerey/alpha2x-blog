import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import '../assets/css/style.css';
import { createContext } from 'react';
import { fetchAPI } from '../lib/api';
import { getStrapiMedia } from '../lib/media';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme/theme';

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps, global }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      // Add your custom logic here
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  if (!global) {
    console.log("Error testing");
    return <div>Loading...</div>; // or render a loading state if desired
  }

  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.favicon)}
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalContext.Provider value={global}>
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </ThemeProvider>
    </>
  );
};

export async function getServerSideProps({ Component, ctx }) {
  let pageProps = {};

  if (Component.getServerSideProps) {
    pageProps = await Component.getServerSideProps(ctx);
  }

  try {
    const globalRes = await fetchAPI('/global', {
      populate: {
        favicon: '*',
        defaultSeo: {
          populate: '*',
        },
      },
    });

    pageProps.global = globalRes.data.attributes;
  } catch (error) {
    console.log('Error fetching global data:', error);
  }

  return { props: { pageProps, global: pageProps.global } };
}

export default MyApp;
