# Theme Switcher Guide

Your website now supports **Default (Light)** and **Night (Dark)** themes! 🌓

## ✨ Features

### **Theme Options**
- 🌞 **Default Theme**: Clean white background with professional teal-blue accents
- 🌙 **Night Theme**: True black background (OLED-friendly) with high contrast

### **User Experience**
- ✅ **Persistent**: Theme choice saved in localStorage
- ✅ **Smooth Transitions**: Elegant theme switching animations
- ✅ **System Preference**: Respects user's system theme preference
- ✅ **Accessible**: Proper ARIA labels and keyboard navigation
- ✅ **Mobile-Friendly**: Theme toggle available on all devices

## 🎨 Theme Colors

### **Default (Light) Theme**
```css
Background:  #FFFFFF (Pure white)
Foreground:  #1C2B3A (Dark blue-gray)
Primary:     #0EA5E9 (Professional teal-blue)
Secondary:   #F1F5F9 (Light gray)
Border:      #E2E8F0 (Subtle gray)
```

### **Night (Dark) Theme**
```css
Background:  #000000 (Pure black - OLED friendly)
Foreground:  #FAFAFA (Almost white)
Primary:     #0EA5E9 (Professional teal-blue)
Secondary:   #1A1A1A (Very dark gray)
Card:        #0D0D0D (Dark gray for cards)
Border:      #262626 (Subtle border)
```

## 🔧 Implementation

### **Components Created**

#### **1. ThemeProvider**
**File**: `components/ThemeProvider.tsx`

Context provider that manages theme state:
```typescript
<ThemeProvider defaultTheme="light" storageKey="personal-website-theme">
  {children}
</ThemeProvider>
```

**Features:**
- React Context for theme state
- localStorage persistence
- Prevents flash of unstyled content
- `useTheme()` hook for components

#### **2. ThemeToggle**
**File**: `components/ThemeToggle.tsx`

Toggle button component:
```typescript
<ThemeToggle />
```

**Features:**
- Sun/Moon icon animation
- Smooth transitions
- Accessible labels
- Touch-friendly on mobile

### **Integration Points**

#### **Layout**
**File**: `app/layout.tsx`
```typescript
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

#### **Navigation**
**File**: `components/Navigation.tsx`
```typescript
import { ThemeToggle } from "@/components/ThemeToggle";

// Desktop navigation
<div className="hidden md:flex items-center space-x-6">
  {/* nav items */}
  <ThemeToggle />
</div>

// Mobile navigation
<div className="flex items-center gap-2 md:hidden">
  <ThemeToggle />
  {/* menu button */}
</div>
```

## 🎯 Usage

### **For Users**

**Desktop:**
1. Look for the sun/moon icon in the navigation bar
2. Click to toggle between Default and Night themes
3. Theme preference is automatically saved

**Mobile:**
1. Theme toggle button is next to the menu icon
2. Tap to switch themes
3. Works in both portrait and landscape

### **For Developers**

#### **Using the Theme Hook**
```typescript
import { useTheme } from "@/components/ThemeProvider";

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <div>
      Current theme: {theme}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle
      </button>
    </div>
  );
}
```

#### **Adding Dark Mode Styles**
Use Tailwind's `dark:` prefix:
```typescript
<div className="bg-white dark:bg-black text-black dark:text-white">
  Content
</div>
```

#### **Conditional Rendering**
```typescript
const { theme } = useTheme();

return (
  <div>
    {theme === "dark" ? (
      <DarkModeComponent />
    ) : (
      <LightModeComponent />
    )}
  </div>
);
```

## 🎨 Customizing Themes

### **Changing Colors**

Edit `app/globals.css`:

```css
@layer base {
  :root {
    /* Light theme colors */
    --background: 0 0% 100%;
    --foreground: 222 47% 11%;
    --primary: 199 89% 48%;
    /* ... more colors */
  }

  .dark {
    /* Dark theme colors */
    --background: 0 0% 0%;
    --foreground: 0 0% 98%;
    --primary: 199 89% 48%;
    /* ... more colors */
  }
}
```

### **Color Format**
Colors use HSL format: `hue saturation% lightness%`

**Examples:**
```css
--primary: 199 89% 48%;     /* Teal-blue */
--background: 0 0% 0%;      /* Black */
--foreground: 0 0% 100%;    /* White */
```

### **Adding New Theme Variables**

1. Add to both `:root` and `.dark`:
```css
:root {
  --my-custom-color: 210 100% 50%;
}

