Aim:To develop a Fitness Tracker Web App that allows users to track their daily exercises, manage sets, monitor progress through a point system, and maintain a personalized exercise routine in an interactive and user-friendly interface.

Procedure:

Setup the project files:
Created three files: index.html, style.css, and script.js.
index.html contains the login page, main app container, and modal for adding exercises.
style.css handles the styling of login page, exercise cards, buttons, modal, and background images.
script.js contains the logic for authentication, exercise management, and point calculation.

Login Page:

Users enter a dummy email (fitness@app.com) and password (fit123) to access the app.
Optionally, a “Login with Google” button is provided (UI only for now).
Upon successful login, the main app page is displayed with a gym-themed background.

Exercise Management:

The app initially contains default exercises like Push Ups, Pull Ups, Crunches, and Squats.
Users can add new exercises via a modal window (up to a maximum of 5 exercises).
Each exercise card displays the name and number of sets completed.
Users can increment sets using the “+ Add Set” button, decrement sets with “- Remove Set”, or delete exercises completely with the “Delete Exercise” button.

Point System:

Each set completed earns 10 points.
Points are deducted if sets are removed or exercises are deleted.
The total points are dynamically displayed to track user progress.

UI and UX Enhancements:

The app has a clean, modern UI with a gym-themed background.
Floating “+” button for adding exercises.
Modal-based input ensures a smooth experience instead of using browser prompts.


Conclusion: The Fitness Tracker App is a fully functional, interactive tool that allows users to monitor and manage their daily workouts.