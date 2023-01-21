<script lang="ts">

    import { onMount } from "svelte";
    import * as SongAPI from "../../api/songAPI";

    export let songData;
    export let artistData;
    let coverImageURL;

    onMount(async () => {
        coverImageURL = SongAPI.getImageURL(songData);
    })

</script>

<div class="bg-white dark:bg-neutral-900 max-w-xs">
    <div class="relative">
        <img class="z-30 aspect-square object-contain w-full bg-neutral-300" src="{coverImageURL}" alt=""/>
        <div class="z-40 absolute bottom-0 right-0 mb-3 mr-6">
            <button type="button" class="py-3 px-3 w-12 h-12 text-md inline-block rounded-full bg-red-600 text-white font-medium leading-tight uppercase shadow-md hover:bg-neutral-700 hover:shadow-lg active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out">
                <i class="fa-solid fa-play"></i>
            </button>
        </div>
    </div>
    <div class="p-6">
        <h5 class="text-white text-xl font-medium">
            {songData.name} 
        </h5>
        <h2 class="text-gray-300 text-sm font-medium mb-2">
            {artistData.name}
        </h2>
        <div class="flex flex-row">
            <div class="mr-1 flex-1">
                <button type="button" class="py-2 inline-block w-full bg-neutral-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-sky-400 hover:shadow-lg active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out">
                    Open
                </button>
            </div>
            <div class="ml-1 flex-1">
                <button type="button" class="py-2 inline-block w-full bg-neutral-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-sky-400 hover:shadow-lg active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out">
                    Edit
                </button>
            </div>
            <div class="flex-none ml-2">
                {#if songData.musicVideoYouTube !== ""}
                    <a href="{songData.musicVideoYouTube}" target="_blank" rel="noreferrer" class="py-2 px-3 inline-block w-full bg-neutral-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-sky-400 hover:shadow-lg active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                {:else}
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a rel="noreferrer" class="py-2 px-3 inline-block w-full bg-neutral-800 text-neutral-700 font-medium text-xs leading-tight uppercase shadow-md">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>

</style>