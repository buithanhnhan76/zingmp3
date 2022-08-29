// redux
import { Provider } from "react-redux";
import { translateViAndLogIn } from "src/mocks/stories/initalState/vi";
import { createCustomStore } from "src/redux/store";
// style
import "antd/dist/antd.css";
import "styles/globals.css";

const customStore = createCustomStore(translateViAndLogIn);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={customStore}>
      <Story />
    </Provider>
  ),
];
