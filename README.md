# VeganPoints (MVP)

VeganPoints is a mobile-first web application that rewards users for purchasing vegan products. By linking store accounts (Auchan, Carrefour, etc.), users automatically earn points ("VP") for every vegan item bought.

## ✨ Features
- **Link Accounts**: Connect store loyalty accounts (Mocked for MVP).
- **Auto-Tracking**: Automatically detects vegan purchases and awards points.
- **Rewards**: Redeem points for vouchers and environmental causes.
- **Spotlight**: Discover new vegan brands and products of the week.

## 🛠 Tech Stack
- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion (micro-animations)
- **State**: TanStack Query (React Query)
- **Routing**: React Router
- **Backend (Stub)**: Google Firebase (Auth, Firestore, Cloud Functions)

## 📁 File Structure
```
src/
├── components/    # Reusable UI components (Header, ProductCard, etc.)
├── data/          # Mock data (Seed for products, companies)
├── hooks/         # Custom React hooks (useUser, store logic)
├── lib/           # Utilities, standard types, firebase config
├── mockAdapters/  # Logic to simulate store APIs
├── pages/         # Main views (Dashboard, LinkAccount, Rewards)
└── App.tsx        # Main layout and routing
functions/         # Cloud Functions (Backend Logic)
```

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. 
**Tip:** Use Chrome DevTools "Device Toolbar" to view in Mobile mode (e.g., iPhone SE/12/14) for the best experience.

### 3. Run Tests
```bash
npx vitest
```

## 🧪 Mock Adapters & Testing
- Go to the **"Link"** tab.
- Click **"Connect"** on Auchan or Carrefour (simulated delay).
- Once connected, click **"Sync"**.
- This calls `src/mockAdapters/{store}.ts`, finds mock purchases (defined in code), and credits points to your local wallet.

## 🎨 UI Style Guide
- **Primary Color**: Green-600 (`#16a34a`)
- **Secondary**: Slate-900 (Text), Slate-50 (Backgrounds)
- **Typography**: Inter (Google Fonts)
- **Radius**: `rounded-2xl` (1rem) for cards, `rounded-xl` (0.75rem) for buttons.
- **Spacing**: standard Tailwind spacing (4, 6, 8).

## ☁️ Firebase & Backend Setup
For the real backend:
1. Create a project at [console.firebase.google.com](https://console.firebase.google.com).
2. Enable **Firestore** and **Authentication**.
3. Copy config keys to `.env.local` (see example below).

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
```

4. Deploy Cloud Functions:
```bash
cd functions
npm install
npm run deploy
```

## ♿ Accessibility Notes
- Contrast ratios are maintained using Slate-500+ for text on white backgrounds.
- Touch targets on mobile are min 44px height where possible.
- Inputs and Buttons have visible focus states.

---

## 🔌 EXTENSIONS (Moving beyond MVP)

1. **Real Store APIs**:
   - Replace `src/mockAdapters/*.ts` with real HTTP calls to store APIs (e.g. using a service like Plaid for Receipt data if available, or official retailer APIs).
   - Requires OAuth flows. Implement `pages/Callback.tsx` to handle OAuth redirects.

2. **Receipt Scanning (OCR)**:
   - Add a "Scan Receipt" feature using Tesseract.js or Google Cloud Vision API for stores without digital API.

3. **Barcode Scanner**:
   - Add a barcode scanner (via `react-qr-barcode-scanner`) to check if a product is vegan in-store.

4. **Multi-Region**:
   - Update `AVAILABLE_STORES` to load based on User's locale.

5. **Cloud Function Security**:
   - Determine `isVegan` status on the SERVER, not trusting the client. The current mock adapter runs on client.
   - Move `syncPurchases` logic entirely to a Cloud Function `https.onCall`.