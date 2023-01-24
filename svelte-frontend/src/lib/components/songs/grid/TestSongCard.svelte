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

    const editSong = async () => {
        console.log("Edit Song");
    }

    onMount(async () => {
        coverImageURL = SongAPI.getImageURL(songData);
        likeSongState = songData.like;
    });

</script>

<div class="max-w-xs drop-shadow-md bg-neutral-900 rounded-xl">

    <!-- TODO: Fix modal
    <Modal unstyled="{true}" classBg="z-50 absolut top-0 left-0 w-screen h-screen flex flex-col justify-center bg-gray-900/[.9]" classWindowWrap="relative m-2 max-h-full" classWindow="relative w-auto max-w-max max-h-full my-2 mx-auto rounded shadow-md bg-transparent grid place-items-center" classContent="relative p-2 overflow-hidden" closeButton="{false}">
        <ModalContent bind:this="{modal}" />
    </Modal>
    -->

    <div class="relative m-5">
        <img class=" aspect-square rounded-xl object-contain w-full bg-neutral-300" src="{coverImageURL}" alt=""/>
        
    </div>
    <div class="p-6 flex flex-row w-full">
        <div class="left-0 bottom-0 w-9/12">
            <h5 class="text-white text-xl font-medium truncate ...">
                {songData.name}
            </h5>
            <h2 class="text-gray-300 text-sm font-medium truncate ...">
                {artistData.name}
            </h2>
        </div>
        <div class="group absolute bottom-0 right-0 mb-3 mr-3 flex flex-col-reverse gap-1">
            <button type="button" class="py-3 px-3 w-12 h-12 text-md inline-block rounded-full bg-sky-400 text-white font-medium leading-tight uppercase shadow-md hover:bg-neutral-700 hover:shadow-lg group-hover:bg-neutral-700 active:shadow-lg transition duration-150 ease-in-out">
                <i class="fa-solid fa-chevron-up"></i>
            </button>
            <div class="transform scale-y-0 group-hover:scale-y-100 transition duration-150 ease-in-out origin-bottom min-w-32 flex flex-col gap-1 ">
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a on:click={likeSong} href="#" class="py-3 px-3 w-12 h-12 text-center text-md font-medium uppercase inline-block rounded-full drop-shadow-md bg-neutral-700 text-white leading-tight shadow-md hover:bg-sky-400 hover:shadow-lg active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out">
                    <LikeIcon state="{likeSongState}"/>
                </a>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <a on:click={editSong} href="#" class="py-3 px-3 w-12 h-12 text-center text-md font-medium uppercase inline-block rounded-full drop-shadow-md bg-neutral-700 text-white leading-tight shadow-md hover:bg-sky-400 hover:shadow-lg active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out">
                    <EditIcon />
                </a>
                {#if songData.musicVideoYouTube !== ""}
                    <!-- svelte-ignore a11y-invalid-attribute -->
                    <a on:click={openModal} href="#" class="py-3 px-3 w-12 h-12 text-center text-md inline-block rounded-full drop-shadow-md bg-neutral-700 text-white font-medium leading-tight uppercase shadow-md hover:bg-red-600 hover:shadow-lg active:bg-gray-700 active:shadow-lg transition duration-150 ease-in-out">
                        <i class="fa-brands fa-youtube"></i>
                    </a>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>

</style>