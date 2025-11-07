---
title: 'Case Study: Taming API Sprawl with a Federated GraphQL Gateway'
pubDate: 2025-11-01
summary: 'A deep dive into how we used a federated GraphQL gateway with ChilliCream Hot Chocolate Fusion to solve API complexity at Auxin.'
author: 'Tim Willebrands'
image:
    url: 'https://royalbrinkman.com/content/files/webshop-nl/overig/data%20management.jpg'
    alt: 'Image of a person using Auxin on a laptop in a greenhouse.'
tags: ["Auxin", "GraphQL", "System Architecture", "Microservices", ".NET", "ChilliCream", "Case Study"]
---

After Phase 1 (independent monoliths) and Phase 2 (event sourcing for shared facts), our frontends reached the point where a single app needed data from multiple domains. Service‑specific REST endpoints no longer fit. Frontend code was orchestrating multiple calls and model translations.

We needed a gateway. After research and prototyping, we chose a federated GraphQL architecture with ChilliCream Hot Chocolate Fusion because our services already fit the idea of nodes in a larger domain graph.

### The problem: the tangle of microservices

As our domain expanded, we faced a familiar set of issues:

- **API sprawl.** Each service had its own REST endpoint and model.
- **Coupling risks.** Changes in one service leaked into consumers.
- **Duplicated logic.** Clients stitched data manually.

### The solution: a federated gateway with Hot Chocolate Fusion

Instead of a simple proxy, the gateway composes service schemas into a unified super‑schema, plans queries, fans out to the right services in parallel, then stitches the results.

1. **Each microservice is a GraphQL server.** Self‑contained, owning its domain.
2. **Gateway composes schemas.** It knows which service resolves which fields.
3. **Clients make one query.** Ask for exactly what they need across domains.

> A key design choice: keep complex joins out of individual services. By exposing the right identifiers and boundaries, the client and gateway can compose cross‑domain views without creating backend dependencies.

### Product impact for Auxin

- **One cohesive API for all apps.** Faster feature work and a simpler frontend mental model.
- **Preserved team autonomy.** Services stay independently deployable and evolvable.
- **Strong DX.** Strongly typed, self‑documenting contracts.

### How this fits the bigger picture

- Phase 1 gave us fast, isolated delivery: [/writing/independent-monoliths-platform](/writing/independent-monoliths-platform)
- Phase 2 gave us shared facts without coupling: [/writing/event-sourcing-at-auxin](/writing/event-sourcing-at-auxin)
- Phase 3 unified the client surface with a graph: this post

This is where Auxin became what it is now: a place where future‑oriented growers analyze diverse greenhouse data in a single view, and where specialized apps can go deep on the same facts, all on one secure platform.
