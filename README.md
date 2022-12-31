# React Chrome Extension Boilerplate Code

This is a boilerplate project for creating a Chrome extension using the latest technologies such as manifest version 3, React, Tailwind CSS, and webpack. It includes all the necessary code and scripts for building and packaging the extension, as well as hot reloading during development.

## Getting Started
To get started, follow these steps:

1. Clone the repository:
```
git clone https://github.com/akashvaghela09/react-chrome-extension-boilerplate-code.git
```
2. Navigate to the project directory:
```
cd react-chrome-extension-boilerplate-code
```
3. Install the dependencies:
```
npm install
```

## Scripts
The following scripts are available:

### `npm run dev` 
This script starts the development server and enables hot reloading using webpack. To use it, run:

```
npm run dev
```

### `npm run build` 
This script builds the extension for production. It creates a build folder with the compiled code and assets. To use it, run:

```
npm run build
```
### `npm run zip` 
This script creates a ZIP archive of the extension. It includes the manifest.json file, the backgroundScript and contentScript folders, and the files in the build folder. To use it, run:

```
npm run zip
```

### `npm run pack` 
This script combines the build and zip scripts into one command. It first builds the extension, then creates a ZIP archive of the result. To use it, run:

```
npm run pack
```


## Loading the Extension
To load the extension in Chrome, follow these steps:

1. Open Chrome and go to the extensions page (chrome://extensions).
2. Enable developer mode by clicking the toggle in the top right corner.
3. Click the "Load unpacked" button and select the build folder.

The extension should now be loaded in Chrome. You can verify this by looking for the extension's icon in the browser toolbar.

## Feedback and Support
If you have any questions or issues with the extension, please don't hesitate to reach out. You can send me a message through the repository's issues page or via email at akashvaghela09@gmail.com.

---

Akash Vaghela | [Website](https://akash11.com)
