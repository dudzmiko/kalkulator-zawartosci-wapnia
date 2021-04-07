const calcium_value_milk = 120;
const calcium_value_cream = 99;
const calcium_value_cottageCheese = 99;
const calcium_value_plainYogurt = 170;
const calcium_value_friutYogurt = 225;
const calcium_value_kefir = 246;
const calcium_value_spinach = 93;
const calcium_value_feta = 493;
const calcium_value_gouda = 700;
const calcium_value_vanillaIcecream = 128;
const calcium_value_chcocolateIcecream = 109;
const calcium_value_nutella = 108;
/*
mleko_32=118,
    mleko_uht_15=120,
    smietana_12=106,
    jogurt_naturalny_2=170,
    jogurt_owocowy_2=225,
    kefir=246,
    szpinak=93,
    migdaly=239,
    serfeta=493,
    lody_waniliowe=128,
    lody_czekoladowe=109,
    ser_gouda=700,
    ser_topiony=418,
    czekolada_mleczna=189,
    nutella=108;
*/
function calc() {
    const value = document.getElementById("input-section_input-text").value;
    var template = 100 * value;

    document.getElementById("product-result-milk").innerHTML = Math.round(template / calcium_value_milk);
    document.getElementById("product-result-cream").innerHTML = Math.round(template / calcium_value_cream);
    document.getElementById("product-result-cottagecheese").innerHTML = Math.round(template / calcium_value_cottageCheese);
    document.getElementById("product-result-plainYogurt").innerHTML = Math.round(template / calcium_value_plainYogurt);
    document.getElementById("product-result-friutYogurt").innerHTML = Math.round(template / calcium_value_friutYogurt);
    document.getElementById("product-result-kefir").innerHTML = Math.round(template / calcium_value_kefir);
    document.getElementById("product-result-spinach").innerHTML = Math.round(template / calcium_value_spinach);
    document.getElementById("product-result-feta").innerHTML = Math.round(template / calcium_value_feta);
    document.getElementById("product-result-gouda").innerHTML = Math.round(template / calcium_value_gouda);
    document.getElementById("product-result-vanillaIcecream").innerHTML = Math.round(template / calcium_value_vanillaIcecream);
    document.getElementById("product-result-chcocolateIcecream").innerHTML = Math.round(template / calcium_value_chcocolateIcecream);
    document.getElementById("product-result-nutella").innerHTML = Math.round(template / calcium_value_nutella);
}

