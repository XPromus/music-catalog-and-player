import PocketBase from "pocketbase";
import { pb } from "./pocketbase";

/**
 * 
 * @returns a list of all albums in the database (max. 40)
 */
export async function getAllAlbums() {
    return await pb.collection("album").getFullList();
}

/**
 * Return the image url of a specified record
 * 
 * @param record the album in question
 * @returns the url to the cover image of the specified album as a string
 */
export function getImageURL(record) {
    const filename = record.coverImage;
    return pb.getFileUrl(record, filename);
}