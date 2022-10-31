# PruebaTecnica

## Intalación

### Rest server

```
npm install -g json-server
json-server --watch db.json

```

### Graphql server

```
npm install -g json-graphql-server
json-graphql-server db-graph.js --p 3002
```

### Iniciar

```
npm install
npm run start
```

## Prueba

1. Completar la query en UsersService
2. Unificar los dos llamados en uno solo en DetailComponent
3. En DetailComponent pintar los nodos hojas (los accesos para ese usuario) (usar el diseño que prefieras)
4. Realizar el test del metodo getPhoto de MenusService con mocks de datos
5. establecer 2 mejoras en el codigo (performance)
