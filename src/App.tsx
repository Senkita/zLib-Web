import { advSearchCtx, bookCtx } from "@ctx";
import {
    advSearchReducer,
    bookReducer,
    initAdvSearchState,
    initBookState,
} from "@reducers";
import RouteTable from "@routes";
import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";

const App: () => JSX.Element = (): JSX.Element => {
    const [advSearchState, setAdvSearchState] = useReducer(
        advSearchReducer,
        initAdvSearchState
    );

    const [bookState, setBookState] = useReducer(bookReducer, initBookState);

    return (
        <advSearchCtx.Provider value={{ advSearchState, setAdvSearchState }}>
            <bookCtx.Provider
                value={{
                    bookState,
                    setBookState,
                }}
            >
                <BrowserRouter>
                    <RouteTable />
                </BrowserRouter>
            </bookCtx.Provider>
        </advSearchCtx.Provider>
    );
};

export default App;
