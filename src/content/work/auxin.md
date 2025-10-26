---
title: 'Taming a Sprawling Data Ecosystem with a Federated GraphQL Gateway'
pubDate: 2025-10-26 # Or whenever you publish
summary: 'A case study on how we used a federated GraphQL gateway with ChilliCream Hot Chocolate Fusion to solve the API sprawl and complexity of the multi-tenant Auxin data platform.'
author: 'Tim Willebrands'
image:
    url: 'https://royalbrinkman.com/content/files/webshop-nl/overig/data%20management.jpg'
    alt: 'Image of a person using Auxin on a laptop in a greenhouse.'
tags: ["Auxin", "GraphQL", "System Architecture", "Microservices", ".NET", "ChilliCream", "IoT"]
---

The Auxin platform was born from a complex problem: how do you unify a sprawling, ever-growing ecosystem of disconnected devices and services into a single, cohesive data platform that users love? Each new sensor, camera, or data source we integrated came with its own backend service, its own API, and its own domain logic.

Early on, I realized that without a clear architectural strategy, we were headed for disaster. We would drown in a sea of bespoke APIs, our frontend would become a brittle mess of data-fetching logic, and every new feature would require complex, cross-team coordination.

We needed a system that could embrace this complexity while providing a single, simple, and powerful interface to the outside world. The solution was a Federated GraphQL Gateway, and as you said, it turned out to be an absolutely fantastic choice.

### The Problem: The Inevitable Tangle of Microservices

As our domain expanded, we faced a classic set of scaling challenges:

-   **API Sprawl:** Each microservice had its own REST endpoint. The frontend team was constantly learning new APIs and the backend teams were constantly writing boilerplate controllers.
-   **Tight Coupling:** If a frontend view needed data from three different services, it had to make three different calls and know where they were located. If one of those services changed its data model, the frontend would break.
-   **Duplicated Logic:** Services often needed to reference small pieces of data from each other, leading to duplicated data models and complex inter-service communication.
-   **Loss of Team Autonomy:** A simple change could cascade through multiple systems, requiring extensive coordination and slowing everyone down.

We needed a central point of contact that didn't become a monolithic bottleneck.

### The Solution: A Federated Gateway with Hot Chocolate Fusion

Instead of a traditional API gateway that just proxies requests, we opted for a federated GraphQL architecture using the .NET library [ChilliCream Hot Chocolate Fusion](https://chillicream.com/docs/fusion/v14).

This approach gave us a "smart" gateway that acts as a central switchboard for our entire data graph. Here’s how it works:

1.  **Each Microservice is a GraphQL Server:** Every backend service (e.g., `SensorDataService`, `GreenhouseLayoutService`, `AnalyticsService`) exposes its own, independent GraphQL schema. They are complete, self-contained applications that own their specific domain.
2.  **The Fusion Gateway Composes the Schemas:** Our gateway service does one simple, powerful thing: it polls all the downstream services, collects their individual schemas, and composes them into a single, unified super-schema. It knows which service is responsible for which part of the data graph.
3.  **The Frontend Makes a Single Query:** The frontend (and any other client) now only talks to one endpoint: the gateway. It can ask for sensor data, layout information, and analytics all in a single, declarative GraphQL query.
4.  **The Gateway Fetches and Joins:** The Fusion gateway intelligently plans and executes the query. It calls the relevant microservices in parallel, fetches the required data, and stitches it all together into a single response.

> The most powerful decision we made was to **keep data-joining logic out of the backend.** We didn't create complex dependencies between our microservices. Instead, we empowered the frontend. By simply exposing the right IDs, the frontend could construct the query it needed, effectively "joining" the data from different domains at the point of consumption.

### The Impact: Managed Autonomy and Velocity

Calling this choice "fantastic" isn't an exaggeration. The impact on our development process was immediate and profound:

-   **Radical Team Autonomy:** Backend teams could develop, deploy, and scale their services completely independently. As long as their schema was available to the gateway, their new features would magically appear in the unified API without any central coordination.
-   **Dramatically Simplified Frontend:** The frontend team's productivity skyrocketed. They no longer had to orchestrate multiple API calls. They could simply declare the data they needed for a given view, and the gateway would handle the rest.
-   **Future-Proof by Design:** Adding a new data source or an entirely new business domain was no longer a massive architectural undertaking. We could spin up a new microservice, expose its schema, and the gateway would seamlessly integrate it into the platform.
-   **A Joy to Work With:** It created a truly developer-friendly experience. The API was self-documenting, strongly typed, and gave clients the exact data they asked for—no more, no less.

This architecture wasn't just a technical solution; it was a cultural one. It allowed us to scale our platform and our team in a clean, decoupled way, giving us the velocity we needed to win in a complex market. It was a perfect example of choosing the right abstraction to manage complexity, and it's a pattern I would use again in a heartbeat.

