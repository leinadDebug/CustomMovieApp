import React, { children } from "react";

export default function Main({children}) {
  //This is the section containing all the component below NavBar
//   since listbox and WatchBox are both children of the main section, prop drill them using the {children} prop then create their component

  return (
    <div className="flex gap-7 p-7">
      {children}
    </div>
  );
}
