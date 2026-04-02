from app.schemas.pipeline import PipelineOverviewResponse, PipelineStage


def get_pipeline_overview() -> PipelineOverviewResponse:
    return PipelineOverviewResponse(
        algorithm_name="XSpaceGo Algorithm",
        mission_focus="Lunar subsurface lava tube candidate detection using SAR and terrain validation",
        output_type="Ranked candidate sites with stage-wise validation metadata",
        stages=[
            PipelineStage(
                step=1,
                title="Data Acquisition and Preprocessing",
                description="Prepare SAR imagery, normalize signal quality, and align datasets.",
            ),
            PipelineStage(
                step=2,
                title="SAR Feature Extraction",
                description="Extract radar-derived signatures relevant to subsurface morphology.",
            ),
            PipelineStage(
                step=3,
                title="Skylight Detection",
                description="Identify candidate skylight geometry through image and shape analysis.",
            ),
            PipelineStage(
                step=4,
                title="Terrain Validation Using DEM",
                description="Cross-check local elevation and slope evidence against candidate locations.",
            ),
            PipelineStage(
                step=5,
                title="XSpaceGo Algorithm Output",
                description="Generate confidence scores, ranked outputs, and mission-ready summaries.",
            ),
        ],
    )
