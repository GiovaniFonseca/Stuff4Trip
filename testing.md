# Testing 

The Stuff4Trip site has been tested in the following ways -

- [Code Validation](#code-validation)
    - [W3C HTML Validator](#w3c-html-validator) 
    - [W3C CSS Validator](#w3c-css-validator)
    - [Jshint JS Validator ](#jshint-js-validator)
    - [W3C HTML Page 404](#page-404)
- [Lighthouse](#lighthouse)
- [Browser Compatibility](#browser-compatibility)
- [Manual Testing](#manual-testing)
- [Bugs](#bugs)
  * [Defects of note](#defects-of-note)
- [Outstanding Defects](#outstanding-defects)

## Code Validation 

### W3C HTML Validator

#### Index Page:

<img width="1385" alt="image" src="https://user-images.githubusercontent.com/112728772/204054017-c35a45e5-4b3d-4a53-8ecc-a951514e72d5.png">

### W3C CSS Validator 

<img width="1385" alt="image" src="https://user-images.githubusercontent.com/112728772/204054056-86b9357d-68b0-41a4-853d-b8e36ed72590.png">

### Jshint JS Validator 

<img width="1235" alt="image" src="https://user-images.githubusercontent.com/112728772/204054198-7f7014c5-b8e2-49ba-bacf-2b71c515cb92.png">

### W3C HTML Page 404
<img width="1399" alt="image" src="https://user-images.githubusercontent.com/112728772/205168343-73a609be-67cc-4ea9-be1e-5d47c5d928cc.png">

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
#### Sign up Form:
 - [x] Try to submit
 - [x] Try to submit the empty form and verify that an error message about the required fields appears
 - [x] Try to submit the same content, and a message appears
 - [x] No console errors
 - [x] Looks good on Mobile, Tablet and Desktop 

 #### Responsive Testing:
 - For each Device/ Browser/ OS noted in the Browser Compatibility Table, this flow was tested:
 - [x] Input field is easy to access and invalid entries are noted.
 - [x] Buttons working as normal(Add stuff, Edit, Delete and Save)

#### Page 404:
-  [x] User goes within [Stuff4Trip](https://giov3ss.github.io/Stuff4Trip/) domain, but outside of expected index.html they see the custom 404.html page.
-  [x] Navigation link go to back to the main page.

## Bugs
- Constant unit test was done as the features were added. Fixed, checked with appropriate commit messages. No official tracking system was used as the project scope was relatively small.

### Defects of note 
- I had a problem where the user scrolls the page, the navigation bar disappears.
  * I just added header { position: fixed; } to fix the nav bar, so when the user scroll down the page, the header still visible, and the user can click in the sections.
<img width="1434" alt="image" src="https://user-images.githubusercontent.com/112728772/195998721-98a977b1-5d61-4d3a-a1c2-adb5c5bbadbf.png">

- Also the "About us" section when the text was centered and on a small device it was difficult to read.
  * So I just addded the {text-align:left} to the About Us text, to make it easy to read.

- Also the Sign Up section, the form was really narrow in a small devices, because of the margins that I put before.
  * I just updated the breakpoints in the .container, with new values, to have the gray background on small devices like desktop.

## Outstanding Defects

- No outstanding defects exist at this time that the developer is aware of.


## MAIN PAGE (README)

[Back to main readme](https://github.com/Giov3ss/Devs-Connect#testing)
