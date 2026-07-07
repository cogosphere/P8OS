# Contributing to P8OS

Thank you for contributing.

P8OS is an open research and engineering project.
Contributions are organized through:

- Discussions
- Issues
- RFCs
- Pull Requests

---


# Development Workflow

```text
Idea
|
v
Discussion
|
v
Research Proposal
|
v
Architecture Decision
|
v
Implementation
|
v
Pull Request
|
v
Release
```

---


# Before Starting

Check:

- Existing Issues
- Discussions
- RFC documents
- Architecture Decision Records

---

# Types of Contributions


## Research

For:

- mathematical models
- papers
- algorithms
- experiments

Use:

Research Discussion template.

## Architecture

For:

- new modules
- interfaces
- system changes

Create ADR first.

## Code

Requirements:

- formatted
- tested
- documented
- reviewed

---

# Coding Standards


## Rust

Required:

```text
cargo fmt
cargo clippy
cargo test
```

## Documentation

Public modules require:

- API documentation
- examples
- architecture notes

---

# Pull Requests


Every PR should contain:

## Description

What changed?

## Motivation

Why is this needed?

## Testing

How was it verified?

## Related Issues

Links.

---

# Review Rules


Changes affecting:

- Core architecture
- Memory model
- Runtime
- AI engine

require architectural review.

---

# Commit Messages

Use:

```text
type(scope): description
```

Examples:

```text
feat(memory): add versioned storage
fix(runtime): repair scheduler race
docs(rfc): update architecture
```

---

# License

By contributing you agree that your contribution is licensed under the project license.