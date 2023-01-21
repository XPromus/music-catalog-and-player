import type { Record } from "pocketbase";
import type { SongResponse, Song } from "../data/song";
import { pb } from "./pocketbase";

export async function getAllSongs() {
    return await pb.collection("song").getFullList();
}

export async function getRecord(id: string) {
    return await pb.collection("song").getOne(id, { "$autoCancel": false });
}

export function getImageURL(record: Record): string {
    const filename = record.coverImage;
    return pb.getFileUrl(record, filename);
}

export const updateSongData = async (id: string, data) => {
    const record = await pb.collection("song").update(id, data);
    return record;
}