// App routes
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomePage from "./containers/home/home";
import SignUp from "./containers/signup/signup";
import AddWord from "./containers/addWord/addWord";
import LetterBased from "./containers/dictionary/letterDict";
import Browse from "./containers/browse/browse";
import Categories from "./containers/categories/categories";
import CommentWord from "./containers/comment/comment";
import Report from "./containers/reportWord/reportWord";
import Search from "./containers/search/search";
import { useSelector } from "react-redux";
// import { auth } from "./config";

// Main component defining the application routes
export default function Routes() {
  return (
    <Router>
      {/* Route for the Home page */}
      <Route exact path="/" component={HomePage} />

      {/* Route for the Signup page */}
      <Route exact path="/signup" component={SignUp} />

      {/* Route for the Browse page */}
      <Route exact path="/browse" component={Browse} />

      {/* Route for searching based on language and keyword */}
      <Route path="/search/:language/:keyword" component={Search} />

      {/* Route for the Categories page */}
      <Route exact path="/Categories" component={Categories} />

      {/* Private Route for adding a word, requires authentication */}
      <PrivateRoute path="/add">
        <AddWord />
      </PrivateRoute>

      {/* Route for the Letter-Based Dictionary */}
      <Route path="/letter" component={LetterBased} />

      {/* Route for commenting on a word */}
      <Route path="/comment" component={CommentWord} />

      {/* Route for reporting a word */}
      <Route path="/report" component={Report} />
    </Router>
  );
}

// PrivateRoute component to handle authentication for protected routes
function PrivateRoute({ children, ...rest }) {
  // Using useSelector to get authentication status from Redux state
  const auth = useSelector((state) => state.firebase.auth);
  console.log(auth);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        // Checking if the user is authenticated, if not, redirect to signup
        auth.uid ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
