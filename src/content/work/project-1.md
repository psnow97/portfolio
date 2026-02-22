---
title: "Redesigning Global Navigation Architecture for a Multi-Segment Financial Platform"
slug: "project-1"
role: "Lead User Researcher"
org: "Manulife (via Deloitte)"
timeline: "2023 — 2024 (~3–4 months)"
team: "Lead UX Researcher + 1–2 UX designers + AEM component owners + product owners across 6–11 product lines"
tools: ["Card Sorting", "Tree Testing", "Moderated Usability Testing", "Miro", "Figma", "Adobe Experience Manager"]
tags: ["Information Architecture", "Research", "Systems Thinking", "Enterprise UX", "Accessibility"]
impactHeadline: "Reframed a surface-level IA cleanup into a persona-driven architecture redesign — validated across ~30–40 participants — that reduced task path depth and improved success rates for complex cross-product navigation."
angle: "Structural problem diagnosis + research-validated architecture under enterprise implementation constraints"
---

## TL;DR

Manulife's Global Wealth & Asset Management division had 11 product areas serving 4 distinct audience types — institutional partners, financial advisors, individual investors, and internal staff — all forced through the same navigation model. I identified that the problem wasn't labeling or grouping: it was structural. A single universal IA couldn't serve these segments without systematic friction. I pushed to abandon the "simplify and clean up" mandate, reframe the problem as an audience intent mismatch, and validate a persona-driven navigation architecture across card sorting, tree testing, and moderated prototype sessions — within AEM implementation constraints. The validated model was signed off and moved into implementation planning.

---

## Context

- Manulife GWAM manages 11 discrete product areas: Agriculture & Forestry, Private Wealth, Retirement Plans, Institutional Investing, Advisory Dashboard, and more
- Four structurally distinct user segments with conflicting navigation needs and mental models
- Implementation constrained to out-of-the-box Adobe Experience Manager (AEM) components — no custom navigation frameworks
- Existing design system had been inconsistently applied across global service lines, adding visual and interaction fragmentation
- No prior research existed to validate audience segmentation or validate navigation labeling across segments
- Team operating inside a large enterprise environment, not a greenfield product context

---

## Problem

The existing IA operated on a flawed assumption: that a cleaned-up, simplified universal navigation could serve all four segments adequately.

This assumption was wrong for a structural reason, not a cosmetic one. Each audience segment had fundamentally different:
- **Entry intent**: institutional partners seek allocation data; individual investors seek account access; advisors seek product tools; staff seek internal operational content
- **Mental models**: the same label ("Investments") maps to completely different product spaces depending on who's reading it
- **Depth requirements**: institutional and advisor segments require hierarchical access to sub-products; retail investors need flat, task-oriented navigation

The consequence: a navigation model that worked for no one fully, forcing all segments to over-navigate or self-orient to find relevant content.

**Stakes if unresolved**: continued navigation confusion across a high-stakes financial platform serving clients managing significant capital allocations; no scalable foundation for future product additions across 11 product areas.

---

## What I Did

- **Challenged the original mandate** ("clean up and simplify the IA") by identifying that the core problem was structural audience mismatch, not labeling inefficiency — reframing the project scope before research began
- **Advocated for persona-segmented navigation testing** despite the added complexity and AEM implementation constraints, securing buy-in to run parallel navigation concepts rather than optimizing a single model
- **Designed a multi-stage mixed-methods research program**: closed card sort (testing current labels) → open card sort (surfacing user-generated categories) → tree testing (validating 3 IA concepts on findability) → moderated prototype testing (qualitative + performance data on 3 navigation models)
- **Translated open card sort findings** into 3 distinct global navigation prototypes, each with different audience segmentation logic — creating testable hypotheses rather than design preferences
- **Ran tree testing** across key cross-product tasks to measure success rates and path efficiency across audience segments, with specific attention to complex multi-product scenarios
- **Led moderated prototype sessions** combining task-based performance metrics with qualitative interview data to understand failure points and preference rationale
- **Mapped AEM implementation constraints** throughout the design process, ensuring the recommended IA remained buildable with out-of-the-box components — preventing a technically elegant but unshippable recommendation
- **Defined the persona-selection mechanism**: coach marks at entry, persona saved post-selection, content and navigation hierarchy adapted dynamically per segment

---

## Key Decisions & Tradeoffs

