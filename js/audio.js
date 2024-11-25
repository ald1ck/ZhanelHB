let myAudio = new Audio('img/Music.mp3'); // Убедитесь, что путь к файлу правильный

window.onload = function () {
    setInterval(function () {
        // Проверка, если аудио приостановлено
        if (myAudio.paused) {
            // Пытаемся воспроизвести аудио
            myAudio.play().catch(function (error) {
                console.log("Ошибка при воспроизведении аудио:", error);
            });
        }
    }, 1000); // Проверка каждую секунду
};
