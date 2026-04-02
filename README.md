# XSpaceGo Platform

XSpaceGo Platform is a research-first monorepo for intelligent lunar subsurface lava tube detection using SAR remote sensing workflows, terrain validation, and the future XSpaceGo algorithm pipeline.

This starter is designed to feel like a real product foundation:

- `apps/web` contains the public-facing research UI and future dashboard.
- `apps/api` contains the backend API, algorithm orchestration layer, and pipeline contracts.
- root config supports one-repo management, clean deployment, and Codex-friendly extension.

## Product Direction

Working title:

**XSpaceGo Platform**

Suggested public tagline:

**Intelligent Lunar Subsurface Detection Powered by the XSpaceGo Algorithm**

Suggested sub-products:

- `XSpaceGo Atlas`: mission control style analytics dashboard
- `XSpaceGo Core`: algorithm and model execution layer
- `XSpaceGo Lab`: experimentation and validation workspace
- `XSpaceGo API`: programmatic access for pipelines and clients

## Monorepo Structure

```text
xspacego-platform/
  apps/
    api/
      app/
        api/
        core/
        schemas/
        services/
      Dockerfile
      pyproject.toml
    web/
      app/
      components/
      lib/
      package.json
  docs/
    architecture.md
  .env.example
  .gitignore
  package.json
  pnpm-workspace.yaml
  render.yaml
  turbo.json
```

## Tech Stack

- Frontend: Next.js 15, React 19, TypeScript
- Backend: FastAPI, Pydantic, Uvicorn
- Monorepo: pnpm workspaces + Turborepo
- Frontend hosting: Vercel
- Backend hosting: Render or Railway using Docker

## Local Setup

## 1. Clone and prepare environment

```bash
cp .env.example .env
```

## 2. Frontend

```bash
cd apps/web
pnpm install
pnpm dev
```

Runs on `http://localhost:3000`.

## 3. Backend

```bash
cd apps/api
python -m venv .venv
.venv\Scripts\activate
pip install -e .
uvicorn app.main:app --reload
```

Runs on `http://localhost:8000`.

## Frontend Deployment

Deploy `apps/web` to Vercel.

Recommended Vercel settings:

- Framework preset: `Next.js`
- Root directory: `apps/web`
- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: `.next`

Required frontend env vars:

- `NEXT_PUBLIC_API_BASE_URL`

## Backend Deployment

Backend is prepared for Docker-based deployment.

Recommended Render settings:

- Root directory: `apps/api`
- Environment: `Docker`
- Start command is defined in the Docker image

Required backend env vars:

- `PROJECT_NAME`
- `API_V1_PREFIX`
- `ENVIRONMENT`
- `ALLOWED_ORIGINS`

## Research Workflow Mapping

Your concept slide maps cleanly into the backend service design:

1. Data acquisition and preprocessing
2. SAR feature extraction
3. Skylight detection through geometric analysis
4. Terrain validation using DEM
5. XSpaceGo scoring, ranking, and output generation

These stages are already represented in the API response contract so the backend can grow from placeholder logic to your real algorithm without rewriting the product structure.

## What To Build Next

- Connect real SAR datasets and DEM sources
- Add authentication and project workspaces
- Add experiment tracking for model and threshold versions
- Add map visualization and image overlays
- Add report export for candidate lava tube sites

Detailed architecture notes are in [docs/architecture.md](/d:/VK/Project/xspacego-platform/docs/architecture.md).
