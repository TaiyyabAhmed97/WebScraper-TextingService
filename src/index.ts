import puppeteer = require('puppeteer')
import { isRegExp } from 'util';

let namazTimes: Array<any>;
(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const url = 'https://ilmstudios.com/prayer-times'

    page.on('console', msg => {
        for (let i = 0; i < msg.args().length; ++i) {
            let logged: any = msg.args()[i]
            if (logged._remoteObject.value[0] == '[') {
                let obj = JSON.parse(logged._remoteObject.value)
                namazTimes = obj
                console.log(namazTimes)
            }

        }


    });
    await page.goto(url);

})()