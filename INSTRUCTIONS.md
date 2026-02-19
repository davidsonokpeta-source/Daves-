# 🚀 Instructions to Push Your Portfolio to GitHub

## What's Included
Your complete portfolio with:
- ✅ React frontend (dark theme, all components)
- ✅ FastAPI backend
- ✅ Your professional portrait
- ✅ Updated contact details
- ✅ All 6 data analysis projects
- ✅ Technical skills (SQL, Tableau, Power BI, Excel)

---

## 📋 Steps to Push to GitHub

### Step 1: Extract the ZIP File
Extract `davidson-portfolio.zip` to a folder on your computer.

### Step 2: Open Terminal/Command Prompt
Navigate to the extracted folder:
```bash
cd path/to/davidson-portfolio
```

### Step 3: Initialize Git & Push

Run these commands one by one:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Davidson Okpeta Data Analyst Portfolio"

# Add your GitHub repository as remote
git remote add origin https://github.com/davidsonokpeta-source/Davidsonokpeta-source.github.io.git

# Push to GitHub
git push -u origin main
```

**When prompted for credentials:**
- Username: `davidsonokpeta-source`
- Password: Use your GitHub Personal Access Token (starts with `ghp_` or `github_pat_`)

---

## 🎯 Alternative: Using GitHub Desktop (Easier!)

1. Download GitHub Desktop: https://desktop.github.com
2. Open GitHub Desktop
3. File → Add Local Repository → Select the `davidson-portfolio` folder
4. Click "Publish repository"
5. Name: `Davidsonokpeta-source.github.io`
6. Click "Publish"

---

## 🌐 After Pushing

Your repository will be live at:
**https://github.com/davidsonokpeta-source/Davidsonokpeta-source.github.io**

To enable GitHub Pages:
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` → `/frontend` folder
4. Save

Your site will be live at:
**https://davidsonokpeta-source.github.io/Davidsonokpeta-source.github.io**

---

## 📦 Running Locally (Optional)

To test locally before pushing:

**Frontend:**
```bash
cd frontend
yarn install
yarn start
```

**Backend:**
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```

---

## 🆘 Need Help?

If you encounter any issues:
1. Make sure Git is installed: https://git-scm.com/downloads
2. Generate a new token with 'repo' permissions: https://github.com/settings/tokens
3. Check that the repository exists on GitHub

---

Good luck! 🎉
