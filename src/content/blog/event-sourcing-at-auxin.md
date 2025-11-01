---
title: 'Decoupling Data Domains at Auxin with Event Sourcing'
pubDate: 2025-11-05
summary: 'How we used event modeling and event sourcing to create a loosely coupled, highly scalable data architecture for the Auxin IoT platform.'
author: 'Tim Willebrands'
image:
    url: '/assets/blog-placeholder-2.jpg'
    alt: 'A placeholder image.'
tags: ["Auxin", "Event Sourcing", "System Architecture", "Microservices", ".NET", "Data Architecture"]
---

## The challenge: sharing data without coupling services

As our portfolio of apps grew (each an independent service with its own DB and webapp), sharing data across domains became essential. I pushed back on service‑to‑service calls because they create tight coupling and cascading failures. We needed a way for services to learn from the same facts without sharing mutable state.

## The solution: thinking in events

Instead of modeling around state, we modeled around immutable facts: events.

- `SensorReadingReceived`
- `DeviceConfigurationUpdated`
- `NutrientRecipeCreated`

We adopted EventStoreDB (now Kurrent) and treated the append‑only event log as the fundamental data structure.

### How it works at Auxin

1. **Append‑only streams are the source of truth.** Raw domain events are written immutably. The stream history is the canonical record.
2. **Materialized views per service.** Most services project from the event store into their own read models optimized for their use cases.
3. **Duplicate storage by design.** Multiple services may keep similar views. Storage is cheap. Correctness comes from a single primary data source, the event store.
4. **No direct calls between services.** Services subscribe to the events they care about instead of calling each other. This preserves autonomy and failure isolation.

Working with an event store has a learning curve: event modeling, projections, idempotency. The payoff is clarity, auditability, and evolvability.

## Business impact at Auxin

- **Loose coupling at the data layer.** Teams move faster without coordinating releases.
- **A reliable hub for the sector.** Third‑party apps can plug in by producing or consuming events without getting entangled in our internals.
- **End‑to‑end traceability.** The event log provides a full audit trail for compliance and root‑cause analysis.
- **Better analytics and AI.** Unified events enable cross‑domain insights while each service stays independent.

## Context and further reading

- Phase 1 background: independent monoliths on a shared platform → [/writing/independent-monoliths-platform](/writing/independent-monoliths-platform)
- Phase 3 evolution: federated GraphQL gateway → [/writing/graphql-gateway-case-study](/writing/graphql-gateway-case-study)
