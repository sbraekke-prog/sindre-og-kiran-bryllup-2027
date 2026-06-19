const container = document.querySelector('.karusell-container');
const indikatorContainer = document.getElementById('karusell-indikatorer');
const totaltAntallKort = container.children.length;
for (let i = 0; i < totaltAntallKort; i++) {
    const prikk = document.createElement('div');
    prikk.classList.add('prikk');
    if (i === 0) prikk.classList.add('aktiv'); // Det første kortet starter som aktivt
    indikatorContainer.appendChild(prikk);
}
const prikker = document.querySelectorAll('.prikk');
container.addEventListener('scroll', () => {
    const kortBredde = container.children[0].offsetWidth + 25; // Bredde + gap
    const gjeldendeKort = Math.round(container.scrollLeft / kortBredde);
    const tryggIndex = Math.min(Math.max(gjeldendeKort, 0), totaltAntallKort - 1);
    prikker.forEach((prikk, index) => {
        if (index === tryggIndex) {
            prikk.classList.add('aktiv');
        } else {
            prikk.classList.remove('aktiv');
        }
    });
});