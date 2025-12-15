# 🌿 Green Switch

**Green Switch** is a mobile-first progressive web application (PWA) that rewards users for purchasing plant-based products. By connecting their loyalty accounts (Auchan, Carrefour, etc.), users automatically earn points ("GS") for every vegan item purchased, which can be redeemed for vouchers or donations to environmental causes. Reached 4th place in [HackTheFork](https://www.hackthefork.com/) hackathon (over 23 projects) the 13-14 December 2025.

> 🏆 **Hackathon Project**: Developed to encourage responsible consumption and reduce carbon footprint through gamification.

## ✨ Key Features

*   **🔗 Account Linking**: Simplified connection with major retailer loyalty cards (Auchan, Carrefour, etc. - *simulated for MVP*).
*   **🛒 Smart Auto-Tracking**: Automatic detection of vegan products in purchase history.
*   **🎁 Rewards**: Points system redeemable for real benefits.
*   **📍 Interactive Map**: Location of partner stores (via Leaflet).
*   **💡 Discovery**: Spotlight on ethical brands and products.
*   **📱 Mobile-First**: Optimized user experience for smartphones.

## 🛠 Tech Stack

*   **Frontend**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Global State & Caching**: [TanStack Query](https://tanstack.com/query/latest)
*   **Style**: [Tailwind CSS](https://tailwindcss.com/) + [Framer Motion](https://www.framer.com/motion/) (micro-animations)
*   **Routing**: React Router DOM
*   **Backend & Auth**: Google Firebase (Authentication, Firestore, Cloud Functions)
*   **Mapping**: Leaflet / React-Leaflet

## 🚀 Installation & Getting Started

### Prerequisites
*   Node.js (v18+ recommended)
*   npm

### 1. Clone the project
```bash
git clone https://github.com/femaleprog/green-points.git
cd green-points
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
The application will be accessible at [http://localhost:5173](http://localhost:5173).
*Tip: Use your browser's mobile view (F12 > Device Toolbar) for the best experience.*

### 4. Build for production
```bash
npm run build
npm run preview
```

## 📂 Project Structure

```bash
src/
├── components/    # Reusable UI components (Header, ProductCard, etc.)
├── features/      # Isolated business features
├── data/          # Static / mock data (Products, Companies)
├── hooks/         # Custom React Hooks
├── lib/           # Utilities and config (Firebase, etc.)
├── mockAdapters/  # Store API Simulation
├── pages/         # Main views (Dashboard, LinkAccount, Rewards)
└── App.tsx        # Entry point and Routing
functions/         # Cloud Functions Firebase (Backend Logic)
```

## 🧪 Tests
The project uses `vitest` for unit testing.
```bash
npx vitest
```

## 📝 Notes for Jury / Demo
To test the complete flow without a real store account:
1.  Go to the **"Link"** tab.
2.  Click **"Connect"** for Auchan or Carrefour (simulated delay).
3.  Once connected, click **"Sync"**.
4.  The system will use `mockAdapters` to simulate recent purchases and credit your wallet.

---
*Made with 💚 for the planet.*