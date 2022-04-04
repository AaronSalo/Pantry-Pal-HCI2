# Pantry-Pal-HCI2
Project for HCI 2. Pantry inventory application

## SETUP
- **Clone this directory and cd into it.** Make sure you're in the top directory of this repo before continuing.
- Install [Node](https://nodejs.org/en/download/) with **chocolatey** (just make sure you check off the button when going through the installer)
  - Note: If you already have node/npm use ``npm update -g`` to update to the newest version
- You may need to restart, use ``npm -v`` to check if the install was successful. Should be version 8.5.0.
- Use ``npm install -g expo-cli``
- make sure you're in the 'PantryPal' directory (using ``cd PantryPal``)
- use ``npm start`` to start the development server
- press 'w' in the terminal to open web
- copy and paste the http://localhost:----- (or ctrl click the link) link shown in the console to view the development server


## GETTING THE EMULATOR/DEVICE to work:
-Install android Studio.
-Open the project on Android Studio, Click on tools -> Device Manager.
-Select 'Create Device' and pick one of the devices (pixel 5 API 26 works well). Then select a recommended system image (Oreo) and finish the download.
-Click on 'Launch AVD' icon and start running the emulator.
-On command line, run 'expo start' which will start the metro builder
-Press a to open on android, and the app should start running on the emulator after some time
-Alternatively, install the app Expo on android to scan the QR code (or scan it directly using iOS)