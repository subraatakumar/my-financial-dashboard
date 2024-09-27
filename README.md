# Initialise vite project

```bash
npm create vite@latest my-financial-dashboard -- --template react-ts
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion react-redux @reduxjs/toolkit react-router-dom recharts
```

# Uploading your website to Firebase Hosting

Uploading your website to Firebase Hosting involves a few steps. Here’s a detailed guide on how to deploy your React application using Firebase Hosting:

## Prerequisites

- Firebase Account: Make sure you have a Firebase account. If not, you can create one at Firebase Console.
- Firebase CLI: You need to have the Firebase CLI installed. If you don’t have it installed, you can do so by running:

```bash
npm install -g firebase-tools
```

## Steps to Deploy Your React App

1. Initialize Firebase in Your Project:

  - Open your terminal and navigate to your React project folder.
  - Run the following command to log in to Firebase:
```bash
firebase login
```
  - Then initialize Firebase in your project:
```bash
firebase init
```

  - During the initialization:
    - Select Hosting from the list of features.
    - Choose an existing Firebase project or create a new one in the Firebase console.
    - Specify the public directory. For a typical vite React app, this is dist.
    - Choose to configure it as a single-page app (SPA) if prompted.

2. Build Your React App:
  - Before deploying, you need to build your app. Run the following command in your project folder:

```bash
npm run build
```

- This command creates a build folder containing the optimized production build of your app.

3. Deploy to Firebase:

  - Now you’re ready to deploy. Run:
    
```bash
firebase deploy
```

  - After the deployment, you will receive a hosting URL where your app is now live.

4. Access Your Deployed App:
   
  - You can visit the URL provided after the deploy command to see your live application.

## Additional Configuration

If you need to configure routing or rewrite rules (for example, if you're using React Router), you can modify the firebase.json file created during initialization. Here’s an example of how you can set up rewrites:

```json
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Troubleshooting

- Build Errors: If you encounter errors during the build step, ensure your code is free of syntax errors and warnings.
- Firebase CLI Errors: Ensure you are logged into the correct Firebase account that has access to your project.

## Summary

By following these steps, you can easily deploy your React application to Firebase Hosting. It provides a quick way to get your web app online, with free tier options available for basic use. If you have any further questions or run into issues, feel free to ask!

