import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { isIOS, isMobile } from "react-device-detect";
import asyncComponent from "util/asyncComponent";

import appURLs from "../../appURLs/app-gerardg";

import scssStyles from "../../styles/app_starter/scss/main.scss";

class App extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route
          exact
          path={`${match.url}`}
          component={asyncComponent(() => import("./routes/Landing"))}
        />

        {/* NOT FOUND */}

        <Route
          component={asyncComponent(() =>
            import("components/materialUI/Error404")
          )}
        />
      </Switch>
    );
  }
}

const mapStateToProps = ({ landing }) => {
  return {};
};
export default withRouter(connect(mapStateToProps)(App));
