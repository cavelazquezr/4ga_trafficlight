import React, {useState} from "react";

//include images into your bundle

//create your first component
const TrafficLight = () => {

	let [colorRed, setSelectedRed] = useState("");
	let [colorYellow, setSelectedYellow] = useState("");
	let [colorGreen, setSelectedGreen] = useState("");

	const changeColor=(event)=>{
		let aux = event.target.id;
		
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
	
	return (
		<>
		<div className="trafficTop"></div>
		<div className="container">
			<div onClick={changeColor} id="red" className={`red light ${colorRed}`}></div>
			<div onClick={changeColor} id="yellow" className={`yellow light ${colorYellow}`}></div>
			<div onClick={changeColor} id="green" className={`green light ${colorGreen}`}></div>
		</div>
		</>
	);
};

export default TrafficLight;
