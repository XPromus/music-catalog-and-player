<script lang="ts">

    import { onMount } from "svelte";
    import * as SongAPI from "../../../api/songAPI";
    import EditIcon from "../../icons/EditIcon.svelte";
    import LikeIcon from "../../icons/LikeIcon.svelte";

    import Modal from "svelte-simple-modal";
    import ModalContent from "../../ModalContent.svelte";

    export let songData;
    export let artistData;
    let coverImageURL;

    let modal;
    const openModal = () => {
        const videoID: string = songData.musicVideoYouTube.split("=")[1];
        const videoURL = "https://www.youtube-nocookie.com/embed/" + videoID;
        modal.openModal(songData.name, videoURL);
    }

    let likeSongState: boolean = false;
    const likeSong = async () => {
        likeSongState = !likeSongState;
        const data = {
            "like": likeSongState
        }
        await SongAPI.updateSongData(songData.id, data);
    }

    onMount(async () => {
        coverImageURL = SongAPI.getImageURL(songData);
        likeSongState = songData.like;
    });

</script>

<div class="bg-white dark:bg-neutral-900 max-w-xs drop-shadow-md">
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
            <div class="ml-2 flex-none">
                <button on:click={likeSong} type="button" class="py-2 px-3 inline-block w-full bg-neutral-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-sky-400 hover:shadow-lg active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out">
                    <LikeIcon state="{likeSongState}"/>
                </button>
            </div>
            <div class="ml-1 flex-none">
                <button type="button" class="py-2 px-3 inline-block w-full bg-neutral-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-sky-400 hover:shadow-lg active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out">
                    <EditIcon />
                </button>
            </div>
            <div class="flex-none ml-1">
                {#if songData.musicVideoYouTube !== ""}
                    <button on:click={openModal} type="button" class="py-2 px-3 inline-block w-full bg-neutral-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-red-600 hover:shadow-lg active:bg-neutral-800 active:shadow-lg transition duration-150 ease-in-out">
                        <i class="fa-brands fa-youtube"></i>
                    </button>
                    <Modal unstyled="{true}" classBg="z-50 fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-gray-900/[.9]" classWindowWrap="relative m-2 max-h-full" classWindow="relative w-auto max-w-max max-h-full my-2 mx-auto rounded shadow-md bg-transparent grid place-items-center" classContent="relative p-2 overflow-hidden" closeButton="{false}">
                        <ModalContent bind:this="{modal}" />
                    </Modal>
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