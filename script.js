function classifyHero() 

{
    const points = parseInt(document.getElementById('heroPoints').value);
    const heroLevelDiv = document.getElementById('heroLevel');
    document.getElementById('nome').value = "";
    let level = '';

    if (isNaN(points)) {
        heroLevelDiv.textContent = 'Por favor, insira um número válido.';
        return;
    }

    if (points < 1000) {
        level = 'Ferro';
    } else if (points <= 2000) {
        level = 'Bronze';
    } else if (points <= 5000) {
        level = 'Prata';
    } else if (points <= 7000) {
        level = 'Ouro';
    } else if (points <= 8000) {
        level = 'Platina';
    } else if (points <= 9000) {
        level = 'Ascendente';
    } else if (points <= 10000) {
        level = 'lmortal';
    } else {
        level = 'Comum';
    }

    heroLevelDiv.textContent = ' Nível do Herói: ' + level;

}
