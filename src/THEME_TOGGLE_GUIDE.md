# 🌓 Light/Dark Mode Toggle Guide

Your portfolio now has a fully functional theme toggle in the header (top right) that switches between dark mode (Kali Linux theme) and light mode.

---

## 📍 Where is the Toggle?

**Location:** Top-right corner of the header
- **Desktop:** Next to navigation links
- **Mobile:** Next to hamburger menu

**Icon:** 
- ☀️ Sun icon = Currently in light mode (click to go dark)
- 🌙 Moon icon = Currently in dark mode (click to go light)

---

## 🎨 How It Works

### Theme State Management

The theme is managed globally using React Context:

1. **ThemeProvider** (`/components/ThemeProvider.tsx`)
   - Wraps entire app
   - Stores theme state ('light' or 'dark')
   - Saves preference to localStorage
   - Applies `.light` or `.dark` class to document root

2. **Default Theme:** Dark mode (Kali Linux theme)

3. **Persistence:** Theme choice saved in browser localStorage

### Visual Changes

**Dark Mode (Default):**
- Black backgrounds
- Cyan (#00ffff) and Green (#00ff41) accents  
- Matrix/Binary rain in green
- Cyber grid patterns
- Glowing effects

**Light Mode:**
- White/light gray backgrounds
- Darker cyan (#0099cc) and green (#00aa55) accents
- Binary rain in dark green (#006633)
- Reduced glow effects
- Professional appearance

---

## 🔧 Files Modified

### New Files Created

1. **`/components/ThemeProvider.tsx`**
   - Theme context and provider
   - Toggle function
   - localStorage persistence

2. **`/THEME_TOGGLE_GUIDE.md`**
   - This documentation file

### Files Updated

1. **`/App.tsx`**
   - Wrapped with ThemeProvider
   - Added theme-aware background classes

2. **`/components/Header.tsx`**
   - Added theme toggle button
   - Sun/Moon icon animation
   - Theme-aware navigation colors

3. **`/components/MatrixRain.tsx`**
   - Added useTheme hook
   - Different colors for light/dark mode

4. **`/components/BinaryRain.tsx`**
   - Added useTheme hook
   - Adapts canvas colors to theme

5. **`/styles/globals.css`**
   - Light mode scrollbar styles
   - Light mode text selection colors
   - Body background colors for both themes

---

## 🎨 Customization

### Change Default Theme

**Location:** `/components/ThemeProvider.tsx` - Line 25

```tsx
// Current (defaults to dark)
return savedTheme || 'dark';

// Change to default light mode
return savedTheme || 'light';
```

### Customize Toggle Button

**Location:** `/components/Header.tsx`

**Icon Size:**
```tsx
// Line 76 - Make icons larger
<Sun className="h-6 w-6 ..." />  // Change from h-5 w-5
<Moon className="absolute h-6 w-6 ..." />
```

**Button Colors:**
```tsx
// Line 70 - Change hover color
className="... hover:text-green-400 ..."
// Change to:
className="... hover:text-purple-400 ..."
```

**Button Border:**
```tsx
// Line 73 - Remove border
className="... border border-cyan-500/30 ..."
// Remove: border border-cyan-500/30
```

### Add Theme-Specific Colors to Components

Use Tailwind's `dark:` prefix:

```tsx
// Light mode white, dark mode black
<div className="bg-white dark:bg-black">

// Light mode gray text, dark mode cyan
<p className="text-gray-700 dark:text-cyan-300">

// Light mode blue, dark mode green  
<span className="text-blue-600 dark:text-green-400">
```

**Pattern:**
```tsx
className="lightModeClass dark:darkModeClass"
```

---

## 🎯 Tailwind Dark Mode Classes

### Background Colors
```tsx
bg-white dark:bg-black           // White → Black
bg-gray-100 dark:bg-gray-900     // Light gray → Dark gray
bg-blue-50 dark:bg-blue-950      // Light blue → Deep blue
```

### Text Colors
```tsx
text-gray-900 dark:text-white    // Dark text → White text
text-blue-600 dark:text-cyan-400 // Blue → Cyan
text-green-700 dark:text-green-400  // Dark green → Bright green
```

### Border Colors
```tsx
border-gray-300 dark:border-cyan-500/30
```

### Hover States
```tsx
hover:bg-gray-100 dark:hover:bg-gray-800
hover:text-blue-600 dark:hover:text-cyan-400
```

---

## 💡 Component-Specific Theming

### To Add Light Mode to Any Section

**Example - Projects Section:**

```tsx
// Current (dark mode only)
<section className="bg-gradient-to-b from-black via-gray-900 to-black">

// Updated (light & dark)
<section className="bg-gradient-to-b from-white via-gray-100 to-white dark:from-black dark:via-gray-900 dark:to-black">
```

**Example - Card Component:**

```tsx
// Current
<Card className="bg-gray-900/50 border-cyan-500/30">

// Updated  
<Card className="bg-white dark:bg-gray-900/50 border-gray-300 dark:border-cyan-500/30">
```

### Text Elements

```tsx
// Headers
<h2 className="text-gray-900 dark:text-cyan-300">

// Paragraphs
<p className="text-gray-700 dark:text-cyan-300/90">

// Links
<a className="text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-green-400">
```

---

## 🔌 Using Theme in Custom Components

### Access Theme State

```tsx
import { useTheme } from './components/ThemeProvider';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      
      {/* Conditional rendering */}
      {theme === 'dark' ? (
        <DarkModeContent />
      ) : (
        <LightModeContent />
      )}
    </div>
  );
}
```

### Check Theme in useEffect

```tsx
useEffect(() => {
  if (theme === 'dark') {
    // Do something only in dark mode
  } else {
    // Do something only in light mode
  }
}, [theme]);
```

---

## 🎨 Binary/Matrix Rain Theme Adaptation

**Dark Mode:**
- Background: Black fade (`rgba(0, 0, 0, 0.05)`)
- Text color: Kali green (`#00ff41`)
- Opacity: 10%

**Light Mode:**
- Background: White fade (`rgba(255, 255, 255, 0.05)`)
- Text color: Dark green (`#006633`)
- Opacity: 10%

**To Customize:**

Location: `/components/BinaryRain.tsx` - Lines 54-65

```tsx
// Change light mode color
ctx.fillStyle = theme === 'dark' ? '#00ff41' : '#006633';
// Change to:
ctx.fillStyle = theme === 'dark' ? '#00ff41' : '#0055aa'; // Blue in light mode
```

---

## 🚫 Disable Theme Toggle

### Option 1: Hide the Button

In `/components/Header.tsx`, find and comment out or remove:

```tsx
{/* Theme Toggle Button - Desktop */}
<Button onClick={toggleTheme} ...>
  <Sun ... />
  <Moon ... />
</Button>

{/* Theme Toggle Button - Mobile */}
<Button onClick={toggleTheme} ...>
  <Sun ... />
  <Moon ... />
</Button>
```

### Option 2: Force Dark Mode Only

In `/components/ThemeProvider.tsx`:

```tsx
// Line 25 - Force dark mode
return 'dark'; // Remove: savedTheme ||

// Line 49 - Disable toggle
const toggleTheme = () => {
  // Do nothing
};
```

---

## 🎓 Advanced: Custom Theme Colors

### Create Third Theme Option

1. Extend Theme type:
```tsx
type Theme = 'light' | 'dark' | 'midnight';
```

2. Add theme to globals.css:
```css
.midnight {
  --background: #0a0a1a;
  --foreground: #e0e0ff;
  /* ... more vars */
}
```

3. Update toggle logic:
```tsx
const toggleTheme = () => {
  setTheme(prev => {
    if (prev === 'dark') return 'light';
    if (prev === 'light') return 'midnight';
    return 'dark';
  });
};
```

---

## 🐛 Troubleshooting

### Theme Not Persisting

**Problem:** Theme resets on page refresh

**Solution:** Check localStorage in browser DevTools
- Open Console
- Type: `localStorage.getItem('portfolio-theme')`
- Should return 'light' or 'dark'
- If null, localStorage might be disabled

### Icons Not Swapping

**Problem:** Sun and Moon both visible

**Solution:** Check Tailwind dark mode is enabled
- The `dark:` variant requires `.dark` class on root element
- ThemeProvider should be wrapping App correctly

### Colors Not Changing

**Problem:** Some elements stay dark in light mode

**Solution:** Add dark mode classes:
```tsx
// Before
<div className="bg-black">

// After
<div className="bg-white dark:bg-black">
```

### Flash of Wrong Theme

**Problem:** Brief flash of light theme before dark loads

**Solution:** Add this to `index.html` in `<head>`:
```html
<script>
  if (localStorage.getItem('portfolio-theme') === 'dark' || 
     (!localStorage.getItem('portfolio-theme'))) {
    document.documentElement.classList.add('dark');
  }
</script>
```

---

## 📊 Theme Toggle Checklist

To add light mode support to a new component:

- [ ] Import useTheme if needed: `import { useTheme } from './ThemeProvider'`
- [ ] Add `dark:` prefix to all color classes
- [ ] Test background colors: `bg-white dark:bg-black`
- [ ] Test text colors: `text-gray-900 dark:text-cyan-300`
- [ ] Test border colors: `border-gray-300 dark:border-cyan-500`
- [ ] Test hover states: `hover:bg-gray-100 dark:hover:bg-gray-800`
- [ ] Check in both light and dark modes
- [ ] Verify contrast/readability in both themes

---

## 🎨 Color Palette Reference

### Dark Mode (Kali Linux)
- Primary: `#00ffff` (Cyan)
- Secondary: `#00ff41` (Green)
- Background: `#000000` (Black)
- Text: `#00ffff` / `#ffffff`
- Accent: `#00ff41`

### Light Mode (Professional)
- Primary: `#0099cc` (Blue)
- Secondary: `#00aa55` (Green)
- Background: `#ffffff` (White)
- Text: `#333333` / `#666666`
- Accent: `#0077aa`

---

**Last Updated:** December 2024  
**Feature:** Light/Dark Mode Toggle v1.0

Toggle away and enjoy both themes! 🌓✨
