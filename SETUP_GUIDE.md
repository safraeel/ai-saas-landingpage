# Proxi.tech Setup Guide

This guide will help you set up MongoDB and Hugging Face for your Proxi.tech application.

## Step 1: Set up MongoDB Atlas (Free)

### 1.1 Create MongoDB Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Click "Try Free" or "Sign Up"
3. Sign in with your GitHub account (safraeelz@gmail.com)
4. Complete the registration process

### 1.2 Create a Free Cluster
1. After logging in, click "Build a Database"
2. Select "Free" tier (Shared RAM, 512 MB storage)
3. Choose a cloud provider (AWS, Google Cloud, or Azure)
4. Select a region closest to you
5. Click "Create Cluster" (this may take 1-2 minutes)

### 1.3 Set up Database Access
1. In your cluster dashboard, click "Database Access" on the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create a username (e.g., `proxiuser`)
5. Create a strong password and save it
6. Set user privileges to "Read and write to any database"
7. Click "Add User"

### 1.4 Set up Network Access
1. Click "Network Access" on the left sidebar
2. Click "Add IP Address"
3. Click "Add Current IP Address"
4. Click "Confirm"

### 1.5 Get Connection String
1. Go back to your cluster dashboard
2. Click "Connect" button
3. Select "Connect your application"
4. Choose Driver: "Node.js" and Version: "4.1 or later"
5. Copy the connection string (it will look like):
   ```
   mongodb+srv://<username>:<password>@cluster.mongodb.net/
   ```
6. Replace `<username>` and `<password>` with your database user credentials

## Step 2: Set up Hugging Face (Free)

### 2.1 Create Hugging Face Account
1. Go to [Hugging Face](https://huggingface.co/)
2. Click "Sign Up" or "Sign In"
3. Sign in with your GitHub account

### 2.2 Get API Token
1. Click your profile picture in the top right
2. Select "Settings"
3. Click "Access Tokens" in the left sidebar
4. Click "New token"
5. Name it "Proxi.tech"
6. Set role to "Read"
7. Click "Generate token"
8. Copy the token (it starts with `hf_`)

## Step 3: Update Environment Variables

### 3.1 Edit .env.local file
Open the `.env.local` file in your project and update it with your credentials:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/proxi

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Authentication Providers (Google example)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Hugging Face API
HUGGINGFACE_API_TOKEN=hf_yourtokenhere
```

Replace:
- `YOUR_USERNAME` with your MongoDB username
- `YOUR_PASSWORD` with your MongoDB password  
- `YOUR_CLUSTER` with your MongoDB cluster name
- `hf_yourtokenhere` with your Hugging Face token

## Step 4: Install Hugging Face Dependencies

Run this command in your terminal:
```bash
npm install @huggingface/inference
```

## Step 5: Update API Routes

I'll update the API routes to use Hugging Face instead of mock data. The updated routes will:

1. Connect to your MongoDB database
2. Use Hugging Face API for real AI content generation
3. Save generated content to your database
4. Fetch user history from your database

## Step 6: Test the Application

1. Make sure MongoDB cluster is running (green status in Atlas)
2. Start your development server: `npm run dev`
3. Visit http://localhost:3000
4. Try generating content and check if it saves to your database

## Troubleshooting

### MongoDB Connection Issues
- Make sure your IP address is whitelisted in Network Access
- Double-check your username and password
- Ensure your cluster is running (green status)

### Hugging Face API Issues
- Verify your API token is correct
- Check if you have remaining free tokens in your Hugging Face account
- Try a simple test request to verify the API works

## Next Steps

Once you complete these steps, your Proxi.tech application will:
- ✅ Use real AI for content generation
- ✅ Save all content to your MongoDB database
- ✅ Allow users to view their content history
- ✅ Be ready for production deployment

Need help with any step? Just let me know which step you're on!