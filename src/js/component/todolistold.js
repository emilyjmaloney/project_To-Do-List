import React, { useState } from "react";

export function Todolistold() {
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState(["brew coffee", "walk the dog"]);
	function handleChange(event) {
		setNewTask(event.target.value);
	}
	function handleEnter(event) {
		if (event.key == "Enter") {
			setTasks([...tasks, newTask]);
			setNewTask("");
		}
	}
	function handleDelete(index) {
		var filteredTasks = tasks.filter((task, i) => {
			// if (i !=) {return true;} else {return false;}
			return index != i;
		});
		setTasks(filteredTasks);
	}

	return (
		<div className="container">
			<h1>{"To Dos"}</h1>
			<div className="col-8">
				<input
					className="form-control"
					type="text"
					placeholder="Add a task"
					onChange={handleChange}
					value={newTask}
					onKeyPress={handleEnter}
				/>
				<ul>
					{tasks.map((task, index) => {
						return (
							<div
								key={index}
								className="d-flex justify-content-between">
								<li>{task}</li>
								<i
									className="fas fa-trash"
									onClick={() => handleDelete(index)}
								/>
							</div>
						);
					})}
				</ul>
				<div>
					<small>{tasks.length + " tasks left"}</small>
				</div>
			</div>
		</div>
	);
}
