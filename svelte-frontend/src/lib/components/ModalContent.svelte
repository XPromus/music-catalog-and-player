<script lang="ts">

    import { getContext } from "svelte";
    import YouTubeEmbedded from "./player/YouTubeEmbedded.svelte";
    //@ts-ignore
    const { open } = getContext('simple-modal');
    export const openModal = (name: string, url: string) => open(YouTubeEmbedded, { videoName: name, videoURL: url });

</script>

<div>
    <!--<button on:click={openModal}>Click</button>-->
</div>