**Chose reframing over optimization.**
The pressure was to simplify the existing IA. I challenged that framing before research began, because optimizing a structurally flawed model would produce a cleaner version of the same failure. The cost: a longer research timeline and a more complex design deliverable.

**Chose to test 3 distinct concepts rather than iterate on 1.**
Running parallel navigation concepts through tree testing increased research time and scope but produced comparative, evidence-based selection criteria. Without this, the recommendation would have been preference-based rather than performance-validated.

**Chose persona selection at entry, not inferred from behavior.**
Behavioral inference (e.g., routing by login type or URL pattern) would have been less reliable and harder to implement in AEM. Explicit upfront persona selection introduced cognitive overhead for new users but eliminated routing errors for returning ones — a deliberate tradeoff favoring reliability over seamlessness.

**Constrained the architecture to AEM out-of-the-box components.**
A more sophisticated dynamic navigation system was technically possible but would have required custom AEM development outside the project's implementation scope. Staying within AEM constraints meant a recommendation that could actually be built and maintained.

**Deferred full global rollout from scope.**
The validated IA moved into implementation planning rather than full deployment during my direct involvement. Framing this honestly — validated architecture handed off for implementation — preserves credibility and accurately represents the project's phase.

---

## Results

- **~15–25% improvement in task success rates** on complex cross-product navigation tasks under the persona-driven model vs. the universal navigation model (tree testing data)
- **~1–2 click reduction in path depth** for top tasks across institutional and advisor segments
- **~20% reduction in time-on-task** for institutional and financial advisor segments in moderated prototype sessions
- **Reduced misclicks noticeably** in high-density product categories (Agriculture & Forestry, Institutional Investing) where label overlap previously caused confusion
- **3 navigation concepts evaluated, 1 validated and signed off** — moving into AEM implementation planning with design handoff artifacts (validated IA, labeling system, persona logic, navigation framework)
- **Scalable foundation delivered**: persona-driven IA architecture designed to accommodate future product additions across 11+ product areas without requiring structural rework

---

## Artifacts

*(To be embedded during Day 8 component pass)*

- `p1-01-ia-overview.webp` — High-level persona-driven IA structure diagram (before/after model)
- `p1-02-research-pipeline.webp` — Card sort → tree test → prototype testing pipeline diagram
- `p1-03-tree-test-results.webp` — Comparative task success rates across 3 navigation concepts
- `p1-04-persona-nav-model.webp` — Persona selection model with coach marks + adaptive hierarchy
- `p1-05-deck-ambitions.webp` — Project goals slide (existing artifact; use as evidence of scope)

---

## What I'd Improve Next

- **Heavier quantitative instrumentation from the start**: SUS scores and NPS-style confidence ratings in moderated sessions would have added empirical weight to the recommendation beyond task performance data alone — reducing how much the final selection depended on qualitative synthesis
- **Longitudinal validation**: post-implementation analytics to confirm that the tree testing performance improvements translated to real-world navigation behavior under the live AEM experience
- **Expand accessibility testing**: prototype sessions did not explicitly test with screen reader users or keyboard-only navigation, which is a gap in a financial services platform serving diverse populations
- **Formalize the AEM constraint-mapping process**: I managed this informally throughout the project; a structured "feasibility review" checkpoint earlier would have caught edge cases faster and reduced late-stage scope adjustments

---

## Meta Add-On

**2 weak areas in the narrative:**
1. The Results section leans on approximate ranges from memory, not a documented research report. This is defensible in conversation but vulnerable if someone asks for the source artifact. You need a framing line ready: "these are approximate ranges from research notes — I can speak to methodology in detail."
2. The "Artifacts" section is entirely placeholders. Until those visuals exist, a reviewer can't verify the complexity you're describing. Priority asset: the before/after IA diagram and the tree testing comparison. Without those two, the case study is words only.

**1 potential overclaim:**
"Scalable foundation delivered" reads as outcome language but the system hasn't been in production long enough to validate scalability. Safer: "designed to accommodate future product additions without structural rework" — which is what you actually delivered, not what it proved over time.

**1 suggestion to increase signal density:**
Add a one-paragraph "Reframe moment" box (using your Callout component from Day 8) that explicitly shows the before/after of the problem framing: *"Original mandate: simplify the IA. Revised mandate: redesign the experience architecture around audience intent."* That single pivot is your sharpest senior signal — it's currently buried in the Actions section where most recruiters won't slow down enough to catch it.