<script lang="ts">

    import { pageSettings } from "../store/pageStore";
    import type { pageSettingsInterface } from "../store/pageStore";
    import { DisplayMode, ColorMode } from "../store/pageStore";

    let colorMode: ColorMode = ColorMode.Dark;
    let displayMode: DisplayMode = DisplayMode.Card;

    const changeColorMode = () => {
        if (colorMode == ColorMode.Dark) {
            colorMode = ColorMode.Light;
        } else {
            colorMode=  ColorMode.Dark;
        }
        setPageSettings();
    }

    const changeDisplayMode = () => {
        if (displayMode == DisplayMode.Card) {
            displayMode = DisplayMode.List;
        } else {
            displayMode=  DisplayMode.Card;
        }
        setPageSettings();
    }

    const setPageSettings = () => {
        const data: pageSettingsInterface = {
            displayMode: displayMode,
            colorMode: colorMode
        };
        pageSettings.set(data);
    }

</script>

<nav class="bg-neutral-900">
    <div class="mx-auto max-full pl-10 mr-3">
        <div class="relative flex h-16 items-center justify-end">
            <div class="bg-neutral-800 px-1 py-1">
                <input class="text-white bg-neutral-700 py-1 px-3" type="search" name="songSearch" placeholder="Search">
                <button class="text-white bg-neutral-700 hover:bg-sky-400 px-3 py-1 ml-3">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
            <button class="text-white bg-neutral-700 hover:bg-sky-400 px-3 py-1 ml-3 transition duration-150 ease-in-out">
                <i class="fa-solid fa-arrow-down-wide-short"></i>
            </button>
            <button on:click={changeDisplayMode} class="text-white bg-neutral-700 hover:bg-sky-400 px-3 py-1 ml-3 transition duration-150 ease-in-out">
                {#if displayMode}
                    <i class="fa-solid fa-bars"></i>
                {:else}
                    <i class="fa-solid fa-grip"></i>
                {/if}
            </button>
            <button on:click={changeColorMode} class="text-white bg-neutral-700 hover:bg-sky-400 px-3 py-1 ml-3 transition duration-150 ease-in-out">
                {#if colorMode}
                    <i class="fa-solid fa-moon"></i>
                {:else}
                    <i class="fa-solid fa-sun"></i>
                {/if}
            </button>
            <button class="text-white bg-neutral-700 hover:bg-sky-400 px-3 py-1 ml-3 transition duration-150 ease-in-out">
                <i class="fa-solid fa-user"></i>
            </button>
        </div>
    </div>
</nav>

<style>

</style>