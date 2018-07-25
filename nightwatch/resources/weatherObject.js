module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    elements: {
        //Q6M-27 Selectors
        headerI: 'h1.app__title',
        input: 'input[type="text"]',
        submit: 'button.enter-location__submit',
        specCity: 'h3.current-weather__location',
        searchAgain: {
            selector: '//button[text()="Search Again"]',
            locateStrategy: 'xpath'
        },
        errorMsg: 'h3.error-message__message', 
        tryAgain: 'button.error-message__try-again',
        
        
        //Q6M-28 Selectors
        card: 'div.current-weather__weather', 
        city: 'h3.current-weather__location', 
        pic: 'img[alt="sunny"]', 
        weather: 'h3.current-weather__temp', 
        max: 'li[name="maxTemp"]',
        min: 'li[name="minTemp"]', 
        wind: 'li[name="wind"]', 
        humidity: 'li[name="humidity"]'

    }
}