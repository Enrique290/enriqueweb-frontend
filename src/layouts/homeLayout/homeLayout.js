import React from "react";
import { Route, Switch } from "react-router-dom";

import MenuTop from "../../components/homeLayout/menuTop";
import Footer from "../../components/homeLayout/footer";
import "./homeLayout.css";

export default function LayoutBasic({ routes }) {
  return (
    <>
      <MenuTop />

      <div className="site-drawer-render-in-current-wrapper">
        <LoadRoutes routes={routes} />
      </div>

      <Footer />
    </>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
