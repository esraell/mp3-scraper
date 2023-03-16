# MP3 Scraper

A simple Node.js script to scrape and download MP3 files from a website using Puppeteer and X-ray.

## Prerequisites

Make sure you have Node.js installed on your system. You can download it from [here](https://nodejs.org/).

## Installation

### macOS, and Linux

1. Open a terminal or command prompt.

2. Install Chromium if it is not already installed. You can install by running:

```
sudo apt install chromium-browser
```

If Chormium is not installed, follow the installation instructions on the [Chromium website](https://www.chromium.org/getting-involved/download-chromium/).

3. Clone the repository and navigate to the project folder:

```
git clone https://github.com/esraell/mp3-scraper.git
cd mp3-scraper
```

4. Install the required dependencies:

```
npm install
```

## Usage

1. Open the `scrape.js` file in your favorite code editor.

2. Modify the `URL` variable at the top of the file to the URL of the webpage containing the MP3 file you want to download.

```
const URL = 'https://www.example.com/your-target-webpage';
```

3. Save the changes to the `scrape.js` file.

4. Run the script using the following command:

```
node scrape.js
```

The script will scrape the specified URL for an MP3 file, download it, and save it with the same name as in the URL.

## Troubleshooting

If you encounter any issues, make sure you have the latest version of Node.js installed and that all dependencies are installed correctly. If problems persist, feel free to open an issue on the GitHub repository.
