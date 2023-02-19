// libs
import { useEffect, useMemo } from "react";
import { wrapper, store } from "src/redux/store";
import { Provider, useDispatch } from "react-redux";
// hook
import useTranslate from "src/hooks/useStranslate";
// action
import { updateLocale } from "src/redux/actions/authenticationAction";
// layout
import MainLayout from "src/layouts/MainLayout";
// style
import "antd/dist/antd.css";
import "styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const translate = useTranslate();
  const dispatch = useDispatch();
  const children = useMemo(() => <Component {...pageProps} />, [Component]);
  useEffect(() => {
    dispatch(updateLocale({ translate }));
  }, [translate]);
  return (
    <Provider store={store}>
      <MainLayout>{children}</MainLayout>
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
