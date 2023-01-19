<script lang="ts">
    
    import { uploadData } from "../../api/artistAPI";

    let fileInput;
    let files;

    let artistName: string;
    let artistCountry: string;
    let artistWebpage: string;
    let artistBirthday: string;

    async function uploadArtistData() {

        if (artistWebpage != undefined) {
            const urlRegex: RegExp = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
            if (!urlRegex.test(artistWebpage)) {
                alert("Input valid URL or leave empty")
                return;
            }
        }

        const data: FormData = new FormData();
        data.append("name", artistName);
        data.append("birthday", artistBirthday);
        data.append("country", artistCountry);
        data.append("artistPage", artistWebpage);
        data.append("image", files[0]);
        const id = await uploadData(data);
        console.log(id);
    }

</script>

<div class="h-full w-full dark:bg-neutral-700 columns-2">
    <div class="flex flex-col w-full justify-center mx-5 mt-5">
        <input bind:value={artistName} class="title bg-gray-100 border border-gray-300 p-2 mb-5 w-full outline-none" spellcheck="false" placeholder="Artist Name" type="text">
        <input bind:value={artistCountry} class="title bg-gray-100 border border-gray-300 p-2 mb-5 w-full outline-none" spellcheck="false" placeholder="Country" type="text">
        <input bind:value={artistWebpage} class="title bg-gray-100 border border-gray-300 p-2 mb-5 w-full outline-none" spellcheck="false" placeholder="Artist Webpage" type="text">
        <textarea class="bg-gray-100 p-2 w-full h-60 mb-5 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"></textarea>
    </div>
    <div class="w-full flex justify-center">
        <input bind:files type="file" class="file-input w-full max-w-xs" accept="image/jpg, image/jpeg, image/png, image/svg+xml, image/gif, image/webp" />
        <button on:click={uploadArtistData} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Upload
        </button>
    </div>
</div>

<style>

</style>