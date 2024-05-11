import { ConfigProvider } from "antd";
import AuthProvider from "./provider/authProvider";
import Routes from "./routers";
import variables from '~/components/GlobalStyles/GlobalStyles.scss';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: variables.primaryColor,
          borderRadius: 2,
        },
      }}
    >
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
