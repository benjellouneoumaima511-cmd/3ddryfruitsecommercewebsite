# Fruit Sec - E-Commerce de Fruits Secs Premium 3D

Site e-commerce moderne et interactif pour la vente de fruits secs premium avec des animations 3D, support multilingue et design responsive.

## Fonctionnalités Principales

### 🌍 Multilingue (i18n)
- **Français** (langue par défaut)
- **Anglais**
- **Arabe** (avec support RTL)
- Changement de langue en temps réel via le sélecteur dans la navigation

### 🎨 Mode Sombre/Clair
- Basculer entre les thèmes clair et sombre
- Persistance des préférences dans le localStorage
- Animations fluides lors du changement de thème

### 🛒 Panier d'Achat Complet
- Ajout de produits au panier avec animations 3D
- Gestion des quantités (ajouter/supprimer)
- Calcul automatique du total et des frais de livraison
- Persistance du panier dans le localStorage
- Indicateur visuel du nombre d'articles

### 💳 Système de Paiement
- **Carte Bancaire**
- **Paiement à la Livraison**
- **Virement Bancaire**
- Interface de checkout moderne avec animations
- Message de confirmation avec numéro de commande
- Intégration avec Supabase pour le stockage des commandes

### 💰 Devises
- Tous les prix sont affichés en **MAD (Dirhams Marocains)**

### 🤖 Chatbot Interactif 3D
- Assistant virtuel intelligent
- Répond aux questions sur les produits, prix, livraison
- Support multilingue (FR/EN/AR)
- Animations 3D et transitions fluides
- Interface conversationnelle moderne

### 🎬 Vidéo Hero
- Section hero avec vidéo de présentation
- Player vidéo personnalisé
- Animations de défilement parallaxe
- Design magazine moderne

### 📦 Produits
- 9 produits de fruits secs premium:
  - Amandes Premium
  - Pistaches Grillées
  - Abricots Secs Dorés
  - Noix de Cajou Luxe
  - Noix Bio
  - Dattes Medjool
  - Figues Séchées
  - Raisins Secs Dorés
  - Mélange Déluxe

### 🎨 Design 3D & Animations
- Effets de parallaxe
- Cartes produits avec tilt 3D au survol
- Glassmorphism et effets de lumière volumétrique
- Ombres 3D et profondeur
- Animations fluides et micro-interactions
- Particules flottantes
- Confettis lors de la validation de commande

### 📱 Responsive
- Design adaptatif pour mobile, tablette et desktop
- Navigation optimisée pour les petits écrans
- Expérience utilisateur cohérente sur tous les appareils

### 🔍 Barre de Recherche
- Recherche de produits intégrée
- Interface accessible depuis la navigation

### 📊 Base de Données Supabase
- Stockage des commandes
- Gestion sécurisée des données
- Row Level Security (RLS) activé

### 🎯 Sections du Site

1. **Navigation** - Menu avec logo Fruit Sec, liens, panier, thème et langue
2. **Hero Video** - Vidéo de présentation avec CTA
3. **Catégories** - Explorer la collection de fruits secs
4. **Produits** - Grille de produits avec cartes 3D interactives
5. **Avantages Santé** - Bienfaits des fruits secs
6. **À Propos** - Histoire et valeurs de Fruit Sec
7. **Panier** - Gestion du panier d'achat
8. **Témoignages** - Avis clients
9. **Contact** - Formulaire de contact interactif
10. **Footer** - Informations et liens, crédit design Anass Naji

## Technologies Utilisées

- **React 18** avec TypeScript
- **Vite** - Build tool moderne
- **i18next** - Internationalisation
- **Supabase** - Backend et base de données
- **Tailwind CSS** - Styling
- **Lucide React** - Icônes
- **LocalStorage** - Persistance locale

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## Build Production

```bash
npm run build
```

## Variables d'Environnement

Créer un fichier `.env` avec:

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_cle_anon_supabase
```

## Crédits

**Design et Développement:** Anass Naji Designs

## Licence

© 2024 Fruit Sec. Tous droits réservés.
