"use client";
type ReactComponent = {
  children: React.FC<React.ReactNode>;
};
import { createContext, useState } from "react";

export const NavContext = createContext<any | null>(null);

// const NavProvider: React.FC<React.ReactNode> = (props: ReactComponent) => {
//   return <NavContext.Provider>{props.children}</NavContext.Provider>;
// };
