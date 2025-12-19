# Arabic Hashtag Generator - Backend API

Backend API for the Arabic Hashtag Generator tool.

## 🚀 Quick Start

### Installation

```bash
cd backend
npm install
```

### Running the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server will run on: `http://localhost:5000`

## 📡 API Endpoints

### Countries

- `GET /api/countries` - Get all countries
- `GET /api/countries/:code` - Get specific country (e.g., /api/countries/sa)
- `GET /api/countries/:code/cities` - Get cities of a country
- `GET /api/countries/:code/hashtags` - Get all hashtags for a country

### Categories

- `GET /api/categories` - Get all categories
- `GET /api/categories/:slug` - Get specific category (e.g., /api/categories/travel)
- `GET /api/categories/:slug/hashtags` - Get all hashtags for a category

### Hashtags

- `GET /api/hashtags/search?q=سفر` - Search hashtags
- `POST /api/hashtags/generate` - Generate hashtags from text
- `GET /api/hashtags/popular` - Get popular hashtags

### Trending

- `GET /api/trending` - Get global trending hashtags
- `GET /api/trending/:country` - Get country-specific trending (e.g., /api/trending/sa)
- `GET /api/trending/category/:slug` - Get category trending

## 📝 Example Requests

### Get Saudi Arabia data
```bash
curl http://localhost:5000/api/countries/sa
```

### Get Travel category
```bash
curl http://localhost:5000/api/categories/travel
```

### Search hashtags
```bash
curl "http://localhost:5000/api/hashtags/search?q=سفر&limit=10"
```

### Generate hashtags from text
```bash
curl -X POST http://localhost:5000/api/hashtags/generate \
  -H "Content-Type: application/json" \
  -d '{"text": "أحب السفر والمغامرات", "country": "sa", "category": "travel"}'
```

## 🗂️ Project Structure

```
backend/
├── src/
│   ├── routes/          # API routes
│   ├── utils/           # Utility functions
│   └── server.js        # Main server file
├── package.json
└── .env                 # Environment variables
```

## 🔧 Environment Variables

Create a `.env` file with:

```env
PORT=5000
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:3000
```

## 📊 Data Source

Data is loaded from JSON files in the `database/` folder:
- `database/countries/` - Country-specific data
- `database/categories/` - Category-specific data

## 🛠️ Tech Stack

- Node.js
- Express.js
- CORS
- Helmet (Security)
- Morgan (Logging)
- Compression

## 📈 Future Enhancements

- [ ] MongoDB integration
- [ ] User authentication
- [ ] Analytics tracking
- [ ] Rate limiting
- [ ] Caching with Redis
- [ ] Real-time trending updates