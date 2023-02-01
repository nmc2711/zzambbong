import type { AppPropsWithLayout } from '../type';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return <div>{getLayout(<Component {...pageProps} />)}</div>;
};
export default App;
