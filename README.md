Sumi
Web Extension for Text Summarization

### Description
This project is a web extension developed to summarize large chunks of text. The extension is designed to be browser agnostic, aiming to support any environment that adheres to the WebExtension APIs, such as Chrome and Firefox. The extension processes and cleans the input text, sends it to a custom model, and returns the summarized text.

### Features
- Preprocess and clean the input text by removing HTML tags, URLs, email addresses, and special characters.
- Split the text into manageable chunks to adhere to the API limitations.
- Communicate with a custom model through a specified API endpoint and return the summarized text.
- Handle errors gracefully and log them to the console for debugging purposes.
- Browser agnostic, supporting any browser environment that adheres to the WebExtension APIs.

### Installation
1. Clone this repository to your local machine.
2. Follow your browser-specific instructions for loading unpacked extensions.

   For Chrome:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode".
   - Click "Load unpacked" and select the directory where the project is located.

   For Firefox:
   - Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
   - Click "Load Temporary Add-on" and select any file in the extension’s directory.

### Usage
Once the extension is installed:
1. Click on the extension icon in your browser's toolbar.
2. If required, the extension will request necessary permissions.
3. The extension will then process the text on the active tab and send it to the custom model.
4. The summarized text will be returned and displayed.

### Project Structure
- `background.bundle.js`: Contains the core logic for the extension, including text preprocessing, communication with the custom model, and error handling.
- `content.bundle.js`: Executed in the context of the web page. Responsible for interacting with the web page's DOM.
- `manifest.json`: Contains metadata about the extension, such as its name, description, permissions, and which scripts to run.

### Development
When developing, be sure to test the extension in different browser environments to ensure compatibility with the WebExtension APIs. Use the console logs to identify and debug any potential issues that might arise during runtime.

### Troubleshooting
- If the extension is not working as expected, open the browser's console to check for any error messages or logs.
- Ensure that the extension has been granted the necessary permissions.
- Confirm that the API endpoint is reachable and returning the expected responses.

### License
This project is [MIT Licensed](https://opensource.org/licenses/MIT).

### Acknowledgements
Thanks to all contributors and developers for maintaining and enhancing this web extension project.
