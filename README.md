# Explicación del código:
1. `Clase Graph:` Representa el grafo y permite agregar nodos y aristas. La función dijkstra implementa el algoritmo de Dijkstra.
2. `Clase MinPriorityQueue:` Se utiliza para manejar la cola de prioridad que mantiene los nodos a visitar, ordenados por la distancia más corta encontrada.
3. `Método dijkstra:` Inicializa las distancias, luego explora los nodos vecinos y actualiza las distancias hasta encontrar el camino más corto desde el nodo de inicio a todos los demás nodos.
4. `Ejemplo de uso:` Se crea un grafo simple, se agregan nodos y aristas, y luego se llama a dijkstra para encontrar las distancias más cortas desde el nodo 'A'.
