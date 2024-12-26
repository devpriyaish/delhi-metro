from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

# Define a request model for source and destination
class PathRequest(BaseModel):
    source: str
    destination: str

@router.post("/shortest-path")
def get_shortest_path(request: PathRequest):
    # Calculate the combined length of source and destination
    fare = len(request.source) + len(request.destination)
    
    # Return the calculated length as a response
    return {"fare": fare}
