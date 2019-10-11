const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "8",
    deviceName: "Android Emulator",
    app: "/Users/yogi/playspace/mobile-testing/app/Android-NativeDemoApp-0.2.1.apk",
    //appPackage: "io.appium.android.apis",
    //appActivity: ".view.TextFields",
    automationName: "UiAutomator2"
  }
};

async function main() {
  const client = await wdio.remote(opts);


  const field = await client.$("~Home").waitForDisplayed(20000);
  await client.$('~Login').click();

  await client.deleteSession();
}

main();
