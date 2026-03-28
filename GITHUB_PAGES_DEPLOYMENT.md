# GitHub Pages Deployment Guide

This guide will help you deploy your Proxi.tech Next.js application to GitHub Pages.

## Prerequisites

1. A GitHub repository with your Next.js project
2. Admin access to the repository
3. A custom domain (optional, but recommended for production)

## Step 1: Configure Next.js for GitHub Pages

### Update `next.config.js`

Create or update your `next.config.js` file to configure the application for GitHub Pages:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static HTML export
  output: 'export',
  
  // Configure the base path for GitHub Pages
  // Replace 'your-repo-name' with your actual repository name
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  
  // Disable trailing slash to avoid routing issues
  trailingSlash: false,
  
  // Configure redirects for client-side routing
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard',
        permanent: true,
      },
      {
        source: '/auth/signin',
        destination: '/auth/signin',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
```

### Update `package.json`

Add the following scripts to your `package.json`:

```json
{
  "scripts": {
    "build": "next build && next export",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d out"
  },
  "devDependencies": {
    "gh-pages": "^6.1.1"
  }
}
```

## Step 2: Install gh-pages

```bash
npm install --save-dev gh-pages
```

## Step 3: Configure Environment Variables

Create a `.env.production` file for production environment variables:

```env
# Hugging Face API
HUGGINGFACE_API_KEY=your_huggingface_api_key_here

# MongoDB (optional for production without auth)
MONGODB_URI=mongodb://localhost:27017/proxi

# Base path for GitHub Pages
NEXT_PUBLIC_BASE_PATH=/your-repo-name
```

## Step 4: Build the Application

```bash
npm run build
```

This will create an `out` directory with your static files.

## Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

## Step 6: Configure GitHub Repository

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose the `gh-pages` branch
5. Click **Save**

## Step 7: Configure Custom Domain (Optional)

If you have a custom domain:

1. Create a `CNAME` file in your project root:

```
your-domain.com
```

2. In your DNS provider, add a CNAME record:
   - **Name**: `@` (or your subdomain)
   - **Value**: `your-username.github.io`

3. In GitHub Pages settings, add your custom domain

## Step 8: Verify Deployment

After deployment, your site should be available at:
- GitHub Pages URL: `https://your-username.github.io/your-repo-name`
- Custom domain: `https://your-domain.com` (if configured)

## Troubleshooting

### 404 Errors on Refresh

If you get 404 errors when refreshing pages other than the homepage:

1. Ensure you have the `output: 'export'` configuration in `next.config.js`
2. Check that your `basePath` is correctly set
3. Verify that the `gh-pages` branch contains the correct files

### Custom Domain Not Working

1. Check your DNS settings
2. Ensure the `CNAME` file is in the root of your repository
3. Wait up to 24 hours for DNS changes to propagate

### Build Failures

1. Check that all required environment variables are set
2. Verify that your Hugging Face API key is valid
3. Ensure all dependencies are installed

## Production Considerations

### Environment Variables in Production

For production deployment, you should set environment variables in GitHub:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add your environment variables as repository secrets:
   - `HUGGINGFACE_API_KEY`
   - `MONGODB_URI` (if using MongoDB)

### Security

1. Never commit API keys to your repository
2. Use GitHub secrets for sensitive environment variables
3. Consider using a production MongoDB instance instead of localhost

### Performance

1. Enable gzip compression in your GitHub Pages settings
2. Use a CDN for better global performance
3. Optimize images and assets

## Example GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
      env:
        HUGGINGFACE_API_KEY: ${{ secrets.HUGGINGFACE_API_KEY }}
        MONGODB_URI: ${{ secrets.MONGODB_URI }}
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

This workflow will automatically deploy your site whenever you push to the main branch.

## Support

If you encounter issues:

1. Check the GitHub Pages build logs
2. Verify your configuration files
3. Test locally with `npm run build`
4. Check the [Next.js documentation](https://nextjs.org/docs) for additional guidance