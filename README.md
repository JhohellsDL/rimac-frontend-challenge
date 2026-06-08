# RIMAC Frontend Challenge

Cotizador de seguros de salud desarrollado con React 19, TypeScript y Tailwind CSS.

## 🛠 Stack técnico

| Tecnología | Versión |
|---|---|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| Tailwind CSS | 4 |
| React Router DOM | 7 |
| clsx | 2 |

---

## 🚀 Levantar el proyecto

### Requisitos previos

- **Node.js** `>= 18`
- **npm** `>= 9` (viene incluido con Node.js)

### 1. Clonar el repositorio

```bash
git clone https://github.com/JhohellsDL/rimac-frontend-challenge.git
cd rimac-frontend-challenge
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el servidor de desarrollo

```bash
npm run dev
```

El proyecto estará disponible en **[http://localhost:5173](http://localhost:5173)**

---

## 📋 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Compila TypeScript y genera el bundle de producción en `/dist` |
| `npm run preview` | Sirve el build de producción localmente |
| `npm run lint` | Ejecuta ESLint sobre todo el proyecto |

---

## 📁 Estructura del proyecto

```
src/
├── api/           # Servicios de llamadas HTTP
├── assets/        # Imágenes, SVGs e íconos
├── components/
│   ├── common/    # Componentes genéricos (Button, etc.)
│   ├── layout/    # Estructura de página (AppHeader, StepBar)
│   └── ui/        # Componentes de interfaz (PlanCard, InsuredOptionCard, etc.)
├── constants/     # Constantes globales
├── context/       # Contextos de React (AuthContext, FlowContext)
├── hooks/         # Custom hooks
├── models/        # Interfaces y tipos TypeScript
├── utils/         # Funciones utilitarias
└── views/
    ├── Login/     # Vista de ingreso de datos
    ├── Plans/     # Vista de selección de plan
    └── Summary/   # Vista de resumen del seguro
```

---

## 🗺 Flujo de la aplicación

```
/ (Login)  →  /planes (Selección de plan)  →  /resumen (Resumen)
```

1. **Login** — El usuario ingresa su documento y fecha de nacimiento
2. **Planes** — Selecciona si cotiza para sí mismo o alguien más, luego elige un plan
3. **Resumen** — Muestra el resumen del seguro seleccionado
