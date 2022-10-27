import puppeteer from 'puppeteer';

const SPOTVURI = 'https://www.spotvnow.co.kr';

let links = [];
let names = [];
var test3 = 'A';

export const getCrawlingNowMatch = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      executablePath:
        'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    });
    const page = await browser.newPage();

    const findText = async () => {
      const element = await page.waitForSelector(
        '#onAirInfo > div:nth-child(1)',
      );
      const value = await element.evaluate((el) => el.textContent);
      names.push(value);
      return;
    };

    await page.setViewport({
      width: 1280, // 페이지 너비
      height: 720, // 페이지 높이
    });

    await page.goto(SPOTVURI);
    await page.click(
      '#intro > div.form-container > div.form > div:nth-child(5) > span:nth-child(2) > img:nth-child(2)',
    );

    let id = process.env.NAVER_ID;
    let password = process.env.NAVER_PASSWORD;
    await page.type('#id', id);
    await page.type('#pw', password);

    // await page.$eval('#id', (e) => (e.value = "id"));
    // await page.$eval('#id', (e) => (e.value = "pw"));

    await page.click('#log\\.login > span');

    await page.waitForTimeout(3000);
    await page.goto(`${SPOTVURI}/channel`);
    await page.waitForSelector('.Program-Channel-List', { visible: true });
    await page.click(
      '#channelView > div > div.TV-Schedule-Program.gb-page-wrapper > div:nth-child(2) > div.Program-Channel.bg-214',
    );
    await findText();
    await page.setRequestInterception(true);
    page.on('request', async (request) => {
      if (/chunklist_b3692000.m3u8/i.test(request.url())) {
        links.push(request.url());
        await request.abort();
        return;
      } else {
        await request.continue();
      }
    });

    await page.waitForTimeout(3000);
    await page.goto(`${SPOTVURI}/channel`);

    await page.waitForSelector('.Program-Channel-List', { visible: true });
    await page.click(
      '#channelView > div > div.TV-Schedule-Program.gb-page-wrapper > div:nth-child(3) > div.Program-Channel.bg-214',
    );
    await findText();
    await page.waitForTimeout(3000);
    await page.goto(`${SPOTVURI}/channel`);

    await page.waitForSelector('.Program-Channel-List', { visible: true });
    await page.click(
      '#channelView > div > div.TV-Schedule-Program.gb-page-wrapper > div:nth-child(4) > div.Program-Channel.bg-214',
    );
    await findText();
    await page.waitForTimeout(3000);
    await page.goto(`${SPOTVURI}/channel`);

    await page.waitForSelector('.Program-Channel-List', { visible: true });
    await page.click(
      '#channelView > div > div.TV-Schedule-Program.gb-page-wrapper > div:nth-child(5) > div.Program-Channel.bg-214',
    );
    await findText();
    await page.waitForTimeout(3000);
    await page.goto(`${SPOTVURI}/channel`);

    await page.waitForSelector('.Program-Channel-List', { visible: true });
    await page.click(
      '#channelView > div > div.TV-Schedule-Program.gb-page-wrapper > div:nth-child(6) > div.Program-Channel.bg-214',
    );
    await findText();
    await page.waitForTimeout(3000);
    await page.goto(`${SPOTVURI}/channel`);

    await page.waitForSelector('.Program-Channel-List', { visible: true });
    await page.click(
      '#channelView > div > div.TV-Schedule-Program.gb-page-wrapper > div:nth-child(7) > div.Program-Channel.bg-214',
    );
    await findText();
    await page.waitForTimeout(3000);
    await page.goto(`${SPOTVURI}/channel`);

    await page.waitForSelector('.Program-Channel-List', { visible: true });
    await page.click(
      '#channelView > div > div.TV-Schedule-Program.gb-page-wrapper > div:nth-child(8) > div.Program-Channel.bg-214',
    );
    await findText();
    await page.waitForTimeout(3000);
    await page.goto(`${SPOTVURI}/channel`);

    await page.waitForSelector('.Program-Channel-List', { visible: true });

    await browser.close();
    return {
      links,
      names,
    };
  } catch (e) {
    console.log(e);
  }
};
