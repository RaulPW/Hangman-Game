🎮 El Ahorcado: ¡Adivina la Palabra y Salva al Muñeco!

¡Bienvenido al repositorio de El Ahorcado! Este proyecto es una implementación clásica del popular juego de adivinanzas, desarrollado para ofrecer una experiencia interactiva y divertida directamente en tu navegador. ¡Pon a prueba tu vocabulario y tu ingenio!

✨ Características del Juego

•	Juego Clásico del Ahorcado: Adivina una palabra oculta letra a letra antes de que te quedes sin vidas.

•	Gestión de Vidas: Tienes un número limitado de vidas (representadas visualmente) que disminuyen con cada intento incorrecto.

•	Control de Letras Usadas: El juego lleva un registro de las letras que ya has intentado para evitar repeticiones.

•	Mensajes Dinámicos: Proporciona retroalimentación instantánea al usuario, indicando si la letra es correcta o incorrecta, o si la palabra adivinada es la correcta.

•	Interfaz Intuitiva: Un diseño claro y fácil de usar para introducir letras o intentar adivinar la palabra completa.

•	Opción de Resolver: Permite al jugador intentar adivinar la palabra completa en cualquier momento.

•	Reinicio de Juego: Posibilidad de empezar una nueva partida después de finalizar una.

•	Diseño Visual: Utiliza un tema visual "Western" con fuentes y fondos que evocan esa estética. 

🛠️ Tecnologías Utilizadas
Este proyecto front-end ha sido desarrollado utilizando las siguientes tecnologías estándar de la web:

•	HTML5: Para estructurar la interfaz del juego, incluyendo los campos de entrada, botones, el área para mostrar la palabra oculta y los mensajes. 

•	CSS3: Para dar estilo a todos los elementos visuales, aplicar un tema "Western" con fondos, fuentes personalizadas y animaciones (como la de las vidas perdidas). 

•	JavaScript: Para toda la lógica del juego, incluyendo:
- Validación de la palabra inicial introducida por el usuario.
- Gestión de las vidas y el progreso de la partida.
- Comprobación de letras y palabras.
- Actualización dinámica de la interfaz (mostrar letras correctas, ocultar vidas). 
- Control de eventos de clic en los botones del juego.
  
•	Google Fonts: Para integrar tipografías específicas utilizadas en el diseño.

•	Fuentes Personalizadas: Se utilizan fuentes @font-face como 'titulo-west' (Barbarosa.ttf), 'texto' (West-Hood-DEMO.ttf) y 'text-main' (WesternSheriff-j9jqM.otf) para el tema visual. 

🚀 Instalación y Visualización Local

Para ver y jugar a "El Ahorcado" en tu entorno local, sigue estos sencillos pasos:

1.	Clona el repositorio:

        git clone https://github.com/rdelgadodev/ElAhorcado.git
        cd ElAhorcado
  	
3.	Abre el archivo index.html: Simplemente navega hasta la carpeta ElAhorcado en tu sistema de archivos y haz doble clic en el archivo index.html. Se abrirá automáticamente en tu navegador web predeterminado.
4.	
Al ser un proyecto exclusivamente de front-end (HTML, CSS y JavaScript), no requiere la instalación de dependencias adicionales, servidores locales o configuraciones complejas.

💡 Uso

Una vez que la página esté abierta en tu navegador:
1.	Introduce una palabra: Al inicio, el juego te pedirá que introduzcas la palabra secreta que otro jugador (o tú mismo) intentará adivinar. 
2.	Empieza a adivinar: Una vez introducida la palabra, podrás empezar a introducir letras una a una en el campo correspondiente. 
3.	Comprueba tu letra: Haz clic en "Comprobar" para ver si tu letra es correcta. 
4.	Resuelve la palabra: Si crees saber la palabra, haz clic en "¿Quieres resolver?", introduce tu solución y haz clic en "Comprobar". 
5.	Reintentar: Si pierdes o ganas, tendrás la opción de "Volver a jugar".
   
🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas mejorar el juego del ahorcado o añadir nuevas funcionalidades, por favor, sigue estos pasos:
1.	Haz un "fork" de este repositorio.
2.	Crea una nueva rama para tu característica o corrección (git checkout -b feature/nombre-de-tu-funcionalidad).
3.	Realiza tus cambios.
4.	Haz "commit" de tus cambios (git commit -m 'feat: Añade un nuevo modo de juego' o fix: Corrige error en la lógica de vidas).
5.	Sube tus cambios a tu repositorio "forkeado" (git push origin feature/nombre-de-tu-funcionalidad).
6.	Abre una Pull Request en este repositorio, describiendo claramente los cambios que has realizado.

📄 Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE en este repositorio.

