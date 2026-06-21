# Pizzería Mamma Mia! - Hito 3

Este proyecto corresponde a la tercera etapa de la aplicación web **Pizzería Mamma Mia!**, desarrollada con **React** y **Vite**. El objetivo principal de este hito fue transformar la interfaz estática en una aplicación dinámica que consume datos de un archivo independiente, maneja el paso de propiedades (`props`) y gestiona estados en tiempo real.

## 📌 Requerimientos Implementados

El proyecto cumple con todos los puntos exigidos en la pauta de evaluación:

*   **Catálogo Dinámico (`Home.jsx`)**: Se reemplazaron las tarjetas fijas por un renderizado automatizado. El componente recorre el array de productos mediante el método `.map()`, generando las tarjetas en pantalla con sus respectivas llaves (`key`) únicas.
*   **Tarjeta de Producto (`Cardpizza.jsx`)**: Recibe la información de forma dinámica a través de `props` (nombre, precio, descripción, ingredientes e imagen). Los precios están formateados con `.toLocaleString('es-CL')` y la lista de ingredientes se recorre internamente para renderizar cada uno dentro de etiquetas `<li>`.
*   **Carrito de Compras Interactivo (`Cart.jsx`)**: Gestiona el flujo de compra utilizando el estado (`useState`) inicializado con el array de simulación. Cuenta con funciones para aumentar o disminuir las cantidades; si un producto llega a cero, se elimina automáticamente del listado mediante un filtro. Además, calcula el total acumulado de la compra de forma dinámica.
*   **Diseño Visual**: La aplicación utiliza los estilos y el sistema de grillas de **Bootstrap 5** de manera local, asegurando una distribución limpia y responsiva en columnas.

