### CV App (Expo / React Native)

This repository contains a CV / portfolio mobile application built with Expo, React Native, and TypeScript.
The app presents my background, education, grades, and projects in a mobile-friendly format.
learning from: `http://docs.expo.dev/tutorial` and `https://reactnative.dev/docs`

# Work in progress
Some screens are unfinished and there is currently no live demo. The app can be accessed only by running the code.

# Tech Stack
- Expo
- React Native
- TypeScript
- Expo Go (development on physical device)

# Screens & Features
The app contains 6 screens, 4 accessible via a navigation bar, one accessible via a button and one that renders when accessing a wrong link:

# About me
- Principal picture and text displayed within a card layout
- Bouncing smiley face button that opens a modal containing a "Welcome!" image
- Question Mark Icon Button that opens the About App screen
- A "Find Out!" button which opens a modal with information about my technical passions
- A "Check this out!" button which opens a scrollable modal containing screenshots of my very first website - a travel album with internal/external links and an interactive form

# Grades
Table containing:
- Courses
- Grades
- Dates
- Links to study guides (not yet added)

# Education
- Multiple cards
- Each card represents a school with descriptions timelines and logo images

# Projects
- Pressable text that opens a link to my GitHub profile
- GitHub logo image
- Disclaimer button opening a modal containing text

# About App
- Uses the AboutCard component to display a description of each screen within a separate card
- Each card contains a list formed with the AboutItem component
- Each card contains a button that sends the user to the specific screen by pushing it on top of the stack

# Not found
- Renders when accessing a wrong link
- Displays a link that sends the user back to the home screen when pressed

# Current Status
- Navigation bar implemented
- About Me (Home screen), About App, Education and Grades screens completed
- Projects screens need refinement

# No demo available yet

Screenshots are provided instead of a demo.

<p align="center">
  <img src="https://github.com/user-attachments/assets/5bf1b610-3e9a-498b-83fc-b6f340fbed21" width="200">
  <img src="https://github.com/user-attachments/assets/b8111d4e-73d5-49e6-9cdd-d4514e20cb59" width="200">
  <img src="https://github.com/user-attachments/assets/473666b7-2b15-44cb-91af-ddf67cdab19d" width="200">
  <img src="https://github.com/user-attachments/assets/821d5d75-3242-4254-a2b9-c0169d5b05bd" width="200">
  <img src="https://github.com/user-attachments/assets/360fea04-b5bc-47aa-aef0-e2a6b58501bb" width="200">
  <img src="https://github.com/user-attachments/assets/b9ce8504-4845-4d34-a70c-bc5c9fee3925" width="200">
  <img src="https://github.com/user-attachments/assets/3720e64c-a5d6-478b-bf84-c563c3004a74" width="200">
  <img src="https://github.com/user-attachments/assets/c51ce517-4a57-4268-9bda-68215148787e" width="200">
  <img src="https://github.com/user-attachments/assets/0dad5308-d82f-402e-8590-77d3e5480b1e" width="200">
  <img width="1873" height="811" alt="Screenshot 2026-01-19 211507" src="https://github.com/user-attachments/assets/28d7d7ac-81cb-4d06-86cc-460ba0067113" />

  
### Running the Project
Install dependencies
npm install

Start the app
npx expo start


Open the app using Expo Go on your phone.

Notes

Developed using Expo Go on a physical device

Built for learning and portfolio purposes

Functionality and content will be expanded
