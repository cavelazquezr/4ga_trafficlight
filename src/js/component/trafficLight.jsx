import React, {useState} from "react";

//include images into your bundle

//create your first component
const TrafficLight = () => {

	let [colorRed, setSelectedRed] = useState("");
	let [colorYellow, setSelectedYellow] = useState("");
	let [colorGreen, setSelectedGreen] = useState("");

	const glowRender = (aux) => {
		if(aux==="red"){
			setSelectedRed("selected");
			setSelectedYellow("");
			setSelectedGreen("");
		}
		else if(aux==="yellow"){
			setSelectedRed("");
			setSelectedYellow("selected");
			setSelectedGreen("");
		}
		else if(aux==="green"){
			setSelectedRed("");
			setSelectedYellow("");
			setSelectedGreen("selected");
		}
	}

	const changeColor=(event)=>{
		let aux = event.target.id;
		glowRender(aux);
	}

	const randomColor = () => {
		const trafficLights = ["red", "yellow", "green"];

		let randomColor = trafficLights[Math.floor(Math.random()*3)];

		console.log(randomColor)

		glowRender(randomColor)
	};
	
	return (
		<div className="d-flex justify-content-center flex-column">
		<div className="trafficTop"></div>
		<div className="container">
			<div onClick={changeColor} id="red" className={`red light ${colorRed}`}></div>
			<div onClick={changeColor} id="yellow" className={`yellow light ${colorYellow}`}></div>
			<div onClick={changeColor} id="green" className={`green light ${colorGreen}`}></div>
		</div>

		<button onClick={randomColor} type="button" className="btn btn-dark w-25 m-auto mt-2">Random</button>
		</div>
	);
};

export default TrafficLight;
