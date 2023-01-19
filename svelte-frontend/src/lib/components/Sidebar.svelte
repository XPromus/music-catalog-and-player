<script lang="ts">
    
    import NavbarPlayer from "./player/NavbarPlayer.svelte";
    import { openPage } from "../store/pageStore";

    let openPageValue;
    openPage.subscribe(value => {
        openPageValue = value;
    })

    function setOpenPage(page: number) {
        openPage.set(page);
    }

</script>

<div class="flex flex-col w-64 h-screen px-4 py-8 bg-white  dark:bg-neutral-900">
    <h2 class="text-3xl font-semibold text-gray-800 dark:text-white">
        <i class="fa-solid fa-compact-disc"></i>
        Music App
    </h2>
    <div class="flex flex-col justify-between flex-1 mt-6">
        <nav>
            <NavbarPlayer />
            <hr class="my-6 border-gray-200 dark:border-gray-600" />

            {#if openPageValue === 0}
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="focus flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 bg-gray-700 hover:bg-gray-100 dark:hover:bg-sky-400 dark:hover:text-gray-200 hover:text-gray-700 hover:font-bold" href="#">
                    <i class="fa-solid fa-music"></i>
                    <span class="mx-4 font-medium">Song Overview</span>
                </a>
            {:else}
                <!-- svelte-ignore a11y-invalid-attribute -->    
                <a on:click={() => setOpenPage(0)} class="focus flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-sky-400 dark:hover:text-gray-200 hover:text-gray-700 hover:font-bold" href="#">
                    <i class="fa-solid fa-music"></i>
                    <span class="mx-4 font-medium">Song Overview</span>
                </a>
            {/if}

            {#if openPageValue === 1}
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 bg-gray-700 hover:bg-gray-100 dark:hover:bg-sky-400 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    <i class="fa-solid fa-plus"></i>
                    <span class="mx-4 font-medium">Create Song</span>
                </a>
            {:else}
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a on:click={() => setOpenPage(1)} class="focus flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-sky-400 dark:hover:text-gray-200 hover:text-gray-700 hover:font-bold" href="#">
                    <i class="fa-solid fa-plus"></i>
                    <span class="mx-4 font-medium">Create Song</span>
                </a>
            {/if}
            
            <hr class="my-6 border-gray-200 dark:border-gray-600" />

            {#if openPageValue === 2}
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="focus flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 bg-gray-700 hover:bg-gray-100 dark:hover:bg-sky-400 dark:hover:text-gray-200 hover:text-gray-700 hover:font-bold" href="#">
                    <i class="fa-solid fa-record-vinyl"></i>
                    <span class="mx-4 font-medium">Album Overview</span>
                </a>
            {:else}    
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a on:click={() => setOpenPage(2)} class="focus flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-sky-400 dark:hover:text-gray-200 hover:text-gray-700 hover:font-bold" href="#">
                    <i class="fa-solid fa-record-vinyl"></i>
                    <span class="mx-4 font-medium">Album Overview</span>
                </a>
            {/if}

            {#if openPageValue === 3}
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 bg-gray-700 hover:bg-gray-100 dark:hover:bg-sky-400 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    <i class="fa-solid fa-plus"></i>
                    <span class="mx-4 font-medium">Create Album</span>
                </a>
            {:else}
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a on:click={() => setOpenPage(3)} class="focus flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-sky-400 dark:hover:text-gray-200 hover:text-gray-700 hover:font-bold" href="#">
                    <i class="fa-solid fa-plus"></i>
                    <span class="mx-4 font-medium">Create Album</span>
                </a>
            {/if}

            <hr class="my-6 border-gray-200 dark:border-gray-600" />

            {#if openPageValue === 4}
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 bg-gray-700 hover:bg-gray-100 dark:hover:bg-sky-400 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    <i class="fa-solid fa-user"></i>
                <span class="mx-4 font-medium">Artist Overview</span>
                </a>
            {:else}
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a on:click={() => setOpenPage(4)} class="focus flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-sky-400 dark:hover:text-gray-200 hover:text-gray-700 hover:font-bold" href="#">
                    <i class="fa-solid fa-user"></i>
                <span class="mx-4 font-medium">Artist Overview</span>
                </a>
            {/if}

            {#if openPageValue === 5}
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 bg-gray-700 hover:bg-gray-100 dark:hover:bg-sky-400 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    <i class="fa-solid fa-plus"></i>
                    <span class="mx-4 font-medium">Create Artist</span>
                </a>
            {:else}
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a on:click={() => setOpenPage(5)} class="focus flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-sky-400 dark:hover:text-gray-200 hover:text-gray-700 hover:font-bold" href="#">
                    <i class="fa-solid fa-plus"></i>
                    <span class="mx-4 font-medium">Create Artist</span>
                </a>
            {/if}
        </nav>
    </div>
</div>

<style>

</style>