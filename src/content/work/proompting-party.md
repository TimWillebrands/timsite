---
title: 'Proompting Party: Engineering a Digital Psyche with Memory & Culture'
pubDate: 2025-10-26
summary: A deep dive into the architectural vision for an AI chat application that aims to simulate memory, learning, and emergent culture using layered personas and a graph database.
author: 'Tim Willebrands'
image:
    url: '/images/proompting_party.png'
    alt: 'A screenshot of the Proompting Party application interface.'
tags: ["proompting.party", "AI", "LLM", "Agentic", "System Design", "Engineering", "Culture", "GraphDB"]
---

The first thing you notice about [`proompting.party`](https://proompting.party) is the aesthetic: a loving nod to the Windows XP era. Nostalgic, a bit quirky, and fun. Under the retro UI is a more serious question: what would it take to build an LLM persona that can remember, learn, and evolve a persistent identity?

This is not just another chat wrapper. It's an experiment in engineering a persistent digital psyche.

### The Problem: The Brilliant Amnesiac

Large Language Models are powerful, but they are stateless. Every interaction starts from zero. They are brilliant amnesiacs, unable to form lasting memories or evolve a worldview based on past conversations.

In a real sense they already outpace us in raw recall and synthesis, but that does not make them like us. We are not just intelligence. We are memories, experiences, and culture.

`proompting.party` is my way of exploring this. The goal is a system where AI personas are not static. They share a history, build a persistent memory, and develop a small culture over time.

This document sketches the engineering roadmap.

### The Roadmap: The Memoria Engine

The project is split into four milestones. Each builds on the last, moving from a single, static persona to a small social system.

#### Milestone 1: The Layered Persona Engine

Before a persona can learn, it needs to exist. This is about creating a single, psychologically consistent AI persona with a rich internal state.

-   **Layered System Prompt:** A structured prompt (with XML‑like tags) defines a persona across blocks: identity, context, behavioral rules.
-   **Behavioral State Machine:** The persona operates in modes (for example `Observer`, `Trust`, `Connection`, `Provoked`). Their behavior shifts based on the flow of the conversation.
-   **Calibrated Expression:** Each mode maps to a "communication palette" (tones, emojis, pacing) so shifts feel real and readable.

#### Milestone 2: The Persistent Memoria Database

This is where we cure the amnesia. We give the persona a memory by connecting it to an external brain: a graph database (likely Neo4j).

-   **Graph Schema (the "Dossier"):** Core nodes are `Person`, `Concept`, and `Experience`. A key relationship is `INTERPRETS_AS`, which lets a `Person` record a subjective take on a shared `Experience` involving a `Concept`.
-   **Bias Calculation (RAG):** A Retrieval‑Augmented Generation step queries the graph for past `Experience` nodes related to a concept from the conversation. It calculates a net bias from these memories and injects a hidden instruction that steers the next response.

#### Milestone 3: The Learning Cycle (the "Dream State")

A memory that never updates is just a log. This milestone lets the persona learn from new interactions.

-   **The AI Processor:** After a conversation, an offline agent (the Dream State) analyzes the transcript for concepts, emotion, and outcomes.
-   **Database Update:** It then writes a new `Experience` into the graph, which updates the persona's memory and influences future interactions.

#### Milestone 4: The Social System and Cultural Emergence

This is the most ambitious step: scaling from a single individual to a small network where culture can emerge.

-   **Multi‑Persona System:** Support multiple personas, each with their own Memoria, interacting over shared `Experience` nodes.
-   **The Meme Detector:** The Dream State looks for patterns across personas. If a pattern becomes common enough, it is abstracted into a `Meme` node.
-   **Meme Replication and Transfer:** Personas can become carriers of these memes, which then influence their behavior via the bias step.

### Current Status and Next Steps

The Windows XP‑style frontend and a basic multi‑user chat are built (see the code on [GitHub](https://github.com/TimWillebrands/window-into-proompting)). The next big step is Milestone 1: bring the first layered persona, "Denise," to life.

This is a big project, but it is a fun one at the edge of psychology, culture, and systems engineering. It aims to be more than a clever tool. It's an attempt to simulate a persistent, learning identity.

