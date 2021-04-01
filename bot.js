const puppeteer = require('puppeteer');
const url = "https://www.linkedin.com/checkpoint/lg/login?trk=homepage-basic_google-one-tap-submit&errorKey=challenge_global_internal_error&pageInstance=urn%3Ali%3Apage%3Ad_checkpoint_gL_consumerLogin%3Bf9SHc1SuSkyydDhhU210dQ%3D%3D&controlId=d_checkpoint_lg_consumerLogin-login_submit_button";

async function run() {

    let userNAme = 'jsoft.devtest@gmail.com';
    let password = 'TESTING.123';
    let searchKeyWord = 'Programmers';

    let browser = await puppeteer.launch({headless: false}); /* make headless true to do the stuff in the background */
    let page = await browser.newPage();
    await page.goto(url, {waitUntil: "networkidle0", timeout: 60000});
    await page.setViewport({width: 1024, height: 800}); /* setting the browser view range */
    await page.focus('#username');
    await page.keyboard.type(userNAme);
    await page.focus('#password');
    await page.keyboard.type(password);
    await page.keyboard.press('Enter');
    await page.waitForNavigation(); /* waiting until the page is completely loaded */
    await page.click('.search-global-typeahead__collapsed-search-button'); /* the search field selected by the class - no id provided */
    await page.keyboard.type(searchKeyWord);
    await page.keyboard.press('Enter');
    await page.waitForNavigation();

    /* this function will stop puppeteer and will run a js script inside the browser */
    await page.evaluate(()=>{
       var val = document.getElementsByTagName('button')[1];
    });

    // let length=10;
    /*for (let i=0;i<length;i++){
        val = await page.$$eval('button', (els) => els);

        // const id = await page.$$eval('button', (els) => els[i].id );
        console.log(val);
    }*/


   /* let embers;
    await page.$$eval('button',(buttons)=>{
        let emberButtonIds = [];
        for (let button of buttons) {
            /!*
            * getting the ember part from the id
            *!/
            prefixString = "";
            prefixChars = button.id.split("",5);
            for (let char of prefixChars) {
                prefixString+=char;
            }
            if(prefixString==="ember"){
                emberButtonIds.push(button.id);
            }
        }
        embers = emberButtonIds;
        alert(emberButtonIds);
        // peopleId = `#${emberButtons[5].id}`;
        // return emberButtons;
    });*/
    // console.log(embers);
    // await page.click(`${peopleId}`);
    // await page.close();
    // await browser.close();
}
run();