const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
    // 1. URLを記載したファイルを読み込む
    const filePath = 'urls.txt';
    const urls = fs.readFileSync(filePath, 'utf-8').split('\n').filter(Boolean);

    // 2. URLごとにリダイレクトの確認
    for (const originalUrl of urls) {
        try {
            // 3. ブラウザを起動
            const browser = await chromium.launch({ headless: false });
            const page = await browser.newPage();

            // 指定したURLにアクセス
            await page.goto(originalUrl, { waitUntil: 'load' });

            // 1秒待機
            await page.waitForTimeout(1000);

            // 現在のURLを取得
            const currentUrl = page.url();

            // リダイレクトの確認
            if (currentUrl === originalUrl) {
                console.log("[not redirected]リダイレクトなし");
            } else {
                console.log(`[redirected]リダイレクトしました\n${originalUrl} -> ${currentUrl}`);
            }

            // 4. ブラウザを閉じる
            await browser.close();
        } catch (error) {
            console.error(`${originalUrl}: アクセス中にエラーが発生しました - ${error.message}`);
        }
    }
})();
