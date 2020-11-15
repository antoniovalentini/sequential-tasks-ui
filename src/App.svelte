<script>
  import API from "./services/api";

  let finish = "";
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
      const stepName = `Step ${i + 1}`;

      queue.push({ name: stepName, result: "..." });
      queue = queue;

      var result = await step();

      queue[i] = { name: stepName, result: `${result}` };
    }

    finish = "FINISH!";
  }

  function PickResultColor(msg) {
    if (msg == "...") return "text-muted";
    return msg == "SUCCESS" ? "text-success" : "text-danger";
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
          <li
            class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
              <h6 class="my-0">{name}</h6>
            </div>
            <span class={PickResultColor(result)}>{result}</span>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <h2>{finish}</h2>
</div>
