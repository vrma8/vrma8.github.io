# 🎬 Portfolio Animation Guide

This guide helps you understand and modify the animations in your Kali Linux-themed portfolio website.

---

## 📋 Table of Contents

1. [Quick Reference](#quick-reference)
2. [Animation System Overview](#animation-system-overview)
3. [How to Edit Animations](#how-to-edit-animations)
4. [Component-by-Component Guide](#component-by-component-guide)
5. [Common Modifications](#common-modifications)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Quick Reference

### Key Animation Properties

```javascript
// Motion component structure
<motion.div
  initial={{ opacity: 0, y: 20 }}      // Starting state (invisible, below)
  whileInView={{ opacity: 1, y: 0 }}   // End state (visible, normal position)
  viewport={{ once: false }}            // Repeat every scroll (true = once only)
  transition={{ duration: 0.6 }}       // How long animation takes
  whileHover={{ scale: 1.05 }}         // Hover effect (grows 5%)
>
```

### Common Values

| Property | What it Does | Common Values |
|----------|--------------|---------------|
| `opacity` | Visibility | `0` (invisible) to `1` (visible) |
| `y` | Vertical position | Negative = up, Positive = down (in pixels) |
| `x` | Horizontal position | Negative = left, Positive = right |
| `scale` | Size | `0.9` = 90%, `1` = 100%, `1.1` = 110% |
| `duration` | Animation speed | `0.3` (fast) to `1.5` (slow) seconds |
| `delay` | Wait before starting | In seconds, e.g., `0.2`, `0.5` |

---

## 🎨 Animation System Overview

### Section-Level Animations

Every section (About, Projects, Skills, etc.) has:

1. **Section fade-in**: Entire section fades from transparent to visible
2. **Background elements**: Grid patterns, lines, orbs animate separately
3. **Header animation**: Title and subtitle slide in
4. **Content stagger**: Items appear one after another (waterfall effect)

### Repeating vs. Once

All animations are currently set to **repeat every time** you scroll:

```javascript
viewport={{ once: false }}  // ✅ Repeats every scroll
viewport={{ once: true }}   // ❌ Plays only once
```

To make animations play only once, change `false` to `true`.

---

## ✏️ How to Edit Animations

### 1. Changing Animation Timing

**Make animation faster:**
```javascript
// Before
transition={{ duration: 0.8 }}

// After (twice as fast)
transition={{ duration: 0.4 }}
```

**Make animation slower:**
```javascript
// Before
transition={{ duration: 0.6 }}

// After (twice as slow)
transition={{ duration: 1.2 }}
```

### 2. Changing Stagger Delays

**Current stagger in Projects:**
```javascript
delay: 0.4 + index * 0.15  // Card 1: 0.4s, Card 2: 0.55s, Card 3: 0.7s
```

**Faster stagger (cards appear quicker):**
```javascript
delay: 0.4 + index * 0.1   // Card 1: 0.4s, Card 2: 0.5s, Card 3: 0.6s
```

**Slower stagger (more dramatic):**
```javascript
delay: 0.4 + index * 0.25  // Card 1: 0.4s, Card 2: 0.65s, Card 3: 0.9s
```

### 3. Changing Animation Direction

**Slide from left:**
```javascript
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
```

**Slide from right:**
```javascript
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
```

**Slide from top:**
```javascript
initial={{ opacity: 0, y: -50 }}
whileInView={{ opacity: 1, y: 0 }}
```

**Slide from bottom:**
```javascript
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
```

---

## 📱 Component-by-Component Guide

### About.tsx

**Location:** `/components/About.tsx`

**Main Animations:**
- Section fade-in: `0.8s` duration
- Glowing orbs scale up: `1.2s` duration, delays `0.2s` and `0.4s`
- Header: Delay `0.3s`
- Left column (text boxes): Delay `0.4s`, each box adds `0.1s`
- Right column (cards): Delay `0.5s`, `0.6s`, `0.7s`

**To Change:**
```javascript
// Find this in About.tsx:
const educationDetails = [
  "B.Tech Computer Science & Engineering, Expected 2028",
  // Add more education items here
];

// Find this for text content:
<p className="text-cyan-300/90 font-mono leading-relaxed">
  I'm a junior at State University...  // ← Edit your bio here
</p>
```

---

### Projects.tsx

**Location:** `/components/Projects.tsx`

**Main Animations:**
- Section & grid fade-in: `0.8s` and `1s`
- Header: Delay `0.2s`
- Project cards: Stagger with `0.4 + index * 0.15`
- Hover: Lift up 10px and scale 102%

**To Add New Project:**
```javascript
// Find projects array at top of file:
const projects = [
  {
    id: 4,  // Use next sequential number
    title: 'Your Project Name',
    description: 'Project description here',
    image: 'https://your-image-url.com/image.jpg',
    technologies: ['React', 'Node.js'],  // Add your tech stack
    github: 'https://github.com/yourrepo',
    demo: 'https://your-demo.com',
  },
  // Paste this after the last project
];
```

**To Remove a Project:**
- Delete the entire object (including the comma)

---

### Skills.tsx

**Location:** `/components/Skills.tsx`

**Main Animations:**
- Vertical lines grow from top: `1s` duration, delays `0.2s`, `0.3s`, `0.4s`
- Skill cards: 3D flip effect with stagger
- Progress bars fill: `1.2s` duration

**To Edit Skills:**
```javascript
// Find skillCategories array:
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React/Next.js', level: 85 },  // ← Change name and level (0-100)
      // Add new skill: { name: 'New Skill', level: 70 },
    ],
  },
];
```

**To Add New Category:**
```javascript
{
  category: 'Mobile Development',  // New category name
  skills: [
    { name: 'React Native', level: 75 },
    { name: 'Flutter', level: 65 },
  ],
},
```

Don't forget to add icon mapping:
```javascript
const icons = {
  'Frontend': Code2,
  'Backend': Server,
  'Tools & Others': Wrench,
  'Mobile Development': Smartphone,  // ← Add this (import Smartphone from lucide-react)
};
```

---

### Certifications.tsx

**Location:** `/components/Certifications.tsx`

**Main Animations:**
- Section fade with background: `0.8s`
- Header: Delay `0.2s`
- Certificates: 3D rotation + scale, stagger `0.4 + index * 0.1`

**To Add Certificate:**
```javascript
// Find certifications array:
const certifications = [
  {
    id: 7,  // Next sequential number
    title: 'Your Certification Name',
    issuer: 'Issuing Organization',
    date: 'Month Year',
    credentialId: 'ABC-123-456',
    description: 'What you learned',
    skills: ['Skill 1', 'Skill 2'],
    logo: '🎓',  // Emoji icon
    verifyUrl: 'https://verification-link.com',
  },
];
```

---

### Contact.tsx

**Location:** `/components/Contact.tsx`

**Main Animations:**
- Section + glowing orbs: Orbs scale up with delays `0.2s`, `0.4s`
- Contact info cards: Slide from left, stagger `0.5s`, `0.6s`, `0.7s`
- Form: Slides from right at `0.5s`

**To Edit Contact Info:**
```javascript
// Find these in Contact.tsx:
<p className="text-cyan-300 font-mono text-sm">24BCS096@nith.ac.in</p>  // Email
<p className="text-cyan-300 font-mono text-sm">+91 7869799673</p>       // Phone
<p className="text-cyan-300 font-mono text-sm">Hamirpur HP, INDIA</p>  // Location
```

---

## 🔧 Common Modifications

### Disable All Repeating Animations

Search and replace in ALL component files:
- Find: `viewport={{ once: false }}`
- Replace: `viewport={{ once: true }}`

### Make Everything Faster

Multiply all `duration` values by `0.5`:
```javascript
// Before
transition={{ duration: 0.8 }}

// After
transition={{ duration: 0.4 }}
```

### Make Everything Slower

Multiply all `duration` values by `1.5` or `2`:
```javascript
// Before
transition={{ duration: 0.6 }}

// After
transition={{ duration: 1.2 }}
```

### Remove All Stagger (Everything at Once)

Set all delays to `0`:
```javascript
// Before
transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}

// After
transition={{ duration: 0.6, delay: 0 }}
```

### Change Color Theme

**Cyan to Blue:**
- Find: `cyan-400`, `cyan-500`, `cyan-600`
- Replace: `blue-400`, `blue-500`, `blue-600`

**Green to Purple:**
- Find: `green-400`, `green-500`, `green-600`
- Replace: `purple-400`, `purple-500`, `purple-600`

---

## 🐛 Troubleshooting

### Animation Not Playing

**Check:**
1. Is `viewport={{ once: true }}` set? Change to `false`
2. Is the element actually in view? Try scrolling slower
3. Check browser console for errors

### Animation Too Fast/Slow

**Fix:**
- Adjust `duration` property
- Default is usually `0.6` seconds
- Try values between `0.3` (fast) and `1.5` (slow)

### Elements Appear Before Animating

**Fix:**
- Make sure `initial` opacity is `0`
- Check that element has `whileInView` prop

### Stagger Not Working

**Fix:**
- Verify `delay` has index multiplication: `delay: 0.4 + index * 0.15`
- Make sure you're mapping over array with `.map()`

### Hover Effect Not Working

**Fix:**
- Check `whileHover` prop exists
- Verify parent has `group` class for group hovers
- Test with simple scale: `whileHover={{ scale: 1.1 }}`

---

## 📚 Animation Properties Reference

### Position Animations
```javascript
// Horizontal
x: -50  // Moves left 50px
x: 50   // Moves right 50px
x: 0    // Normal position

// Vertical
y: -50  // Moves up 50px
y: 50   // Moves down 50px
y: 0    // Normal position
```

### Size & Scale
```javascript
scale: 0.8   // 80% size
scale: 1     // 100% (normal)
scale: 1.1   // 110% size
```

### Rotation
```javascript
rotate: 45      // Rotate 45 degrees
rotateX: -15    // 3D tilt on X axis
rotateY: 20     // 3D tilt on Y axis
```

### Timing
```javascript
duration: 0.3   // 300ms (very fast)
duration: 0.6   // 600ms (standard)
duration: 1.2   // 1.2 seconds (slow)
delay: 0.2      // Wait 0.2s before starting
```

### Easing
```javascript
ease: "linear"       // Constant speed
ease: "easeIn"       // Slow start, fast end
ease: "easeOut"      // Fast start, slow end
ease: "easeInOut"    // Slow start and end
type: "spring"       // Bouncy physics
```

---

## 💡 Pro Tips

1. **Test animations incrementally**: Change one thing at a time
2. **Use consistent delays**: Keep stagger increments uniform (0.1s, 0.15s, etc.)
3. **Don't overdo it**: Too many animations can be distracting
4. **Mobile testing**: Animations may perform differently on mobile
5. **Performance**: If animations lag, reduce `blur` effects and `shadow` intensity

---

## 🎓 Learning Resources

**Framer Motion Docs:** https://www.framer.com/motion/
**Animation Principles:** https://www.framer.com/motion/animation/
**Gesture Animations:** https://www.framer.com/motion/gestures/

---

## 📝 Quick Edit Checklist

Before editing, locate:
- [ ] Component file in `/components/` folder
- [ ] Data arrays at top of file (for content changes)
- [ ] Animation section you want to modify
- [ ] Relevant animation properties (`duration`, `delay`, etc.)

After editing:
- [ ] Save file
- [ ] Check browser for changes
- [ ] Test scrolling up and down
- [ ] Test on mobile if possible

---

**Last Updated:** December 2024
**Portfolio Version:** Kali Linux Theme v1.0

For questions or issues, refer to the comments in each component file!
