from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.models import PathRequest, EdgeInput, PathResponse
from app.services.dijkstra_service import DijkstraService

router = APIRouter()
dijkstra_service = DijkstraService()

@router.post("/shortest-path")
def get_shortest_path(request: PathRequest):
    distance, path = dijkstra_service.get_shortest_path(request.source, request.destination)
    
    if distance == float('inf'):
        raise HTTPException(status_code=404, detail="No path found.")
    
    if distance < 2:
        fare = 10
    elif distance < 5:
        fare = 15
    elif distance < 12:
        fare = 20
    elif distance < 21:
        fare = 30
    elif distance < 32:
        fare = 40
    elif distance < 40:
        fare = 50
    else:
        fare = 60    
    time_in_minutes = str(int(distance * 2)) + " minutes"

    return PathResponse(path=path, fare=fare, time=time_in_minutes)
