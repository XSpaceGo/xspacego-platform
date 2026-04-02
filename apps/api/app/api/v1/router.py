from fastapi import APIRouter

from app.api.v1.endpoints.health import router as health_router
from app.api.v1.endpoints.pipeline import router as pipeline_router

router = APIRouter()
router.include_router(health_router, prefix="/health", tags=["health"])
router.include_router(pipeline_router, prefix="/pipeline", tags=["pipeline"])
