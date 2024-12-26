from datetime import timedelta
from typing import List
from pydantic import BaseModel

class EdgeInput(BaseModel):
    from_node: str
    to_node: str
    cost: float

class PathRequest(BaseModel):
    source: str
    destination: str

class PathResponse(BaseModel):
    path: List[str]
    fare: float
    time: str
