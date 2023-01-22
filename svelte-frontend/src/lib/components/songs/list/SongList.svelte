<script lang="ts">
    import SongListItem from "./SongListItem.svelte";
    export let data;
</script>

<ul class="list-none p-5 max-h-min">
    {#each data as song }
        <SongListItem songData="{song}"/>
    {/each}
</ul>

<style>

</style>