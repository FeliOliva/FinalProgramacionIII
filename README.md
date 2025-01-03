# Proyecto de Gestión de Clientes

Este proyecto es una aplicación de gestión de clientes que incluye un backend desarrollado con Node.js y Express utilizando Prisma como ORM, y un frontend desarrollado con React y Ant Design para la interfaz de usuario.

---

## Tecnologías utilizadas

### Backend
- **Node.js**: Entorno de ejecución para el servidor.
- **Express**: Framework para la creación de APIs REST.
- **Prisma**: ORM utilizado para interactuar con una base de datos MySQL local.
- **MySQL**: Base de datos relacional utilizada de forma local.

### Frontend
- **React**: Biblioteca para construir la interfaz de usuario.
- **Ant Design**: Biblioteca de componentes UI para una experiencia de usuario optimizada.
- **Axios**: Cliente HTTP utilizado para la comunicación con el backend.

---

## Configuración del proyecto

### Prerrequisitos

- Node.js (versión 14 o superior)
- MySQL (instalado y corriendo localmente)
- npm (gestor de paquetes de Node.js)

### Variables de entorno

#### Backend
Crea un archivo `.env` en la raíz del backend con el siguiente contenido:

```
DATABASE_URL="mysql://usuario:contraseña@localhost:3306/nombre_base_datos"
```

#### Frontend
Crea un archivo `.env` en la raíz del frontend con el siguiente contenido:

```
REACT_APP_API_URL=http://localhost:3000
```

---

## Instalación y ejecución

### Backend

1. Ve al directorio del backend:
   ```bash
   cd backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Genera los clientes de Prisma:
   ```bash
   npx prisma generate
   ```
4. Ejecuta las migraciones para configurar la base de datos:
   ```bash
   npx prisma migrate dev
   ```
5. Inicia el servidor:
   ```bash
   npm start
   ```

El backend estará disponible en `http://localhost:3000`.

### Frontend

1. Ve al directorio del frontend:
   ```bash
   cd frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

El frontend estará disponible en `http://localhost:3001`.

---

## Uso de la aplicación

### Endpoints disponibles (Backend)

1. **Obtener clientes paginados:**
   ```http
   GET /clientes?page=1&limit=3
   ```
   Responde con una lista de clientes paginados.

2. **Obtener un cliente por ID:**
   ```http
   GET /clientes/:id
   ```
   Responde con los datos de un cliente específico.

3. **Agregar un cliente:**
   ```http
   POST /clientes
   ```
   Cuerpo esperado:
   ```json
   {
       "nombre": "string",
       "apellido": "string",
       "email": "string",
       "telefono": "string"
   }
   ```

4. **Actualizar un cliente:**
   ```http
   PUT /clientes
   ```
   Cuerpo esperado:
   ```json
   {
       "id": "number",
       "nombre": "string",
       "apellido": "string",
       "email": "string",
       "telefono": "string"
   }
   ```

5. **Eliminar un cliente:**
   ```http
   DELETE /clientes/:id
   ```
   Elimina el cliente con el ID especificado.

6. **Activar un cliente:**
   ```http
   POST /clientes/:id
   ```
   Activa el cliente con el ID especificado.

### Funcionalidades del frontend

- Listado de clientes con paginación.
- Creación, edición, activación y eliminación de clientes.
- Interfaz amigable gracias a Ant Design.

---

## Ejemplo visual

### Tabla de clientes
![Tabla de Clientes](./screenshots/tabla-clientes.png)

### Formulario de cliente
![Formulario de Cliente](./screenshots/formulario-cliente.png)

---

## Notas adicionales

- Asegúrate de que tu base de datos MySQL esté corriendo localmente antes de iniciar el backend.
- Puedes personalizar la URL base del frontend modificando el archivo `.env`.
- Usa herramientas como Postman para probar los endpoints durante el desarrollo.

---

¡Gracias por utilizar este proyecto! Si tienes preguntas o sugerencias, no dudes en compartirlas.

