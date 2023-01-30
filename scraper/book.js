import fetch from 'node-fetch';
import { JSDOM } from "jsdom";
import fs from 'fs-extra';


async function book(page, file, type) {

    fs.existsSync('./database') ? true :
        fs.mkdirsSync('./database', { recursive: true });

    fs.existsSync(`./database/${file}.json`) ? true :
        fs.writeJSONSync(`./database/${file}.json`, [], { spaces: '\t' });

    let readJson = fs.readJsonSync(`./database/${file}.json`);
    let id = 1

    for (let itm = 0; itm < page; itm++) {

        let response = await fetch(`https://binbaz.org.sa/books/kind/${type}?page=${itm + 1}`);
        let body = await response?.text();

        if (response?.status === 200) {

            let dom = new JSDOM(body);

            let title = Array.from(dom.window.document.querySelectorAll('.book > a:last-child')).map(e => {
                return e?.innerHTML?.replace(/\n|\s\s/g, '')?.replace(/&nbsp;/g, ' ')?.trim()
            });

            let title_ = Array.from(dom.window.document.querySelectorAll('.book')).map(e => {
                return e?.textContent?.replace(/\n|\s\s/g, '')?.replace(/&nbsp;/g, ' ')?.trim()
            });

            let link = Array.from(dom.window.document.querySelectorAll('.book > a:last-child')).map(e => {
                return decodeURI(e?.href)
            });

            let link_ = Array.from(dom.window.document.querySelectorAll('.book > div > a')).map(e => {
                return decodeURI(e?.href)
            });

            let image = Array.from(dom.window.document.querySelectorAll('.book > a:first-child > img')).map(e => {
                let link = decodeURI(e?.src);

                if (link?.includes('http') === false) {

                    link = `https://binbaz.org.sa${link}`

                }
                return link
            });

            let image_ = Array.from(dom.window.document.querySelectorAll('.book > img')).map(e => {
                let link = decodeURI(e?.src);

                if (link?.includes('http') === false) {

                    link = `https://binbaz.org.sa${link}`

                }
                return link
            });

            let loplink = link

            if (loplink.length === 0) {
                loplink = link_
            }
            for (let [index, value] of loplink.entries()) {

                let response = await fetch(value);
                let body = await response?.text()
                let dom = new JSDOM(body);
                let arr = []
                let item = Array.from(dom.window.document.querySelectorAll('.list-group-item')).map(e => {
                    return e?.textContent?.replace(/\n|\s\s/g, '')?.replace(/&nbsp;/g, ' ').trim()
                }).filter(e => {
                    return e !== 'المرفقات'
                });
                let pdf = Array.from(dom.window.document.querySelectorAll('.list-group-item > a')).map(e => {
                    return decodeURI(e?.href)
                });

                for (let [index, value] of pdf.entries()) {

                    let response = await fetch(value);
                    let body = await response?.text();
                    let url_pdf = body.split("PDFObject.embed('")[1].split("', '#pdfContainer'")[0]

                    arr.push({
                        name: item[index],
                        link: url_pdf
                    });
                }

                if (link_.length !== 0) {

                    let response = await fetch(link_[index]);
                    let body = await response?.text();
                    let url_pdf = body.split("PDFObject.embed('")[1].split("', '#pdfContainer'")[0]

                    readJson.push({
                        id: id++,
                        title: title_[index],
                        link: link_[index],
                        image: image_[index],
                        pdf: [{
                            name: title_[index],
                            link: url_pdf
                        }]
                    })
                    fs.writeJSONSync(`./database/${file}.json`, readJson, { spaces: '\t' })
                }

                if (link.length !== 0) {

                    readJson.push({
                        id: id++,
                        title: title[index],
                        link: link[index],
                        image: image[index],
                        pdf: arr,
                    })
                    fs.writeJSONSync(`./database/${file}.json`, readJson, { spaces: '\t' })
                }

            }

            console.log('page : ', itm + 1);

        }

        else {
            console.log('response.status : ', response?.status);
        }

    }

}

await book(14, 'books_ar', 1).catch(e => console.log(e));
await book(11, 'books_en', 2).catch(e => console.log(e));