import axios, { Axios } from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export function DataContextProvider({ children }) {
	const [query, setQuery] = useState("");
	const [unsplashData, setUnsplashData] = useState()
	const [pixabayData, setPixabayData] = useState();
	const handleUnsplashSearch = (e) => {
		axios(`https://api.unsplash.com/search/photos?page=1&per_page=18&query=${query}&client_id=QQp3ol5zJcXuhz-YgezmveX9SFKoBfAARI0wOaDPwyw`, {
			method: 'GET'
		})
		.then((response) => {
			console.log("Query");
			console.log(response)
			setUnsplashData(response.data)
			})
			
	}

	const handlePixabaySearch = () => {

		axios(`https://pixabay.com/api/?key=23026282-2e8d526d4b17c863daf509a85&q=${query}&image_type=photo&page=3&per_page=18`, {
			method: 'GET'

		})
			.then((response) => {
				console.log("QueryPix");
			console.log(response)
				setPixabayData(response.data.hits)
			})
	}

	
	return (
		<DataContext.Provider value={{ query, setQuery, unsplashData, setUnsplashData, pixabayData, setPixabayData, handleUnsplashSearch, handlePixabaySearch}}>
			{children}
		</DataContext.Provider>
	);
}

export function useDataContext() {
	return useContext(DataContext);
}

