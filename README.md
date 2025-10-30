# Developer Feedback Board - Backend

Node.js/Express API for the Developer Feedback Board application.

## Features
- User authentication with JWT
- CRUD operations for feedback
- Vote management
- Status tracking

## Tech Stack
- Node.js
- Express
- PostgreSQL/MongoDB
- JWT for authentication

## API Endpoints
- POST /api/auth/register - Register user
- POST /api/auth/login - Login user
- GET /api/feedbacks - Get all feedback
- POST /api/feedbacks - Create feedback
- POST /api/feedbacks/:id/vote - Upvote feedback

## Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Create `.env` file with DATABASE_URL and JWT_SECRET
4. Run `npm run dev`

## Live Demo
[Link will be added after deployment]

