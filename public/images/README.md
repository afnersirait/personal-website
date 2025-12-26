# Profile Picture Setup

## 📸 How to Add Your Profile Picture

### Step 1: Prepare Your Image

1. **Choose a high-quality photo** (minimum 500x500 pixels)
2. **Recommended formats**: JPG, PNG, or WebP
3. **Aspect ratio**: Square (1:1) works best
4. **File size**: Keep under 500KB for optimal performance

### Step 2: Add Your Image

1. Place your profile picture in this directory (`public/images/`)
2. Name it **`profile.jpg`** (or `profile.png`, `profile.webp`)

```
public/
└── images/
    └── profile.jpg  ← Your photo here
```

### Step 3: Enable the Profile Picture

Open `components/ProfilePicture.tsx` and change line 28:

```typescript
// Change this:
const hasProfileImage = false;

// To this:
const hasProfileImage = true;
```

### Step 4: Update Image Path (if needed)

If you used a different filename or format, update line 69 in `ProfilePicture.tsx`:

```typescript
src="/images/profile.jpg"  // Change to your filename
```

## 🎨 Optimization Tips

### Optimize Your Image

Use online tools to optimize your image:
- [TinyPNG](https://tinypng.com/) - Compress PNG/JPG
- [Squoosh](https://squoosh.app/) - Advanced image optimization
- [ImageOptim](https://imageoptim.com/) - Mac app for optimization

### Recommended Sizes

- **Hero Section**: 512x512 pixels (displayed at 256x256)
- **About Section**: 384x384 pixels (displayed at 192x192)

### Convert to WebP (Optional)

WebP provides better compression:

```bash
# Using ImageMagick
convert profile.jpg -quality 85 profile.webp

# Using cwebp
cwebp -q 85 profile.jpg -o profile.webp
```

Then update the image path:
```typescript
src="/images/profile.webp"
```

## 🎭 Customization Options

### Change Profile Picture Size

In `Hero.tsx` (line 24):
```typescript
<ProfilePicture size="xl" animated={true} />
```

Available sizes: `"sm"`, `"md"`, `"lg"`, `"xl"`

In `About.tsx` (line 48):
```typescript
<ProfilePicture size="lg" animated={false} />
```

### Disable Animation

```typescript
<ProfilePicture size="xl" animated={false} />
```

### Remove Border

```typescript
<ProfilePicture size="xl" showBorder={false} />
```

### Custom Styling

Add custom className:
```typescript
<ProfilePicture 
  size="xl" 
  className="shadow-2xl" 
/>
```

## 🖼️ Alternative: Use Gravatar

If you prefer using Gravatar:

1. Open `ProfilePicture.tsx`
2. Replace the image source:

```typescript
src={`https://www.gravatar.com/avatar/${md5Hash}?s=512`}
```

3. Install md5 package:
```bash
npm install md5
```

4. Import and use:
```typescript
import md5 from 'md5';
const emailHash = md5('your-email@example.com'.toLowerCase().trim());
```

## 📱 Testing

After adding your image:

1. Run the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000)

3. Check:
   - ✅ Image loads correctly
   - ✅ Image is centered
   - ✅ Animation works (if enabled)
   - ✅ Responsive on mobile

## 🐛 Troubleshooting

### Image Not Showing?

1. **Check file path**: Ensure the file is in `public/images/`
2. **Check filename**: Must match exactly (case-sensitive)
3. **Check file format**: Use JPG, PNG, or WebP
4. **Clear cache**: Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
5. **Check console**: Look for errors in browser console

### Image Quality Issues?

1. Use higher resolution source image
2. Optimize with tools mentioned above
3. Try WebP format for better quality/size ratio

### Animation Not Working?

1. Ensure `animated={true}` is set
2. Check if CSS animations are loaded
3. Try disabling browser extensions

## 🎨 Design Tips

### Professional Photo Guidelines

- ✅ Good lighting
- ✅ Neutral or professional background
- ✅ Clear face visibility
- ✅ Professional attire (if applicable)
- ✅ Genuine smile
- ❌ Avoid filters or heavy editing
- ❌ Avoid group photos
- ❌ Avoid low resolution

### Background Removal

Use these tools to remove background:
- [Remove.bg](https://www.remove.bg/)
- [PhotoRoom](https://www.photoroom.com/)
- [Canva](https://www.canva.com/features/background-remover/)

## 📚 Next Steps

1. ✅ Add your profile picture
2. ✅ Enable it in `ProfilePicture.tsx`
3. ✅ Test on different devices
4. ✅ Optimize image size
5. ✅ Commit and push changes

---

**Need help?** Check the main [README.md](../../README.md) or [CUSTOMIZATION_CHECKLIST.md](../../CUSTOMIZATION_CHECKLIST.md)
