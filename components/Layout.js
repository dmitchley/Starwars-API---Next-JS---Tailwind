import React from "react";

import style from "../styles/Layout.module.css";
// layout component
export default function Layout({ children }) {
  return <div className={style.container}>{children}</div>;
}
