const puppeteer = require("puppeteer");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

(async () => {
  const url = "https://www.example.com/your-target-webpage";

  // Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the URL
  await page.goto(url, { waitUntil: "networkidle2" });

  // Get the MP3 link from the audio element
  const mp3Link = await page.$eval("audio", (audio) => audio.src);

  // Log the MP3 link
  console.log("MP3 Link: ", mp3Link);

  // Download the MP3 file
  const response = await axios({
    method: "GET",
    url: mp3Link,
    responseType: "stream",
  });

  // Extract the file name from the URL
  const urlPath = new URL(mp3Link).pathname;
  const filename = path.basename(urlPath);

  // Save the MP3 file to the local filesystem
  const writer = fs.createWriteStream(filename);
  response.data.pipe(writer);

  writer.on("finish", () => {
    console.log(`File has been downloaded and saved as ${filename}.`);
  });

  writer.on("error", (error) => {
    console.error("Error while downloading and saving the file: ", error);
  });

  // Close the browser
  await browser.close();
})();

