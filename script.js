// RSVP WHATSAPP
document.getElementById('rsvpForm').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('guestName').value;
    const choice = document.getElementById('attendance').value;
    
    const status = choice === "si" ? "Confirmo mi asistencia ✅" : "No podré asistir ❌";
    const text = encodeURIComponent(`¡Hola! Soy ${name}. ${status} a la boda de Beyla y Guangyao.`);
    
    window.open(`https://wa.me/528186694938?text=${text}`, '_blank');
};

// TIMER
function startTimer() {
    const target = new Date("June 20, 2026 18:00:00").getTime();
    setInterval(() => {
        const diff = target - new Date().getTime();
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("timer").innerHTML = `<div>${d}d</div><div>${h}h</div><div>${m}m</div><div>${s}s</div>`;
    }, 1000);
}
startTimer();



// Intento de Autoplay al primer toque
window.addEventListener('click', function() {
    const audio = document.getElementById('weddingMusic');
    if (audio.paused) {
        audio.play();
    }
}, { once: true }); // El 'once: true' hace que solo se ejecute el primer clic

window.addEventListener('scroll', function() {
    const audio = document.getElementById('weddingMusic');
    if (audio.paused) {
        audio.play();
    }
}, { once: true });