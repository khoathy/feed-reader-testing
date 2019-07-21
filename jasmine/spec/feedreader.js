/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    
    /* Test suite "RSS Feeds" */
    describe('RSS Feeds', function() {
        /* This test makes sure that the allFeeds variable has been defined
         * and that it is not empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed in the allFeeds object and 
         * ensures it has a URL defined and that the URL is not empty.
         */
        it('has a URL defined and that the URL is not empty.', function() {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })   
        });

        /* This test loops through each feed in the allFeeds object and 
         * ensures it has a name defined and that the name is not empty.
         */
        it('has a name defined and that the name is not empty.', function() {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })   
        });

    });


    /* Test suite "The menu" */
    describe('The menu', function(){
        // This test ensures the menu element is hidden by default. 
        it('menu is hidden by default', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // This test ensures the menu changes visibility when the menu icon is clicked
        it('menu displays when clicked', function(){

            //expectation: the menu displays when clicked
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            //expectation: the menu is hidden when clicked again
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        // Because loadFeed() is asynchronous, this test uses Jasmine's beforeEach and asynchronous done() function.
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* This test ensures when the loadFeed function is called and completes its work,
         * there is at least a single .entry element within the .feed container.
         */
        it('there is at least a single entry when loadFeed is called and done', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    }); 


    /*Test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        let feedOne, 
            feedTwo;
        
        // new feeds loaded
        beforeEach(function(done) {
            loadFeed(0, function() {
                feedOne = $('.feed').html();
                loadFeed(1, function() {
                    feedTwo = $('.feed').html();
                    done();
                });
            });
        });

        /* This test ensures that the content actually changes
         * when a new feed is loaded by the loadFeed function.
         */
        it('content changes when a new feed is loaded', function(){
            expect(feedOne === feedTwo).toBe(false);
        });
    }); 
}());
