# Cloudflare Monitoring

## Goals

Detect failures before users notice them.

---

# Health Endpoints

```
/health
/status
/version
```

---

# Metrics

Workers:

- requests
- errors
- latency
- CPU time

Pages:

- deployments
- build duration
- failures

R2:

- storage usage
- object count
- downloads

DNS:

- propagation
- failures

---

# Alerts

Critical:

- Worker unavailable
- DNS unavailable
- SSL expired

Warning:

- deployment failed
- high latency
- storage threshold

---

# Dashboards

Recommended:

Cloudflare Analytics

GitHub Actions

Future:

Prometheus

Grafana

OpenTelemetry

---

# Monitoring Frequency

Health:

Every minute

Deployments:

Every push

Security:

Daily

Backups:

Weekly