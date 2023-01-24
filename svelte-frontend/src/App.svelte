<script lang="ts">

    import { onMount } from "svelte";
    import { pb } from "./lib/api/pocketbase";
    import { openPage } from "./lib/store/pageStore";

    import AlbumCreator from "./lib/components/album/AlbumCreator.svelte";
    import AlbumOverview from "./lib/components/album/AlbumOverview.svelte";
    import ArtistCreator from "./lib/components/artist/ArtistCreator.svelte";
    import ArtistOverview from "./lib/components/artist/ArtistOverview.svelte";
    import EmptyPage from "./lib/components/EmptyPage.svelte";
    import Sidebar from "./lib/components/Sidebar.svelte";
    import SongCreator from "./lib/components/songs/SongCreator.svelte";
    import SongOverview from "./lib/components/songs/SongOverview.svelte";
    import TopBar from "./lib/components/TopBar.svelte";

    let openPageValue;
    openPage.subscribe(value => {
        openPageValue = value;
    });

    onMount(async () => {
        await pb.admins.authWithPassword('hilgi45@gmail.com', '&e9U!UWnj&vNLonm#Di8');
    });

</script>

<main>
    <div class="flex flex-row w-screen h-screen overflow-hidden">
        <Sidebar />
        <div class="flex flex-col">
            <TopBar />
            <div class="overflow-y-auto h-screen">
                {#if openPageValue === 0}
                    <SongOverview />
                {:else if openPageValue === 1}
                    <SongCreator />
                {:else if openPageValue === 2}
                    <AlbumOverview />
                {:else if openPageValue === 3}
                    <AlbumCreator />
                {:else if openPageValue === 4}
                    <ArtistOverview />
                {:else if openPageValue === 5}
                    <ArtistCreator />
                {:else}
                    <EmptyPage />
                {/if}
            </div>
            
        </div>
    </div>
</main>

<style>

</style>