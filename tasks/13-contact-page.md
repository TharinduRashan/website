# 13 — Contact Page

## Route: `/contact`

**Location:** `src/app/contact/page.tsx`  
**Background:** `#FFFFFF`

---

## Page Metadata

```typescript
export const metadata: Metadata = {
  title: 'Contact — Cloudzyne',
  description: 'Get in touch with Cloudzyne. Tell us about your project and we\'ll respond within 24 hours.',
}
```

---

## Page Layout

Two-column on desktop (lg+):
- **Left column (5/12):** Heading, description, contact details
- **Right column (7/12):** Contact form card

Single column on mobile.

```tsx
<main className="pt-24 pb-16 md:pt-32 md:pb-24">
  <div className="container mx-auto px-5 md:px-8">
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
      <div className="lg:col-span-5">
        {/* Left: info panel */}
      </div>
      <div className="lg:col-span-7">
        {/* Right: form */}
      </div>
    </div>
  </div>
</main>
```

---

## Left Panel Content

```
Eyebrow: Get In Touch
Heading: Let's talk about your project.
Body:    Tell us what you're building or thinking about.
         We'll review your message and get back to you 
         within 24–48 hours.

         We don't do hard sales. We have a conversation,
         understand your needs, and tell you honestly 
         whether we're a good fit.

Contact:
  📧 hello@cloudzyne.com
  📍 Sri Lanka (available remotely worldwide)
```

---

## Form Fields

Defined using React Hook Form + Zod. Form component: `src/components/shared/ContactForm.tsx` (Client Component).

### Zod Schema (`src/lib/validators.ts`)

```typescript
import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),

  email: z.string()
    .email('Please enter a valid email address'),

  company: z.string()
    .max(150, 'Company name is too long')
    .optional(),

  phone: z.string()
    .regex(/^[+\d\s\-()]{7,20}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),

  projectType: z.enum([
    'custom-software',
    'web-application',
    'mobile-application',
    'ai-solution',
    'ui-ux-design',
    'maintenance',
    'other',
  ], { required_error: 'Please select a project type' }),

  budget: z.enum([
    'under-5k',
    '5k-15k',
    '15k-50k',
    '50k-plus',
    'not-sure',
  ]).optional(),

  message: z.string()
    .min(20, 'Please provide at least 20 characters describing your project')
    .max(2000, 'Message is too long (max 2000 characters)'),
})

export type ContactFormData = z.infer<typeof contactSchema>
```

---

## Form UI (`ContactForm.tsx`)

```tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validators'
import { useState } from 'react'
// shadcn imports: Form, FormField, FormItem, FormLabel, FormControl, FormMessage
// Input, Textarea, Select, Button

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      projectType: undefined,
      budget: undefined,
      message: '',
    },
  })

  async function onSubmit(data: ContactFormData) {
    setFormState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Server error')
      setFormState('success')
    } catch (err) {
      setFormState('error')
      setErrorMessage('Something went wrong. Please try again or email us directly.')
    }
  }

  if (formState === 'success') return <SuccessState />
  // ...render form
}
```

---

## Form Field Layout

```
Row 1: [Name *]           [Email *]
Row 2: [Company]          [Phone]
Row 3: [Project Type * — full width dropdown]
Row 4: [Budget — full width dropdown]
Row 5: [Message * — textarea, 4 rows min]
Row 6: [Submit Button]
```

On mobile: all fields full-width, stacked.

### Field Labels and Placeholders

| Field | Label | Placeholder | Required |
|---|---|---|---|
| name | Full Name | Your name | Yes |
| email | Email Address | you@company.com | Yes |
| company | Company / Organisation | Optional | No |
| phone | Phone Number | Optional | No |
| projectType | Project Type | Select project type... | Yes |
| budget | Budget Range | Select a range (optional) | No |
| message | Tell us about your project | Describe what you're looking to build... | Yes |

### Project Type Options
```
Custom Software Development
Web Application
Mobile Application
AI Solution
UI/UX Design
Maintenance & Support
Other / Not Sure
```

### Budget Options
```
Under $5,000
$5,000 – $15,000
$15,000 – $50,000
$50,000+
Not sure yet
```

---

## Submit Button States

```
idle:    "Send Message"          (bg-brand, normal)
loading: "Sending..."            (bg-brand/70, cursor-not-allowed, spinner icon)
success: (replaced by SuccessState)
error:   "Send Message"          (re-enabled) + error message below
```

Spinner: `<Loader2 className="animate-spin w-4 h-4" />`

---

## Success State

```tsx
function SuccessState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
        <CheckCircle className="w-8 h-8 text-emerald-600" />
      </div>
      <h3 className="text-xl font-semibold text-neutral-950">Message sent!</h3>
      <p className="text-neutral-500 max-w-sm">
        Thanks for reaching out. We'll review your message and get back to you within 24–48 hours.
      </p>
      <a href="mailto:hello@cloudzyne.com" className="text-sm text-brand underline">
        hello@cloudzyne.com
      </a>
    </div>
  )
}
```

---

## API Route: `/api/contact`

**Location:** `src/app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validators'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.safeParse(body)

    if (!data.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: data.error.flatten() },
        { status: 400 }
      )
    }

    // TODO: Send email via Resend or SendGrid
    // await sendEmail({ to: process.env.CONTACT_EMAIL_TO, ...data.data })

    // Stub: log to console for now
    console.log('[Contact Form Submission]', data.data)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('[Contact API Error]', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```

---

## Accessibility

- All fields have associated `<label>` via shadcn `FormLabel`
- Error messages linked via `aria-describedby` (shadcn `FormMessage` handles this)
- Required fields indicated with `*` in label AND `aria-required="true"`
- Focus moves to first error field on failed submission:
  ```typescript
  form.handleSubmit(onSubmit, () => {
    const firstError = Object.keys(form.formState.errors)[0]
    form.setFocus(firstError as keyof ContactFormData)
  })
  ```
- Submit button `disabled` during loading state

---

## Checklist
- [ ] All 7 form fields render with correct labels/placeholders
- [ ] Zod validation runs on submit — not on blur (less aggressive UX)
- [ ] Error messages display below each invalid field
- [ ] Submit button shows spinner + "Sending..." during loading
- [ ] Success state replaces form on 200 response
- [ ] Error state shows message + re-enables submit on failure
- [ ] `/api/contact` returns 400 on invalid data, 200 on success
- [ ] API route validates with Zod server-side
- [ ] `CONTACT_EMAIL_TO` env var referenced (email send stubbed)
- [ ] Mobile layout: all fields full-width
- [ ] Accessibility: focus moves to first error on failed submit
