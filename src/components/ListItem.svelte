<script>
  export let name;
  export let result;
  $: finished = result != '...';

  import Status from "./ActivityStatus.svelte";
</script>

<li class="list-group-item d-flex justify-content-between lh-condensed">
  <div>
    <h6 class="my-0">{name}</h6>
  </div>
  <Status {finished} {result} />
</li>
