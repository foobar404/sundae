import React,{createContext,useReducer} from 'react'
import {Root,Auth,Tone} from "../pages"
import {theme,reducer,initialState} from "../util"
import {ThemeProvider} from 'styled-components';
import {BrowserRouter,Route} from "react-router-dom"
import {GlobalStyle,ProtectedRoute} from "../components"


export const Context = createContext()


export function App() {
	const [state, dispatch] = useReducer(reducer,initialState);

	return (
		<Context.Provider value={{state,dispatch}}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />

				<BrowserRouter>
					<ProtectedRoute path="/" exact component={Root} />
					<Route path="/auth" component={Auth}/>
					<Route path="/tone" component={Tone}/>
				</BrowserRouter>

			</ThemeProvider>
		</Context.Provider>
	);
}


