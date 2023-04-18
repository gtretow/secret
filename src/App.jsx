import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from "./Routes";
import { Wrapper } from "./styles/Wrapper";

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <AppRoutes />
    </Wrapper>
  );
}

export default App;
