# Deployment Guide

## Quick Start

Your portfolio is ready to deploy! Follow these steps:

### Option 1: Deploy to Vercel (Recommended)

1. **Push to GitHub** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Select your repository
   - Click "Deploy" (no configuration needed!)

3. **Update Your Domain** (Optional):
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain

### Option 2: Deploy to Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## Before You Deploy

### 1. Add Your Resume
Replace `public/resume.pdf` with your actual resume:
```bash
# Copy your resume
cp path/to/your/resume.pdf public/resume.pdf
```

### 2. Update Contact Info
Edit `lib/data.ts` to ensure all links are correct:
```typescript
export const personalInfo = {
  email: "your-email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  // ... etc
};
```

### 3. Update Project Links
Make sure all GitHub project links in `lib/data.ts` are correct.

## Customization

### Change Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
// Change gradient colors
bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
```

### Add Your Own Section
1. Create a new component in `app/components/`
2. Import and add to `app/page.tsx`

### Add Analytics (Optional)
For Google Analytics, add to `app/layout.tsx`:
```typescript
import Script from 'next/script'

// In the return
<Script src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID" />
```

## Testing Locally

```bash
# Development server
npm run dev

# Open http://localhost:3000
```

## Production Build

```bash
# Build for production
npm run build

# Test production build locally
npm start
```

## Performance Tips

1. **Optimize Images**: Use Next.js Image component for any photos
2. **Lazy Load**: Animations already use `whileInView` for lazy loading
3. **Bundle Size**: Your current build is ~129KB first load (excellent!)

## SEO Optimization

Your portfolio already includes:
- ✅ Meta tags
- ✅ Open Graph tags (Twitter/LinkedIn sharing)
- ✅ Semantic HTML
- ✅ Proper headings structure

## Need Help?

Check the [Next.js Documentation](https://nextjs.org/docs) or [Vercel Docs](https://vercel.com/docs).

