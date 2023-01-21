<script lang="ts">
    export let state: boolean = false;
</script>

{#if state}
    <div class="text-white">
        <i class="fa-solid fa-thumbs-up"></i>
    </div>
{:else}
    <div class="text-white">
        <i class="fa-regular fa-thumbs-up"></i>
    </div>
{/if}

<style>

</style>