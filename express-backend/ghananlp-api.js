const axios = require('axios')

class GhanaNLPTranslationAPI {
    constructor(apiKey, version = 'v1') {
        if (!apiKey) {
            throw new Error('An API key is required')
        }

        this.apiKey = apiKey
        this.version = version
        this.baseURL = `https://translation-api.ghananlp.org/${version}`
        this.client = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Ocp-Apim-Subscription-Key': this.apiKey,
                'Content-Type': 'application/json'
            }
        })
    }

    /**
     * Translates a given input text
     * @param {string} text - Text input
     * @param {string} lang - Language pair code (eg 'en-tw' for English to Twi)
     * @returns {Promise<string>} Translated text output
     */
    async translate(text, lang) {
        try {
            const response = await this.client.post('/translate', {
                in: text,
                lang: lang
            })
            return response.data;
        } catch (err) {
            this.handleError(err)
        }
    }

    /**
     * Retrieves a list of supported languages.
     * @returns {Promise<Object[]>} The list of langauge codes with their corresponding language names
     */

    async getLanguages() {
        try {
            const response = await this.client.get('/languages')
            return response.data
        }
        catch (err) {
            this.handleError(err)
        }
    }

    handleError(err) {
        if (error.response) {
            console.error(`Error: ${err.response.data.message} || An error occurred while making this API call`)
            throw new Error(err.response.data.message || 'An error occurred while making this API call')
        }
        else if (error.request) {
            console.error('No response received from the API')
            throw new Error('No response received from the API')
        }
        else {
            console.error(`Error: ${err.message}`)
            throw new Error(err.message)
        }
    }
}

module.exports = { GhanaNLPTranslationAPI }