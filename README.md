# Onwardism

A unified media platform built for engineers and technology teams to read and publish high-quality news and blogs focused on cloud, data, security, and AI. The platform features an intelligent chat interface for tech discussions and is designed to separate public knowledge consumption from structured publishing.

## 🚀 Platform Features

- **Interactive Chat Interface**: AI-powered chat bot for tech discussions on cloud, data, security, and AI
- **Unified Media Experience**: Seamless reading and publishing platform for technical content
- **Focus Areas**: Cloud computing, data engineering, cybersecurity, and artificial intelligence
- **Dual Publishing Model**: Individual writers and organizational publishing capabilities
- **Quality-First Approach**: Structured publishing tools for high-quality technical content
- **Professional Network**: Connect engineers and technology teams through shared knowledge
- **Supabase Integration**: Complete database, authentication, and storage solution
- **Theme Support**: Light/dark mode with custom icons and smooth transitions
- **Newsletter Integration**: Stay updated with latest tech insights and platform updates
- **Cookie Consent**: GDPR-compliant cookie management system
- **Fully Responsive**: Mobile-first design that works seamlessly across all devices

## 🎯 Target Audience

- **Engineers**: Software, DevOps, Data, Security, and AI engineers
- **Technology Teams**: Engineering teams looking to share knowledge and insights
- **Technical Writers**: Professionals creating content about cloud, data, security, and AI
- **Organizations**: Companies wanting to establish thought leadership in tech

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL with real-time features)
- **Authentication**: Supabase Auth with OAuth support
- **Storage**: Supabase Storage for file uploads
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React + Custom theme-aware icons
- **Fonts**: Ubuntu (Google Fonts)
- **Theme**: next-themes with custom light/dark mode support

## 📁 Project Structure

```
onwardism-web/
├── .gitignore
├── .vscode/
├── components.json                 # shadcn/ui configuration
├── next.config.js                 # Next.js configuration
├── node_modules/
├── package-lock.json
├── package.json                   # Dependencies and scripts
├── postcss.config.js              # PostCSS configuration
├── README.md                      # Project documentation
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── src/
    ├── app/                       # Next.js App Router pages
    │   ├── about/
    │   │   └── page.tsx           # About page
    │   ├── auth/                  # Authentication pages
    │   │   ├── forgot-password/
    │   │   │   └── page.tsx       # Password reset request
    │   │   ├── layout.tsx         # Auth layout with AppHeader/Footer
    │   │   ├── login/
    │   │   │   └── page.tsx       # Login page
    │   │   ├── organization/
    │   │   │   └── page.tsx       # Create/join organization
    │   │   ├── reset-password/
    │   │   │   └── page.tsx       # Password reset form
    │   │   ├── signup/
    │   │   │   └── page.tsx       # User registration
    │   │   └── verify-email/
    │   │       └── page.tsx       # Email verification
    │   ├── authors/
    │   │   └── [username]/
    │   │       └── page.tsx       # Author profile pages
    │   ├── blogs/
    │   │   ├── page.tsx           # Blog listing page
    │   │   └── [slug]/
    │   │       └── page.tsx       # Individual blog post
    │   ├── careers/
    │   │   └── page.tsx           # Careers and job listings
    │   ├── company/
    │   │   └── page.tsx           # About company page
    │   ├── console/               # Admin dashboard
    │   │   ├── dashboard/
    │   │   │   └── page.tsx       # Dashboard overview
    │   │   ├── layout.tsx         # Console layout with sidebar/header
    │   │   ├── org/
    │   │   │   └── [orgId]/
    │   │   │       ├── members/
    │   │   │       │   └── page.tsx # Organization members
    │   │   │       └── posts/
    │   │   │           └── page.tsx # Organization posts
    │   │   ├── posts/
    │   │   │   ├── page.tsx       # My posts listing
    │   │   │   └── [id]/
    │   │   │       └── edit/
    │   │   │           └── page.tsx # Edit post
    │   │   ├── profile/
    │   │   │   └── page.tsx       # User profile settings
    │   │   ├── settings/
    │   │   │   └── page.tsx       # Account settings
    │   │   └── write/
    │   │       └── page.tsx       # Content editor
    │   ├── docs/
    │   │   └── page.tsx           # Documentation hub
    │   ├── faq/
    │   │   └── page.tsx           # Frequently asked questions
    │   ├── globals.css            # Global styles and Tailwind imports
    │   ├── layout.tsx             # Root layout with conditional headers
    │   ├── legal/                 # Legal compliance pages
    │   │   ├── cookies/
    │   │   │   └── page.tsx       # Cookie policy
    │   │   ├── layout.tsx         # Legal pages layout
    │   │   ├── privacy/
    │   │   │   └── page.tsx       # Privacy policy
    │   │   └── terms/
    │   │       └── page.tsx       # Terms of service
    │   ├── news/
    │   │   ├── page.tsx           # News listing page
    │   │   └── [slug]/
    │   │       └── page.tsx       # Individual news article
    │   ├── page.tsx               # Homepage with chat interface
    │   ├── resources/
    │   │   └── page.tsx           # Resources and downloads
    │   ├── root-layout-client.tsx # Client-side layout logic
    │   ├── support/
    │   │   └── page.tsx           # Support center
    │   └── topics/
    │       └── [topic]/
    │           └── page.tsx       # Topic pages (Cloud/Data/Security/AI)
    ├── components/                # Reusable UI components
    │   ├── app/                   # App-specific components
    │   │   ├── app-footer.tsx     # Main site footer with newsletter
    │   │   └── app-header.tsx     # Main site header with theme toggle
    │   ├── app-logo.tsx           # Theme-aware logo component
    │   ├── console/               # Console-specific components
    │   │   ├── console-header.tsx # Console dashboard header
    │   │   └── console-sidebar.tsx # Console navigation sidebar
    │   ├── cookie-banner.tsx      # GDPR cookie consent banner
    │   ├── theme-provider.tsx     # Theme context provider
    │   ├── theme-toggle.tsx       # Light/dark mode toggle
    │   └── ui/                    # shadcn/ui components
    │       ├── button.tsx         # Button component
    │       ├── card.tsx           # Card component
    │       └── input.tsx          # Input component
    ├── lib/
    │   ├── supabase.ts            # Supabase client and auth helpers
    │   └── utils.ts               # Utility functions (cn helper)
    └── types/
        └── supabase.ts            # Database types and interfaces
```

