---
title: "Redesigning Global Navigation Architecture for a Multi-Segment Financial Platform"
slug: "project-1"
role: "Lead User Researcher"
org: "Manulife Global Wealth & Asset Management (via Deloitte)"
timeline: "Nov 2024 — Feb 2025 (12-week engagement)"
team: "Lead UX Researcher + 1–2 UX/UI designers + AEM architect + design system lead + product owners across 11 product lines"
tools: ["Card Sorting", "Tree Testing", "Moderated Usability Testing", "Miro", "Figma", "Adobe Experience Manager (AEM)"]
tags: ["Information Architecture", "Research", "Systems Thinking", "Enterprise UX", "Accessibility"]
impactHeadline: "Reframed a surface-level IA cleanup into a validated persona-driven navigation architecture — tested across 13 participants across 3 concepts — that became the implementation blueprint for consolidating 11 websites serving 4 distinct audience segments."
angle: "Problem diagnosis + research-validated architecture under real enterprise implementation constraints"
---

## TL;DR

Manulife's Global Wealth & Asset Management division ran 11 disconnected product websites serving 4 fundamentally different audience types — institutional partners, financial advisors, individual investors, and internal staff — all forced through the same navigation model. The original mandate was to simplify and clean up the IA. I challenged that framing before research began: the problem wasn't labeling, it was structural. A single universal navigation couldn't serve these segments without systematic failure. I pushed to test three distinct navigation architectures in parallel — including a persona-driven concept that eliminated the side navigation entirely — and ran card sorting and moderated prototype sessions across 13 participants to find which model actually performed. The persona-driven concept ranked highest across both investor and professional segments. It became the implementation blueprint, with IA site maps, hi-fi prototypes, and a governance framework delivered to the product team.

---

## Context

- Manulife GWAM operated 11 discrete public websites: MIM Global, Canada Retail, Canada Retirement, Manulife Wealth, Manulife Private Wealth, US Retail (John Hancock), US Retirement (John Hancock), Institutional, UCITS Private Site, Real Estate Finance, Timber & Agriculture
- Over 3,000 total domains across the global Manulife portfolio; 98% had low search authority — consolidation had SEO stakes, not just UX stakes
- 8 of 61 prioritized domains required legal or regulatory separation — IA decisions had legal constraints, not just design ones
- Four structurally distinct user segments with conflicting navigation needs and mental models: institutional partners, financial advisors (CA + US), individual investors (CA + US), internal staff
- Implementation constrained to out-of-the-box Adobe Experience Manager (AEM) components — no custom navigation frameworks
- Design system (Common Core) had been inconsistently applied across global service lines: naming conventions, token connections, and component states all misaligned
- No prior research existed to validate IA structure, navigation labels, or persona segmentation for the consolidated platform

---

## Problem

The existing IA operated on a flawed assumption: that a cleaner, simplified universal navigation could serve all four audience segments adequately.

This assumption failed for a structural reason, not a cosmetic one. Each segment had fundamentally different entry intent, mental models, and depth requirements:
- Institutional partners seek allocation data and fund documentation — deep, hierarchical access
- Financial advisors need product tools, sponsor portals, and compliance resources — segment-specific, not product-generic
- Individual investors need plan access and account tools — flat, task-oriented
- Internal staff need operational content that overlaps but doesn't belong in public navigation

Stakeholder interviews across all 11 product lines independently flagged navigation as their primary known user pain point. "Navigation is a significant pain point across websites and this applies across our GWAM ecosystem" — stakeholder synthesis, CX analysis sessions.

**Stakes**: A high-volume financial platform managing institutional and retail capital where misdirected users don't self-correct — they abandon or call support. Consolidating 11 websites without resolving the IA structure would reproduce the same failure at larger scale.

---

## What I Did

- **Challenged the original mandate** ("clean up and simplify the IA") by identifying that the core problem was structural audience mismatch, not labeling inefficiency — reframing the project scope before research began
- **Led CX discovery sessions** with product owners across all 11 GWAM websites, documenting purpose, primary users, key tasks, known pain points, and business metrics for each site — establishing the evidential baseline for the IA redesign
- **Conducted a UX/UI audit** of navigation across all 11 sites using a structured heuristic framework across 4 categories (Navigation UI, Categorization & Labels, User Flows & Wayfinding, Search), producing a severity-rated assessment across each site
- **Ran an open card sort (37 cards, 11 participants)** to surface user-generated categories and naming conventions — revealing 91% grouping agreement on the top mental model cluster, and six primary categories that became the foundation for the IA concepts
- **Designed 3 parallel navigation architectures** to test competing structural hypotheses: Concept A (persona-based landing page + existing side nav), Concept B (product-based dropdown menus + side nav), Concept C (persona-driven dropdowns, side nav eliminated entirely)
- **Ran moderated usability testing across 13 participants** (5 advisor proxies, 2 institutional proxies, 6 individual investors) testing 8 core tasks per concept: persona switching, LOB navigation, product finding, site orientation, language/country switching, and sign-in initiation
- **Identified that coach marks failed** in testing — users dismissed them immediately or failed to understand their purpose — and pivoted the recommendation to entry modals, which tested significantly better; this was a documented reversal of the original design direction, not a preference
- **Documented the AEM constraint boundary** throughout the design process, ensuring all three concepts remained buildable with out-of-the-box components — preventing technically elegant but unshippable recommendations
- **Delivered the full workstream output**: Audit & Research Report, persona-based IA site maps for 5 audience segments, 3 hi-fi Figma prototypes, and a next-steps roadmap for taxonomy and deeper IA work

