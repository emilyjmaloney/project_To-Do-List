import React, { useState, useEffect } from "react";

export function Todolist() {
	const [newTask, setNewTask] = useState("");
	const [tasks, setTasks] = useState([]);
	function handleChange(event) {
		setNewTask(event.target.value);
	}
	async function handleEnter(event) {
		console.log("hello");
		if (event.key == "Enter") {
			var newTasks = [
				...tasks,
				{
					label: newTask,
					done: false
				}
			];
			let response = await fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/mle123todolist",
				{
					method: "PUT",
					body: JSON.stringify(newTasks),
					headers: {
						"Content-Type": "application/json"
					}
				}
			);
			if (!response.ok) {
				throw Error(response.statusText);
			}
			response = await fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/mle123todolist"
			);
			if (!response.ok) {
				throw Error(response.statusText);
			}
			let todolist = await response.json();
			setTasks(todolist);
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
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/mle123todolist")
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(todolist => setTasks(todolist))
			.catch(error => console.log(error));
	}, []);

	return (
		<div className="container new-font">
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
								<li>{task.label}</li>
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
