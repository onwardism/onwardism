# Contributing to Onwardism

Thank you for your interest in contributing to Onwardism! We welcome contributions from engineers, designers, writers, and technology enthusiasts who share our mission of creating a high-quality platform for technical knowledge sharing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Types of Contributions](#types-of-contributions)
- [Development Setup](#development-setup)
- [Contribution Workflow](#contribution-workflow)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation](#documentation)
- [Community Guidelines](#community-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to conduct@onwardism.com.

## Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js 18+** installed
- **Git** for version control
- **Code Editor** (VS Code recommended)
- **Basic Knowledge** of React, Next.js, and TypeScript

### First-Time Contributors

1. **Read the Documentation**: Familiarize yourself with the project structure and goals
2. **Explore the Codebase**: Browse the code to understand the architecture
3. **Check Issues**: Look for issues labeled `good first issue` or `help wanted`
4. **Join Discussions**: Participate in community discussions and planning

## Types of Contributions

### Code Contributions

**Frontend Development**
- React components and UI improvements
- Next.js pages and routing enhancements
- TypeScript type definitions and interfaces
- Tailwind CSS styling and responsive design
- Accessibility improvements and WCAG compliance

**Backend Development** (Future)
- API endpoints and server-side logic
- Database schema and data models
- Authentication and authorization systems
- Content management and publishing workflows

**Infrastructure**
- Build and deployment improvements
- Performance optimizations
- Security enhancements
- Monitoring and logging systems

### Content Contributions

**Documentation**
- Technical documentation and guides
- API documentation and examples
- User guides and tutorials
- Contributing guidelines and best practices

**Content Standards**
- Writing guidelines for technical content
- Editorial standards and review processes
- Content categorization and tagging systems
- Quality assurance frameworks

### Design Contributions

**User Experience**
- User interface design and prototypes
- User experience research and testing
- Accessibility audits and improvements
- Mobile and responsive design enhancements

**Visual Design**
- Brand guidelines and visual identity
- Icon design and illustration
- Layout and typography improvements
- Design system components

### Community Contributions

**Community Building**
- Community guidelines and moderation
- Event planning and coordination
- Mentorship programs and initiatives
- Outreach and partnership development

## Development Setup

### 1. Fork and Clone

```bash
# Fork the repository on GitHub
# Clone your fork locally
git clone https://github.com/YOUR_USERNAME/onwardism-web.git
cd onwardism-web
```

### 2. Install Dependencies

```bash
# Install project dependencies
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

### 3. Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Configure environment variables
# Edit .env.local with your settings
```

### 4. Start Development Server

```bash
# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### 5. Verify Setup

- Ensure the application loads without errors
- Check that all pages are accessible
- Verify responsive design on different screen sizes
- Test basic functionality and navigation

## Contribution Workflow

### 1. Planning

**Before Starting Work:**
- Check existing issues and pull requests
- Create or comment on relevant issues
- Discuss your approach with maintainers
- Ensure your contribution aligns with project goals

**For New Features:**
- Create a detailed issue describing the feature
- Wait for approval from maintainers
- Consider breaking large features into smaller PRs

### 2. Development

**Branch Creation:**
```bash
# Create a feature branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/issue-description
```

**Commit Guidelines:**
```bash
# Use conventional commit format
git commit -m "feat: add user authentication system"
git commit -m "fix: resolve navigation menu overflow issue"
git commit -m "docs: update contributing guidelines"
```

**Commit Types:**
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### 3. Testing

**Before Submitting:**
- Test your changes thoroughly
- Ensure all existing functionality still works
- Test on different browsers and devices
- Verify accessibility compliance
- Check for TypeScript errors

**Testing Commands:**
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Build verification
npm run build
```

### 4. Pull Request

**PR Preparation:**
- Ensure your branch is up to date with main
- Write clear commit messages
- Update documentation if needed
- Add tests for new functionality

**PR Description Template:**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactoring
- [ ] Other (please describe)

## Testing
- [ ] Tested locally
- [ ] Added/updated tests
- [ ] Verified accessibility
- [ ] Checked responsive design

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

### 5. Review Process

**What to Expect:**
- Initial review within 48 hours
- Feedback and requested changes
- Approval from at least one maintainer
- Automated checks must pass

**Addressing Feedback:**
- Respond to comments promptly
- Make requested changes
- Ask for clarification if needed
- Update your PR with changes

## Coding Standards

### TypeScript Guidelines

**Type Safety:**
```typescript
// Use explicit types for props
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

// Use proper return types
function formatDate(date: Date): string {
  return date.toLocaleDateString()
}
```

**Component Structure:**
```typescript
// Use functional components with TypeScript
export function Button({ variant, size = 'md', children, onClick }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }))}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

### React Best Practices

**Component Organization:**
- One component per file
- Use descriptive component names
- Keep components focused and single-purpose
- Use composition over inheritance

**Hooks Usage:**
- Use built-in hooks appropriately
- Create custom hooks for reusable logic
- Follow hooks rules and dependencies

**Performance:**
- Use React.memo for expensive components
- Optimize re-renders with useMemo and useCallback
- Lazy load components when appropriate

### CSS and Styling

**Tailwind CSS:**
- Use utility classes for styling
- Create component variants with class-variance-authority
- Maintain consistent spacing and typography
- Follow mobile-first responsive design

**Custom Styles:**
- Minimize custom CSS
- Use CSS modules for component-specific styles
- Follow BEM methodology for custom classes
- Ensure accessibility in all styles

### File Organization

**Directory Structure:**
```
src/
├── app/                    # Next.js app router pages
├── components/             # Reusable components
│   ├── ui/                # Base UI components
│   ├── app/               # App-specific components
│   └── console/           # Console-specific components
├── lib/                   # Utility functions
├── types/                 # TypeScript type definitions
└── styles/                # Global styles
```

**Naming Conventions:**
- **Files**: kebab-case for files (`user-profile.tsx`)
- **Components**: PascalCase for components (`UserProfile`)
- **Functions**: camelCase for functions (`getUserProfile`)
- **Constants**: UPPER_SNAKE_CASE for constants (`API_BASE_URL`)

## Testing Guidelines

### Testing Strategy

**Unit Tests:**
- Test individual components and functions
- Focus on business logic and edge cases
- Use Jest and React Testing Library

**Integration Tests:**
- Test component interactions
- Verify user workflows
- Test API integrations

**E2E Tests:**
- Test complete user journeys
- Verify critical functionality
- Use Playwright or Cypress

### Writing Tests

**Component Testing:**
```typescript
import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    screen.getByRole('button').click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

**Accessibility Testing:**
- Test keyboard navigation
- Verify screen reader compatibility
- Check color contrast ratios
- Validate ARIA attributes

## Documentation

### Code Documentation

**Comments:**
- Use JSDoc for functions and components
- Explain complex logic and algorithms
- Document API interfaces and types
- Keep comments up to date

**README Updates:**
- Update setup instructions for new dependencies
- Document new features and configuration
- Maintain accurate project structure
- Include troubleshooting information

### User Documentation

**Writing Guidelines:**
- Use clear, concise language
- Include code examples and screenshots
- Provide step-by-step instructions
- Consider different user skill levels

**Documentation Types:**
- **Getting Started**: Setup and basic usage
- **API Reference**: Detailed API documentation
- **Tutorials**: Step-by-step guides
- **Best Practices**: Recommended approaches

## Community Guidelines

### Communication

**Channels:**
- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: General questions and ideas
- **Email**: Direct communication with maintainers
- **Community Forums**: User discussions and support

**Best Practices:**
- Be respectful and professional
- Provide clear, detailed information
- Search existing issues before creating new ones
- Use appropriate labels and templates

### Recognition

**Contributor Recognition:**
- Contributors are acknowledged in release notes
- Significant contributions are highlighted
- Community contributors may be invited to join the team
- Regular contributors receive special recognition

**Ways to Get Involved:**
- Code contributions and bug fixes
- Documentation improvements
- Community support and mentoring
- Testing and quality assurance
- Design and user experience feedback

## Getting Help

### Resources

**Documentation:**
- [README.md](README.md) - Project overview and setup
- [Code of Conduct](CODE_OF_CONDUCT.md) - Community guidelines
- [Security Policy](SECURITY.md) - Security reporting
- [Changelog](CHANGELOG.md) - Release history

**Support Channels:**
- **GitHub Issues**: Technical questions and bug reports
- **Email**: contribute@onwardism.com
- **Community**: Join our community discussions

### Mentorship

**New Contributor Support:**
- Pair programming sessions available
- Code review mentorship
- Architecture guidance
- Career development advice

**Becoming a Mentor:**
- Help new contributors get started
- Review pull requests and provide feedback
- Share knowledge and best practices
- Support community growth

## License

By contributing to Onwardism, you agree that your contributions will be licensed under the same [MIT License](LICENSE) that covers the project.

## Questions?

If you have questions about contributing, please:

1. Check existing documentation and issues
2. Search community discussions
3. Create a new issue with the `question` label
4. Email us at contribute@onwardism.com

Thank you for contributing to Onwardism! 🚀