---

## Key Decisions & Tradeoffs

**Chose reframing over optimization.**
The pressure was to simplify the existing IA. I challenged that before research began, because optimizing a structurally flawed model produces a cleaner version of the same failure. Cost: longer timeline, more complex deliverables, harder stakeholder alignment. Benefit: a recommendation grounded in the actual problem rather than the originally stated one.

**Chose to test 3 distinct concepts rather than iterate on 1.**
Running parallel navigation architectures doubled the research load but produced comparative performance data instead of preference data. The study confirmed that Concept C outperformed alternatives — but also revealed that individual investors and financial professionals ranked options differently by a significant margin, a nuance that would have been invisible with a single-concept test.

**Chose to eliminate the side navigation in the final recommendation.**
Participants consistently described the side navigation as visually distracting and redundant with the dropdown menus. One participant: "This sidebar is meant to be helpful but it's just distracting... my eye is still being pulled over to this sidebar even though I'm trying to focus elsewhere." Removing it cleaned up the layout but required the dropdown architecture to carry more navigational weight — a tested, not aesthetic, tradeoff.

**Chose modals over coach marks for persona selection — based on failure evidence.**
Coach marks were the initial design direction. In testing, they were universally dismissed within seconds and failed to communicate their purpose. Entry modals tested substantially better. This was a research-driven reversal of an initial design assumption, documented in the study findings.

**Constrained the architecture to AEM out-of-the-box components.**
A more sophisticated dynamic navigation system was technically possible but outside the AEM implementation scope. Staying within constraints meant a recommendation that content teams could actually build and maintain without custom development.

---

## Results

- **Concept C (persona-driven, no side nav) ranked highest overall** across 13 participants in usability testing; average CSAT scores above 7.5/10; ranked as top preference by the majority of both investor and professional participants
- **91% grouping agreement** on the top mental model cluster from card sorting — providing strong validation for the persona-segment framing before prototype testing began
- **Coach mark failure documented and reversed**: the original persona-selection mechanism was invalidated in testing; modal-based recommendation backed by direct observational evidence, not designer preference
- **Breadcrumb requirement established from evidence**: users across all technological skill levels instinctively relied on breadcrumbs to orient and backtrack — a feature absent from all current GWAM sites, now in the implementation roadmap
- **5 persona-segmented IA site maps delivered** (CA Investors, CA Advisors, CA+US Institutions, US Investors, US Advisors) — the architecture differentiates navigation structure by audience rather than applying a single global model
- **Full workstream deliverables shipped**: Audit & Research Report, 3 hi-fi Figma prototypes, IA site maps, AEM constraint documentation, governance framework recommendations — handed off to the product team for implementation planning

---

## Artifacts

*(To be embedded during Day 8 component pass)*

- `p1-01-ia-overview.webp` — Persona-based IA site map (CA Advisors or CA Investors structure)
- `p1-02-concept-comparison.webp` — Concept A/B/C structure comparison and key attribute callouts
- `p1-03-card-sort-output.webp` — Card sort grouping clusters and agreement levels
- `p1-04-persona-nav-model.webp` — Entry modal + persona tabs mechanism from Concept C
- `p1-05-rainbow-chart.webp` — UX assessment severity chart across all 11 GWAM sites

---

## What I'd Improve Next

- **Heavier quantitative instrumentation**: the study captured CSAT-derived preference rankings but not task-level success rates or error counts per concept — those metrics would have added more granular, defensible evidence for the performance difference between concepts
- **Longitudinal validation**: post-implementation analytics to confirm prototype performance translates to real-world behavior once the AEM experience is live
- **Explicit accessibility testing**: prototype sessions did not include screen reader users or keyboard-only navigation — a gap for a regulated financial platform serving diverse populations
- **Taxonomy resolution before handoff**: the concept was validated, but label sets ("Solutions," "Resources," "About Us") remained contested at the stakeholder level and left as a next-phase item — resolving this during the research phase would have produced a cleaner, less ambiguous handoff artifact

---

## Meta Add-On

**What changed in this revision (for your awareness):**
The previous version included approximate performance ranges ("15–25% improvement in task success rates," "20% reduction in time-on-task") that don't appear in the source materials. Those have been removed. The actual quantitative evidence is the CSAT-derived preference ranking and 91% card sort agreement — real data, defensible from methodology. Made-up ranges are a liability in conversation.

**What's still weak:**
Results are honest but less visually punchy without the fabricated numbers. The fix for that is visual: the Callout component (Day 8) should explicitly surface the coach mark → modal pivot. That single research-driven reversal — documented, observed, acted on — is a stronger senior signal than any performance stat.

**The asset that would most strengthen this case study:**
A before/after IA diagram: single universal navigation vs. persona-segmented architecture. Even an annotated screenshot from the deck frames the structural argument visually and makes the reframe concrete for a recruiter skimming the Results section.