import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Todolist } from "./todolist.js";
import { Todolistold } from "./todolistold";

//create your first component
export function Home() {
	return (
		<>
			<Todolistold />
			<Todolist />
		</>
	);
}
