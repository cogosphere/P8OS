# Cloudflare Backup Strategy

## Objectives

Protect infrastructure configuration and project assets.

---

# DNS Backup

Export:

- DNS records
- Zone configuration

Frequency:

Weekly

---

# Worker Backup

Store in Git:

```
workers/
```

Every deployment is versioned.

---

# Pages Backup

Documentation source:

GitHub

Generated site:

Cloudflare Pages

No manual backup required.

---

# R2 Backup

Buckets:

- models
- artifacts

Backup schedule:

Weekly

Retention:

12 months

---

# GitHub Backup

Protected by:

- Git history
- Releases
- Tags

Mirror repository recommended.

---

# Recovery Procedure

Recover DNS

↓

Deploy Workers

↓

Deploy Pages

↓

Restore R2

↓

Verify health

---

# Recovery Objectives

RTO:

30 minutes

RPO:

24 hours

---

# Disaster Recovery Testing

Frequency:

Quarterly

Checklist:

- restore DNS
- restore Worker
- restore Pages
- restore R2
- verify API