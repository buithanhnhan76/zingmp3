// libs
import { useEffect } from "react";
import { wrapper, store } from "src/redux/store";
import { Provider, useDispatch } from "react-redux";

import "antd/dist/antd.css";
// hook
import useTranslate from "src/hooks/useStranslate";
// action
import { updateLocale } from "src/redux/actions/authenticationAction";
// layout
import MainLayout from "src/layouts/MainLayout";
// style
import "styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const translate = useTranslate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateLocale({ translate }));
  }, [translate]);
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
