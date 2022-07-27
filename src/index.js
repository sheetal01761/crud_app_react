import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Editbook from "./components/Editbook";
import Booklist from "./components/Booklist";
import Addbook from "./components/Addbook";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/books" exact component={Booklist} />
            <Route path="/books/new" component={Addbook} />
            <Route path="/books/:id/edit" component={Editbook} />
            <Redirect to="/books" />
          </Switch>
        </Router>
        {/* <Abc/> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
