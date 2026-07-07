# Domain Architecture


## Main Domain

`cogosphere.org`

Purpose:

Project landing page.


---

# Subdomains


## Documentation

`docs.cogosphere.org`


Provider:

Cloudflare Pages


Content:

- Architecture
- RFC
- Research
- Guides


---

## Application

`app.cogosphere.org`

Provider:

Vercel


Content:

- Web UI
- Avatar interface


---

## API

`api.cogosphere.org`

Provider:

Cloudflare Workers


Purpose:

API Gateway


---

## Storage

`storage.cogosphere.org`

Provider:

Cloudflare R2


Purpose:

Artifacts:

- Models
- Releases
- Datasets


---

## Development

`dev.cogosphere.org`

Purpose:

Experimental builds.


---

# DNS Layout

```text
cogosphere.org
|
+-- docs
|
+-- app
|
+-- api
|
+-- storage
|
+-- dev
```

---

# Security Model


All traffic:

```text
Client
|
HTTPS
|
Cloudflare Edge
|
Service
```

---

# Future Domains

Possible:

`research.cogosphere.org`

`models.cogosphere.org`

`community.cogosphere.org`