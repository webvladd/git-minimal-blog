import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";

import s from "./style/App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={s.App}>
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage}/>
        <Route path="/blog" component={BlogPage}/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
