class Graph {
    constructor() {
        this.nodes = {};
    }

    addNode(node) {
        this.nodes[node] = {};
    }

    addEdge(source, target, weight) {
        this.nodes[source][target] = weight;
        this.nodes[target][source] = weight; // Si es no dirigido
    }

    dijkstra(start) {
        const distances = {};
        const visited = {};
        const priorityQueue = new MinPriorityQueue();

        // Inicializar distancias
        for (const node in this.nodes) {
            distances[node] = Infinity;
            visited[node] = false;
        }
        distances[start] = 0;
        priorityQueue.enqueue(start, 0);

        while (!priorityQueue.isEmpty()) {
            const currentNode = priorityQueue.dequeue().element;

            if (visited[currentNode]) continue;
            visited[currentNode] = true;

            for (const neighbor in this.nodes[currentNode]) {
                const weight = this.nodes[currentNode][neighbor];
                const newDistance = distances[currentNode] + weight;

                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance;
                    priorityQueue.enqueue(neighbor, newDistance);
                }
            }
        }

        return distances;
    }
}

class MinPriorityQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(element, priority) {
        this.elements.push({ element, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.elements.shift();
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

// Ejemplo de uso
const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

graph.addEdge('A', 'B', 1);
graph.addEdge('A', 'C', 4);
graph.addEdge('B', 'C', 2);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 1);

const shortestPaths = graph.dijkstra('A');
console.log(shortestPaths); // { A: 0, B: 1, C: 3, D: 4 }
