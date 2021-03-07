import "tailwindcss/dist/tailwind.css";
import "../styles/globals.css";
import { createWrapper } from "next-redux-wrapper";
import { Provider } from "react-redux";
import store from "../redux/store";
import Main from "../components/layouts/main";
import { useEffect } from "react";
import Loader from "../components/partials/loader.partial";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // console.log("Main App");
  });
  return (
    <Provider store={store}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </Provider>
  );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
