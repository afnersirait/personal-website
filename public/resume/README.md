# Resume/CV Download Setup

## 📄 How to Add Your Resume

### Step 1: Prepare Your Resume

1. **Create or export your resume as PDF**
   - Use Google Docs, Microsoft Word, or resume builders
   - Export as PDF for universal compatibility
   - Ensure file size is under 5MB

2. **Recommended filename format:**
   - `Afner_Sirait_Resume.pdf`
   - `FirstName_LastName_CV.pdf`
   - Use underscores instead of spaces

### Step 2: Add Your Resume File

Place your PDF resume in this directory:

```
public/
└── resume/
    └── Afner_Sirait_Resume.pdf  ← Your resume here
```

### Step 3: Update the Filename (if different)

If you used a different filename, update `components/DownloadResumeButton.tsx`:

**Line 25:**
```typescript
const resumePath = "/resume/Afner_Sirait_Resume.pdf";
```

**Line 32:**
```typescript
link.download = "Afner_Sirait_Resume.pdf";
```

Change both to match your filename.

## 🎯 Where the Download Button Appears

Your resume download button is available in **two locations**:

### 1. Hero Section (Top of page)
- Prominent placement between "View My Work" and "Get In Touch"
- Large button with download icon
- First thing visitors see

### 2. Resume Section
- Centered below the section title
- Easy access when viewing your experience
- Contextually relevant placement

## 🎨 Customization Options

### Change Button Style

**Hero Section** (`components/Hero.tsx` line 49):
```typescript
<DownloadResumeButton size="lg" variant="default" />
```

**Resume Section** (`components/Resume.tsx` line 80):
```typescript
<DownloadResumeButton size="lg" variant="default" />
```

**Available variants:**
- `"default"` - Primary blue button (recommended)
- `"outline"` - Outlined button
- `"secondary"` - Secondary style
- `"ghost"` - Minimal style

**Available sizes:**
- `"sm"` - Small
- `"default"` - Medium
- `"lg"` - Large (recommended)

### Examples

**Outline style:**
```typescript
<DownloadResumeButton size="lg" variant="outline" />
```

**Without icon:**
```typescript
<DownloadResumeButton size="lg" showIcon={false} />
```

**Full width:**
```typescript
<DownloadResumeButton size="lg" fullWidth={true} />
```

**Custom styling:**
```typescript
<DownloadResumeButton 
  size="lg" 
  className="shadow-xl hover:shadow-2xl" 
/>
```

## ✨ Button Features

### Visual Feedback
- **Default state**: "Download Resume" with download icon
- **Downloading**: "Downloading..." with bouncing icon
- **Success**: "Downloaded!" with checkmark (3 seconds)
- **Hover effect**: Smooth transitions

### User Experience
- ✅ One-click download
- ✅ No page reload
- ✅ Visual confirmation
- ✅ Disabled during download
- ✅ Error handling

## 📱 Testing

After adding your resume:

1. **Run development server:**
   ```bash
   npm run dev
   ```

2. **Test the download:**
   - Click the download button
   - Verify file downloads correctly
   - Check filename is correct
   - Open PDF to verify content

3. **Test on different devices:**
   - Desktop browsers (Chrome, Firefox, Safari)
   - Mobile devices (iOS Safari, Chrome)
   - Tablet devices

## 🔧 Advanced Customization

### Add Multiple Resume Versions

Create different versions for different purposes:

```
public/resume/
├── Afner_Sirait_Resume.pdf          # General resume
├── Afner_Sirait_Resume_Tech.pdf     # Tech-focused
└── Afner_Sirait_Resume_Data.pdf     # Data-focused
```

Then create multiple buttons:

```typescript
<DownloadResumeButton 
  resumePath="/resume/Afner_Sirait_Resume_Tech.pdf"
  label="Download Tech Resume"
/>
```

### Add Analytics Tracking

Track resume downloads in `DownloadResumeButton.tsx`:

```typescript
const handleDownload = async () => {
  // Add analytics tracking
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'download', {
      event_category: 'Resume',
      event_label: 'Resume Download',
    });
  }
  
  // ... rest of download code
};
```

