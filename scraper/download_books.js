import getBuffer from './getBuffer.js';
import fs from 'fs-extra';

async function download_books() {

    let ch1 = fs.existsSync('./database/books_ar.json');
    let ch2 = fs.existsSync('./database/books_en.json');

    if (ch1 && ch2) {

        fs.existsSync('./files') ? true :
            fs.mkdirsSync('./files', { recursive: true });

        let books_ar = fs.readJsonSync('./database/books_ar.json');
        let books_en = fs.readJsonSync('./database/books_en.json');
        let jsonArr = [
            {
                name: 'books_ar',
                json: books_ar
            },
            {
                name: 'books_en',
                json: books_en
            }
        ];

        for (let item of jsonArr) {

            fs.existsSync(`./files/books/${item.name}`) ? true :
                fs.mkdirsSync(`./files/books/${item.name}`, { recursive: true });

            for (let index of item.json) {


                let id = index?.id;
                let pdf = index?.pdf;

                fs.existsSync(`./files/books/${item.name}/${id}`) ? true :
                    fs.mkdirsSync(`./files/books/${item.name}/${id}`, { recursive: true });

                for (let iterator of pdf) {

                    let name = iterator?.name.split(' ').join('_');
                    let link = iterator?.link
                    let format = link !== 'undefined' ? link?.includes('.doc') ? 'doc' : 'pdf' : false
                    let ch = fs.existsSync(`./files/books/${item.name}/${id}/${name}.${format}`);

                    if (link !== 'undefined' && ch === false) {

                        let buffer = await getBuffer(link).catch(e => console.log(e));
                        let bufferFrom = new Buffer.from(buffer);

                        fs.writeFileSync(`./files/books/${item.name}/${id}/${name}.${format}`, bufferFrom);

                        console.log('Crete file pdf : ', name);
                        console.log(link + '\n\n');


                    }

                }
            }

        }
    }

    else {
        console.log('You first have to run command | npm run books');
    }


}

await download_books()