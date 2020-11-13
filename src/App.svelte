<script>
	import API from "./services/api";
	import { onMount } from "svelte";

	// Get the data from the api, after the page is mounted.
	onMount(async () => {
		console.log("onMount!");
	});

	let name = "world";
	let count = 0;
	let todos = {};
	let steps = [];

	async function handleClick() {
		count += 1;
		todos = await API.get(count);
		console.log(todos);

		console.log("step1...");
		steps.push({name: "step1", result: "..."});
		steps = steps;
		await API.step1();
		steps[0] = {name: "step1", result: "[SUCCESS]"};

		console.log("step2...");
		steps.push({name: "step2", result: "..."});
		steps = steps;
		await API.step2();
		steps[1] = {name: "step2", result: "[SUCCESS]"};

		console.log("step3...");
		steps.push({name: "step3", result: "..."});
		steps = steps;
		await API.step3();
		steps[2] = {name: "step3", result: "[KO]"};

		console.log("step4...");
		steps.push({name: "step4", result: "..."});
		steps = steps;
		await API.step4();
		steps[3] = {name: "step4", result: "[SUCCESS]"};

		console.log("FINISH!");
	}
</script>

<h1>Hello {name}!</h1>

<button on:click={handleClick}> Count </button>

<p>Sequence: {count}</p>

<p>Id: {todos.id ?? ''}</p>
<p>Title: {todos.title ?? ''}</p>

<ul>
	{#each steps as { name , result }}
		<li>{name} - {result}</li>
	{/each}
</ul>
