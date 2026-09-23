# SS Ruma International Ltd - E-Commerce Platform

A robust, full-stack e-commerce platform built with Next.js and MongoDB. Designed for high performance, dynamic theming, and seamless shopping experiences across multiple user roles.

## 🚀 Key Features

### Storefront & Shopping Experience
- **Dynamic Theming:** Seamless support for light and dark modes with customizable color palettes.
- **Product Catalog:** Advanced product filtering, search, and categorization.
- **Cart & Checkout:** Real-time cart synchronization, guest checkout, and coupon/promo code support.
- **Payment Integration:** Integrated with SSLCommerz for secure online payments along with Cash on Delivery (COD) and manual payment options.
- **Wallet & Loyalty:** Built-in digital wallet and subscription/loyalty reward points for customers.
- **Tracking & Analytics:** Integrated Facebook Pixel (fbq) and TikTok Pixel (ttq) for advanced conversion tracking (InitiateCheckout, Purchase, etc.).

### User Management & Authentication
- **Secure Authentication:** Powered by NextAuth.js with support for credentials (email/phone + password) and social logins (Google).
- **Phone Number Normalization:** Intelligent parsing and normalization of local numbers and Bangla digits.
- **Role-Based Access Control:** Distinct dashboard experiences for:
  - Customers
  - Admins & Managers
  - Showroom Managers
  - Employees
  - Wholesalers

### Admin & Store Management
- **Dashboard Analytics:** Comprehensive overview of sales, orders, and revenue.
- **Order Management:** Track, update, and manage the fulfillment lifecycle of orders.
- **Inventory Control:** Real-time stock validation to prevent overselling.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Database:** MongoDB & Mongoose
- **Styling:** Tailwind CSS
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) & Radix UI
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form & Zod
- **Authentication:** NextAuth.js
- **State Management:** Redux Toolkit (for Cart & global state)
- **Notifications:** Sonner (Toasts) & SweetAlert2

## 📦 Prerequisites

Make sure you have the following installed on your local machine:
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or Atlas URI)

## 🚦 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ssrumaintltdv2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` or `.env.local` file in the root directory and add the necessary environment variables:
   ```env
   # Application
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   
   # Database
   MONGODB_URI=your_mongodb_connection_string
   
   # Authentication (NextAuth)
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   
   # Google OAuth (Optional)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   
   # SSLCommerz Integration
   STORE_ID=your_store_id
   STORE_PASSWORD=your_store_password
   IS_SANDBOX=true # Set to false in production
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the application:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 License

This project is proprietary and confidential. All rights reserved by SS Ruma International Ltd.
