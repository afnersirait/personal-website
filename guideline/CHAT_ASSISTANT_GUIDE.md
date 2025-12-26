# Chat Assistant Guide

Your website now has an **AI-powered FAQ chatbot** to help visitors learn about Afner! 🤖💬

## ✨ Features

### **Interactive Chat Interface**
- 💬 **Floating chat button** - Always accessible in bottom-right corner
- 🤖 **Smart FAQ matching** - Keyword-based question matching
- ⚡ **Instant responses** - No API calls, fast local responses
- 📱 **Mobile-friendly** - Responsive design for all devices
- 🌓 **Theme support** - Works in both light and dark modes
- ⌨️ **Keyboard shortcuts** - Press Enter to send messages

### **User Experience**
- ✅ **Welcome message** - Greets users when opened
- ✅ **Quick questions** - Pre-defined questions for easy start
- ✅ **Typing indicator** - Shows when bot is "thinking"
- ✅ **Message timestamps** - Shows when messages were sent
- ✅ **Smooth animations** - Elegant open/close transitions
- ✅ **Auto-scroll** - Automatically scrolls to latest message

## 🎯 What It Can Answer

### **About Afner**
- Who is Afner Sirait?
- Educational background
- Current position and company
- Work experience

### **Skills & Expertise**
- Technical skills
- Programming languages
- DevOps capabilities
- Tools and technologies

### **Projects & Portfolio**
- Work samples
- Portfolio projects
- Project types

### **Contact Information**
- Email address
- LinkedIn profile
- GitHub profile
- How to get in touch

### **Website Information**
- Tech stack used
- Website sections
- Navigation help

## 📋 FAQ Categories

The chatbot has **20+ pre-defined FAQs** organized into categories:

1. **About** - Background, education, current role
2. **Skills** - Technical expertise, programming languages
3. **Experience** - Years of experience, projects
4. **Contact** - How to reach Afner
5. **Website** - Information about this site
6. **General** - Greetings, help, thanks

## 🎨 Chat Interface

### **Components**

**Floating Button:**
```
┌─────────────────────┐
│                     │
│                     │
│              [💬]   │ ← Floating chat button
└─────────────────────┘
```

**Chat Window:**
```
┌─────────────────────────┐
│ 🤖 Afner Assistant  [X] │ ← Header
├─────────────────────────┤
│ 🤖 Hi! How can I help?  │
│                         │
│     Hello! 👤           │ ← Messages
│                         │
│ 🤖 Great to meet you!   │
├─────────────────────────┤
│ Quick questions:        │ ← Quick questions
│ [Who is Afner?] [Skills]│
├─────────────────────────┤
│ [Ask me anything...] [→]│ ← Input
└─────────────────────────┘
```

### **Design Elements**

**Colors:**
- Bot messages: Secondary background
- User messages: Primary background
- Header: Primary/5 opacity background
- Online indicator: Green dot

**Icons:**
- 🤖 Bot icon for assistant
- 👤 User icon for visitor
- 💬 Message icon for button
- ✉️ Send icon for submit

## 💻 Implementation

### **Files Created**

#### **1. FAQ Data**
**File**: `lib/faqData.ts`

Contains:
- FAQ items with keywords, questions, answers
- Keyword matching logic
- Default fallback response

```typescript
export interface FAQItem {
  keywords: string[];
  question: string;
  answer: string;
  category: string;
}
```

#### **2. Chat Component**
**File**: `components/ChatAssistant.tsx`

Features:
- Message state management
- Keyword-based FAQ matching
- Typing indicator
- Auto-scroll
- Quick questions
- Responsive design

#### **3. Integration**
**File**: `app/page.tsx`

```typescript
import { ChatAssistant } from "@/components/ChatAssistant";

export default function Home() {
  return (
    <main>
      {/* ... other components */}
      <ChatAssistant />
    </main>
  );
}
```

## 🔧 Customization

### **Adding New FAQs**

Edit `lib/faqData.ts`:

```typescript
export const faqData: FAQItem[] = [
  // ... existing FAQs
  {
    keywords: ["new", "keyword", "question"],
    question: "Your question?",
    answer: "Your answer here",
    category: "your-category"
  }
];
```

**Tips:**
- Add multiple keywords for better matching
- Use lowercase keywords
- Include variations (e.g., "who", "about", "introduce")
- Keep answers concise but informative

### **Changing Welcome Message**

In `components/ChatAssistant.tsx`:

```typescript
const [messages, setMessages] = useState<Message[]>([
  {
    id: "welcome",
    text: "Your custom welcome message here!",
    sender: "bot",
    timestamp: new Date(),
  },
]);
```

### **Customizing Quick Questions**

```typescript
const quickQuestions = [
  "Your question 1",
  "Your question 2",
  "Your question 3",
  "Your question 4",
];
```

### **Changing Colors**

The chat uses theme colors from `app/globals.css`:
- `--primary` - User messages, bot icon
- `--secondary` - Bot messages, input background
- `--background` - Chat window background
- `--border` - Borders and dividers

