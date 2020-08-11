import React, { Component } from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import "assets/app-gerardg/vendors/style";
import defaultTheme from "./themes/defaultTheme";
import AppLocale from "../../lngProvider";
import localStorageItems from "../../localStorage/app-gerardg";

import AppGerardg from "app/app-gerardg/index";

// import { setInitUrl } from "../../actions/app-gerardg/Auth";

import appURLs from "../../appURLs/app-gerardg";

import RTL from "util/RTL";
import asyncComponent from "util/asyncComponent";

class App extends Component {
  componentWillMount() {}

  render() {
    const { match, location } = this.props;

    const applyTheme = createMuiTheme(defaultTheme);
    const currentAppLocale = AppLocale["en"];

    return (
      <MuiThemeProvider theme={applyTheme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <IntlProvider
            locale={currentAppLocale.locale}
            messages={currentAppLocale.messages}
          >
            <RTL>
              <div className="app-main">
                <Switch>
                  <Route path={`${match.url}`} component={AppGerardg} />
                  <Route
                    component={asyncComponent(() =>
                      import("components/materialUI/Error404")
                    )}
                  />
                </Switch>
              </div>
            </RTL>
          </IntlProvider>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ landing }) => {
  return {};
};

export default connect(mapStateToProps, {})(App);
