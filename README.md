# React + TypeScript + Vite + Zustand + TailwindCSS + ReactRouterDom

## Características del proyecto

Este proyecto incluye implementaciones de ejemplo con Zustand para demostrar diferentes patrones de manejo de estado:

### 🐻 Bears Store (`/stores/bears/`)
- **Contadores simples**: Manejo de estado básico con osos negros, polares y pandas
- **Arrays en el estado**: Lista dinámica de osos con propiedades (id, name, weight)
- **Propiedades computadas**: Cálculo automático del total de osos usando `get()`
- **Componentes modulares**: Tarjetas individuales para cada tipo de oso

### 👤 Person Store (`/stores/person/`)
- **Persistencia de estado**: Uso de middleware `persist` para guardar en storage
- **Custom Storage**: Implementación personalizada usando `sessionStorage`
- **StateCreator**: Patrón para mejor organización y tipado del store
- **Propiedades computadas**: Generación automática del nombre completo

## Instalar

1. Clonar proyecto
2. Instalar dependencias ```npm install```
3. Correr en desarrollo ```npm run dev```

## Estructura del proyecto

```
src/
├── components/
│   └── Bears/           # Componentes de tarjetas de osos
├── stores/
│   ├── bears/          # Store de osos (estado básico + arrays)
│   └── person/         # Store de persona (persistencia + custom storage)
├── pages/
│   ├── 01-basic/       # Página de contadores de osos
│   └── ...
└── ...
```

