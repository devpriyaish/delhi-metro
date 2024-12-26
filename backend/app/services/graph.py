import heapq
from typing import Dict, List, Optional

class Edge:
    """Represents a directed edge between two nodes with a certain cost."""

    def __init__(self, from_node: str, to_node: str, cost: float):
        self.from_node = from_node
        self.to_node = to_node
        self.cost = cost


class Node:
    """Represents a node with an ID and value, used in the priority queue."""

    def __init__(self, node_id: str, value: float):
        self.id = node_id
        self.value = value

    def __lt__(self, other: "Node") -> bool:
        """Define comparison for the priority queue."""
        return self.value < other.value


class Dijkstra:
    """Dijkstra's algorithm to find the shortest path in a graph."""

    def __init__(self):
        self.graph: Dict[str, List[Edge]] = {}
        self.distances: Dict[str, float] = {}
        self.previous: Dict[str, Optional[str]] = {}

    def add_edge(self, from_node: str, to_node: str, cost: float):
        if from_node not in self.graph:
            self.graph[from_node] = []
        if to_node not in self.graph:
            self.graph[to_node] = []
        self.graph[from_node].append(Edge(from_node, to_node, cost))

    def _reset_state(self):
        self.distances = {node: float('inf') for node in self.graph}
        self.previous = {node: None for node in self.graph}

    def calculate_shortest_path(self, start: str, end: str) -> float:
        self._reset_state()
        self.distances[start] = 0

        visited = set()
        priority_queue = [Node(start, 0)]

        while priority_queue:
            current_node = heapq.heappop(priority_queue)

            if current_node.id in visited:
                continue
            visited.add(current_node.id)

            if current_node.id == end:
                break

            for edge in self.graph.get(current_node.id, []):
                if edge.to_node in visited:
                    continue

                new_distance = self.distances[edge.from_node] + edge.cost
                if new_distance < self.distances[edge.to_node]:
                    self.distances[edge.to_node] = new_distance
                    self.previous[edge.to_node] = edge.from_node
                    heapq.heappush(priority_queue, Node(edge.to_node, new_distance))

        return self.distances[end]

    def reconstruct_path(self, start: str, end: str) -> List[str]:
        distance = self.calculate_shortest_path(start, end)
        if distance == float('inf'):
            return []

        path = []
        current = end
        while current is not None:
            path.append(current)
            current = self.previous[current]

        return path[::-1]
