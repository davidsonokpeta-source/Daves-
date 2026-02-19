# Davidson Okpeta - Data Analyst Portfolio

A modern, interactive portfolio showcasing data analysis projects and expertise. Built with React, featuring a dark professional theme with smooth animations and project filtering.

## 🎯 Features

- **Dark Professional Theme** - Slate/charcoal backgrounds with royal blue accents
- **Interactive Project Filtering** - Filter projects by category (Dashboard, Analysis)
- **Animated Statistics** - Live counter animations showcasing experience metrics
- **Responsive Design** - Optimized for all devices
- **Smooth Animations** - Fade-in effects and hover transitions
- **Technical Skills Showcase** - SQL, Tableau, Power BI, Excel with proficiency bars

## 🛠️ Tech Stack

### Frontend
- React 19
- Tailwind CSS
- Shadcn UI Components
- Lucide React Icons
- React Router DOM
- IBM Plex Sans & Roboto Mono Fonts

### Backend
- FastAPI
- MongoDB with Motor (async driver)
- Python 3.x

## 📁 Project Structure

```
├── frontend/          # React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── data/        # Mock data
│   │   └── ui/          # Shadcn UI components
│   └── public/          # Static assets
├── backend/           # FastAPI server
│   └── server.py      # API endpoints
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and Yarn
- Python 3.8+
- MongoDB

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Davidsonokpeta-source.github.io.git
   cd Davidsonokpeta-source.github.io
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   yarn install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

4. **Environment Setup**
   
   Frontend `.env` file (`frontend/.env`):
   ```
   REACT_APP_BACKEND_URL=http://localhost:8001
   ```
   
   Backend `.env` file (`backend/.env`):
   ```
   MONGO_URL=mongodb://localhost:27017
   DB_NAME=portfolio_db
   ```

### Running Locally

1. **Start Backend**
   ```bash
   cd backend
   uvicorn server:app --reload --host 0.0.0.0 --port 8001
   ```

2. **Start Frontend** (in a new terminal)
   ```bash
   cd frontend
   yarn start
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## 📦 Deployment

### GitHub Pages (Frontend Only)

1. Build the frontend:
   ```bash
   cd frontend
   yarn build
   ```

2. Deploy to GitHub Pages using the `gh-pages` branch

### Full Stack Deployment
- Deploy backend on services like Heroku, Railway, or AWS
- Deploy frontend on Vercel, Netlify, or GitHub Pages
- Update `REACT_APP_BACKEND_URL` to point to deployed backend

## 📧 Contact

**Davidson Okpeta**  
- Email: Davidsonokpeta@gmail.com
- Phone: +447907052077
- LinkedIn: [linkedin.com/in/davidsonokpeta](https://linkedin.com/in/davidsonokpeta)
- Medium: [medium.com/@okpetaikhazuangbe](https://medium.com/@okpetaikhazuangbe)
- GitHub: [github.com/davidsonokpeta](https://github.com/davidsonokpeta)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Emergent AI](https://emergent.sh)
- UI Components from [Shadcn UI](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)

---

© 2025 Davidson Okpeta. All rights reserved.
