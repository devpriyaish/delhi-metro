from app.services.graph import Dijkstra

class DijkstraService:
    def __init__(self):
        self.dijkstra = Dijkstra()

    def add_edges(self, edges):
        for edge in edges:
            self.dijkstra.add_edge(edge.from_node, edge.to_node, edge.cost)

    def get_shortest_path(self, start: str, end: str):
        distance = self.dijkstra.calculate_shortest_path(start, end)
        path = self.dijkstra.reconstruct_path(start, end)
        return distance, path
