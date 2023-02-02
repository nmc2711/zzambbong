import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'jotai';

import type { AppPropsWithLayout } from '../type';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <div>
      {getLayout(
        <Provider>
          <NextUIProvider>
            <Component {...pageProps} />
          </NextUIProvider>
        </Provider>
      )}
    </div>
  );
};
export default App;
