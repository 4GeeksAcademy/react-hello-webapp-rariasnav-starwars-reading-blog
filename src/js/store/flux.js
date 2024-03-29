const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			urlBase: "https://swapi.dev/api/",
			characters: [],
			starships: [],
			planets: [],
			likes: "favorites",
			likesColor: "white"
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: async () => {
				try {					
					const response = await fetch(`${getStore().urlBase}/people`)
					const data = await response.json()
					
					if(response.ok){
						setStore({ characters : data.results })
					}
				} catch (error) {
					
				}
			},
			getStarships: async () => {
				try {
					const response = await fetch(`${getStore().urlBase}/starships`)
					const data = await response.json()

					if(response.ok){
						setStore({ starships : data.results })
					}
				} catch (error) {
					
				}
			},
			getPlanets: async () => {
				try {
					const response = await fetch(`${getStore().urlBase}/planets`)
					const data = await response.json()
					
					if(response.ok){
						setStore({ planets : data.results })
					}
				} catch (error) {
					
				}
			},
			likesColor: () => {
				const store = getStore();

				if(store.likesColor == "white"){
					setStore({ likesColor: "red" })
				}else{
					setStore({likesColor: "white" })
				}
			},
			likesCount: (itemName) => {
				setStore({ likes: itemName })
			}
		}
	};
};

export default getState;
