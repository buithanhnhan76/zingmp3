// redux
import { wrapper, store } from "src/redux/store";
import { Provider } from "react-redux";
// layout
import MainLayout from "src/layouts/MainLayout";
// style
import "antd/dist/antd.css";
import "styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </Provider>
);

export default wrapper.withRedux(MyApp);
