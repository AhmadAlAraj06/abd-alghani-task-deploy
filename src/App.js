import React from 'react';
import { Route } from 'react-router-dom';
import  Header from "../src/components/header";
import  Navigation from "../src/components/navigation";
import Main from "./components/main";
import  "./App.css";
const App = () => {
	return (
		<div>
			<Header/>
			<Navigation/>
			<Main/>
		
	
	</div>
	)
};

export default App;
