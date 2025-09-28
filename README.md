# React + TypeScript + Vite + Zustand + TailwindCSS + ReactRouterDom

## Características del proyecto

Este proyecto incluye implementaciones de ejemplo con Zustand para demostrar diferentes patrones de manejo de estado, siguiendo el curso Fernando Herrera. 

### 🐻 Bears Store (`/stores/bears/`)
- **Contadores simples**: Manejo de estado básico con osos negros, polares y pandas
- **Arrays en el estado**: Lista dinámica de osos con propiedades (id, name, weight)
- **Propiedades computadas**: Cálculo automático del total de osos usando `get()`
- **Componentes modulares**: Tarjetas individuales para cada tipo de oso

### 👤 Person Store (`/stores/person/`)
- **Persistencia de estado**: Uso de middleware `persist` para guardar en storage
- **Custom Storage**: Implementación personalizada usando `sessionStorage` y Firebase
- **StateCreator**: Patrón para mejor organización y tipado del store
- **DevTools**: Integración con Redux DevTools Extension
- **Propiedades computadas**: Generación automática del nombre completo

### 📋 Tasks Store (`/stores/task/`)
- **Objetos complejos**: Manejo de estado con `Record<string, Task>`
- **Drag & Drop**: Sistema completo de arrastrar y soltar tareas
- **Estados dinámicos**: Tareas con status ('open', 'in-progress', 'done')
- **Filtrado por estado**: Función `getTaskByStatus` para organizar tareas
- **Immer integration**: Uso de Immer para mutaciones inmutables

## Instalar

1. Clonar proyecto
2. Instalar dependencias ```npm install```
3. Correr en desarrollo ```npm run dev```

## Dependencias agregadas

```json
{
  "classnames": "^2.3.2",
  "sweetalert2": "^11.7.32",
  "immer": "^10.0.3",
  "uuid": "^9.0.1"
}
```

## Estructura completa del proyecto

```
src/
├── components/
│   ├── Bears/              # Componentes modulares de osos
│   │   ├── BlackBearCard.tsx
│   │   ├── PolarBearCard.tsx
│   │   ├── PandaBearCard.tsx
│   │   ├── BearsDisplayCard.tsx
│   │   └── index.ts
│   ├── jira/               # Sistema de gestión de tareas
│   │   ├── JiraTasks.tsx   # Componente principal de columnas
│   │   ├── ItemTask.tsx    # Componente individual de tarea
│   │   └── sweetalert-custom.css  # Estilos personalizados para SweetAlert2
│   └── shared/             # Componentes compartidos
│       ├── cards/
│       └── sidemenu/
├── hooks/                  # Custom hooks para lógica reutilizable
│   ├── useJiraTasks.ts    # Hook para lógica de drag & drop y SweetAlert2
│   └── index.ts
├── stores/                 # Gestión de estado con Zustand
│   ├── bears/             # Estado básico + arrays + computed properties
│   │   └── bears.ts
│   ├── person/            # Persistencia + custom storage + devtools
│   │   └── person.ts
│   ├── task/              # Objetos complejos + drag & drop + immer
│   │   └── task.ts
│   └── index.ts
├── pages/
│   ├── 01-basic/          # Demostración de contadores básicos
│   │   ├── BearPage.tsx
│   │   └── PersonPage.tsx
│   ├── 02-objects/        # Demostración de gestión de tareas
│   │   └── JiraPage.tsx
│   ├── 03-slices/         # Patrones avanzados (próximamente)
│   └── ...
└── ...
```

## Patrones implementados

### 🔄 **Patrones de Estado**
- ✅ **Estado básico**: Contadores simples con acciones
- ✅ **Arrays en estado**: Manejo de listas dinámicas
- ✅ **Objetos complejos**: Records y estructuras anidadas
- ✅ **Propiedades computadas**: Valores derivados con `get()`

### 🎨 **Patrones UI**
- ✅ **Componentes modulares**: Separación en componentes reutilizables
- ✅ **Custom hooks**: Lógica extraída y reutilizable
- ✅ **Drag & Drop**: Sistema completo de arrastrar y soltar
- ✅ **Estado vacío**: Diseños para cuando no hay datos
- ✅ **Feedback visual**: Animaciones y transiciones

### 🔧 **Patrones Técnicos**
- ✅ **TypeScript**: Tipado fuerte en toda la aplicación
- ✅ **StateCreator**: Patrón para stores complejos
- ✅ **Middleware**: persist, devtools, immer
- ✅ **Custom Storage**: Implementaciones personalizadas
- ✅ **Validaciones**: Con SweetAlert2 y feedback visual

### 📱 **Funcionalidades**
- ✅ **CRUD completo**: Crear, leer, actualizar tareas
- ✅ **Persistencia**: Estado guardado entre sesiones
- ✅ **Drag & Drop**: Cambiar estado arrastrando
- ✅ **Validaciones**: Formularios con validación en tiempo real
- ✅ **Notificaciones**: Feedback con SweetAlert2 estilizado
- ✅ **Responsive**: Diseño adaptable a diferentes pantallas

## Tecnologías y librerías utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **Zustand** - Gestión de estado
- **Vite** - Build tool y dev server
- **TailwindCSS** - Estilos utilitarios
- **React Router Dom** - Navegación
- **SweetAlert2** - Modales y notificaciones
- **ClassNames** - Gestión condicional de clases CSS
- **Immer** - Mutaciones inmutables
- **UUID** - Generación de IDs únicos

