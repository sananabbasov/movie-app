import { BASE_URL } from "../config/Config"

export const GET = async (url) => {
    const API_URL = `${BASE_URL}${url}`;
    let response = await fetch(API_URL,{method: 'GET'});
    response = response.json();
    return response;

} 