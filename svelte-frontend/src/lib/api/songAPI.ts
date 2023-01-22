import type { Record } from "pocketbase";
import { pb } from "./pocketbase";

/**
 * 
 * @returns a list of all songs in the database (max. 40)
 */
export async function getAllSongs() {
    return await pb.collection("song").getFullList();
}

/**
 * 
 * @param id the id of the wanted record in form of a string
 * @returns a record object, that contains all data of the specified song
 */
export async function getRecord(id: string) {
    return await pb.collection("song").getOne(id, { "$autoCancel": false });
}

/**
 * Return the image url of a specified record
 * 
 * @param record the song in question
 * @returns the url to the cover image of the specified song as a string
 */
export function getImageURL(record: Record): string {
    const filename = record.coverImage;
    return pb.getFileUrl(record, filename);
}

/**
 * Upload a new set of data for a song to the backend
 * 
 * @param id the id of the song
 * @param data the new data as a json object
 */
export const updateSongData = async (id: string, data) => {
    const record = await pb.collection("song").update(id, data);
    return record;
}