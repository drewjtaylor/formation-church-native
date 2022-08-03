import Main from "./Main";
import { Provider } from 'react-redux';
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/Loading";

export default function App() {
  return <Provider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
              <Main />
          </PersistGate>
  </Provider>;
}