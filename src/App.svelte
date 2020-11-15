<script>
	import API from "./services/api";

	let name = "world";
	let queue = [];

	let steps = [
		() => API.step1(),
		() => API.step2(),
		() => API.step3(),
		() => API.step4(),
	];

	async function handleClick() {

		for (let i = 0; i < steps.length; i++) {
			const step = steps[i];
			const stepName = `step${i+1}`;

			queue.push({ name: stepName, result: "..." });
			queue = queue;

			var result = await step();

			queue[i] = { name: stepName, result: `[${result}]` };
		}

		console.log("FINISH!");
	}
</script>

<h1>Hello {name}!</h1>

<button on:click={handleClick}> Count </button>

<ul>
	{#each queue as { name, result }}
		<li>{name} - {result}</li>
	{/each}
</ul>
