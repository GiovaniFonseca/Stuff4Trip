# Testing 

The Stuff4Trip site has been tested in the following ways -

- [Code Validation](#code-validation)
    - [W3C HTML Index](#w3c-html-index)
    - [W3C HTML Page 404](#w3c-html-page-404) 
    - [W3C CSS Validator](#w3c-css-validator)
    - [Jshint JS Validator ](#jshint-js-validator)
- [Lighthouse](#lighthouse)
- [Browser Compatibility](#browser-compatibility)
- [Manual Testing](#manual-testing)
- [Bugs](#bugs)
  * [Defects of note](#defects-of-note)
- [Outstanding Defects](#outstanding-defects)

## Code Validation 

### W3C HTML Index:
  <img width="1385" alt="image" src="https://user-images.githubusercontent.com/112728772/204054017-c35a45e5-4b3d-4a53-8ecc-a951514e72d5.png">

### W3C HTML Page 404

  <img width="1399" alt="image" src="https://user-images.githubusercontent.com/112728772/205168343-73a609be-67cc-4ea9-be1e-5d47c5d928cc.png">

### W3C CSS Validator 
  <img width="1385" alt="image" src="https://user-images.githubusercontent.com/112728772/204054056-86b9357d-68b0-41a4-853d-b8e36ed72590.png">

### Jshint JS Validator 
  <img width="1235" alt="image" src="https://user-images.githubusercontent.com/112728772/204054198-7f7014c5-b8e2-49ba-bacf-2b71c515cb92.png">


## Lighthouse 

I used Lighthouse in Chrome Developer Tools to test each of the pages for:

- Performance - How the page performs whilst loading.
- Accessibility - How accessible is the site for all users and how can it be improved.
- Best Practices - How does the site conform to industry best practices.
- SEO - Search engine optimisation. Is the site optimised for search engine result rankings.

#### Mobile:
  <img width="959" alt="image" src="https://user-images.githubusercontent.com/112728772/204670808-0cd903ce-f77c-4510-b080-ea18e975306a.png">

#### Desktop:
  <img width="955" alt="image" src="https://user-images.githubusercontent.com/112728772/204670868-28a4280f-3e3a-42a4-8be0-b328786b253a.png">


## Browser Compatibility

The site was tested on Google Chrome, Microsoft Edge, Safari and Mozilla Firefox, with no visible issues for the user. Appearance, functionality and responsiveness were consistent throughout for a range of device sizes and browsers.

| DEVICE            | BROWSER     |          OS    | VIEWPORT       |
|-------------------|-------------|----------------|----------------|
| Galaxy S21 Ultra  | Firefox     | Android, v11.0 | 412 x 782 px   |
| Galaxy M32        | Chrome      | Android, v11.0 | 384 x 726 px   |
| Moto G7 Play v9.0 | Safari      | Android, v9.0  | 360 x 616 px   |
| Google Pixel 3a   | Chrome      | Android, v9.0  | 393 x 680 px   |
| iPhone 14 Plus    | Safari      | iOS, v16.0     | 428 x 746 dp   |
| iPhone SE 2022    | Chrome      | iOS, v15.4     | 375 x 548 px   |
| iPad Pro 12.9     | Safari      | iOS, v15.3     | 1024 x 1292 px |
| iPad Pro 11 2021  | Chrome      | iOS, v14.5     | 834 x 1075 px  |
| Windows PC        | Edge 108    | windows 10     | 1440 x 821px   |
| Windows PC        | Opera 92    | Windows 11     | 1440 x 821px   |
| Windows PC        | Firefox 107 | Windows 11     | 1440 x 821px   |
| Windows PC        | Firefox 107 | Windows 10     | 1440 x 821px   |
| Macbook           | Safari 15.6 | macOS Monterey | 1440 x 821px   |
| Macbook           | Opera 92    | MacOS Catalina | 1440 x 821 px  |

## Manual Testing 

### Manual Testing 
#### Stuff For Trip Form:
 - [x] Try to submit
 - [x] Try to submit the empty form and verify that an error message about the required fields appears
 - [x] Error message for no input.
 - [x] Error message for duplicate input. 
 - [x] Pre-loading works, if I close my browser and go back to the deployed URL, my data preloads.
 - [x] Edit: User can edit things & preload knows.
 - [x] Delete: User can delete things & preload knows.
 - [x] Valid entry adds to list.
 - [x] User disables Javascript, is notified they need to turn it on to use the site.
    * From a Home screen, navigate: Apps icon(Google)Chrome Chrome icon.
      If unavailable, swipe up from the center of the display then tap Chrome Chrome icon.
    * Tap the Menu icon (upper right)
    * Tap Settings.  
    * From the Advanced section, tap Site settings.
    * Tap JavaScript.
    * Tap the JavaScript switch to turn on or turn off.
 - [x] No console errors.
 - [x] Looks good on Mobile, Tablet and Desktop.

 #### Responsive Testing:
 - For each Device/ Browser/ OS noted in the Browser Compatibility Table, this flow was tested:
 - [x] Input field is easy to access and invalid entries are noted.
 - [x] Buttons working as normal(Add stuff, Edit, Delete and Save).

#### Page 404:
-  [x] User goes within [Stuff4Trip](https://giov3ss.github.io/Stuff4Trip/) domain, but outside of expected index.html they see the custom 404.html page.
-  [x] Navigation link go to back to the main page.

## Bugs
- Constant unit test was done as the features were added. Fixed, checked with appropriate commit messages. No official tracking system was used as the project scope was relatively small.

### Defects of note 
- I had a problem where the user put items to the list so when the list hit the bottom, my background image broke.
  * I just added in my CSS body, html:
      { background: url(../images/main-image.jpg) no-repeat 50% 60% fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      overflow: auto;
      height: 100vh; }
  so now, when the user's list hit the bottom, the background image stays fixed at the back, and the user can still add more items in the list, and scrow down the page as normal.

- ![stuff4trip_AdobeExpress](https://user-images.githubusercontent.com/112728772/205187449-723b846b-a28c-499f-925b-5085c66dfa9f.gif)

## Outstanding Defects
- If the user click on the "Edit" button, and "Save" with an empty data or duplicate content, still save with no issues or error message, this issue wasn't fixed immediately as it's the user's choice to sneak behind the checks for main input. They will see if they have an empty entry, or duplicate entry and they did it on purpose.
- Empty data:

  <img width="847" alt="image" src="https://user-images.githubusercontent.com/112728772/205503004-40e6f356-4721-423a-92d0-6f3b9f1e3e9f.png">

- Duplicate data:

  <img width="823" alt="image" src="https://user-images.githubusercontent.com/112728772/205503100-fb1501a2-7dc2-4070-8a44-8b719bfab5ca.png">


## MAIN PAGE (README)

[Back to main readme](https://github.com/Giov3ss/Stuff4Trip#testing)
