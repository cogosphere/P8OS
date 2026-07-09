# `docs/Architecture/Repository-Structure.md`


# Repository Structure

**Project:** CoGoSphere / P8OS

**Document:** Repository Structure

**Version:** 1.0

**Status:** Draft

---

# 1. Purpose

This document defines the canonical repository layout for the P8OS platform.

The repository is designed to support:

- Modular development
- Multi-language components
- Documentation as Code
- Infrastructure as Code
- Continuous Delivery
- Independent module evolution
- Long-term maintainability

Every artifact in the repository must have a clearly defined ownership and responsibility.

---

# 2. Repository Overview

```
cogosphere/

├── .github/
├── docs/
├── proto/
├── website/
├── portal/
├── runtime/
├── sdk/
├── services/
├── tools/
├── deployment/
├── infrastructure/
├── examples/
├── scripts/
├── assets/
├── tests/
├── benchmarks/
├── research/
├── third_party/
├── LICENSE
├── README.md
└── ROADMAP.md
```

---

# 3. Root Directories

## .github/

Repository automation.

Contains:

- GitHub Actions
- Issue Templates
- Pull Request Templates
- CODEOWNERS
- Dependabot
- Security Policy
- Release Workflows

---

## docs/

Project documentation.

```
docs/

Architecture/
RFC/
ADR/
Research/
Guides/
API/
SDK/
Operations/
Security/
Roadmaps/
Images/
```

Documentation is the primary source of truth.

---

## proto/

Protocol Buffer contracts.

```
proto/

common/
gateway/
memory/
knowledge/
reasoning/
runtime/
deployment/
monitoring/
```

Rules:

- One domain per directory
- Backward compatibility required
- Versioned contracts
- No business logic

---

## website/

Astro documentation website.

Responsibilities:

- Landing Page
- Documentation
- Blog
- API Reference
- Tutorials

Static only.

---

## portal/

Interactive web application.

Technology:

- Next.js
- React
- TypeScript

Responsibilities:

- Authentication
- AI Workspace
- Chat
- Voice
- Video
- Projects
- User Dashboard

---

## runtime/

P8OS runtime.

Contains:

Gateway

Scheduler

Execution Engine

Workflow Engine

Plugin Loader

Runtime State

No UI.

---

## sdk/

Official SDKs.

```text

sdk/

rust/

python/

typescript/

csharp/

go/

```

Each SDK is versioned independently.

---

## services/

Independent backend services.

Examples:

Memory Service

Knowledge Service

Planner Service

Reasoning Service

Embedding Service

Monitoring Service

Deployment Service

Every service communicates via gRPC.

---

## tools/

Built-in tool adapters.

Examples:

Filesystem

Git

Docker

Office

Cloud

Browser

Shell

Email

Calendar

Each tool is isolated.

---

## deployment/

Deployment configurations.

Contains:

Docker

Docker Compose

Helm

Kubernetes

Cloudflare

Vercel

Terraform

Ansible

---

## infrastructure/

Infrastructure as Code.

Includes:

Cloudflare

Networking

Secrets

DNS

Certificates

Storage

Policies

Monitoring

---

## examples/

Reference implementations.

Contains:

Sample clients

Sample services

SDK examples

Tutorials

Quickstarts

---

## scripts/

Maintenance scripts.

Examples:

Build

Release

Migration

Benchmark

Code Generation

Validation

Automation

---

## assets/

Shared resources.

Contains:

Images

Icons

Logos

Fonts

Diagrams

Videos

---

## tests/

Cross-module tests.

```text

tests/

integration/

performance/

security/

system/

acceptance/

```

---

## benchmarks/

Performance measurements.

Includes:

Memory

Reasoning

Runtime

Storage

Inference

Networking

---

## research/

Research material.

Contains:

Papers

Experiments

Prototypes

Notes

White Papers

Never included in production builds.

---

## third_party/

External dependencies.

Examples:

Embedded libraries

Licenses

Patched components

Vendor documentation

---

# 4. Rust Workspace

```text

runtime/

Cargo.toml

crates/

gateway/

scheduler/

memory/

knowledge/

reasoning/

runtime/

planner/

policy/

telemetry/

tool-engine/

plugin-api/

common/

```

Each crate owns a single responsibility.

---

# 5. Documentation Standards

Every module contains:

```text

README.md

CHANGELOG.md

LICENSE

examples/

tests/

```

Optional:

DESIGN.md

SECURITY.md

ROADMAP.md

---

# 6. Naming Conventions

Directories:

lowercase

hyphen-separated

Examples:

tool-engine

knowledge-service

runtime-core

Files:

PascalCase.md for architecture documents

snake_case.rs for Rust

kebab-case.proto

No abbreviations unless universally accepted.

---

# 7. Module Independence

Every module must satisfy:

Single responsibility

Independent testing

Independent versioning

Independent documentation

Stable public API

Minimal dependencies

---

# 8. Dependency Rules

Allowed:

SDK → proto

Services → proto

Runtime → services

Website → generated documentation

Portal → SDK

Forbidden:

Website → Runtime

Portal → Database

Service → UI

SDK → Runtime internals

Circular dependencies

---

# 9. Generated Content

Generated files must never be edited manually.

Examples:

Rust gRPC bindings

TypeScript SDK

API documentation

OpenAPI exports

Generated content belongs in dedicated generated/ directories.

---

# 10. Versioning

Semantic Versioning.

Major

Minor

Patch

Proto contracts evolve independently.

SDK releases follow contract versions.

---

# 11. Branch Strategy

main

Stable production.

develop

Integration branch.

feature/*

New features.

release/*

Release preparation.

hotfix/*

Critical fixes.

---

# 12. CI/CD Ownership

GitHub Actions perform:

Formatting

Linting

Testing

Documentation validation

Link validation

Proto generation

Build

Packaging

Deployment

Production deployment requires human approval.

---

# 13. Documentation Ownership

Every directory must include a README describing:

Purpose

Responsibilities

Dependencies

Public interfaces

Owner

Status

Documentation is mandatory.

---

# 14. Repository Principles

The repository follows these principles:

Documentation as Code

Infrastructure as Code

Configuration as Code

Everything Versioned

Everything Tested

Everything Reproducible

Everything Documented

---

# 15. Long-Term Evolution

The repository is designed to support:

Thousands of documents

Hundreds of services

Multiple programming languages

Distributed runtimes

AI-generated code

Human-reviewed releases

Autonomous maintenance

without requiring structural reorganization.

The repository structure is considered a stable architectural contract for the entire P8OS ecosystem.