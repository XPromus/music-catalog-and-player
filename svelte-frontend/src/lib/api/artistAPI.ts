import PocketBase from "pocketbase";
import type { ArtistResponse } from "../data/artist";
import { pb } from "./pocketbase";

export async function uploadData(formData: FormData): Promise<string> {
    const record = await pb.collection("artist").create(formData);
    return record.id;
}

export async function getAllArtists() {
    return await pb.collection("artist").getFullList();
}

export async function getRecord(id: string) {
    return await pb.collection("artist").getOne(id, { "$autoCancel": false });
}

export function getImageURL(record) {
    const filename = record.image;
    return pb.getFileUrl(record, filename);
}