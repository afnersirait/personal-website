# Design System - Warm & Modern Aesthetic

## 🎨 Color Palette

### Primary Colors (Warm Coral/Orange)
```css
--primary: 14 90% 60%        /* Vibrant coral-orange */
--primary-foreground: White
```

**Usage:** Main CTAs, links, important highlights, profile picture accents

### Secondary Colors (Warm Beige)
```css
--secondary: 30 30% 94%      /* Soft warm beige */
--secondary-foreground: Dark brown
```

**Usage:** Backgrounds, cards, subtle sections

### Accent Colors
- **Amber**: `35 85% 65%` - Warm golden accent
- **Rose**: `rose-400` to `rose-500` - Soft pink accent
- **Orange**: `orange-400` to `orange-500` - Vibrant orange

### Background Colors
```css
--background: 30 40% 98%     /* Warm off-white */
--foreground: 20 14% 10%     /* Warm dark brown */
```

### Neutral Colors
- **Muted**: `30 25% 92%` - Warm gray
- **Border**: `30 20% 88%` - Subtle warm border

## 🌈 Gradient Combinations

### Hero Section
```css
bg-gradient-to-br from-orange-50 via-rose-50/30 to-amber-50/50
```

### Profile Picture
```css
/* Animated ring */
from-orange-400 via-rose-400 to-amber-400

/* Border */
from-orange-500 to-rose-500

/* Container */
from-orange-500/20 to-rose-500/20
```

### Background Orbs
```css
/* Top left */
from-orange-300/20 to-rose-300/20

/* Bottom right */
from-amber-300/20 to-orange-300/20

/* Center */
from-rose-200/15 to-pink-200/15
```

## 📐 Spacing & Layout

### Border Radius
- **sm**: `calc(var(--radius) - 4px)` ≈ 8px
- **md**: `calc(var(--radius) - 2px)` ≈ 10px
- **lg**: `var(--radius)` = 12px
- **xl**: `1rem` = 16px
- **2xl**: `1.5rem` = 24px
- **full**: `9999px` (circles)

### Shadows
- **warm**: `0 4px 20px rgba(255, 127, 80, 0.15)`
- **warm-lg**: `0 10px 40px rgba(255, 127, 80, 0.2)`
- **glow**: `0 0 20px rgba(255, 127, 80, 0.3)`

## ✨ Visual Effects

### Glass Morphism
```css
.glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

**Usage:** Overlays, modals, floating cards

### Glow Effect
```css
.glow-effect {
  box-shadow: 0 0 20px rgba(255, 127, 80, 0.3),
              0 0 40px rgba(255, 127, 80, 0.2);
}
```

**Usage:** Hover states, focused elements, CTAs

### Gradient Animation
```css
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}
```

**Usage:** Hero backgrounds, decorative elements

## 🎭 Animations

### Fade In Up
```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Duration:** 0.6s ease-out  
**Usage:** Section entrances, content reveals

### Spin Slow
```css
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

**Duration:** 8s linear infinite  
**Usage:** Profile picture ring, decorative elements

### Gradient Shift
```css
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

**Duration:** 8s ease infinite  
**Usage:** Animated backgrounds, hero sections

### Pulse
**Built-in Tailwind animation**  
**Usage:** Decorative dots, attention-grabbing elements

## 🔤 Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: system-ui, sans-serif

### Font Sizes
- **xs**: 0.75rem (12px)
- **sm**: 0.875rem (14px)
- **base**: 1rem (16px)
- **lg**: 1.125rem (18px)
- **xl**: 1.25rem (20px)
- **2xl**: 1.5rem (24px)
- **3xl**: 1.875rem (30px)
- **4xl**: 2.25rem (36px)
- **5xl**: 3rem (48px)
- **6xl**: 3.75rem (60px)
- **7xl**: 4.5rem (72px)

### Font Weights
- **normal**: 400
- **medium**: 500
- **semibold**: 600
- **bold**: 700

## 🎯 Component Patterns

