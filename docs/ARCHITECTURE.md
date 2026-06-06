# Arquitectura del Proyecto - RIMAC Frontend Challenge

Este proyecto ha sido estructurado siguiendo principios de **Clean Architecture** adaptados a React, asegurando una separación clara de responsabilidades, alta cohesión, bajo acoplamiento y un código altamente escalable y testeable.

## 📁 Estructura de Directorios

El código fuente se organiza dentro de la carpeta `src` bajo la siguiente estructura modular:

```text
src/
├── api/                  # Capa de Red (Servicios de Fetching externo)
│   ├── client.ts         # Configuración base para peticiones HTTP
│   └── rimacApi.ts       # Consumo específico de endpoints (User y Plans)
├── components/           # UI Atómica y Reutilizable (Presentacionales/Puros)
│   ├── common/           # Componentes globales (Buttons, Inputs, Spinners)
│   ├── layout/           # Estructuras de página (Header, Footer, Container)
│   └── ui/               # Componentes visuales específicos (PlanCard, UserForm)
├── context/              # Gestión de Estado Global de la Aplicación
│   └── AppContext.tsx    # Proveedor de estado compartido (Usuario autenticado, etc.)
├── hooks/                # Hooks Personalizados (Separación de Lógica de Negocio y UI)
│   ├── useFetchPlans.ts  # Lógica para obtener y filtrar planes
│   └── useAuth.ts        # Lógica para el manejo del login del usuario
├── models/               # Modelos de Datos y Tipados Estrictos (TypeScript)
│   ├── User.ts           # Interfaces y tipos para la entidad de Usuario
│   └── Plan.ts           # Interfaces y tipos para la entidad de Planes
├── views/                # Capa de Presentación de Alto Nivel (Pantallas/Páginas)
│   ├── Login/            # Vista de ingreso de datos
│   └── Dashboard/        # Vista de selección de planes de cobertura
├── index.css             # Estilos globales y configuración de Tailwind CSS
├── main.tsx              # Punto de entrada de la aplicación
└── routes.tsx            # Configuración de enrutamiento (si aplica)