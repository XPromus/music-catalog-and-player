<script lang="ts">
    import SongCard from "./SongCard.svelte";
    export let data;
</script>

<div class="grid grid-cols-7 gap-5 p-5 max-h-min">
    {#each data as song }
        <SongCard artistData="{song.artist}" songData="{song.song}"/>
    {/each}
</div>

<style>

</style>