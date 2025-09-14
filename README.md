# Iryna Vynnychenko - CV Website

A modern, responsive CV website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with dark mode support
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js 14
- 🔍 SEO optimized
- 📧 Contact form
- 🎯 Smooth scrolling navigation
- 💼 Professional sections: About, Experience, Skills, Projects, Education, Contact

## Getting Started

### Prerequisites

- Node.js 16.13.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cv-next-tailwind
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update your personal information in the following files:

1. **About Section** (`src/components/About.tsx`):
   - Name and title
   - Professional summary
   - Contact information
   - Location

2. **Header** (`src/components/Header.tsx`):
   - Update the name in the header

3. **Layout** (`src/app/layout.tsx`):
   - Update metadata (title, description, keywords)
   - Update Open Graph tags

### Experience

Edit the experience data in `src/components/Experience.tsx`:

```typescript
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "2020 - Present",
    description: "Job description...",
    achievements: [
      "Achievement 1",
      "Achievement 2",
      // Add more achievements
    ],
    technologies: ["React", "Node.js", "TypeScript"]
  },
  // Add more experiences
]
```

### Skills

Update your skills in `src/components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      // Add more skills
    ]
  },
  // Add more categories
]
```

### Projects

Add your projects in `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project",
    features: [
      "Feature 1",
      "Feature 2",
      // Add more features
    ]
  },
  // Add more projects
]
```

### Education & Certifications

Update education and certifications in `src/components/Education.tsx`:

```typescript
const education = [
  {
    degree: "Your Degree",
    institution: "University Name",
    period: "2012 - 2016",
    description: "Degree description...",
    relevantCourses: [
      "Course 1",
      "Course 2",
      // Add more courses
    ]
  }
]

const certifications = [
  {
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "2023",
    credentialId: "CERT-123456"
  }
]
```

### Contact Information

Update contact details in `src/components/Contact.tsx`:

```typescript
const contactInfo = [
  {
    icon: <EmailIcon />,
    label: "Email",
    value: "your.email@example.com",
    link: "mailto:your.email@example.com"
  },
  // Add more contact methods
]
```

## Styling

The website uses Tailwind CSS for styling. You can customize:

- Colors in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Component-specific styles in each component file

### Color Scheme

The current color scheme uses:
- Primary: Blue (`blue-600`, `blue-500`)
- Secondary: Purple (`purple-600`)
- Accent: Green (`green-500`)
- Background: Gray (`gray-50`, `gray-800`)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Fonts**: Geist Sans & Geist Mono

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the CV, please feel free to reach out!

---

**Note**: Remember to replace all placeholder content with your actual information before deploying your CV website.
