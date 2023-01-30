import fetch from 'node-fetch';
import { JSDOM } from "jsdom";
import fs from 'fs-extra';


/*
 نور على الدرب
 page = 819
 file = nur_ealaa_aldarb.json
 type = 2
 await fatwas(819, 'nur_ealaa_aldarb', 2);

 فتاوى الجامع الكبير
 page = 119
 file = fatawaa_aljamie_alkabir.json
 type = 4
 await fatwas(119, 'fatawaa_aljamie_alkabir', 4);

 فتاوى الدروس
 page = 379
 file = fatawaa_aldurus.json
 type = 3
 await fatwas(379, 'fatawaa_aldurus', 3);

 */

async function fatwas(page, file, type) {

    fs.existsSync('./database') ? true :
        fs.mkdirsSync('./database', { recursive: true });

    fs.existsSync(`./database/${file}.json`) ? true :
        fs.writeJSONSync(`./database/${file}.json`, [], { spaces: '\t' });

    let readJson = fs.readJsonSync(`./database/${file}.json`);
    let id = 1

    for (let itm = 0; itm < page; itm++) {

        let response = await fetch(`https://binbaz.org.sa/fatwas/kind/${type}?page=${itm + 1}`);
        let body = await response?.text();

        if (response?.status === 200) {

            let dom = new JSDOM(body);

            let question = Array.from(dom.window.document.querySelectorAll('.fatwa > p')).map(e => {
                return e.innerHTML.replace(/السؤال:|\n|\s\s/g, '').replace(/&nbsp;/g, ' ');
            });
            let title = Array.from(dom.window.document.querySelectorAll('.fatwa > h1 > a')).map(e => {
                return e.innerHTML.replace(/\n|\s\s/g, '').replace(/&nbsp;/g, ' ');
            });
            let link = Array.from(dom.window.document.querySelectorAll('.fatwa > h1 > a')).map(e => {
                return decodeURI(e?.href)
            });

            for (let [index, value] of link.entries()) {

                let response = await fetch(value);
                let body = await response.text()
                let dom = new JSDOM(body);
                let audio = decodeURI(dom.window.document.querySelector('.download-btn')?.href)
                let Answer = Array.from(dom.window.document.querySelectorAll('.article-content > p')).map(e => {
                    return e?.innerHTML
                }).join(' ');
                let Answerdiv = Array.from(dom.window.document.querySelectorAll('.article-content > div')).map(e => {
                    return e?.innerHTML
                }).join(' ');
                let categories__item = Array.from(dom.window.document.querySelectorAll('body > div.container > div.row > div.col-md-9 > div:nth-child(4) > div > article:nth-child(1) > div > a')).map(e => {
                    return e?.textContent //.replace(/\n|\s\s/g, '');
                });

                let opj = {
                    id: id++,
                    question: question[index],
                    title: title[index],
                    answer: Answer.length !== 0 ? Answer : Answerdiv,
                    link: value,
                    audio: audio,
                    categories: categories__item
                }

                readJson.push(opj)
                fs.writeJSONSync(`./database/${file}.json`, readJson, { spaces: '\t' })
            }

            console.log('page : ', itm + 1);

        }

        else {
            console.log('response.status : ', response?.status);
        }

    }

}

await fatwas(119, 'fatawaa_aljamie_alkabir', 4).catch(e => console.log(e));
await fatwas(379, 'fatawaa_aldurus', 3).catch(e => console.log(e));
await fatwas(819, 'nur_ealaa_aldarb', 2).catch(e => console.log(e));