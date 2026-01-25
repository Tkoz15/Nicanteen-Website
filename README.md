# Nicanteen - Premium Pouch Carrier Website

A modern, responsive website for Nicanteen - the ultimate carrier for nicotine pouches. Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- Modern, responsive design with black and green branding
- Built with Next.js 15 App Router
- Styled with Tailwind CSS and shadcn/ui components
- Mobile-first responsive design with hamburger menu
- Video section for advertising content
- Shopify integration for purchases
- Contact form with email notifications via Resend
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Resend account for email (free tier available at https://resend.com)
- A Shopify store (for the "Buy Now" functionality)

### Installation

1. Navigate to the project directory:
```bash
cd nicanteen
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Fill in your credentials

### Environment Variables

```env
# Shopify Store URL
NEXT_PUBLIC_SHOPIFY_URL=https://your-shopify-store.myshopify.com

# Resend Email API Key (required for contact form)
RESEND_API_KEY=re_your_api_key_here
```

### Resend Setup (for Contact Form)

1. Create a free account at https://resend.com
2. Get your API key from the Resend dashboard
3. Add the API key to your `.env.local` file
4. Contact form submissions will be sent to nicanteenllc@gmail.com

**Note:** On the free tier, emails are sent from `onboarding@resend.dev`. To send from your own domain, you'll need to verify a domain in Resend.

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Adding Your Content

### Video
Add your advertising video to the `/public` folder:
- Place your video at `/public/video.mp4`
- (Optional) Add a thumbnail at `/public/video-thumbnail.jpg`
- Uncomment the video element in `app/page.tsx` (around line 132)

### Product Images
Add product photos to the `/public` folder:
- Recommended size: 800x800px
- Formats: PNG or JPG
- Update the product section in `app/page.tsx` to use your images

## Project Structure

```
nicanteen/
├── app/
│   ├── api/
│   │   └── contact/     # Contact form API endpoint
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles with Tailwind
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── layout/          # Header, Footer, Mobile Menu
│   └── sections/        # Page sections
├── lib/
│   └── utils.ts         # Utility functions
└── public/              # Static assets (images, video)
```

## Customization

### Colors
The brand colors (black and green) are defined in `app/globals.css`. You can modify the CSS variables to change the color scheme.

### Content
The main page content is in `app/page.tsx`. Edit the text directly to update the website content.

### Shopify Integration
Update the `NEXT_PUBLIC_SHOPIFY_URL` in your `.env.local` file with your actual Shopify store URL.

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project on Vercel
3. Add your environment variables in Vercel's dashboard:
   - `NEXT_PUBLIC_SHOPIFY_URL`
   - `RESEND_API_KEY`
4. Deploy!

## License

All rights reserved - Nicanteen 2025
