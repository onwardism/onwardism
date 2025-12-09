# Onwardism

[![GitHub Stars](https://img.shields.io/github/stars/onwardism/onwardism?style=social)](https://github.com/onwardism/onwardism)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> An open-source news media platform focused on Technology & Engineering - covering AI, Data, Cloud, Development, and Security.

## 🌟 About

Onwardism is a modern, open-source news platform built for the tech community. We provide comprehensive coverage of the latest developments in technology and engineering, with a focus on delivering accurate, timely, and insightful content.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Auth, Database, Storage)
- **Font**: Ubuntu
- **Icons**: Lucide React
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **UI Primitives**: Radix UI

## ✨ Features

### Public Site
- 🏠 Home page with featured content
- 📰 News articles with category filtering
- 📝 Blog posts and insights
- 📅 Events and conferences
- 🔬 Research papers and analysis
- 🔍 Content filtering and sorting
- 🌓 Dark/Light mode toggle
- 🍪 Cookie consent management

### Admin Console
- 📊 Dashboard with analytics
- ✍️ Content management (News, Blog, Events, Research)
- ⚙️ Settings and preferences
- 👤 User management

### Authentication
- 🔐 Login/Signup
- 📧 Email verification
- 🔑 Password reset
- 🔒 Secure authentication flow

### Company Pages
- ℹ️ About Us
- 🎯 Features
- 📚 Resources
- 💬 Support
- ❓ FAQs with animated accordion

### Legal
- 📜 Privacy Policy
- 📋 Terms of Service
- 🍪 Cookie Policy

## 📋 Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm
- Supabase account ([sign up free](https://supabase.com))

## 🛠️ Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/onwardism/onwardism.git
cd onwardism
```

2. **Install dependencies**
```bash
npm install --legacy-peer-deps
```

3. **Set up Supabase**

   a. Create a new project at [supabase.com](https://supabase.com)
   
   b. Run the complete database setup:
      - Go to your Supabase project dashboard
      - Navigate to SQL Editor
      - Copy and paste the entire contents of `supabase/setup-schema.sql`
      - Click "Run" to execute all migrations at once
      
      This will create:
      - All database tables (profiles, categories, tags, articles, comments, bookmarks)
      - Row Level Security (RLS) policies
      - Database functions and triggers
      - Storage buckets (avatars, article-images, uploads)
      - Storage policies
   
   c. Copy `.env.example` to `.env.local` and add your Supabase credentials:
   ```bash
   cp .env.example .env.local
   ```
   
   d. Update `.env.local` with your project details:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
   
   e. (Optional) Upgrade a user to admin role:
   ```sql
   UPDATE profiles 
   SET role = 'admin' 
   WHERE email = 'your-email@example.com';
   ```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
onwardism/
├── src/
│   ├── app/
│   │   ├── auth/              # Authentication pages
│   │   ├── company/           # Company pages (About, Features, etc.)
│   │   ├── console/           # Admin console
│   │   ├── legal/             # Legal pages
│   │   ├── site/              # Public site pages
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── app/               # App-wide components (Header, Footer)
│   │   ├── console/           # Console components (Sidebar, Header)
│   │   ├── providers/         # Context providers (Theme, Supabase)
│   │   ├── shared/            # Shared components
│   │   └── ui/                # shadcn/ui components
│   └── lib/
│       ├── supabase/          # Supabase client & utilities
│       │   ├── client.ts      # Browser client
│       │   ├── server.ts      # Server client
│       │   ├── middleware.ts  # Auth middleware
│       │   ├── types.ts       # Database types
│       │   ├── queries.ts     # Data fetching functions
│       │   └── actions.ts     # Server actions (mutations)
│       └── utils.ts           # Utility functions
├── supabase/
│   └── setup-schema.sql       # Complete database setup (all tables, RLS, functions, storage)
├── public/
│   └── icons/                 # App icons
├── .env.example               # Environment variables template
├── middleware.ts              # Next.js middleware (auth)
├── CONTRIBUTING.md            # Contribution guidelines
├── CODE_OF_CONDUCT.md         # Code of conduct
├── SECURITY.md                # Security policy
├── CHANGELOG.md               # Version history
└── LICENSE                    # MIT License
```

## 🎯 Roadmap

### Phase 1: Foundation ✅
- [x] Project setup and structure
- [x] UI components and design system
- [x] Authentication pages
- [x] Admin console layout
- [x] Public site pages
- [x] Dark mode support

### Phase 2: Backend Integration ✅
- [x] Supabase setup
- [x] Database schema
- [x] User authentication
- [x] Row Level Security (RLS)
- [x] Storage buckets
- [x] TypeScript types
- [x] Server actions & queries

### Phase 3: Core Features 📋
- [ ] Article CRUD operations
- [ ] Category management
- [ ] Search functionality
- [ ] Comments system
- [ ] User profiles
- [ ] Bookmarks and favorites

### Phase 4: Advanced Features 🔮
- [ ] Analytics dashboard
- [ ] Email notifications
- [ ] RSS feeds
- [ ] Social media integration
- [ ] Mobile apps (iOS/Android)

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔒 Security

Security is a top priority. If you discover a security vulnerability, please review our [Security Policy](SECURITY.md) for reporting guidelines.

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes and version history.

## 💬 Community

- **GitHub Discussions**: [Join the conversation](https://github.com/onwardism/onwardism/discussions)
- **Issues**: [Report bugs or request features](https://github.com/onwardism/onwardism/issues)
- **Pull Requests**: [Contribute code](https://github.com/onwardism/onwardism/pulls)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide](https://lucide.dev/) - Beautiful & consistent icons
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 📧 Contact

For questions or support, please open an issue or contact us at support@onwardism.com

---

Made with ❤️ by the Onwardism community
