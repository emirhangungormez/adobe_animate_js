this.stop();

var son = document.createElement('div');
son.id = "son";
document.getElementById("animation_container").appendChild(son);



var bu = this;
var sahne;
var sahneMc = bu.sahneMc;
var sahneSayisi = 16;


sahneMc.addChild(new lib.Sahne0);
sahneMc.addEventListener("click", go1);


bu.ileri_btn.visible = false;
bu.geri_btn.visible = false;


bu.ileri_btn.addEventListener("click", go1);
function go1(e) {
    cur++;
    sahneMc.removeEventListener("click", go1);
    if(cur>=sahneSayisi) cur = 15;
    if(sahne) sahneMc.removeChild(sahne);
    sahne = new lib["Sahne"+cur];
    sahneMc.addChild(sahne);
    bu.ileri_btn.visible = true;
    if(cur>1)bu.geri_btn.visible = true;

    if(cur>14)
    {
        bu.ileri_btn.visible = false;
        bu.geri_btn.visible = false;
    }

    refresh()
}


bu.geri_btn.addEventListener("click", go2);
function go2(e) {
    cur--;
    if(cur<1) cur = 1;
    if(sahne) sahneMc.removeChild(sahne);
    sahne = new lib["Sahne"+cur];
    sahneMc.addChild(sahne);

    if(cur<2)bu.geri_btn.visible = false;

    refresh()
}

function refresh()
{
    stage.tickOnUpdate = false;
    stage.update();
    stage.tickOnUpdate = true;
}
