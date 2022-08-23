// redux
import { wrapper, store } from "src/redux/store";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
// style
import "styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default wrapper.withRedux(MyApp);
