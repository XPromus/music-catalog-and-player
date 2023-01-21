<script lang="ts">
    import { onMount } from "svelte";

    import * as AlbumAPI from "../../api/albumAPI";
    import EditIcon from "../icons/EditIcon.svelte";

    export let albumData;
    export let artistData;
    let coverImageURL;

    onMount(async () => {
        coverImageURL = AlbumAPI.getImageURL(albumData);
    });

</script>

<div id="card" class="bg-white dark:bg-neutral-900 max-w-xs">
    <img class="aspect-square object-contain w-full bg-neutral-300" src="{coverImageURL}" alt=""/>
    <div class="p-6">
        <h5 class="text-white text-xl font-medium">
            {albumData.name} 
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
                    <EditIcon />
                </button>
            </div>
        </div>
    </div>
</div>


<style>

</style>