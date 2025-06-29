# 🚀 LooprAi - Advanced Financial Transaction Management Platform

<div align="center">

![LooprAi Logo](https://img.shields.io/badge/LooprAi-Financial%20Platform-blue?style=for-the-badge&logo=react)

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-Visit%20App-success?style=for-the-badge)](https://loopr-frontend.vercel.app/)
[![Backend API](https://img.shields.io/badge/🔗%20API-Backend%20Service-orange?style=for-the-badge)](https://loopr-backend-vokp.onrender.com/)
[![GitHub](https://img.shields.io/badge/📚%20GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/Pseudo-Sid26/LooprAi)

**A sophisticated full-stack financial application for intelligent transaction management, real-time analytics, and comprehensive dashboard insights.**

</div>

---

## 🎯 **Live Application**

| Service | URL | Status |
|---------|-----|--------|
| **Frontend** | [https://loopr-frontend.vercel.app/](https://loopr-frontend.vercel.app/login) | ✅ Live |
| **Backend API** | [https://loopr-backend-vokp.onrender.com/](https://loopr-backend-vokp.onrender.com/) | ✅ Live |
| **Login Page** | [Direct Login Access](https://loopr-frontend.vercel.app/login) | ✅ Active |

---

## 📁 **Project Architecture**

```
LooprAi/
├── 🖥️  Loopr-backend-main/     # Node.js/TypeScript Backend API
│   ├── src/
│   │   ├── config/            # Database & App Configuration
│   │   ├── middleware/        # Authentication & Security
│   │   ├── models/           # Data Models (User, Transaction)
│   │   ├── routes/           # API Endpoints
│   │   ├── services/         # Business Logic Layer
│   │   ├── scripts/          # Database Scripts & Utilities
│   │   └── types/            # TypeScript Definitions
│   ├── data/                 # Sample Data & Seeds
│   └── build.sh             # Deployment Script
│
└── 🌐  Loopr-frontend-main/    # React/TypeScript Frontend
    ├── src/
    │   ├── components/       # Reusable UI Components
    │   ├── contexts/         # React Context (Auth, Alerts)
    │   ├── pages/           # Application Pages
    │   ├── services/        # API Integration Services
    │   ├── theme/           # Material-UI Theming
    │   └── types/           # TypeScript Interfaces
    ├── public/              # Static Assets
    └── vercel.json         # Vercel Deployment Config
```

---

## ✨ **Key Features**

### 🔐 **Authentication & Security**
- **JWT-based Authentication** with secure token management
- **Protected Routes** with role-based access control
- **Session Management** with automatic token refresh
- **Password Hashing** using industry-standard bcrypt

### 💰 **Transaction Management**
- **Real-time Transaction Tracking** with instant updates
- **Advanced Filtering & Search** capabilities
- **Transaction Categories** with custom tagging
- **Bulk Operations** for efficient data management
- **Transaction History** with detailed audit trails

### 📊 **Analytics Dashboard**
- **Interactive Charts** powered by advanced visualization libraries
- **Real-time Metrics** with live data updates
- **Financial Insights** with AI-powered recommendations
- **Customizable Widgets** for personalized dashboards
- **Export Functionality** in multiple formats (PDF, Excel, CSV)

### 🎨 **User Experience**
- **Responsive Design** optimized for all devices
- **Dark/Light Theme** with system preference detection
- **Progressive Web App** (PWA) capabilities
- **Accessibility Features** following WCAG guidelines
- **Smooth Animations** with optimized performance

---

## 🛠️ **Technology Stack**

### **Backend Infrastructure**
| Technology | Purpose | Version |
|------------|---------|---------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | Runtime Environment | Latest LTS |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | Type Safety | ^5.0 |
| ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=flat&logo=express) | Web Framework | ^4.18 |
| ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white) | Database | Atlas Cloud |
| ![JWT](https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens) | Authentication | ^9.0 |

### **Frontend Technologies**
| Technology | Purpose | Version |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | UI Framework | ^18.2 |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | Type Safety | ^5.0 |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | Build Tool | ^5.0 |
| ![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=flat&logo=material-ui&logoColor=white) | Component Library | ^5.14 |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) | Navigation | ^6.8 |

### **DevOps & Deployment**
| Service | Purpose | Status |
|---------|---------|--------|
| ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=white) | Backend Hosting | Production |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) | Frontend Hosting | Production |
| ![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white) | Version Control | Active |
| ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white) | CI/CD Pipeline | Configured |

---

## 🚀 **Quick Start Guide**

### **Prerequisites**
```bash
# Required software versions
Node.js >= 18.0.0
npm >= 9.0.0
Git >= 2.30.0
```

### **1. Clone Repository**
```bash
git clone https://github.com/Pseudo-Sid26/LooprAi.git
cd LooprAi
```

### **2. Backend Setup**
```bash
# Navigate to backend directory
cd Loopr-backend-main

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Configure your environment variables
# DATABASE_URL=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
# PORT=3001

# Start development server
npm run dev

# Or start production server
npm start
```

### **3. Frontend Setup**
```bash
# Navigate to frontend directory (in new terminal)
cd Loopr-frontend-main

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Configure environment variables
# VITE_API_URL=http://localhost:3001/api

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🌐 **Deployment Guide**

### **Backend Deployment (Render)**

1. **Prepare for Deployment**
   ```bash
   # Ensure build script exists
   chmod +x build.sh
   
   # Test build locally
   npm run build
   ```

2. **Render Configuration**
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node.js
   - **Region**: Auto-deploy from GitHub

3. **Environment Variables on Render**
   ```env
   NODE_ENV=production
   DATABASE_URL=mongodb+srv://your-cluster-url
   JWT_SECRET=your-super-secure-jwt-secret
   PORT=10000
   CORS_ORIGIN=https://loopr-frontend.vercel.app
   ```

### **Frontend Deployment (Vercel)**

1. **Vercel Configuration** (`vercel.json`)
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "framework": "vite",
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

2. **Environment Variables on Vercel**
   ```env
   VITE_API_URL=https://loopr-backend-vokp.onrender.com/api
   ```

3. **Deploy Commands**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy to preview
   vercel
   
   # Deploy to production
   vercel --prod
   ```

---

## 📊 **API Documentation**

### **Authentication Endpoints**
```http
POST /api/auth/register    # User Registration
POST /api/auth/login       # User Login
POST /api/auth/refresh     # Token Refresh
POST /api/auth/logout      # User Logout
```

### **Transaction Endpoints**
```http
GET    /api/transactions           # Get all transactions
POST   /api/transactions           # Create transaction
GET    /api/transactions/:id       # Get specific transaction
PUT    /api/transactions/:id       # Update transaction
DELETE /api/transactions/:id       # Delete transaction
```

### **Dashboard Endpoints**
```http
GET /api/dashboard/stats           # Dashboard statistics
GET /api/dashboard/charts          # Chart data
GET /api/dashboard/recent          # Recent activities
```

### **Export Endpoints**
```http
GET /api/export/pdf               # Export as PDF
GET /api/export/excel             # Export as Excel
GET /api/export/csv               # Export as CSV
```

---

## 🔧 **Development**

### **Available Scripts**

#### Backend Scripts
```bash
npm run dev          # Start development server with hot reload
npm run build        # Build TypeScript to JavaScript
npm start            # Start production server
npm run test         # Run test suite
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

#### Frontend Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

### **Environment Variables**

#### Backend Environment
```env
# Database Configuration
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/loopr
DB_NAME=loopr_database

# Authentication
JWT_SECRET=your-256-bit-secret-key
JWT_EXPIRES_IN=7d
REFRESH_TOKEN_SECRET=your-refresh-token-secret

# Server Configuration
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173

# External APIs
ENCRYPTION_KEY=your-encryption-key
```

#### Frontend Environment
```env
# API Configuration
VITE_API_URL=http://localhost:3001/api
VITE_API_TIMEOUT=30000

# App Configuration
VITE_APP_NAME=LooprAi
VITE_APP_VERSION=1.0.0

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_PWA=true
```

---

## 🧪 **Testing**

### **Backend Testing**
```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# API tests
npm run test:api

# Coverage report
npm run test:coverage
```

### **Frontend Testing**
```bash
# Component tests
npm run test:components

# E2E tests
npm run test:e2e

# Visual regression tests
npm run test:visual
```

---

## 📈 **Performance & Monitoring**

### **Performance Metrics**
- **Frontend**: Lighthouse Score 95+
- **Backend**: Response time < 200ms
- **Database**: Query optimization with indexing
- **CDN**: Static asset caching via Vercel Edge Network

### **Monitoring Setup**
- **Error Tracking**: Integrated error reporting
- **Performance Monitoring**: Real-time metrics
- **User Analytics**: Privacy-focused tracking
- **Health Checks**: Automated endpoint monitoring

---

## 🤝 **Contributing**

### **Development Workflow**
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### **Code Standards**
- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb configuration
- **Prettier**: Automatic code formatting
- **Husky**: Pre-commit hooks
- **Conventional Commits**: Standardized commit messages

---

## 📝 **License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👥 **Team**

<div align="center">

**Built with ❤️ by the LooprAi Team**

[![GitHub](https://img.shields.io/badge/GitHub-Pseudo--Sid26-black?style=flat&logo=github)](https://github.com/Pseudo-Sid26)

</div>

---

## 📞 **Support**

- **Issues**: [GitHub Issues](https://github.com/Pseudo-Sid26/LooprAi/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Pseudo-Sid26/LooprAi/discussions)
- **Documentation**: [Wiki](https://github.com/Pseudo-Sid26/LooprAi/wiki)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

[![Stargazers](https://img.shields.io/github/stars/Pseudo-Sid26/LooprAi?style=social)](https://github.com/Pseudo-Sid26/LooprAi/stargazers)
[![Forks](https://img.shields.io/github/forks/Pseudo-Sid26/LooprAi?style=social)](https://github.com/Pseudo-Sid26/LooprAi/network/members)

</div>
