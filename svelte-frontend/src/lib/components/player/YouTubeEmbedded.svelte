<script lang="ts">
    const testURL: string = "https://www.youtube-nocookie.com/embed/1FliVTcX8bQ";
    export let videoName: string;
    export let videoURL: string;

    let innerWidth = 0;
    let innerHeight = 0;

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div>
    <iframe 
        width="{innerWidth - (innerWidth / 4)}" 
        height="{innerHeight - (innerHeight / 4)}" 
        src="{testURL}" 
        title="{"videoName"}" 
        frameborder="0" 
        allow="autoplay; encrypted-media">
    </iframe>
</div>

<style>

</style>