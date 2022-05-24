import React, { createContext, useMemo, useState } from "react";

export const DicesContext = createContext();

export const Diceprovider = ({ children }) => {
    const [GetData, setGetData] = useState([]);
    const value = useMemo(() => ({ GetData, setGetData }), [GetData, setGetData]);

    return (
        <DicesContext.Provider value={value}>
            {children}
        </DicesContext.Provider>
    );
};