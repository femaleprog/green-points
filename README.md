# 🌿 VeganPoints

**VeganPoints** est une application web mobile-first progressive (PWA) qui récompense les utilisateurs pour leurs achats de produits végétaux. En connectant leurs comptes de fidélité (Auchan, Carrefour, etc.), les utilisateurs cumulent automatiquement des points ("VP") pour chaque article vegan acheté, qu'ils peuvent échanger contre des bons d'achat ou des dons à des causes environnementales.

> 🏆 **Projet Hackathon** : Développé pour encourager la consommation responsable et réduire l'empreinte carbone via la gamification.

## ✨ Fonctionnalités Clés

*   **🔗 Connexion de Comptes** : Liaison simplifiée avec les cartes de fidélité des grandes surfaces (Auchan, Carrefour, etc. - *simulé pour le MVP*).
*   **🛒 Auto-Tracking Intelligent** : Détection automatique des produits vegans dans l'historique d'achat.
*   **🎁 Récompenses** : Système de points échangeables contre des avantages réels.
*   **📍 Carte Interactive** : Localisation des magasins partenaires (via Leaflet).
*   **💡 Découverte** : Mise en avant de marques et produits éthiques.
*   **📱 Mobile-First** : Expérience utilisateur optimisée pour smartphone.

## 🛠 Stack Technique

*   **Frontend** : [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool** : [Vite](https://vitejs.dev/)
*   **Global State & Caching** : [TanStack Query](https://tanstack.com/query/latest)
*   **Style** : [Tailwind CSS](https://tailwindcss.com/) + [Framer Motion](https://www.framer.com/motion/) (micro-animations)
*   **Routing** : React Router DOM
*   **Backend & Auth** : Google Firebase (Authentication, Firestore, Cloud Functions)
*   **Cartographie** : Leaflet / React-Leaflet

## 🚀 Installation & Démarrage

### Prérequis
*   Node.js (v18+ recommandé)
*   npm

### 1. Cloner le projet
```bash
git clone https://github.com/femaleprog/green-points.git
cd green-points
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```
L'application sera accessible sur [http://localhost:5173](http://localhost:5173).
*Astuce : Utilisez la vue mobile de votre navigateur (F12 > Device Toolbar) pour une meilleure expérience.*

### 4. Build pour la production
```bash
npm run build
npm run preview
```

## 📂 Structure du Projet

```bash
src/
├── components/    # Composants UI réutilisables (Header, ProductCard, etc.)
├── features/      # Fonctionnalités métier isolées
├── data/          # Données statiques / mock (Produits, Entreprises)
├── hooks/         # Custom React Hooks
├── lib/           # Utilitaires et config (Firebase, etc.)
├── mockAdapters/  # Simulation des APIs magasins
├── pages/         # Vues principales (Dashboard, LinkAccount, Rewards)
└── App.tsx        # Point d'entrée et Routing
functions/         # Cloud Functions Firebase (Backend Logic)
```

## 🧪 Tests
Le projet utilise `vitest` pour les tests unitaires.
```bash
npx vitest
```

## 📝 Notes pour le Jury / Démo
Pour tester le flux complet sans compte magasin réel :
1.  Allez dans l'onglet **"Link"**.
2.  Cliquez sur **"Connect"** pour Auchan ou Carrefour (délai simulé).
3.  Une fois connecté, cliquez sur **"Sync"**.
4.  Le système utilisera les `mockAdapters` pour simuler des achats récents et créditer votre cagnotte.

---
*Fait avec 💚 pour la planète.*