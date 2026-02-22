Here's your friction log entries: 

**Day 2 — Friction Log**

**What broke:** Paste corruption — opening `<a` tags were stripped when pasting code blocks from Claude into the terminal and Cursor, leaving orphaned attributes rendering as plain text in the browser.

**Why it broke:** The terminal's `cat > file << 'ENDOFFILE'` approach failed because the shell was interpreting parts of the pasted content. Cursor's paste also mangled angle brackets on the first attempt.

**What fixed it:** Pasting directly into Cursor's editor in small chunks, one section at a time. Cursor's editor doesn't interpret the content, it just stores it as text.

**What I learned:** Terminal heredoc commands are unreliable for pasting large HTML/JSX blocks. For file creation with complex markup, use the editor directly. Two different tools for two different jobs — terminal for commands, editor for content.

**Artifact:** Commit — "Add MainLayout, work index, and dynamic case study routes"

---

**What broke:** Missing CSS import in `MainLayout.astro`.

**Why it broke:** The layout file had no `import "../styles/global.css"` — so Tailwind classes existed in the file but weren't being loaded. The browser rendered raw attribute strings instead of styled HTML.

**What fixed it:** Adding the import to the top of the frontmatter block.

**What I learned:** In Astro, CSS imports aren't global — the layout file that wraps all pages is the right place to import global styles once.

**Artifact:** Same commit.

---

Save this in a `friction-log.md` file in your project root. That's your CS4 spine building up.