### Open in New Tab Instead of Download

Modify `DownloadResumeButton.tsx` line 32-35:

```typescript
// Instead of download, open in new tab
window.open(resumePath, '_blank');
```

## 📊 Resume Best Practices

### Content
- ✅ Keep it to 1-2 pages
- ✅ Use clear, readable fonts
- ✅ Include contact information
- ✅ Highlight key achievements
- ✅ Use action verbs
- ✅ Quantify results when possible

### Design
- ✅ Professional layout
- ✅ Consistent formatting
- ✅ Adequate white space
- ✅ Easy to scan
- ✅ ATS-friendly (if applying to jobs)

### Technical
- ✅ PDF format (not Word doc)
- ✅ Embedded fonts
- ✅ Optimized file size (< 2MB)
- ✅ No password protection
- ✅ Searchable text (not image-only)

## 🛠️ Resume Creation Tools

### Online Tools
- [Canva](https://www.canva.com/resumes/) - Beautiful templates
- [Resume.io](https://resume.io/) - Professional builder
- [Novoresume](https://novoresume.com/) - Modern designs
- [FlowCV](https://flowcv.com/) - Developer-friendly

### Desktop Tools
- Microsoft Word
- Google Docs
- Adobe InDesign
- LaTeX (for technical resumes)

### Developer-Specific
- [JSON Resume](https://jsonresume.org/) - JSON-based resume
- [HackMyResume](https://github.com/hacksalot/HackMyResume) - CLI tool
- [Resume.md](https://resume.md/) - Markdown resume

## 📦 File Size Optimization

### Compress PDF

**Online tools:**
- [SmallPDF](https://smallpdf.com/compress-pdf)
- [iLovePDF](https://www.ilovepdf.com/compress_pdf)
- [PDF Compressor](https://pdfcompressor.com/)

**Command line:**
```bash
# Using Ghostscript
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 \
   -dPDFSETTINGS=/screen -dNOPAUSE -dQUIET -dBATCH \
   -sOutputFile=compressed.pdf original.pdf
```

### Recommended Settings
- **Quality**: High (for readability)
- **Target size**: 500KB - 2MB
- **Resolution**: 150-300 DPI

## 🐛 Troubleshooting

### Download Not Working?

1. **Check file exists:**
   ```bash
   ls public/resume/
   ```

2. **Check filename matches:**
   - File: `Afner_Sirait_Resume.pdf`
   - Code: `/resume/Afner_Sirait_Resume.pdf`
   - Must match exactly (case-sensitive)

3. **Check browser console:**
   - Open DevTools (F12)
   - Look for errors
   - Check Network tab

4. **Try different browser:**
   - Some browsers block downloads
   - Check browser settings

### File Opens Instead of Downloads?

This is browser-dependent. To force download, the code already uses the `download` attribute. Some browsers may still open PDFs.

### Button Not Showing?

1. Check component is imported
2. Verify no console errors
3. Check if button is hidden by CSS
4. Restart dev server

## 🎯 SEO & Accessibility

### SEO Benefits
- Makes your resume easily accessible
- Improves user experience
- Shows professionalism
- Increases engagement

### Accessibility
- Button has clear label
- Keyboard accessible
- Screen reader friendly
- Visual feedback for all states

## 📚 Next Steps

1. ✅ Create/export your resume as PDF
2. ✅ Place it in `public/resume/`
3. ✅ Update filename in component (if needed)
4. ✅ Test the download
5. ✅ Optimize file size
6. ✅ Update resume regularly

## 💡 Pro Tips

1. **Keep resume updated** - Update every 3-6 months
2. **Version control** - Keep old versions for reference
3. **Test downloads** - Verify after each update
4. **Mobile-friendly** - Ensure readable on mobile
5. **Track downloads** - Add analytics if desired
6. **Multiple versions** - Consider industry-specific versions

---

**Your resume is now downloadable! 🎉**

For more customization, see: [RESUME_DOWNLOAD_GUIDE.md](../../RESUME_DOWNLOAD_GUIDE.md)
