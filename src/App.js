import Blog from "./component/Blog";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import { BrowserRouter, Route,Switch } from "react-router-dom"
import Detail from "./component/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/blog" component={Blog} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
