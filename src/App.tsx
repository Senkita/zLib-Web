import { advSearchCtx, bookCtx, themeCtx } from "@ctx";
import {
    advSearchReducer,
    bookReducer,
    initAdvSearchState,
    initBookState,
    initThemeState,
    themeReducer,
} from "@reducers";
import RouteTable from "@routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, theme } from "antd";
import { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";

const { defaultAlgorithm, darkAlgorithm } = theme;

const App: () => JSX.Element = (): JSX.Element => {
    const queryClient = new QueryClient();
    const [themeState, setThemeState] = useReducer(
        themeReducer,
        initThemeState
    );
    const [advSearchState, setAdvSearchState] = useReducer(
        advSearchReducer,
        initAdvSearchState
    );
    const [bookState, setBookState] = useReducer(bookReducer, initBookState);

    return (
        <ConfigProvider
            theme={{
                algorithm: themeState.isLight
                    ? defaultAlgorithm
                    : darkAlgorithm,
            }}
        >
            <themeCtx.Provider value={{ themeState, setThemeState }}>
                <QueryClientProvider client={queryClient}>
                    <advSearchCtx.Provider
                        value={{ advSearchState, setAdvSearchState }}
                    >
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
                </QueryClientProvider>
            </themeCtx.Provider>
        </ConfigProvider>
    );
};

export default App;
