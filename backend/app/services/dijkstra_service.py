import json
import os
from app.services.graph import Dijkstra

class DijkstraService:
    def __init__(self):
        self.dijkstra = Dijkstra()
        self.load_edges_from_file()

    def add_edges(self, edges):
        for edge in edges:
            self.dijkstra.add_edge(edge['from_node'], edge['to_node'], edge['cost'])

    def load_edges_from_file(self):
        edges_file_path = os.path.join('data', 'edges.json')
        
        with open(edges_file_path, 'r') as file:
            edges = json.load(file)
            self.add_edges(edges)

    def get_shortest_path(self, start: str, end: str):
        distance = self.dijkstra.calculate_shortest_path(start, end)
        path = self.dijkstra.reconstruct_path(start, end)
        return distance, path
