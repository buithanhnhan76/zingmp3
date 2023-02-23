/* eslint-disable react-hooks/exhaustive-deps */
// libs
import { useEffect, useMemo } from "react";
import { wrapper, store } from "src/redux/store";
import { Provider, useDispatch } from "react-redux";
import localFont from "@next/font/local";
// hook
import useTranslate from "src/hooks/useStranslate";
// action
import { updateLocale } from "src/redux/actions/locale";
// layout
import MainLayout from "src/layouts/MainLayout";
// style
import "antd/dist/antd.css";
import "styles/globals.css";

const myFont = localFont({ src: "../assets/fonts/inter/Inter-Black.ttf" });

const MyApp = ({ Component, pageProps }) => {
  const translate = useTranslate();
  const dispatch = useDispatch();
  const children = useMemo(
    () => <Component {...pageProps} />,
    [Component, pageProps]
  );
  useEffect(() => {
    dispatch(updateLocale({ translate }));
  }, [translate, dispatch]);
  return (
    <Provider store={store}>
      <MainLayout className={myFont.className}>{children}</MainLayout>
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
