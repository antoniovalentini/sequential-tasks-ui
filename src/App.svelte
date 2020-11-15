<script>
  import API from "./services/api";
  import ListItem from "./components/ListItem.svelte";
  import { fade } from 'svelte/transition';

  let finished = false;
  let queue = [];

  let steps = [
    () => API.step1(),
    () => API.step2(),
    () => API.step3(),
    () => API.step4(),
  ];

  async function handleClick() {
    queue = [];
    finished = false;

    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      const stepName = `Step ${i + 1}`;

      queue.push({ name: stepName, result: "..." });
      queue = queue;

      var result = await step();

      queue[i] = { name: stepName, result: `${result}` };
    }

    finished = true;
  }
</script>

<style>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css");
</style>

<div class="ml-2">
  <button class="btn btn-secondary mb-3" on:click={handleClick}>
    Start!
  </button>
  <div class="row">
    <div class="col-md-3">
      <ul class="list-group mb-3">
        {#each queue as { name, result }}
          <ListItem {name} {result} />
        {/each}
      </ul>
    </div>
  </div>
  {#if finished}
  <h2 transition:fade>FINISH!</h2>
{/if}
  
</div>