.dark {
  --my-custom-color: 210 100% 60%;
}
```

2. Use in Tailwind:
```typescript
<div className="bg-[hsl(var(--my-custom-color))]">
  Content
</div>
```

## 🔍 Dark Mode Best Practices

### **1. Contrast Ratios**
- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text**: Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 contrast ratio

### **2. Color Adjustments**
```typescript
// ✅ Good - Adjusted for dark mode
<div className="bg-blue-100 dark:bg-blue-900">

// ❌ Bad - Same color in both modes
<div className="bg-blue-500">
```

### **3. Images and Media**
```typescript
// Reduce brightness in dark mode
<img className="dark:brightness-75" />

// Invert icons if needed
<Icon className="dark:invert" />
```

### **4. Shadows**
```typescript
// Lighter shadows in dark mode
<div className="shadow-lg dark:shadow-2xl dark:shadow-white/10">
```

### **5. Borders**
```typescript
// Visible borders in both modes
<div className="border border-gray-200 dark:border-gray-800">
```

## 🧪 Testing

### **Manual Testing**

1. **Toggle Functionality**
   - Click theme toggle button
   - Verify theme changes immediately
   - Check localStorage is updated

2. **Persistence**
   - Switch theme
   - Refresh page
   - Verify theme persists

3. **Visual Check**
   - All text is readable
   - Colors have proper contrast
   - No white flashes on load
   - Smooth transitions

4. **Mobile Testing**
   - Toggle works on mobile
   - Button is accessible
   - Theme persists on mobile

### **Browser Testing**

Test in:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

### **Accessibility Testing**

```bash
# Check with keyboard
- Tab to theme toggle
- Press Enter/Space to toggle
- Verify focus indicators

# Screen reader
- Verify ARIA labels
- Check announcements
```

## 🐛 Troubleshooting

### **Theme Not Persisting**

**Issue**: Theme resets on page reload

**Solution**:
```typescript
// Check localStorage is working
console.log(localStorage.getItem('personal-website-theme'));

// Clear and try again
localStorage.removeItem('personal-website-theme');
```

### **Flash of Unstyled Content**

**Issue**: Brief flash of wrong theme on load

**Solution**: Ensure `suppressHydrationWarning` is set:
```typescript
<html lang="en" suppressHydrationWarning>
```

### **Theme Not Applying**

**Issue**: Dark mode classes not working

**Solution**: Check Tailwind config includes dark mode:
```typescript
// tailwind.config.ts
module.exports = {
  darkMode: 'class', // or 'media'
  // ...
}
```

### **Icons Not Switching**

**Issue**: Sun/Moon icons not animating

**Solution**: Verify Tailwind animations are working:
```bash
npm install tailwindcss-animate
```

## 📱 Mobile Considerations

### **Touch Targets**
```typescript
// Minimum 44px touch target
<Button size="icon" className="min-w-[44px] min-h-[44px]">
  <ThemeToggle />
</Button>
```

### **Position**
- Desktop: Right side of navigation
- Mobile: Next to menu button
- Always visible and accessible

### **Performance**
- Theme switch is instant
- No layout shifts
- Smooth transitions

## 🎨 Design Tips

### **Choosing Colors**

**Light Mode:**
- Use bright, vibrant colors
- White or light backgrounds
- Dark text for readability

**Dark Mode:**
- Use muted, desaturated colors
- True black or very dark backgrounds
- Light text with good contrast

### **Consistency**
- Keep primary color same in both themes
- Adjust brightness, not hue
- Maintain visual hierarchy

### **Testing Colors**
```
Tools:
- WebAIM Contrast Checker
- Chrome DevTools Contrast Ratio
- Figma Contrast Plugin
```

## 📚 Resources

### **Documentation**
- [Tailwind Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [Next.js Themes](https://nextjs.org/docs/app/building-your-application/styling/css-variables)
- [WCAG Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)

### **Tools**
- [Coolors](https://coolors.co/) - Color palette generator
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Dark Mode Design](https://www.darkmodelist.com/)

---

**Your website now has a beautiful, accessible theme switcher! 🌓✨**

Users can choose between Default and Night themes with a single click!
