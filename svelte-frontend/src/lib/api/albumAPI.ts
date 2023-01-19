import PocketBase from "pocketbase";
import { pb } from "./pocketbase";

export async function getAllAlbums() {
    return await pb.collection("album").getFullList();
}

export function getImageURL(record) {
    const filename = record.coverImage;
    return pb.getFileUrl(record, filename);
}