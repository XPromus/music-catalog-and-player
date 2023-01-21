<script lang="ts">

    import { onMount } from "svelte";
    import * as ArtistAPI from "../../api/artistAPI";
    import EditIcon from "../icons/EditIcon.svelte";

    export let artistData;
    let imageURL;

    onMount(async () => {
        imageURL = ArtistAPI.getImageURL(artistData);
        console.log(artistData);
    });

</script>

<div id="card" class="drop-shadow-lg bg-white dark:bg-neutral-900 max-w-xs">
    <img src="{imageURL}" alt=""/>
    <div class="p-6">
        <h5 class="text-white text-xl font-medium mb-2">{artistData.name}</h5>
        <div class="flex flex-row">
            <div class="mr-1 flex-1">
                <button type="button" class="py-2 inline-block w-full bg-neutral-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-sky-400 hover:shadow-lg active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out">
                    Open
                </button>
            </div>
            <div class="ml-2 flex-none">
                <button type="button" class="py-2 px-3 inline-block w-full bg-neutral-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-sky-400 hover:shadow-lg active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out">
                    <EditIcon />
                </button>
            </div>
            <div class="flex-none ml-1">
                {#if artistData.artistPage !== ""}
                    <a href="{artistData.artistPage}" target="_blank" rel="noreferrer" class="py-2 px-3 inline-block w-full bg-neutral-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-sky-400 hover:shadow-lg active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                {:else}
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <a rel="noreferrer" class="py-2 px-3 inline-block w-full bg-neutral-800 text-neutral-700 font-medium text-xs leading-tight uppercase shadow-md">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>

</style>