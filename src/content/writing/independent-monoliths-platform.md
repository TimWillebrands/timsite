---
title: 'Blueprinting Auxin: Independent Monoliths on a Shared Platform'
pubDate: 2025-10-20
summary: 'How an in-house framework for embedding legacy and hosting modern apps became the blueprint for Auxin: independent services with their own DB and webapp, unified by a shared platform for auth, tenancy, and style cohesion.'
author: 'Tim Willebrands'
image:
    url: '/assets/blog-placeholder-1.jpg'
    alt: 'A placeholder greenhouse image.'
tags: ["Auxin", "Architecture", "Platform", "Monolith", "Microservices", "Strategy"]
---

This is a stub I will expand.

- Context: Before Auxin, I architected an in-house platform that could host modern React apps while embedding parts of the legacy system during a safe transition.
- Requirement from the client: a central hub for horticulture, enabling third parties to expose their own apps.
- Strategy: every app is a single service + its own database + its own webapp. No shared mutable data, total isolation. Inspired by microservices, but intentionally independent monoliths presented through a shared platform.
- Platform responsibilities: authentication, multi-tenancy, navigation, and style cohesion. App responsibilities: everything else.

I’ll flesh this out with diagrams, trade-offs, and rollout notes.
