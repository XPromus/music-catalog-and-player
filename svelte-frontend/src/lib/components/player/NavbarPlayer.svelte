<script lang="ts">

    let playing: boolean = false;
    function togglePlay() {
        playing = !playing;
    }

</script>

<div class="flex items-center px-4 py-2 mt-5">
    <div class="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
        <button class="w-full px-4 py-1 text-white transition-colors duration-300 transform bg-neutral-600 focus:outline-none sm:w-auto sm:mx-1 hover:bg-sky-400" >
            <i class="fa-solid fa-backward-step"></i>
        </button>
        <button on:click={togglePlay} class="w-full px-4 py-1 text-white transition-colors duration-300 transform bg-neutral-600 focus:outline-none sm:w-auto sm:mx-1 hover:bg-sky-400" >
            {#if playing}
                <i class="fa-solid fa-play"></i>
            {:else}
                <i class="fa-solid fa-pause"></i>
            {/if}
        </button>
        <button class="w-full px-4 py-1 text-white transition-colors duration-300 transform bg-neutral-600 focus:outline-none sm:w-auto sm:mx-1 hover:bg-sky-400" >
            <i class="fa-solid fa-forward-step"></i>
        </button>
    </div>
</div>

<style>

</style>