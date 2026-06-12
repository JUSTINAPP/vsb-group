@AGENTS.md

## Auto-deploy instructions
After every change or set of changes, always run:
git add .
git commit -m "[descriptive message of what changed]"
git push origin main

Never wait for me to ask. Always push after confirming changes are complete.

## Common Issues

### Images not displaying after adding new files
When adding new image files to `public/assets/`, always explicitly stage and commit the file with git. New binary files like images are often untracked and not picked up by `git add -A` if they were added outside of the Claude Code session.

Always run:
```bash
git add public/assets/
git status
```
Before committing to confirm new image files are staged. Vercel only serves files that are committed to the repository — untracked local files will not deploy.

## React Async Form Gotcha

When using async event handlers with forms in React, always capture `e.currentTarget` before the first `await`. React nullifies the synthetic event's `currentTarget` after the synchronous return, so any reference to it after an `await` will be null.

**Wrong:**
```ts
const handleSubmit = async (e) => {
  const token = await executeRecaptcha('form')
  const formData = new FormData(e.currentTarget) // ❌ null after await
}
```

**Correct:**
```ts
const handleSubmit = async (e) => {
  const form = e.currentTarget // ✅ capture before await
  const token = await executeRecaptcha('form')
  const formData = new FormData(form)
}
```

This applies to any async handler that uses `e.currentTarget` — forms, inputs, buttons etc.

## Resend Email — Always Use Verified Domain

Never use `onboarding@resend.dev` as the from address in production. This is Resend's default test address and can only send to your own email — it will fail for all other recipients.

Always set the from address to the project's verified sending domain:

```ts
from: 'South Beach <noreply@sbmm.com.au>'
```

The verified domain for this project is `sbmm.com.au`. If the domain is not yet verified in Resend, verify it first at resend.com/domains before deploying email functionality.

Also ensure the following environment variables are set in both `.env.local` and Vercel:

- `RESEND_API_KEY`
- `CONTACT_EMAIL` (fallback: samuel@vsbgroup.com.au)
- `FUNCTIONS_EMAIL` (fallback: samuel@vsbgroup.com.au)
