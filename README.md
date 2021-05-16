# Crypto Penguin
Crypto penguin is a cryptocurrency information site where users can get up to date on important metrics of the top 1000 cryptocurrencies in the world


![](/assets/images/multi-device-image)
## Table of Contents
- [User Stories](#user-stories)
- [User Experience](#user-experience)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Resources](#resources)
- [Testing](#testing)
- [Deployment](#deployment)
- [Acknowledgments](#Acknowledgments)




## User Stories
### User 1
Paul is a crypto newbie and has recently purchased Bitcoin. He needs a site where he can easily check the current price of Bitcoin.
### User 2
Ciara is a cryptocurrency trader. She needs a resource where she can check the main crypto metrics for the assets she has invested in. As Ciara is not a novice, she relies on market cap and volume more than price.
### User 3
Michael has been investing in stocks for quite some time and has now had his attention drawn to the crypto space. He is particularly interested in global metrics, sizing the scale of the industry by market cap, volume and number of assets.
### User 4
Sarah is an alt coin trader. Since alt coins enjoy a rally when Bitcoin dominance falls and Ethereum dominance rises, she needs a resourse where she can check the current dominance levels, while also being able to check stats on the top coins, which may not all be on her exchange of choice

## User Experience
## 1. Strategy
Customer Goals: To be able to provide acurate and detaied statistics on the top 1000 cryptocurrencies in the world along with industry statistics.

Personal Goals: To create a project about something i have a passion for, learn to integrate APIs and improve my javascript knowledge with my first JS project

## 2. Scope
I aimed to keep the data provided to the user simple but sufficient in giving a clear image of the top 1000 cryptocurrencies. I have included some global metrics on the industry as a whole along with the main data points required to understand the performace of any of the top 1000 crypto assets

## 3. Structure
The site contains a simple navigation bar between the home page and the contact us page. Following this, the first set of data displayed is the global metrics. This data is intentionally displayed at the top of the home page as it is good to get an understanding of the global market cap, volume and dominance ratings before diving into individual assets. Following this, all data is formatted identically in a table. I have set up a modal to open upon clicking of any asset name. This modal wass designed particularly for smaller screen sizes, so all data is accessable even when the table cannot display it all.

## 4. Skeleton
[Wireframes](/assets/wireframes/wireframes.pdf)
## 5. Surface 
I wanted to keep the design simple but elegant. I did not want any styling to take away from the content displayed on the page, only to enhance it. I went for a dark background (#212529) with a simple font (Roberto) and the majority of the font in (#fafafa) to allow the data to pop. i wanted to make the cryptocurrency symbol stand out so i went for a color and font combination of (#f59c27 & Zen Dots). Zen Dots looks somewhat futuristic. This combined with the chosen shade of orange adds decoration down the middle of the page
# Features
## Deployed Features
- Collapsable Bootstrap navbar
- Global cryptocurrency metric bar
- Search page function
- Table containing most relevant information on top 1000 Cryptocurrencies
- Ability to be able to sort by 24H Percent Change
- Bootstrap Modal containing coin data when name clicked
- Integrated Google Maps API showing Crypto Penguin location
- Contact form using EmailJS


# Technologies used
## Languages
- [HTML5](https://en.wikipedia.org/wiki/HTML5) - Basis of the content added through HTML5
- [CSS3](https://en.wikipedia.org/wiki/CSS) - Used to style content
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - Website interactivity
- [Coin Gecko API](https://www.coingecko.com/en/api) - API used to obtain data
- [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) - Location integration
- [EmailJS](https://www.emailjs.com/docs/) - Contact form integration

## Workspace
I used [Github](https://github.com/) to host my repository and [Visual Studio Code](https://code.visualstudio.com/) to write my code

## Integration/Frameworks
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) - used for carousels, navbar etc
- [jQuery](https://api.jquery.com/) - JavaScript library 

# Resources 
## Information Resources
- [Stack Overflow](https://stackoverflow.com/) - Educational resource
- [Youtube](https://www.youtube.com/) - Tutorial resource
- [Balsamiq](https://balsamiq.com/wireframes/) - Used to generate Wireframes
- [W3Schools](https://www.w3schools.com/js/default.asp) - Used to check up on methods etc.

## Code Resources

- [W3Schools](https://www.w3schools.com/js/default.asp) - Provided some basic JavaScript code which i was able to manipulate to work for my site - Particularly helpful with the search and sort functions.
## Code Validation
- [WC3 HTML Validator](https://validator.w3.org/) - Used to test HTML code - Pass
- [WC3 CSS Validator](https://jigsaw.w3.org/css-validator/) - Used to test CSS code - Pass
- [JS Hint](https://jshint.com/) - Used to test JavaScript - Pass

# Testing

## Functionality
### Nav Bar
- The nav bar works as intended across all devices. The collapsable menu works and looks as intended.
- Tested to ensure logo inage returned to home page
- Test to ensure links brought user to correct page

### Search Bar
- I tested the search bar on multiple pages, searching for cryptocurrencies by name. The search bar is intended to only search names within the 100 displayed on a given page and it performs this correctly.

### Sorting by 24H Percent Change and Rank
- I have tested both sorting columns across all pages
  - Page loads ordered by 'Rank' in descending order
  - Click '24H Change' table head to order descending
  - Click '24H Change' to rearrange to ascending
  - Click 'Rank' to reorder by this column.
  - Click 'Rank' again to sort descendingly by Rank

### Modal 
- Opened modal across all devices. Checked information displaying in modals corresponded with data on table.
- Checked both oreintations across mobile devices to ensure modal as sized and fitted properly

### Page Navigation
- Tested navigation links on all pages. Tested to make sure 'Prev' button did not appear on first page and 'Next' did not apprear when page 10 reached

### Footer Link to API
- The link in the footer is working correctly and opening in a seperate tab

### Google Maps API
- Checked to ensure opened in correct location 
- Tested interactivity on map
- Tested marker information window - information displaying correctly

### Contact Form
- Tested name field ensuring it is required
- Tested email field to ensure it is required and requires email format
- Tested text area to ensure it is required.
- Tested emailJS - Working correctly and emails arriving correctly formatted into my email address.
- Alert working correctly when submission successful
- Alert working correctly when submission fails 

## Responsiveness
Responsiveness was checked using [Responsinator](https://www.responsinator.com/) while also designed with responsiveness in mind with regular testing on Dev Tools. The responsiveness has been tested across multiple devices such as iPhone 8, iPhone 8 Plus, iPhone X, Samusing Galaxy X5, iPad etc.

## Usability 
Prior to submission, I deployed the site to GitHub Pages in order to be able to share a link to the site with some friends who are also interested in Cryptocurrency. All of the feedback was very positive, each friend found it easy to use and useful in day to day life

## Performace
I used the Chrome Dev Tools Lighthouse feature to check the sites performance on both mobile and desktop versions. The site performed extremely well with results displayed below

#### Mobile Test
![Mobile Test](/assets/images/lighthouse-performance-test-mobile)

#### Desktop Test
![Desktop Test](/assets/images/lighthouse-performance-test-desktop)

## Browsers and Devices
- I tested the website on Google Chrome, Safari and Microsoft Edge and all features looked and worked as exprected
- I tested the website on an iPhone 11, iPhone 8 and Galaxy 8 and all featues looked and worked as expected

## Bugs Throughout Development
- I ran into an issue that caused a concole log error some times i clicked the 'Next' button to navigate to the next page. Using Google Chrome Dev Tools Debugger, I was able to determine that the issue lay in the following line 
```js 
              <td class='coin-percent'>${coins.price_change_percentage_24h.toFixed(2) + '%'}</td>

```
- The toFixed function was returning null on the odd occurance that the data was 0. I fixed the issue by adding 'or 0' to the code as seen below

```js
              <td class='coin-percent'>${(coins.price_change_percentage_24h || 0).toFixed(2) + '%'}</td>
```
# Deployment
1. All code was constructed in Visual Studio Code and held in a Github repository
2. Ensured all testing and validations were complete
3. Pushed the final version code to Github
4. From the repository i selected the settings tab
5. In the Github Pages section i selected Main Branch from the source dropdown and pressed save 
6. The Github hosted URL appeared and within a few moments the page was live


# Acknowledgments
- Thanks to [Coin Gecko](https://www.coingecko.com/en/api) for use of the API
- Thanks to the Code Institute whos tuition has brought my skills to a level to be able to achieve this. The tutor support have been very helpful and patient
- A big thanks to my great mentor Excellence Ilesanmi for helping and guiding me along the way

