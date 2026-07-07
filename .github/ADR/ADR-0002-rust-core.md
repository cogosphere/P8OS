# ADR-0002: Rust as Core Implementation Language


## Status

Accepted


## Context

P8OS requires:

- memory safety
- high performance
- native execution
- plugin support


## Decision

Rust is the primary systems language.


Used for:

- Runtime
- SDK
- Storage
- AI pipeline
- Execution kernel


## Alternatives


C++

Rejected:

Memory safety risks.


Python

Rejected:

Insufficient runtime performance.


## Consequences


Positive:

- Safe concurrency
- Modern tooling
- Cross-platform support


Negative:

- Higher learning curve