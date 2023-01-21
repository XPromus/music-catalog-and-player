<script lang="ts">

    import * as ArtistAPI from "../../api/artistAPI";
    import LoadingCircle from "../LoadingCircle.svelte";
    import TopBar from "../TopBar.svelte";
    import ArtistCard from "./ArtistCard.svelte";
    
    async function getData() {
        const artists = await ArtistAPI.getAllArtists();
        return artists;
    }

</script>

<div class="w-full h-full dark:bg-neutral-700">
    <TopBar />
    <div class=" grid grid-cols-7 gap-5 p-5">
        {#await getData()}
            <LoadingCircle />
        {:then data}
            {#each data as artist }
                <ArtistCard artistData="{artist}"/>
            {/each}
        {/await}
    </div>
</div>

<style>

</style>