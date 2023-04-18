import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from "./Routes";
import { Wrapper } from "./styles/Wrapper";
import { useSelector } from "react-redux";

function App() {
  const { isLogged } = useSelector((state) => state.user);

  return (
    <Wrapper>
      <GlobalStyles />
      <AppRoutes isLogged={isLogged} />
    </Wrapper>
  );
}

export default App;
