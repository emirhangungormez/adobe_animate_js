var nesne = this.cember; // this.nesneAdi

nesne.addEventListener("mousedown", tiklama);
nesne.addEventListener("pressup", birakma); //pressup = mouseup

//stage.addEventListener("x",y); 2 parametre alır ve eylem bildirir.

function tiklama() {
    stage.addEventListener("stagemousemove", tasima)
}

function birakma() {
    stage.removeEventListener("stagemousemove", tasima)// remove ile eylemi iptal eder.
}

function tasima() {
    nesne.x = stage.mouseX; // x'in konumu
    nesne.y = stage.mouseY; // y'nin konumu
    stage.tickOnUpdate = false;
    stage.update(); // sahneyi gunceller
    stage.tickOnUpdate = true;
}
