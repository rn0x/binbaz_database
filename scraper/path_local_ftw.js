import getBuffer from './getBuffer.js';
import fs from 'fs-extra';

async function path_local_ftw() {

    let fatawaa_aldurus = fs.readJsonSync('./database/fatawaa_aldurus.json');
    let fatawaa_aljamie_alkabir = fs.readJsonSync('./database/fatawaa_aljamie_alkabir.json');
    let nur_ealaa_aldarb = fs.readJsonSync('./database/nur_ealaa_aldarb.json');
    let jsonArr = [
        {
            name: 'fatawaa_aldurus',
            json: fatawaa_aldurus
        },
        {
            name: 'fatawaa_aljamie_alkabir',
            json: fatawaa_aljamie_alkabir
        },
        {
            name: 'nur_ealaa_aldarb',
            json: nur_ealaa_aldarb
        }
    ];

    for (let item of jsonArr) {

        for (let index of item.json) {

            let id = index.id;
            index.audio = `/files/${item.name}/${id}.mp3`
            fs.writeJsonSync(`./database/${item.name}.json`, item.json, { spaces: '\t' });
        }

    }
}

await path_local_ftw()