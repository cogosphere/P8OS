# Security Policy

## Supported Versions

Security updates are provided for:

| Version | Supported |
|---------|-----------|
| main branch | ✅ |
| latest release | ✅ |
| old releases | ❌ |

---

# Reporting a Vulnerability

Do not create public GitHub Issues for security vulnerabilities.

Report privately through:

GitHub Security Advisories:

https://github.com/OWNER/REPOSITORY/security/advisories/new

---

# Required Information

Please include:

- Description of vulnerability
- Affected component
- Steps to reproduce
- Potential impact
- Suggested mitigation

---

# Security Scope

Security reviews include:

## Runtime

- Execution engine
- Plugin system
- IPC layer
- Sandbox boundaries


## AI Engine

- Model loading
- GGUF processing
- Adapter execution
- Prompt injection risks


## Storage

- Memory database
- Versioned storage
- Serialization


## Network

- API endpoints
- External tools
- Authentication


---

# Response Process

The project team will:

1. Confirm reception.
2. Investigate the issue.
3. Prepare mitigation.
4. Publish security advisory if required.

---

# Responsible Disclosure

Researchers are encouraged to report issues responsibly.

We appreciate security researchers helping improve P8OS.