<script lang="ts">
    import SongCard from "./SongCard.svelte";
    import TestSongCard from "./TestSongCard.svelte";
    export let data;
</script>

<div class="grid lg:grid-cols-7 gap-5">
    {#each data as song }
        <!--<SongCard artistData="{song.artist}" songData="{song.song}"/>-->
        <TestSongCard artistData="{song.artist}" songData="{song.song}"/>
    {/each}
</div>

<style>

</style>