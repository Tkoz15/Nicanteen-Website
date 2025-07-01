# Nicanteen - Premium Pouch Carrier Website

A modern, responsive website for Nicanteen - the ultimate carrier for nicotine pouches. Built with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, and Supabase.

## Features

- 🎨 Modern, responsive design with black and green branding
- 🚀 Built with Next.js 14 App Router
- 💎 Styled with Tailwind CSS and shadcn/ui components
- 📱 Mobile-first responsive design
- 🛒 Shopify integration for purchases
- 📬 Contact form with Supabase backend
- 🔍 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works)
- A Shopify store (for the "Buy Now" functionality)

### Installation

1. Navigate to the project directory:
```bash
cd C:\Users\VinSpo\Projects\Nicanteen\nicanteen
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Fill in your Supabase and Shopify credentials

### Supabase Setup

1. Create a new Supabase project at https://supabase.com

2. Create a table for contact form submissions:
```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Copy your project URL and anon key to `.env.local`

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
nicanteen/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles with Tailwind
├── components/
│   ├── ui/            # shadcn/ui components
│   ├── layout/        # Header and Footer
│   └── sections/      # Page sections (Hero, Features, etc.)
├── lib/
│   ├── utils.ts       # Utility functions
│   └── supabase/      # Supabase client configuration
└── public/            # Static assets
```

## Customization

### Colors
The brand colors (black and green) are defined in `app/globals.css`. You can modify the CSS variables to change the color scheme.

### Content
All text content is in the component files under `components/sections/`. Simply edit the text in these files to update the website content.

### Shopify Integration
Update the `NEXT_PUBLIC_SHOPIFY_URL` in your `.env.local` file with your actual Shopify store URL.

## Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the project on Vercel
3. Add your environment variables in Vercel's dashboard
4. Deploy!

## License

All rights reserved - Nicanteen 2024