### Buttons
```typescript
// Primary (Warm coral)
<Button variant="default">Click Me</Button>

// Outline
<Button variant="outline">Click Me</Button>

// Secondary (Warm beige)
<Button variant="secondary">Click Me</Button>

// Ghost (Minimal)
<Button variant="ghost">Click Me</Button>
```

### Cards
```typescript
<Card className="shadow-warm hover:shadow-warm-lg transition-shadow">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

### Badges
```typescript
// Primary
<Badge>React</Badge>

// Secondary
<Badge variant="secondary">TypeScript</Badge>

// Outline
<Badge variant="outline">Next.js</Badge>
```

## 🌓 Dark Mode

### Background Colors
```css
--background: 20 20% 8%      /* Warm dark brown */
--foreground: 30 40% 95%     /* Warm off-white */
--card: 20 18% 12%           /* Slightly lighter brown */
```

### Primary Colors
```css
--primary: 14 85% 65%        /* Brighter coral for dark mode */
--secondary: 25 15% 18%      /* Dark warm gray */
```

**Note:** Dark mode maintains the warm aesthetic with brown-tinted blacks instead of pure black.

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

## 🎨 Usage Guidelines

### Do's ✅
- Use warm colors (orange, coral, amber, rose)
- Apply soft shadows with warm tints
- Use gradient backgrounds for depth
- Add smooth transitions (200-300ms)
- Maintain consistent border radius
- Use glass morphism for overlays
- Apply glow effects on hover

### Don'ts ❌
- Avoid cold colors (pure blue, cyan)
- Don't use harsh shadows
- Avoid sharp corners (use rounded)
- Don't use instant transitions
- Avoid pure black or white
- Don't overuse animations
- Avoid cluttered layouts

## 🎭 Mood & Feel

**Target Aesthetic:**
- Warm and inviting
- Modern and professional
- Soft and approachable
- Clean and minimal
- Elegant and refined

**Inspiration:**
- Sunset colors
- Autumn tones
- Natural warmth
- Cozy atmosphere
- Contemporary design

## 🔧 Implementation Examples

### Warm Card
```tsx
<div className="bg-card rounded-xl shadow-warm p-6 hover:shadow-warm-lg transition-all">
  <h3 className="text-2xl font-bold text-foreground mb-4">Title</h3>
  <p className="text-muted-foreground">Content</p>
</div>
```

### Gradient Button
```tsx
<button className="bg-gradient-to-r from-orange-500 to-rose-500 text-white px-6 py-3 rounded-lg hover:shadow-warm-lg transition-all">
  Get Started
</button>
```

### Glass Card
```tsx
<div className="glass rounded-2xl p-8 shadow-xl">
  <h2 className="text-3xl font-bold mb-4">Glass Effect</h2>
  <p>Beautiful frosted glass appearance</p>
</div>
```

### Animated Section
```tsx
<section className="py-20 bg-gradient-to-br from-orange-50 to-rose-50 animate-fade-in-up">
  <div className="container mx-auto">
    {/* Content */}
  </div>
</section>
```

## 📚 Color Reference

### Orange Shades
- `orange-50`: Very light orange
- `orange-100`: Light orange
- `orange-200`: Lighter orange
- `orange-300`: Light-medium orange
- `orange-400`: Medium orange
- `orange-500`: Standard orange ⭐
- `orange-600`: Dark orange

### Rose Shades
- `rose-50`: Very light rose
- `rose-100`: Light rose
- `rose-200`: Lighter rose
- `rose-300`: Light-medium rose
- `rose-400`: Medium rose ⭐
- `rose-500`: Standard rose ⭐
- `rose-600`: Dark rose

### Amber Shades
- `amber-50`: Very light amber
- `amber-100`: Light amber
- `amber-200`: Lighter amber
- `amber-300`: Light-medium amber
- `amber-400`: Medium amber ⭐
- `amber-500`: Standard amber
- `amber-600`: Dark amber

---

**This design system creates a warm, modern, and inviting aesthetic that stands out from typical blue/cold-toned websites while maintaining professionalism and readability.**
