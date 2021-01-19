import React,{createContext,useReducer} from 'react'
import {Root} from "../pages"
import {theme,reducer,initialState} from "../util"
import {ThemeProvider} from 'styled-components';
import {BrowserRouter,Route} from "react-router-dom"
import {GlobalStyle} from "../components"


export const Context = createContext()


export function App() {
	const [state, dispatch] = useReducer(reducer,initialState);

	return (
		<Context.Provider value={{state,dispatch}}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />

				<BrowserRouter>
					<Route path="/" exact component={Root} />
				</BrowserRouter>

			</ThemeProvider>
		</Context.Provider>
	);
}


