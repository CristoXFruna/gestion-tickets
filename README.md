Mi Proyecto de Gestión de Tickets
Este proyecto es un sistema para registrar y ver solicitudes de soporte técnico, desarrollado para la evaluación de la Unidad II de Programación Web.

Estructura de carpetas por capas
El código se organizó en capas independientes para separar las responsabilidades:

Routes (src/routes/): Define las rutas o URLs de la API, como /api/tickets.

Controllers (src/controllers/): Recibe las peticiones del usuario, valida que los campos obligatorios no estén vacíos y envía las respuestas con sus códigos HTTP correspondientes.

Services (src/services/): Contiene la lógica de negocio, maneja la lectura y escritura del archivo, y genera los IDs autoincrementables.

Data (src/data/): Contiene el archivo tickets.json que funciona como base de datos local para mantener guardada la información.

Seguridad aplicada
Para proteger el endpoint de creación de tickets (POST), se implementó un control de acceso directo en el controlador:

Se definió un token estático: mi_api_key_secreta_123.

Si una petición no incluye este token en la cabecera Authorization o si es incorrecto, el servidor responde con un error 401 No autorizado.

La página web (index.html) envía automáticamente este token en su función fetch para permitir el registro de datos.

Importancia de HTTPS
HTTPS es la versión segura del protocolo de transferencia de hipertexto. Utiliza un cifrado basado en SSL/TLS para proteger la comunicación entre el navegador del cliente y el servidor.

Se utiliza principalmente por las siguientes razones:

Cifrado de datos: Asegura que la información privada, como contraseñas, datos bancarios o tokens de autenticación, viaje encriptada. Si alguien intercepta la comunicación, solo verá datos ilegibles.

Integridad: Evita que intermediarios en la red puedan modificar el contenido de las solicitudes o respuestas durante el trayecto.

Autenticidad: Garantiza al usuario que se está conectando al servidor real del sitio y no a una suplantación fraudulenta.