const express = require('express')
const app = express()
const { OpenAI } = require('openai')
const { GhanaNLPTranslationAPI } = require('./ghananlp-api')
require('dotenv').config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})
const ghanaNLPAPI = new GhanaNLPTranslationAPI(process.env.GHANANLP_API_KEY)


app.use(express.json())
app.use(express.static('public'));


async function getChatGPTResponse(englishText) {
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: englishText }]
    })
    return response.choices[0].message.content
}

async function translateEnglishToTwi(englishText) {
    const twiText = await ghanaNLPAPI.translate(englishText, 'en-tw')
    return twiText
}

async function translateTwiToEnglish(twiText) {
    const englishText = await ghanaNLPAPI.translate(twiText, 'tw-en')
    return englishText
}

app.post('/chat', async (req, res) => {
    try {
        const twiText = req.body.message
        const englishText = await translateTwiToEnglish(twiText)
        const chatGPTResponseInEnglish = await getChatGPTResponse(englishText)
        const chatGPTResponseInTwi = await translateEnglishToTwi(chatGPTResponseInEnglish)
        res.json({ response: chatGPTResponseInTwi })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('server is listening on port ' + PORT)
})