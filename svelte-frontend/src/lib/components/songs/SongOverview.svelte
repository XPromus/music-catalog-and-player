<script lang="ts">

    import * as SongAPI from "../../api/songAPI";
    import { getRecord } from "../../api/artistAPI";
    import LoadingCircle from "../LoadingCircle.svelte";

    import { DisplayMode, pageSettings } from "../../store/pageStore";
    import SongGrid from "./grid/SongGrid.svelte";
    import SongList from "./list/SongList.svelte";

    async function getData() {
        const songs = await SongAPI.getAllSongs();
        const artists = await Promise.all(songs.map(async (song) => {
            return getRecord(song.artist).then((data) => data);
        }));
        const combinedData = songs.map((song, i) => {
            return {
                "song": song,
                "artist": artists[i]
            };
        });
        return combinedData;
    }

    let displayMode: DisplayMode;
    pageSettings.subscribe(value =>{
        displayMode = value.displayMode;
    })

</script>

<div id="songView" class="bg-neutral-800 p-5 min-h-full">
    {#await getData()}
        <LoadingCircle />
    {:then data}
        {#if displayMode === DisplayMode.Card}
            <SongGrid data="{data}"/>
        {:else if displayMode === DisplayMode.List}
            <SongList data="{data}" />
        {/if}
    {/await}
</div>

<style>

    #songView {
        background-image: url("./assets/endless-constellation.svg");
    }

</style>