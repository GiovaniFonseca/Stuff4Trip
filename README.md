# **Stuff4Trip**

Stuff4Trip It's a site where you can put your things that you want to take with you on your trip and not forget anything, saving time, organizing your things and making a safe trip with all your stuff.

<img width="1281" alt="image" src="https://user-images.githubusercontent.com/112728772/204666471-2a511ad4-15a7-499a-919c-38a608948e87.png">

## Live Site 
[https://giov3ss.github.io/Stuff4Trip/](https://giovanifonseca.github.io/Stuff4Trip/)

## Repository
[https://github.com/Giov3ss/Stuff4Trip](https://github.com/Giov3ss/Stuff4Trip)

## Author

Giovani Fonseca

## **Table of Contents**

1. [UX Development](#ux-development)
    * [Target Audience](#target-audience)
    * [Project Goal](#project-goal)
    * [User Stories](#user-stories)
    * [Design](#design)
        * [Colour Scheme](#colour-scheme)
        * [Typography](#typography)
        * [Imagery](#imagery)
        * [Site Structure](#site-structure)
        * [Wireframes](#wireframes)
      
2. [Features](#features)
    * [Header](#header)
    * [Buttons](#buttons)
    * [Error-message](#error-message)
    * [Preloading](#Preload-data)
    * [404 Page](#404-page)
    * [NonScript](#nonscript)
    * [Favicon](#Favicon)

3. [Future Features](#future-features)
        
3. [Technology Used](#technology-used)  
    * [Language Used](#languages-used)
    * [Tools and Libraries](#tools-and-libraries)

4. [Testing](#testing)

5. [Deployment](#deployment)  
  
6. [Credits](#credits)
    * [Media](#media)  

- - -

# **Table of Contents**
## UX Development
### Target Audience 
* This site aims to help travelers organize a packing list before going on a trip.

### Project Goal 
- Showcase developer's Javascript, HTML & CSS skills
- Provide a vastly different portifolio from UX of portfolio 1 project 

## User Stories
- As a traveler, I want to create a packing list, so I can have peace of mind when going on my trip that I have everything I need in my luggage.
- As a site user, I want to know why my input is rejected so I can correct errors.
- As a site user, I don't want to have to reenter data when I come back to the site.
## Design
### Colour Scheme 

The colours scheme was inspired by the Main Image, with different shades of Pink, Black and Tuscany.
    <img width="1435" alt="image" src="https://user-images.githubusercontent.com/112728772/204666615-c04e770a-c363-4671-804e-ead91b2148e1.png">

The colour was design by [Coolors] (https://coolors.co/6d5f63-be9994-f3b2b1-2f2325-1b1819) to generate some color code as inspiration for the website. 
* The bright colors chosen install a sense of excitement and fun that people feel when they travel, the colors make the site more stylish, contrasting colors that match the main image, maintaining a high design standard.

### Typography

Google fonts was used:

Lora: Was used for the site.
* It is a font that matches the purpose of the website, the font format makes the website more interesting and brings a more stylish look.

### Imagery
The photos were obtained from the free provider: [Pexels] (https://www.pexels.com/photo/neatly-packed-open-suitcase-photo-8276910/).
* The image chosen matches the purpose of the site, also a friendly image that brings an air of peace, with everything organized, varied colors.

### Site Structure

Stuff4Trip is a stactic website, made with HTML, CSS and JavaScript.

### Wireframes 

The wireframes were produced using: [Balsamiq](https://balsamiq.com/).

#### Phone 
<img width="295" alt="image" src="https://user-images.githubusercontent.com/112728772/204061703-6be65ed3-0ab7-4c48-9b05-6bd18dc7509e.png">

#### Desktop
<img width="562" alt="image" src="https://user-images.githubusercontent.com/112728772/204061935-cb0e994f-15d6-4426-85c8-f7b9e3ece14a.png">

#### Tablet
<img width="403" alt="image" src="https://user-images.githubusercontent.com/112728772/204062113-40b66545-8be0-4ef0-8fe0-289c71d0535d.png">

## Features 

### Header
- The header contain the name of the website also the input, where the user can add things to your Stuff Trip List.
    <img width="1434" alt="image" src="https://user-images.githubusercontent.com/112728772/205497736-5e28d144-8952-4acd-919c-c5d64f6b7ae6.png">

### Buttons
- The user can Adding an item just clicking in the button "Add Stuff".
<img width="117" alt="image" src="https://user-images.githubusercontent.com/112728772/205497752-d499859c-0c92-4416-b73e-862e5b244d91.png">

- The user can Editing an item just clicking in the button "Edit".
<img width="75" alt="image" src="https://user-images.githubusercontent.com/112728772/205497769-5b91ebc0-a2c6-497d-a59e-7cf060f00521.png">

- The user can Delete an item just clicking in the button "Delete".
<img width="104" alt="image" src="https://user-images.githubusercontent.com/112728772/205497785-de85afbe-37b8-4519-9058-5d1139f81162.png">

### Error message 
- An error message appears if the user no provide:
    * an input text
    <img width="857" alt="image" src="https://user-images.githubusercontent.com/112728772/205497826-de892791-0b53-4d58-a98d-a47424b92182.png">

    * or put Duplicate input.
    <img width="810" alt="image" src="https://user-images.githubusercontent.com/112728772/205497865-70afbf58-a61c-4b08-bc31-c5131951f427.png">

### Preload data
- To prevent user irritation when re-visiting the site, entries are stored in local storage and pre-loaded. This will save the user time from re-entering common items if they use the site more than once or want to add to a list, or double check if they have everything packed at a later time.

    ![stuff4trip_AdobeExpress](https://user-images.githubusercontent.com/112728772/205497958-d3d5848d-2b27-4b31-ad7f-fc1102bf4741.gif)

### 404 Page
- The Page 404, it's the 404 Error, so if the user writes something wrong in the URL, a stylized message appears, the page has a link to "Back to the homepage", which takes back to the main page.
    <img width="1261" alt="image" src="https://user-images.githubusercontent.com/112728772/205498005-468e9b6f-9671-47fa-8e9c-9f375037356b.png">

### NonScript
- Nonscript tag, if the user disable javascript or if it's not supported, the user is notified with a message, so the user need to turn it on to use the site.
    <img width="1190" alt="image" src="https://user-images.githubusercontent.com/112728772/205498033-9d4372e8-bf78-412c-91dd-dd49a6bbcc24.png">

### Favicon
- The site has a Favicon, since the site is about travel stuff I chose a Bag pink Icon to match with the website color.
<img width="155" alt="image" src="https://user-images.githubusercontent.com/112728772/204063399-a9512b51-3106-4368-8ceb-93ad5f7a788d.png">

## Future Features

For future features I would like to add some enhancements that will make my website even better:
- Allow user to add quantities to items (default with one).
- Allow user to email list to themselver.
- allow user to print the list.
- Allow user a clear all button so if they don't want the pre-populated data, they can delete everything with one button.
- Use font awesome icons for edit/ delete/ save to give user more room on smaller devices for input entry/items.

## Technology Used

### Languages Used 

- After studying the JavaScript essentials course with Code Institute, this project was created using HTML, CSS  and JavaScript languages.

### Tools and libraries
- [coolors.co](https://coolors.co/623d2b-935836-6c6f70-ebebed-b88a68) - The color scheme that was used on the site.
- [Google Fonts](https://fonts.google.com/) - Both fonts were used by Google Fonts.
- [Balsamiq](https://balsamiq.com/) Used to build the wireframes.
- [Chrome Devtools](https://developer.chrome.com/docs/devtools/) - Used extensively to experiment with grid, flexbox and general responsiveness. 
- [Gitpod](https://www.gitpod.io/) - Used to create and host the website.
- [Github](https://github.com/) - Used to deploy the website.
- [Am I Responsive](https://ui.dev/amiresponsive) - Used to creat an image displaying the homepage on multiple devices.
- [Favicon](https://favicon.io/) - Used to create the Icon for the website.
- [CSS Gradient](https://cssgradient.io/) To match the colours.
- [Browserstack](https://www.browserstack.com/) Provided browser compatibility with real desktop and mobile devices.
- [Table Generator](https://www.tablesgenerator.com/) Used to make a table of de devices and desktops tested.

### Testing

[testing.md](testing.md) 

### Deployment 

[https://giov3ss.github.io/Stuff4Trip/](https://giov3ss.github.io/Stuff4Trip/)

- The site was deployed to Github pages.

### Run Locally With GitPod

1. Go to the terminal
2. Type Git command: python3 -m http.server
3. A pop-up message will appear on the right-hand side, where Open Browser should be clicked
4. A new page opens where the site is available

* You can deploy this locally if you have the chrome gitpod extension installed
* Just click the green button in github when in chrome browser to start a gitpod instance

### Deploy to GitHub Pages

1. Navigate to the settings tab in the GitHub repository
    <img width="1395" alt="image" src="https://user-images.githubusercontent.com/112728772/204665064-f77f28cf-9fdb-4ed4-a6c9-0aad4b7f3853.png">

2. Once in settings, navigate to the pages tab on the left of the page
    <img width="327" alt="image" src="https://user-images.githubusercontent.com/112728772/204665128-ea0176da-4c5c-4c30-8291-093c810e975c.png">
 
3. Under source, select branch ‘main’ and then click ‘save’
    <img width="770" alt="image" src="https://user-images.githubusercontent.com/112728772/204665218-93e10ba7-633b-416b-9098-5a82a1d36c08.png">

4. Page will not automatically refresh and show a detailed ribbon display to indicate deployment
    <img width="831" alt="image" src="https://user-images.githubusercontent.com/112728772/204665292-5184480b-41cd-4375-9e72-c0e5f590eaab.png">


### To Fork the Repository 

To make a copy or ‘fork’ the repository:

1. Log into GitHub and locate repository
2. On the right hand side of the page select the ‘fork’ option to create and copy of the original

### To create a Local Clone 

1. under the repository name, click on the ‘code’ tab
2. in the clone box, HTTPS tab, click on the clipboard icon 
3. in your IED open GitBash
4. Changed the current working directory to the location you want the cloned directory to be made
5. Type ‘git clone’ and then paste the URL copied from GitHub
6. press enter and the local clone will be created 


### Credits
 - I would like to thank my mentor Malia for her help, tips and advise all the time.
 - Instructions on how to implement the HTML and CSS code using GitHub was taken from the HTML, CSS and Javascript course from Code Institute.
 - [Code Institute](https://codeinstitute.net/nl/) With the JavaScript Essentials.
 - [Freshman.tech](https://freshman.tech/todo-list/) Used to understand about the To-do-list project.
 - [Youtube](https://www.youtube.com/watch?v=MkESyVB4oUw&t=2010s) This video inspired me and helped me a lot to understanding more about JavaScript and how to start my project. 
 - [Stackoverflow](https://stackoverflow.com) When I was in doubt about something.
 - [CSS Gradient](https://cssgradient.io/) Helped me to match the background colors.
 - [CSS Tricks](https://css-tricks.com/perfect-full-page-background-image/) Helped me to keep the background image in the same spot, so the user can scroll down and the image does not break.
 - [JSON Local Storage](https://frontend.turing.edu/) Helped me to understand a bit about Local Storage using JSON.
 

### Media 
 - The Main-Image are from the free website: [Pexels](https://www.pexels.com/)
 - Icon for the website: [Favicon](https://favicon.io/)
