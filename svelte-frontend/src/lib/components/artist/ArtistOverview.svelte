<script lang="ts">

    import * as ArtistAPI from "../../api/artistAPI";
    import ArtistCard from "./ArtistCard.svelte";
    
    async function getData() {
        const artists = await ArtistAPI.getAllArtists();
        return artists;
    }

</script>

<div class="w-full h-full dark:bg-neutral-700">
    <div class=" grid grid-cols-7 gap-5 p-5">
        {#await getData()}
            <div class="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 ">
                <div class="border-t-transparent border-solid animate-spin rounded-full border-sky-400 border-8 h-32 w-32"></div>
            </div>
        {:then data}
            {#each data as artist }
                <ArtistCard artistData="{artist}"/>
            {/each}
        {/await}
    </div>
</div>

<style>

</style>