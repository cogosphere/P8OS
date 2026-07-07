# Cloudflare Security

## Security Objectives

- Confidentiality
- Integrity
- Availability

---

# Authentication

GitHub uses:

- API Token
- Account ID

Never use:

- Global API Key

---

# SSL

Configuration:

- Full (Strict)
- Automatic HTTPS
- HSTS enabled

---

# DNS Security

Enabled:

- DNSSEC
- Proxy mode
- HTTPS only

---

# Worker Security

Requirements:

- validate input
- validate headers
- sanitize requests
- reject malformed payloads

---

# API Protection

Use:

- rate limiting
- authentication
- request validation
- CORS policy

---

# GitHub Secrets

Store:

- CLOUDFLARE_API_TOKEN
- CLOUDFLARE_ACCOUNT_ID

Never commit secrets into Git.

---

# Zero Trust Roadmap

Future:

- Cloudflare Access
- Service Tokens
- Device Policies

---

# Security Headers

Enable:

- HSTS
- CSP
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

---

# Incident Handling

If token leaked:

1. revoke token
2. create new token
3. update GitHub secrets
4. verify deployments