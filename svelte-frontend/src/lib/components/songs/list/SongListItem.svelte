<script lang="ts">

    import * as SongAPI from "../../../api/songAPI";
    import EditIcon from "../../icons/EditIcon.svelte";
    import LikeIcon from "../../icons/LikeIcon.svelte";

    import Modal from "svelte-simple-modal";
    import ModalContent from "../../ModalContent.svelte";
    import { onMount } from "svelte";

    export let songData;
    let coverImageURL;

    let modal;
    const openModal = () => {
        const videoID: string = songData.song.musicVideoYouTube.split("=")[1];
        const videoURL = "https://www.youtube-nocookie.com/embed/" + videoID;
        modal.openModal(songData.song.name, videoURL);
    }

    let likeSongState: boolean = false;
    const likeSong = async () => {
        likeSongState = !likeSongState;
        const data = {
            "like": likeSongState
        }
        await SongAPI.updateSongData(songData.song.id, data);
    }

    onMount(async () => {
        coverImageURL = SongAPI.getImageURL(songData.song) + "?thumb=100x100";
        likeSongState = songData.song.like;
    });

</script>

<li class="w-full py-3 bg-white dark:bg-neutral-900 mb-3">
    <div class="flex flex-row w-full">
        <div class="basis-1/2 flex flex-row px-3 mx-2 leading-relaxed">
            <!--<img class="aspect-square max-h-7 object-contain bg-neutral-300" src="{coverImageURL}" alt=""/>-->
            <p class="text-white font-bold mr-5">{songData.song.name}</p>
            <p class="text-white font-bold">{songData.artist.name}</p>
        </div>
        <div class="basis-1/2 flex flex-row-reverse px-3 mx-2">
            {#if songData.musicVideoYouTube !== ""}
                <button on:click={openModal} type="button" class="py-2 px-3 inline-block bg-neutral-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-red-600 hover:shadow-lg active:bg-neutral-800 active:shadow-lg transition duration-150 ease-in-out">
                    <i class="fa-brands fa-youtube"></i>
                </button>
                <Modal unstyled="{true}" classBg="z-50 fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-gray-900/[.9]" classWindowWrap="relative m-2 max-h-full" classWindow="relative w-auto max-w-max max-h-full my-2 mx-auto rounded shadow-md bg-transparent grid place-items-center" classContent="relative p-2 overflow-hidden" closeButton="{false}">
                    <ModalContent bind:this="{modal}" />
                </Modal>
            {:else}
                <!-- svelte-ignore a11y-missing-attribute -->
                <a rel="noreferrer" class="py-2 px-3 inline-block bg-neutral-800 text-neutral-700 font-medium text-xs leading-tight uppercase shadow-md">
                    <i class="fa-brands fa-youtube"></i>
                </a>
            {/if}
            <button type="button" class="mr-2 py-2 px-3 inline-block bg-neutral-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-sky-400 hover:shadow-lg active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out">
                <EditIcon />
            </button>
            <button on:click={likeSong} type="button" class="mr-2 py-2 px-3 inline-block bg-neutral-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-sky-400 hover:shadow-lg active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out">
                <LikeIcon state="{likeSongState}"/>
            </button>
            <button type="button" class="mr-2 px-2 py-2 inline-block bg-neutral-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-sky-400 hover:shadow-lg active:bg-sky-700 active:shadow-lg transition duration-150 ease-in-out">
                Open
            </button>
        </div>
    </div>
</li>

<style>

</style>