<script lang="ts">

    import * as AlbumAPI from "../../api/albumAPI";
    import { getRecord } from "../../api/artistAPI";
    import LoadingCircle from "../LoadingCircle.svelte";
    import TopBar from "../TopBar.svelte";
    import AlbumCard from "./AlbumCard.svelte";

    async function getData() {
        const albums = await AlbumAPI.getAllAlbums();
        const artists = await Promise.all(albums.map(async (album) => {
            return getRecord(album.artist).then((data) => data);
        }));
        const combinedData = albums.map((album, i) => {
            return {
                "album": album,
                "artist": artists[i]
            };
        });
        return combinedData;
    }

</script>

<div id="albumView" class="w-full h-full dark:bg-neutral-700">
    <TopBar />
    <div class=" grid grid-cols-7 gap-5 p-5 max-h-min">
        {#await getData()}
            <LoadingCircle />
        {:then data}
            {#each data as album, i }
                <AlbumCard artistData="{album.artist}" albumData="{album.album}"/>
            {/each}
        {/await}
    </div>
</div>

<style>

    #albumView {
        background-image: url("./assets/endless-constellation.svg");
    }

</style>