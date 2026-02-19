# Push Your Portfolio to GitHub

Follow these steps to push your code to GitHub:

## Commands to Run

```bash
# Navigate to your project directory
cd /app

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Davidsonokpeta-source.github.io.git

# Push to GitHub
git push -u origin main
```

When prompted for credentials:
- **Username**: Your GitHub username
- **Password**: Use a Personal Access Token (NOT your GitHub password)

## Creating a Personal Access Token

If you don't have a token:
1. Go to: https://github.com/settings/tokens/new
2. Name: "Portfolio Deploy"
3. Expiration: 90 days
4. Check: ✅ repo
5. Generate and copy the token
6. Use this token as your password when pushing

## Alternative: Using SSH

If you prefer SSH:
```bash
git remote add origin git@github.com:YOUR_USERNAME/Davidsonokpeta-source.github.io.git
git push -u origin main
```

## Verify Your Push

After pushing, visit:
https://github.com/YOUR_USERNAME/Davidsonokpeta-source.github.io

Your portfolio will be live at:
https://YOUR_USERNAME.github.io/Davidsonokpeta-source.github.io
