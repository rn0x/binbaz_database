import fetch from 'node-fetch';

export default async function getBuffer(url) {
    
    let response = await fetch(url, { method: 'GET' });
    let data = await response?.arrayBuffer();

    return data
}