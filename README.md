# 📝 Sticky Notes App

A modern, interactive sticky notes application built with React, TypeScript, and Tailwind CSS. Create, drag, and organize colorful sticky notes on a virtual canvas.

## ✨ Features

- 🎨 **Colorful Notes** - Four vibrant color themes (Yellow, Green, Blue, Pink)
- 🖱️ **Drag & Drop** - Freely position notes anywhere on the canvas
- 📋 **Sidebar Navigation** - Quick access to all your notes
- 🌓 **Dark Mode Support** - Automatic theme switching
- ⚡ **Fast & Responsive** - Built with Vite for optimal performance
- 🎯 **TypeScript** - Fully typed for better developer experience

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling with custom theme
- **@dnd-kit** - Drag and drop functionality
- **ESLint** - Code linting

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Usage

1. **Add Notes**: Click the `+` button in the bottom-right corner to create a new note
2. **Drag Notes**: Click and drag any note to reposition it on the canvas
3. **Select Notes**: Click on a note to select it (shows accent border)
4. **Sidebar**: View all notes in the sidebar and click to select them

## 📁 Project Structure

```
src/
├── components/
│   ├── Canvas.tsx          # Main canvas area with drag-drop context
│   ├── StickyNote.tsx      # Individual draggable note component
│   └── Sidebar.tsx         # Sidebar with note list
├── utils/
│   └── types.ts            # TypeScript type definitions
├── App.tsx                 # Main app component
├── index.css               # Tailwind config and theme
└── main.tsx                # App entry point
```

## 🎨 Custom Theme

The app uses Tailwind CSS v4 with custom colors defined in `@theme`:

- **Note Colors**: Yellow, Green, Blue, Pink
- **Accent Color**: Purple
- **Dark Mode**: Automatic with custom dark palette

## 🔧 Path Aliases

Configured path aliases for cleaner imports:

```typescript
@/*            → ./src/*
@components/*  → ./src/components/*
@types         → ./src/utils/types.ts
@utils/*       → ./src/utils/*
@hooks/*       → ./src/hooks/*
@assets/*      → ./src/assets/*
```

## 📝 Type Definitions

```typescript
type Note = {
  id: string;
  content: string;
  color: "yellow" | "green" | "blue" | "pink";
  x: number;
  y: number;
  isActive?: boolean;
};
```

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using React + TypeScript + Vite
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
