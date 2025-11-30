## Manual Installation

- Install Nodejs locally ()
- Clone the repo
- Install dependencies (npm install)
- Start the DB locally
  - docker run -e POSTGRES_PASSWORD=3241 -d -p 5432:5432 postgres
  - Go to neon.tech and get yourself a new DB
- Change .env file and update your DB credentials
- run npx prisma migrate dev
- npx prisma generate
- npm run build
- npm run start

## Docker Installation

## Docker Compose Installation Steps
