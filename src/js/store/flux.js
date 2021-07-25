const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiURL: "https://swapi.dev/api",
			people: [],
			vehicule: [],
			planets: [],
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
			]
		},
		actions: {
			fetchPeople: () => {
				const store = getStore();
				fetch(`${store.apiURL}/people/`)
					.then(response => response.json())
					.then(data => (store.people = data))
					.then(() => {
						store.people = store.people.results;
						console.log(store.people);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			//Fetch using async

			// fetchPeople: async () => {
			// 	const store = getStore();
			// 	const dataPeople = await fetch(`${getStore().apiURL}/people/`);
			// 	const jsonResponse = await dataPeople.json();
			// 	store.people = jsonResponse.results;
			// 	console.log(store.people);
			// },

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
			}
		}
	};
};

export default getState;
