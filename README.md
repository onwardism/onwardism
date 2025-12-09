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

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
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
│   │   ├── providers/         # Context providers
│   │   ├── shared/            # Shared components
│   │   └── ui/                # shadcn/ui components
│   └── lib/
│       └── utils.ts           # Utility functions
├── public/
│   └── icons/                 # App icons
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

### Phase 2: Backend Integration 🚧
- [ ] API setup
- [ ] Database integration
- [ ] User authentication
- [ ] Content management API
- [ ] File upload system

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
