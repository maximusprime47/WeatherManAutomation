const data = require('../resources/data');
const functions = require('../resources/functions');


let WeatherMan = {};

module.exports = {
    beforeEach: browser => {
        WeatherMan = browser.page.weatherObject()
        WeatherMan.navigate()
    },

    after: browser => {
        browser.end()
    },
    'Q6M-27 input & submit': browser => {
        WeatherMan
            .expect.element('@headerI').to.be.visible
        WeatherMan
            .assert.urlEquals('https://devmountain-qa.github.io/weatherman/build/index.html', 'URL = Correct')
        WeatherMan
            //search by valid City
            .waitForElementPresent('@input', 3000)
            .setValue('@input', data.valid.city)
            .waitForElementPresent('@submit', 3000)
            .click('@submit')
            .waitForElementPresent('@specCity', 3000)
            .assert.containsText('@specCity', 'Salt Lake City', 'City Search is Displayed Correctly')

        WeatherMan
            //search by valid Zip
            .click('@searchAgain')
            .waitForElementPresent('@input', 5000)
            .setValue('@input', data.valid.zip)
            .waitForElementPresent('@submit', 3000)
            .click('@submit')
            .waitForElementPresent('@specCity', 3000)
            .assert.containsText('@specCity', 'Salt Lake City', 'Zip Search is displayed Correctly')
        WeatherMan
            //search w/invalid zip or city
            .click('@searchAgain')
            .waitForElementPresent('@input', 5000)
            .setValue('@input', data.invalid.zip)
            .waitForElementPresent('@submit', 3000)
            .click('@submit')
            .waitForElementPresent('@errorMsg', 3000)
            .verify.containsText('@errorMsg', "There was a problem fetching the weather!", 'invalid error msg active')
            .click('@tryAgain')
        WeatherMan
            //make sure errors display for empty input
            .waitForElementPresent('@input', 5000)
            .setValue('@input', data.empty.city)
            .click('@submit')
            .waitForElementPresent('@errorMsg', 3000)
            .verify.containsText('@errorMsg', "There was a problem fetching the weather!", 'empty error msg active')
    },

    'Q6M-28 Examine Card Elements': browser => {
        WeatherMan
            .waitForElementPresent('@input', 4000)
            .setValue('@input', data.valid.city)
            .waitForElementPresent('@submit', 3000)
            .click('@submit')
            .waitForElementPresent('@specCity', 3000)
            .assert.containsText('@specCity', 'Salt Lake City', 'City Search is Displayed Correctly')
            .waitForElementPresent('@card', 3000, 'Card Displays')
            .assert.visible('@city', 'City Shown')
            .assert.visible('@pic', 'image technically shown')
            .assert.visible('@weather', 'Current Weather Displayed')
            .assert.visible('@max', 'Maximum Temp Shown')
            .assert.visible('@min', 'Minimum Temp Shown')
            .assert.visible('@wind', 'WindMPH displayed')
            .assert.visible('@humidity', 'Humidity Percentage Shown')
    }



}