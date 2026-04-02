from pydantic import BaseModel


class PipelineStage(BaseModel):
    step: int
    title: str
    description: str


class PipelineOverviewResponse(BaseModel):
    algorithm_name: str
    mission_focus: str
    output_type: str
    stages: list[PipelineStage]
