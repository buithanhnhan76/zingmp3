// redux
import { wrapper, store } from "src/redux/store";
import { Provider } from "react-redux";
// style
import "styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default wrapper.withRedux(MyApp);
