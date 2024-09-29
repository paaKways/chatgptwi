# ChatGPTwi

## Overview
ChatGPTwi is a web application which allows users to interact with Generative AI (ChatGPT) in a local Ghanaian language (Twi)

## Components
- Express/Node.js (Backend)
- ReactJS (Frontend)
- [GhanaNLP Translation APIs](https://translation.ghananlp.org/apis)
- [ChatGPT API](https://openai.com/api/) (can be substituted for another generative API service eg Gemini, Claude, Mistral, etc)

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
