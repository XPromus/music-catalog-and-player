<script lang="ts">
    
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
        src="{videoURL}" 
        title="{videoName}" 
        frameborder="0" 
        allow="autoplay; encrypted-media">
    </iframe>
</div>

<style>

</style>