## 🎨 Platform Architecture

### Content Consumption Experience (Public Interface)
**Layout**: AppHeader + AppFooter for seamless reading experience
- Homepage with curated technical content
- Topic-based content discovery (Cloud, Data, Security, AI)
- Author profiles showcasing engineering expertise
- News and blog article pages optimized for technical reading
- Support resources for platform users

### Publishing Experience (Console Interface)
**Layout**: ConsoleHeader + ConsoleSidebar for focused writing environment
- Distraction-free writing and editing environment
- Content management and publishing workflow
- Team collaboration and organization management
- Analytics and performance tracking for published content

### Technical Foundation

Built with modern web technologies for performance and scalability:
- **Framework**: Next.js 14 with App Router for optimal performance
- **UI System**: shadcn/ui components for consistent, accessible interface
- **Styling**: Tailwind CSS for responsive, professional design
- **Icons**: Lucide React for clear, technical iconography
- **Typography**: Inter font for excellent readability of technical content

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd onwardism-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📄 Content Areas

### Interactive Chat Experience
- **Homepage** (`/`): AI-powered chat interface for tech discussions
  - Intelligent responses about cloud computing, data engineering, cybersecurity, and AI
  - Real-time chat with message history
  - Topic-aware responses with expert insights

### Public Knowledge Consumption
- **News** (`/news`): Breaking news in cloud, data, security, and AI
- **Blogs** (`/blogs`): In-depth technical articles and tutorials
- **Topics** (`/topics/[topic]`): Specialized content areas:
  - Cloud Computing & Infrastructure
  - Data Engineering & Analytics
  - Cybersecurity & Privacy
  - Artificial Intelligence & Machine Learning
- **Authors** (`/authors/[username]`): Engineer and expert profiles
- **About** (`/about`): Platform mission and community guidelines

### Company Information
- **Company** (`/company`): About Onwardism, mission, and values
- **Careers** (`/careers`): Join our team - open positions and company culture

### Platform Resources
- **Documentation** (`/docs`): Publishing guidelines and platform guides
- **FAQ** (`/faq`): Common questions about writing and publishing
- **Support** (`/support`): Technical support for writers and readers
- **Resources** (`/resources`): Writing tools, templates, and best practices

### Structured Publishing System
- **Login** (`/auth/login`): Secure authentication for writers
- **Signup** (`/auth/signup`): Writer and organization onboarding
- **Organization Management** (`/auth/organization`): Team-based publishing setup
- **Password Management**: Secure account recovery system

### Publishing Console
- **Dashboard** (`/console/dashboard`): Publishing overview and analytics
- **Content Editor** (`/console/write`): Rich editor for technical content
- **Content Management** (`/console/posts`): Draft and published content management
- **Profile Management** (`/console/profile`): Author credibility and bio
- **Team Settings** (`/console/settings`): Account and publishing preferences
- **Organization Hub** (`/console/org/[orgId]`): Team publishing and member management

