/* eslint-disable react-hooks/exhaustive-deps */
// libs
import { useEffect, useMemo } from "react";
import { wrapper, store } from "src/redux/store";
import { Provider, useDispatch } from "react-redux";
import { Inter } from "@next/font/google";
// hook
import useTranslate from "src/hooks/useStranslate";
// action
import { updateLocale } from "src/redux/actions/locale";
// layout
import MainLayout from "src/layouts/MainLayout";
// styles
import "antd/dist/antd.css";
import "normalize.css";
import "styles/globals.css";

const inter = Inter({ subsets: ["latin"], style: "normal" });

const MyApp = ({ Component, pageProps }) => {
  const translate = useTranslate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateLocale({ translate }));
  }, [translate, dispatch]);

  const children = useMemo(
    () => <Component {...pageProps} />,
    [Component, pageProps]
  );
  return (
    <Provider store={store}>
      <MainLayout className={inter.className}>{children}</MainLayout>
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
