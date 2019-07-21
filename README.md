# Feed Reader Testing

## About The Project
This project is to use Jasmine to write effective tests against a web-based application that reads RSS feeds.
The project requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript.

## Test content
The required tests for the project (including RSS Feed testing, RSS Feed properties, menu default state, and menu hiding/showing) are comprehensive enough to adequately test the functionality of the app. Tests are independent of one another.

### Test Suite **"RSS Feeds"**
-A test makes sure that the allFeeds variable has been defined and that it is not empty.
-A test loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
-This test loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

### Test Suite **"The Menu"**
- A test ensures the menu element is hidden by default.
- A test ensures the menu changes visibility when the menu icon is clicked (expectation: the menu displays when the icon clicked, then is hidden when the icon is clicked again)

### Test Suite **"Initial Entries"**
- This test ensures when the loadFeed function is called and completes its work, there is at least a single entry within the feed container. Because loadFeed() is asynchronous, this test uses Jasmine's beforeEach and asynchronous done() function.

### Test Suite **"New Feed Selection"**
- This test ensures that the content actually changes when a new feed is loaded by the loadFeed function. This test also uses Jasmine's beforeEach and asynchronous done() function.

## How to run the app
- Clone or download this Feed Reader Testing repo.
- Extract and open the folder.
- Open the file `index.html` with your favorite browser.
- The page displays both the Feed Reader App and the Jasmine test suites.
- Scroll to the bottom of the browser to view Jasmine test results.


## Contributing
The Test Reader app that needs testing [Feed Reader Testing starter code](#https://github.com/udacity/frontend-nanodegree-feedreader)
