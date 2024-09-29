# ChatGPTwi

<img width="500px" src="https://github.com/user-attachments/assets/063a61aa-09ea-44b2-ba8c-3245551c8a9f">

## Overview
Current LLMs are broad-based and most do not work with Ghanaian local languages like Twi, Ewe/Fon, Ga etc. 

Enter ChatGPTwi! A minimalistic chat-ui style webapp which allows users to interact with Generative AI (ChatGPT) in a local Ghanaian language. Just plug in your API keys and you're good to go! :-D

## Components
- Express/Node.js (Backend)
- ReactJS (Frontend)
- [GhanaNLP Translation APIs](https://translation.ghananlp.org/apis)
- [ChatGPT API](https://openai.com/api/) (will be able to substitute for another generative API service soon eg Gemini, Claude, Mistral, etc)

## Setup
### 1. Install required dependencies
Run the following command in `/express-backend`
```
npm install 
```
### 2. Create and insert API keys in .env file
```
OPENAI_API_KEY=sk_xxxxxxxxxxxxxxxxxxxxxxxxx
GHANANLP_API_KEY=aaaaaaaaaaaaaaaaaaaaaaaaaaa
```
### 3. Run the app
```
npm run start
```

### 4. Access the app 
Open http://localhost:3000 to view the app
