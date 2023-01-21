<script lang="ts">

    import * as SongAPI from "../../api/songAPI";
    import { getRecord } from "../../api/artistAPI";
    import SongCard from "./SongCard.svelte";
    import LoadingCircle from "../LoadingCircle.svelte";
    import TopBar from "../TopBar.svelte";

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

</script>

<div class="h-full w-full bg-neutral-700">
    <TopBar />
    <div class=" grid grid-cols-7 gap-5 p-5">
        {#await getData()}
            <LoadingCircle />
        {:then data}
            {#each data as song }
                <SongCard artistData="{song.artist}" songData="{song.song}"/>
            {/each}
        {/await}
    </div>
</div>

<style>

</style>