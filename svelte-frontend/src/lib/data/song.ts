export interface SongResponse {
    readonly page: number,
    readonly perPage: number,
    readonly totalPages: number,
    readonly totalItems: number,
    readonly items: Song[]
}

export interface Song {
    readonly id: string,
    readonly collectionId: string,
    readonly collectionName: string,
    readonly created: string,
    readonly updated: string,
    readonly name: string,
    readonly cover: string,
    readonly artist: string,
    readonly album: string,
    readonly release: string,
    readonly numberOfListens: number,
    readonly musicVideoYouTube: string
}