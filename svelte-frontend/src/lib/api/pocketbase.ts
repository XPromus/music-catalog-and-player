import PocketBase from "pocketbase";

/**
 * Creats the pocketbase instance and is accessed across the API
 */
export const pb: PocketBase = new PocketBase("http://127.0.0.1:8090");