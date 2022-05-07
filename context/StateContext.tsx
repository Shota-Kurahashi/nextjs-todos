import React, { createContext, useState } from "react";

// eslint-disable-next-line no-self-compare
export const StateContext = createContext<any | null>(null);

export default function StateContextProvider(props: any) {
  const [selectedTask, setSelectedTask] = useState({ id: 0, title: "" });

  return (
    <StateContext.Provider
      value={{
        selectedTask,
        setSelectedTask,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
