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
    
    import ModalContent from "./lib/components/ModalContent.svelte";
    import Modal from "svelte-simple-modal";

    let openPageValue;
    openPage.subscribe(value => {
        openPageValue = value;
    });

    onMount(async () => {
        await pb.admins.authWithPassword('hilgi45@gmail.com', '&e9U!UWnj&vNLonm#Di8');
    });

</script>

<main>
    <Modal unstyled="{true}" classBg="z-50 fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-gray-900/[.9]" classWindowWrap="relative m-2 max-h-full" classWindow="relative w-auto max-w-max max-h-full my-2 mx-auto rounded shadow-md bg-transparent grid place-items-center" classContent="relative p-2 overflow-hidden" closeButton="{false}">
        <ModalContent />
    </Modal>
    <div class="flex flex-row h-screen w-full">
        <Sidebar />
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
</main>

<style>

</style>