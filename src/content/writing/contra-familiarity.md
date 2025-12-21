---
title: 'Contra Familiarity'
pubDate: 2025-11-12
summary: 'A thought on why familiarity of code is less important than simplicity'
author: 'Tim Willebrands'
image:
    url: ''
    alt: 'Image of a person using Auxin on a laptop in a greenhouse.'
tags: ["Architecture", "Complexity", "Standardization"]
---

## Familiarity
Today I debated with colleagues on the topic of 'standardized ways of developing code', meaning something like _the structure and technologies used in projects should be consistent across projects in the company_. This way (so the theory goes) if a developer understands one of our codebases they will be able to understand the next without having to get into the weeds of how that codebase does particular things. 

Now we're **not** talking using Rust&Svelte for one codebase and Python+Django for another or something like that. No, we have **strongly preferred** languages and frameworks per domain, in our services and UI domains these are C# and React and it's very sensible to have defaults like this.

No, this argument was mainly about having a framework of common tools, libraries and practices that are applied uniformly across all codebases. Based on a particular microservice architecture (and the supporting technologies) for platform-like systems which I developed. 

> You can read more about that system in:
> [Platform of Independent Monoliths](/writing/independent-monoliths-platform)
> [GraphQL Gateway](/writing/graphql-gateway-case-study)

## Framework and Architecture
I personally think the core of this argument is valid and a strong. However, I have strong reservations about including too much in a standard. It is easy to look at a successful system supported by a strong architecture and then _standardize_ the framework that evolved to support that architecture because _"it works right?"_.
However, such a framework arose to support a particular set of problems a software system set out to solve. Even if it's principles are generalized, _rücksichtslos_ applying these to other systems de-facto means: applying not just a framework but also it's original architecture.

So where we started out with a desire to standardize software components, we ended up standardizing an architecture along with it.

Now even this is not something inherently bad. The framework I mentioned earlier is a configurable platform unifying multiple backends under a single graphql api and multiple separately hosted frontends in a single portal.
If you continuously run into usecases where you have a multitude of domains that you want to isolate and perhaps let other teams develop, or you want to be able to deploy these separately whilst presenting everything as a single system to the outer world which need to support multi-tenancy. Yes, by all means, if the shoe fits, use it.

But should you standardize this as a default to build most of your systems? This was the discussion I had with my peers. The idea was that some degree of unnecessary complexity, which comes from applying a generalized architecture, is not that big of a deal because of the familiarity for us devs and reuse of components justifies it.
So even if your use-case only covers a single domain still use our multi-domain architecture to provide _familiarity_ to your team.

I think this choice is dead wrong. It's not that the architecture is wrong, but that it's not the right choice for all use-cases. Standardizing an architecture will lead to unnecessary complexity. It's better to start with a simple architecture and add complexity only when it's needed. 

> _"A complex system that works is invariably found to have evolved from a simple system that worked. The inverse proposition also appears to be true: A complex system designed from scratch never works and cannot be made to work. You have to start over, beginning with a working simple system."_
> - John Gall

Nothing changes when you pull in the complex system using a package manager instead of redesigning it. Start simple and keep cognitive load low; build modular libraries, and only pull them in if the system requires them.
