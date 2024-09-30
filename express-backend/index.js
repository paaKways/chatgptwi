const express = require('express')
const app = express()
const { OpenAI } = require('openai')
const { GhanaNLP } = require('@paakways/ghananlp-node') //require('./ghananlp-api')
require('dotenv').config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})
const ghanaNLPAPI = new GhanaNLP(process.env.GHANANLP_API_KEY, 'v1')


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
    const twiText = await ghanaNLPAPI.translate({ in: englishText, lang: 'en-tw' })
    return twiText
}

async function translateTwiToEnglish(twiText) {
    const englishText = await ghanaNLPAPI.translate({ in: twiText, lang: 'tw-en' })
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