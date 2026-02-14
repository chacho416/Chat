# Sistema de Chat en Tiempo Real utilizando Node.js, Express y Socket.IO

## 1. Introducción

El presente proyecto consiste en el desarrollo de una aplicación web de mensajería en tiempo real utilizando tecnologías del entorno JavaScript.

El objetivo principal es implementar un sistema cliente-servidor que permita la comunicación simultánea entre múltiples usuarios mediante el uso de WebSockets, gestionados a través de la biblioteca Socket.IO.

---

## 2. Objetivos

### 2.1 Objetivo General

Desarrollar una aplicación web que permita la transmisión de mensajes en tiempo real entre múltiples clientes conectados a un servidor.

### 2.2 Objetivos Específicos

* Implementar un servidor HTTP utilizando Express.
* Integrar Socket.IO para la gestión de conexiones en tiempo real.
* Permitir la emisión y retransmisión de mensajes entre clientes.
* Gestionar eventos de conexión y desconexión de usuarios.
* Desplegar la aplicación en un entorno de producción.

---

## 3. Marco Tecnológico

### 3.1 Node.js

Entorno de ejecución para JavaScript del lado del servidor, que permite la construcción de aplicaciones escalables basadas en eventos.

### 3.2 Express

Framework minimalista para Node.js que facilita la creación de servidores web y la gestión de rutas.

### 3.3 Socket.IO

Biblioteca que permite la comunicación bidireccional en tiempo real entre cliente y servidor mediante WebSockets.

---

## 4. Arquitectura del Sistema

El sistema sigue una arquitectura cliente-servidor:

* El servidor se encarga de:

  * Escuchar conexiones entrantes.
  * Recibir mensajes enviados por los clientes.
  * Retransmitir dichos mensajes a todos los clientes conectados.
  * Gestionar la desconexión de usuarios.

* El cliente:

  * Establece conexión con el servidor.
  * Envía mensajes mediante eventos.
  * Recibe mensajes transmitidos por el servidor.

El puerto del servidor se define mediante la variable de entorno `PORT` o el puerto 3000 por defecto, lo cual permite compatibilidad con plataformas de despliegue en la nube.

---

## 5. Funcionamiento del Sistema

1. El servidor se inicializa utilizando Express.
2. Se crea un servidor HTTP.
3. Socket.IO se vincula al servidor HTTP.
4. Cuando un cliente se conecta:

   * Se genera un identificador único de sesión.
   * Se registra la conexión en consola.
5. Cuando un cliente envía un mensaje:

   * El servidor captura el evento `chat message`.
   * El mensaje es retransmitido a todos los clientes mediante `io.emit`.
6. Cuando un cliente se desconecta:

   * Se ejecuta el evento `disconnect`.
   * Se registra la desconexión.

---

## 6. Instalación y Ejecución

### 6.1 Requisitos

* Node.js instalado
* npm (Node Package Manager)

### 6.2 Procedimiento

1. Clonar el repositorio:

   ```bash
   git clone <url-del-repositorio>
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Ejecutar el servidor:

   ```bash
   node index.js
   ```

4. Acceder desde el navegador:

   ```
   http://localhost:3000
   ```

---

## 7. Despliegue

La aplicación puede desplegarse en servicios en la nube como Render.

Configuración recomendada:

Build Command:

```
npm install
```

Start Command:

```
node index.js
```

---

## 8. Resultados

El sistema permite la comunicación instantánea entre múltiples usuarios conectados simultáneamente, demostrando el correcto funcionamiento de la arquitectura basada en eventos y la eficiencia del uso de WebSockets para aplicaciones en tiempo real.

---

## 9. Conclusiones

El desarrollo de esta aplicación permitió comprender:

* El modelo de programación orientado a eventos en Node.js.
* La implementación de comunicación bidireccional en tiempo real.
* La integración entre servidor y cliente mediante Socket.IO.
* El proceso de despliegue de aplicaciones web en entornos de producción.

Este proyecto constituye una base sólida para el desarrollo de aplicaciones más complejas que requieran interacción en tiempo real, como sistemas de colaboración, notificaciones instantáneas o videojuegos multijugador.

---

## 10. Autor

Proyecto desarrollado con fines académicos como práctica de implementación de tecnologías web en tiempo real.
