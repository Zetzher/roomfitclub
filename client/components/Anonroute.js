function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

function Anonroute(_ref) {
  var Component = _ref.component,
      isLoggedin = _ref.isLoggedin,
      rest = _objectWithoutProperties(_ref, ["component", "isLoggedin"]);

  return React.createElement(Route, Object.assign({}, rest, {
    render: function render(props) {
      return !isLoggedin ? React.createElement(Component, props) : React.createElement(Redirect, { to: "/" });
    }
  }));
}

export default withAuth(Anonroute);