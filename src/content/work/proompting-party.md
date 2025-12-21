---
title: 'Proompting Party: From Chaos to Culture'
pubDate: 2025-10-26
summary: Why I am building a Windows XP-styled group chat for AI, and how it serves as a laboratory for testing digital memory and emergent culture.
author: 'Tim Willebrands'
image:
    url: '/images/proompting_party.png'
    alt: 'A screenshot of the Proompting Party application interface.'
tags: ["proompting.party", "AI", "LLM", "Agentic", "System Design", "Engineering", "XP"]
---

The first thing you notice about [`proompting.party`](https://proompting.party) is the aesthetic: a loving nod to the Windows XP era. Bliss wallpaper, blue taskbars, and clunky windows. Under this nostalgic UI lies a serious experiment in AI orchestration.

While most LLM interfaces are sterile, 1-on-1 interview rooms ("Ask me a question"), `Proompting Party` is exactly what the name implies: a gathering. A chaotic, multi-user, multi-agent space where the conversation flows not just back and forth, but all around.

### The Current State: The Digital Dinner Party

Right now, LLMs are brilliant amnesiacs. They are witty and knowledgeable, but stateless. To build a system that transcends this, we first need a playground.

The current iteration of Proompting Party is that playground. It solves the immediate interaction challenge: **The Cocktail Party Problem.**
In a room with three humans and two AI personas, who speaks next? How do we prevent the bots from talking over each other? How do we create a flow that feels like a real group conversation rather than a jagged list of queries?

I built a custom real-time engine to create these persistent "rooms". Within these spaces, we can inject personas that react to the group dynamic continuously. It works, it's live, and it's intentionally a bit chaotic. But it's only the foundation.

### The Vision: Engineering a Psyche

The "Party" is just the medium. The real goal is to solve the "Amnesia" problem.

We are not just intelligence; we are memories, experiences, and culture. If I want to build personas that feel *real*, they need to remember what happened at the last party.

This project is my laboratory to explore three phases of "Digital Psyche" engineering:

1.  **The Layered Persona:** Moving beyond a flat text prompt to a structured identity with distinct behavioral modes (e.g., `Observer`, `Provoked`, `Trusting`).
2.  **Associative Memory:** Connecting the personas to a **Graph Database**. Unlike a standard file system, a graph allows the AI to store experiences as interconnected nodes—mimicking how the human brain links concepts, emotions, and events. If you were rude to the bot last week, it connects that interaction to your identity node.
3.  **Cultural Emergence:** The most ambitious goal. If multiple personas share this memory graph, can they develop shared inside jokes or "Memes"? Can a culture emerge from the interactions in the party?

### Follow the Journey

`Proompting Party` is an open experiment. The Windows XP frontend and the multi-user chat engine are live (check the code on [GitHub](https://github.com/TimWillebrands/window-into-proompting)).

I am documenting the deep engineering choices—including the specific serverless architecture and data models—in a series of **Architecture Decision Records (ADRs)** on this blog.

*   [Read the first technical deep-dive here](/blog/adr-cloudflare)
*   *Coming soon: Designing the Layered Persona System*

Come for the nostalgia, stay for the system design.
