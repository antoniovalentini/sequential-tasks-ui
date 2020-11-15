<script>
  export let name;
  export let result;
  $: finished = result != '...';

  import Status from "./ActivityStatus.svelte";
  import { fade } from 'svelte/transition';
</script>

<li class="list-group-item d-flex justify-content-between lh-condensed"
    transition:fade>
  <div>
    <h6 class="my-0">{name}</h6>
  </div>
  <Status {finished} {result} />
</li>
