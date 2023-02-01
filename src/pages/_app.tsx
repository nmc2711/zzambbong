import { NextUIProvider } from '@nextui-org/react';
import type { AppPropsWithLayout } from '../type';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <div>
      {getLayout(
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      )}
    </div>
  );
};
export default App;
