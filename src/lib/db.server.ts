import { XATA_API_KEY } from "$env/static/private";
import { XataClient } from "./xata.codegen.server";

export const xata = new XataClient({
    apiKey: XATA_API_KEY
})