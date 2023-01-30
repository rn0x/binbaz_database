import getBuffer from './getBuffer.js';
import fs from 'fs-extra';

async function download_fatwas() {

    let ch1 = fs.existsSync('./database/fatawaa_aldurus.json');
    let ch2 = fs.existsSync('./database/fatawaa_aljamie_alkabir.json');
    let ch3 = fs.existsSync('./database/nur_ealaa_aldarb.json');

    if (ch1 && ch2 && ch3) {

        fs.existsSync('./files') ? true :
            fs.mkdirsSync('./files', { recursive: true });

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

            fs.existsSync(`./files/${item.name}`) ? true :
                fs.mkdirsSync(`./files/${item.name}`, { recursive: true });

            for (let index of item.json) {

                let id = index.id;
                let audio = index.audio;
                let ch = fs.existsSync(`./files/${item.name}/${id}.mp3`);

                if (audio !== 'undefined' && ch === false) {
                    let buffer = await getBuffer(audio).catch(e => console.log(e));
                    let bufferFrom = Buffer.from(buffer);

                    fs.writeFileSync(`./files/${item.name}/${id}.mp3`, bufferFrom);

                    console.log('Crete file mp3 : ', id);
                }

            }

        }

    }

    else {
        console.log('You first have to run command | npm run fatwas');
    }


}

await download_fatwas()