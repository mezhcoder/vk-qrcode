import {POST_DATA} from "./types";

export function postData(data) {
    return {
        type: POST_DATA,
        payload: data
    }
}