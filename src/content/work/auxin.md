---
title: 'Auxin: Taming a Sprawling Horticulture Data Ecosystem'
pubDate: 2025-10-26
summary: 'Reflections on architecting and leading Auxin for 5 years. Building a unified, secure platform for growers that connects data, AI, and operational apps.'
author: 'Tim Willebrands'
image:
    url: 'https://royalbrinkman.com/content/files/webshop-nl/overig/data%20management.jpg'
    alt: 'Image of a person using Auxin on a laptop in a greenhouse.'
tags: ["Auxin", "Platform Engineering", "Architecture", "Microservices", ".NET", "IoT", "Lead Developer"]
---

> **🚧 Notice 🚧** 
> 
> Heya 👋 I appreciate you reading this page, _I mean I'm writing it for that purpose_. But I have to caution you, my dearest reader, that it is very much a _work-in-progess_. 


[Auxin](https://royalbrinkman.com/auxin) is a secure, central platform where greenhouse data and day‑to‑day workflows come together. It pulls in internal and external cultivation data, AI models, and third‑party apps to produce cultivation‑specific advice. It also turns that advice into action by steering hardware like drones and spray rigs through an operating system layer. For growers this means earlier risk detection, better decisions, and lower costs.

## My role

I was the architect and lead developer. I set the platform direction, chose the key patterns, and led the implementation. The job was to balance product goals (security, multi‑tenancy, cohesive UX) with engineering goals (autonomy, scalability, evolvability).

---

# Technical history: three phases that shaped Auxin

## Phase 1: Independent monoliths on a shared platform

Before Auxin was pitched, I rebuilt an in‑house platform that could host modern React apps while safely embedding pieces of the legacy system it replaced. When the client asked for a central hub for horticulture (open to third‑party apps), that mode of thinking became my blueprint when building Auxin.

Every feature belongs to a single domain which is build using a single _service_ which owns their own _database_ and serves its own _webapp_ to present the feature to the users.
This way there can be **no** shared mutable data. Isolation by default and thus (or so I hoped) [no spooky action in the distance](https://en.wikipedia.org/wiki/Action_at_a_distance_%28computer_programming%29).
The shared platform provides authentication, multi‑tenancy, navigation, and style cohesion. Apps stay independently deployable, own their domain end to end and can be as sinple or complex as needed without impacting other parts of the platform.

This was not microservices in the traditional sense. These were independent monoliths, presented through one platform. It gave us speed and autonomy without most of the distributed complexity.

Read more: [Blueprinting Auxin: Independent Monoliths on a Shared Platform](/writing/independent-monoliths-platform)

## Phase 2: Event sourcing to share data without coupling

As the number of apps grew, cross‑domain data became necessary. Reading up on microservice horror-stories I decided against service‑to‑service calls and prevent any tight coupling. Talking with peers led us to event sourcing: store immutable domain events in append‑only streams (we used EventStoreDB at the time).

- A shared event log is the primary source of truth
- Services project events into their own materialized views for fast queries
- Duplicate storage is fine. Consistency comes from a common event source
- Services subscribe to events they care about instead of calling each other

This gave us loose coupling at the data layer and a complete audit trail. The learning curve around event modeling and streaming was worth it for the clarity and resilience.

Read more: [Decoupling Data Domains at Auxin with Event Sourcing](/writing/event-sourcing-at-auxin)

## Phase 3: A federated GraphQL gateway for a unified API

As frontends matured, single apps needed data from multiple domains. We introduced a federated GraphQL gateway to compose service schemas into one graph. Clients send a single declarative query. The gateway plans, fetches in parallel, and stitches results.

- One endpoint for all client data needs
- Strongly typed, self‑documenting API with solid DX
- Teams keep autonomy while the frontend gets much simpler

This is when Auxin became what it is today: a place where future‑oriented growers can explore diverse data in a cohesive way, alongside specialized apps that go deeper, all on one platform.

Read more: [Case Study: Taming API Sprawl with a Federated GraphQL Gateway](/writing/graphql-gateway-case-study)

---

Auxin blends a secure platform, domain know‑how, and data integration to move from data to value. It supports growers, product specialists, and partners with insights and with the tooling to act on them in one experience.
