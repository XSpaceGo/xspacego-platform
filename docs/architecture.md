# XSpaceGo Architecture

## Naming System

- Product umbrella: `XSpaceGo Platform`
- Main public app: `XSpaceGo Atlas`
- Backend engine: `XSpaceGo Core`
- API layer: `XSpaceGo API`
- Experiment space: `XSpaceGo Lab`

This naming gives you a company-grade structure where each area can grow independently without rebranding later.

## System Layout

### `apps/web`

Purpose:

- Public landing site
- Research storytelling
- Future dashboard shell
- Future authenticated mission analytics interface

Suggested expansion:

- `app/(marketing)` for public pages
- `app/(platform)` for logged-in product screens
- `components/maps` for geospatial UI
- `components/charts` for mission analytics
- `lib/api` for typed backend clients

### `apps/api`

Purpose:

- Health and readiness endpoints
- Pipeline orchestration
- XSpaceGo algorithm contracts
- Future ingestion and experiment services

Suggested expansion:

- `services/ingestion_service.py`
- `services/feature_extraction_service.py`
- `services/validation_service.py`
- `services/inference_service.py`
- `workers/` for async jobs

## Deployment Model

### Frontend

- Best host: Vercel
- Reason: excellent fit for Next.js, previews, and global edge delivery

### Backend

- Best host: Render or Railway
- Reason: stable Python runtime, Docker support, long-running API processes

### Why split hosting?

This is the most practical "big company" starting point:

- frontend gets excellent DX and preview deployments
- backend keeps full control over Python dependencies and compute
- later you can move to GCP, AWS, or Kubernetes without changing repo structure

## Recommended Growth Path

1. Start with this monorepo and validate UX + API contracts.
2. Add real dataset connectors and file storage.
3. Add experiment runs, audit logs, and job queueing.
4. Add observability, CI, and role-based access.
5. Add GPU or batch infrastructure for heavy algorithm execution.