### Compliance & Trust
- **Terms** (`/legal/terms`): Platform usage and publishing guidelines
- **Privacy** (`/legal/privacy`): Data protection and user privacy
- **Cookies** (`/legal/cookies`): Transparency in data collection

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.js` with shadcn/ui integration.

### TypeScript
Strict TypeScript configuration for better development experience.

### Next.js
App Router with TypeScript support and optimized builds.

## 🎯 Platform Goals

### Knowledge Sharing
- **High-Quality Content**: Curated technical articles and news
- **Expert Insights**: Content from experienced engineers and technology leaders
- **Community Building**: Connect professionals across cloud, data, security, and AI domains
- **Continuous Learning**: Stay updated with latest technology trends and best practices

### Publishing Excellence
- **Structured Writing**: Tools and templates for clear technical communication
- **Content Quality**: Editorial guidelines and review processes
- **Author Credibility**: Profile systems that showcase expertise and experience
- **Team Publishing**: Organizational accounts for company thought leadership

### Technical Focus Areas
- **Cloud Computing**: Infrastructure, DevOps, containerization, serverless
- **Data Engineering**: Analytics, pipelines, databases, data science
- **Cybersecurity**: Security practices, privacy, compliance, threat analysis
- **Artificial Intelligence**: Machine learning, AI applications, emerging technologies

## 📝 Content Guidelines

### Writing Standards
- **Technical Accuracy**: Fact-checked content with proper citations
- **Clear Communication**: Accessible explanations of complex technical concepts
- **Practical Value**: Actionable insights and real-world applications
- **Professional Tone**: Authoritative yet approachable writing style

### Content Categories
- **News Articles**: Breaking developments in technology sectors
- **Technical Blogs**: In-depth tutorials, case studies, and analysis
- **Opinion Pieces**: Expert perspectives on industry trends
- **How-To Guides**: Step-by-step technical implementations

### Publishing Process
- **Draft Management**: Version control and collaborative editing
- **Review System**: Quality assurance and editorial oversight
- **Publication Workflow**: Scheduled publishing and content distribution
- **Performance Tracking**: Analytics and engagement metrics

## ✨ Recent Updates & Features

### 🤖 **Interactive Chat Interface**
- **AI-Powered Responses**: Intelligent chat bot with topic-aware responses
- **Real-Time Chat**: Live messaging with chat history and timestamps
- **Tech Focus**: Specialized responses for cloud, data, security, and AI topics
- **Responsive Design**: Mobile-optimized chat interface

### 🗄️ **Supabase Integration**
- **Complete Database Schema**: 16 tables for users, posts, organizations, and more
- **Authentication System**: Secure auth with OAuth support and email verification
- **Storage Solution**: File upload capabilities for avatars and content images
- **Real-Time Features**: Live updates and real-time data synchronization

### 🎨 **Theme System**
- **Light/Dark Mode**: Seamless theme switching with custom icons
- **Theme-Aware Logo**: Automatically adapts logo based on current theme
- **Custom Icons**: Professional light and dark mode icons
- **Smooth Transitions**: Elegant theme switching animations

### 📱 **Fully Responsive Design**
- **Mobile-First Approach**: Optimized for all screen sizes
- **Responsive Navigation**: Mobile hamburger menu and tablet-friendly layouts
- **Touch-Friendly Interface**: Optimized for mobile interactions
- **Consistent Experience**: Seamless across desktop, tablet, and mobile

### 🏗️ **Enhanced UI/UX**
- **Ubuntu Font**: Professional typography with Ubuntu font family
- **Newsletter Signup**: Footer newsletter integration for platform updates
- **Cookie Consent**: GDPR-compliant cookie management system
- **Social Media Integration**: Complete social media links (Instagram, GitHub, X, LinkedIn)

### 📄 **New Pages**
- **Company Page** (`/company`): About Onwardism, mission, and values
- **Careers Page** (`/careers`): Job listings and company culture
- **Minimal Resource Pages**: Clean, professional support pages without mock data

### 🔧 **Technical Improvements**
- **Layout Optimization**: Fixed duplicate header/footer issues on legal pages
- **Component Architecture**: Theme-aware components with proper SSR handling
- **Responsive Design**: Mobile-first approach with consistent spacing
- **Accessibility**: Screen reader support and keyboard navigation

### 🎯 **Brand Identity**
- **Custom Favicon**: Professional favicon with theme support
- **Consistent Branding**: Logo integration across header and footer
- **Professional Appearance**: Clean, modern design system
- **Social Presence**: Complete social media integration

## 🚀 Deployment

This project is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker containers**

### Environment Variables
Set up the following environment variables for production:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Community & Support

### For Readers
- Browse curated technical content across cloud, data, security, and AI
- Follow expert authors and engineering teams
- Stay updated with the latest technology trends
- Access educational resources and learning materials

### For Writers
- Publish high-quality technical content with professional tools
- Build credibility and thought leadership in your expertise area
- Connect with other engineers and technology professionals
- Access writing resources, templates, and best practices

### For Organizations
- Establish company thought leadership in technology sectors
- Collaborate on team-based content creation
- Manage organizational publishing and member permissions
- Track content performance and engagement analytics

### Platform Support
- Comprehensive documentation for writers and readers
- Technical support for publishing and platform issues
- Community guidelines and content standards
- Regular platform updates and feature improvements