from fastapi import APIRouter

from app.schemas.pipeline import PipelineOverviewResponse
from app.services.pipeline_service import get_pipeline_overview

router = APIRouter()


@router.get("/overview", response_model=PipelineOverviewResponse)
def pipeline_overview() -> PipelineOverviewResponse:
    return get_pipeline_overview()
