window.addEventListener("DOMContentLoaded", () => {

    const scene = document.querySelector("a-scene");
    const model = document.querySelector("#mariachi");
    const audio = document.querySelector("#music");
    const loading = document.querySelector("#loading");
    const target = document.querySelector("[mindar-image-target]");

    scene.addEventListener("loaded", () => {
        loading.style.display = "none";
    });

    target.addEventListener("targetFound", () => {

        console.log("Foto detectada");

        model.setAttribute("visible", true);

        audio.currentTime = 0;

        audio.play().catch(() => {
            console.log("El navegador requiere interacción del usuario para reproducir audio.");
        });

    });

    target.addEventListener("targetLost", () => {

        console.log("Foto perdida");

        model.setAttribute("visible", false);

        audio.pause();

    });

});