### **Adjusting Size**

In `components/ChatAssistant.tsx`:

```typescript
// Chat window size
className="w-[380px] h-[600px]"  // Width x Height

// Button size
className="h-14 w-14"  // Button dimensions
```

## 🎯 How It Works

### **Keyword Matching Algorithm**

1. **User sends message**: "What are Afner's skills?"
2. **Convert to lowercase**: "what are afner's skills?"
3. **Check all FAQs**: Loop through faqData
4. **Count keyword matches**: "skills" matches → 1 point
5. **Find best match**: FAQ with most keyword matches
6. **Return answer**: Display matched FAQ answer

### **Example Flow**

```
User: "How can I contact Afner?"
       ↓
Keywords: ["contact", "afner"]
       ↓
Matches FAQ: {
  keywords: ["contact", "email", "reach"],
  answer: "You can contact Afner via..."
}
       ↓
Bot: "You can contact Afner via:
      • Email: afnersirait@gmail.com
      • LinkedIn: ..."
```

### **Fallback Response**

If no keywords match:
```typescript
{
  answer: "I'm sorry, I don't have specific information about that..."
}
```

## 📱 Mobile Optimization

### **Responsive Design**
- Chat window scales on mobile
- Touch-friendly buttons (44px minimum)
- Optimized for portrait and landscape
- Smooth animations

### **Mobile Adjustments**
```typescript
// Smaller on mobile
className="w-[380px] md:w-[400px]"

// Adjust position
className="bottom-4 right-4 md:bottom-6 md:right-6"
```

## ♿ Accessibility

### **Features**
- ✅ **Keyboard navigation** - Tab through elements
- ✅ **Enter to send** - Press Enter to send message
- ✅ **ARIA labels** - Screen reader support
- ✅ **Focus management** - Auto-focus input when opened
- ✅ **Semantic HTML** - Proper element structure

### **ARIA Labels**
```typescript
aria-label="Open chat assistant"
aria-label="Close chat"
aria-label="Send message"
```

## 🎨 Styling

### **Animations**

**Open/Close:**
```css
transition-all duration-300
scale-0 → scale-100
opacity-0 → opacity-100
```

**Typing Indicator:**
```css
animate-bounce
delay-100, delay-200
```

**Message Appearance:**
```css
smooth scroll-behavior
auto-scroll to bottom
```

### **Dark Mode**

Automatically adapts to theme:
- Light mode: White background, dark text
- Dark mode: Black background, light text
- Primary color stays consistent

## 🐛 Troubleshooting

### **Chat Not Opening**

**Issue**: Button click doesn't open chat

**Solution**:
```typescript
// Check z-index
className="z-50"  // Should be high enough

// Check state
const [isOpen, setIsOpen] = useState(false);
```

### **Messages Not Scrolling**

**Issue**: New messages don't scroll into view

**Solution**:
```typescript
// Ensure ref is attached
<div ref={messagesEndRef} />

// Check scroll function
messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
```

### **Keywords Not Matching**

**Issue**: FAQ not found for valid question

**Solution**:
```typescript
// Add more keywords
keywords: ["contact", "email", "reach", "message", "get in touch"]

// Use lowercase
message.toLowerCase()
```

## 🚀 Future Enhancements

### **Potential Additions**

1. **AI Integration**
   - Connect to OpenAI API
   - GPT-powered responses
   - Natural language understanding

2. **Analytics**
   - Track popular questions
   - Measure engagement
   - Identify gaps in FAQs

3. **Features**
   - Message history persistence
   - File attachments
   - Voice input
   - Multi-language support

4. **Advanced UI**
   - Message reactions
   - Rich media (images, links)
   - Code syntax highlighting
   - Markdown support

### **Example: OpenAI Integration**

```typescript
// Future enhancement
const response = await fetch('/api/chat', {
  method: 'POST',
  body: JSON.stringify({ message: userMessage })
});

const data = await response.json();
// Use AI-generated response
```

## 📊 Usage Statistics

### **Performance**
- ⚡ **Instant responses** - No API latency
- 💾 **Lightweight** - ~10KB total size
- 🚀 **Fast load** - No external dependencies
- 📱 **Mobile-optimized** - Smooth on all devices

### **User Benefits**
- 🎯 **Quick answers** - No need to search website
- 💬 **Interactive** - Engaging user experience
- 📚 **Comprehensive** - 20+ FAQs covered
- 🤝 **Helpful** - Guides users to contact info

## 📚 Resources

### **Documentation**
- [React Hooks](https://react.dev/reference/react)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### **Inspiration**
- [Intercom](https://www.intercom.com/)
- [Drift](https://www.drift.com/)
- [Crisp](https://crisp.chat/)

---

**Your website now has an intelligent FAQ chatbot! 🤖✨**

Visitors can instantly get answers about Afner's background, skills, and how to get in touch!
