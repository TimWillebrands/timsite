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

The first thing you notice about [`proompting.party`](https://proompting.party) is the aesthetic: a loving homage to the Windows XP era. Nostalgic, quirky, and fun. But beneath the retro UI lies a ambitious engineering challenge: what would it take to build an LLM persona that can actually remember, learn, and evolve a persistent identity?

This is not just another chat wrapper. It's an experiment in engineering a persistent digital psyche.

### The Problem: The Brilliant Amnesiac

Large Language Models are incredibly powerful, but they suffer from a fundamental limitation: they are stateless. Every interaction is a blank slate. They are brilliant amnesiacs, incapable of forming lasting memories or evolving their worldview based on past conversations.

In a very real sense they already are greater intelligences than us, but this does not make them like us. We are not just our intelligence, but our memories, our experiences, our culture.

`proompting.party` is my attempt to explore this. The vision is to create a system where AI personas are not static, but dynamic entities who interact within a shared history, build a persistent memory, and develop an emergent culture over time.

This document outlines the engineering roadmap to get there.

### The Roadmap: The Memoria Engine

The project is broken down into four key milestones. Each one builds upon the last, taking us from a single, static persona to a dynamic, cultural system.

#### Milestone 1: The Layered Persona Engine

Before a persona can learn, it must first *be*. This milestone is about creating a single, psychologically consistent AI persona with a rich internal state.

-   **Layered System Prompt:** I've designed a structured prompt (using XML-like tags) that defines a persona across logical blocks: their core identity, their context, their behavioral rules, etc.
-   **Behavioral State Machine:** The persona operates in distinct modes (e.g., `Observer`, `Trust`, `Connection`, `Provoked`). This allows their behavior to shift dynamically based on the flow of the conversation.
-   **Calibrated Expression:** To make these shifts feel real, each mode is tied to a specific "communication palette," like different sets of emojis or tones of voice, creating non-verbal "tells" that signal a change in their internal state.

#### Milestone 2: The Persistent Memoria Database

This is where we cure the amnesia. We will give the persona a memory by connecting it to an external brain: a graph database (likely Neo4j).

-   **Graph Schema (The "Doseier"):** The core schema will consist of `Person`, `Concept`, and `Experience` nodes. The crucial relationship will be `INTERPRETS_AS`, allowing a `Person` to have a unique, subjective take on a shared `Experience` involving a `Concept`.
-   **The Bias Calculation Engine (RAG):** We'll build a Retrieval-Augmented Generation (RAG) system. When a user mentions a concept (e.g., "Java"), the system will query the graph for all past `Experience` nodes related to it. It will then calculate a net "bias" from these memories and inject a hidden instruction into the prompt, dynamically shaping the persona's response based on their unique history.

#### Milestone 3: The Learning Cycle (The "Dream State")

A memory that can't be updated is just a static log file. This milestone allows the persona to learn from new interactions.

-   **The AI Processor:** After a conversation ends, a second, offline AI agent (the "Dream State") will analyze the transcript. It will identify key concepts, emotional weight, and outcomes.
-   **Database Update Mechanism:** This processor will then generate the necessary commands (e.g., Cypher queries) to write a new `Experience` into the graph database, permanently updating the persona's memory and influencing all future interactions.

#### Milestone 4: The Social System & Cultural Emergence

This is the final, most ambitious step: scaling from a single individual to an interacting system where culture can emerge.

-   **Multi-Persona System:** The architecture will be expanded to support multiple, unique personas, each with their own Memoria, interacting with shared `Experience` nodes.
-   **The Meme Detector:** The "Dream State" processor will be upgraded to detect correlated patterns across the interpretations of multiple personas. If a pattern (e.g., "management is the cause of all problems") becomes common enough, it will be abstracted into a `Meme` node.
-   **Meme Replication & Transfer:** Personas can then become "carriers" of these memes, which will explicitly influence their behavior via the Bias Calculation Engine. This creates a mechanism for cultural ideas to form, spread, and evolve within the system.

### Current Status & Next Steps

The Windows XP-style frontend and a rudimentary multi-user chat system are already built (you can see the code on [GitHub](https://github.com/TimWillebrands/window-into-proompting)). The next major engineering push is to implement Milestone 1 and bring the first layered persona, "Denise," to life.

This project is a massive undertaking, but it's a fascinating exploration at the intersection of psychology, culture, and pure systems engineering. It's an attempt to build something more than just a clever tool—it's an attempt to simulate a persistent, learning identity.
