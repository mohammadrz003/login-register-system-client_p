import React from "react";
import Header from "../header/Header";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header className={props.headerClass} />
      {props.children}
    </React.Fragment>
  );
};

export default Layout;
