import PocketBase from "pocketbase";
import type { ArtistResponse } from "../data/artist";
import { pb } from "./pocketbase";

/**
 * Creates a new artist in the db
 * 
 * @param formData the data that creates a new artist in the db. Format can be found in artist.ts
 * @returns a promise that contains the newly created artist id
 */
export async function uploadData(formData: FormData): Promise<string> {
    const record = await pb.collection("artist").create(formData);
    return record.id;
}

/**
 * 
 * @returns a list of all artists in the database (max. 40)
 */
export async function getAllArtists() {
    return await pb.collection("artist").getFullList();
}

/**
 * 
 * @param id the id of the wanted record in form of a string
 * @returns a record object, that contains all data of the specified artist
 */
export async function getRecord(id: string) {
    return await pb.collection("artist").getOne(id, { "$autoCancel": false });
}

/**
 * Return the image url of a specified record
 * 
 * @param record the artist in question
 * @returns the url to the image of the specified artist as a string
 */
export function getImageURL(record) {
    const filename = record.image;
    return pb.getFileUrl(record, filename);
}