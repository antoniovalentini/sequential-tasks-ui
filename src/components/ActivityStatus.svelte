<script>
  export let finished;
  export let result;

  function PickResultColor(msg) {
    if (msg == "...") return "text-muted";
    return msg == "SUCCESS" ? "text-success" : "text-danger";
  }
</script>

{#if finished}
  <span class={PickResultColor(result)}>{result}</span>
{:else}
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
{/if}
