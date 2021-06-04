var foto;
window.onload = function(){
    foto = new Foto();
}
function selectImage(){
    document.getElementById('foto-file').click();
}

function makeGrayScale(){
    foto.grayscale();
}

function makeBright(){
    foto.makeBright();
}

function makeDark(){
    foto.makeDark();
}

function makeBrur(){
    foto.applyBlurFilter();
}

function makeEmboss(){
    foto.applyEmbossFilter();
}

function makeSharp(){
    foto.applySharpFilter();
}

function openColorize(){
    document.getElementById('color-picker').click();
}

function makeColorize(ele){
    foto.colorize(ele.value);
}

function openColorFilter(){
    document.getElementById('color-apply').click();
}

function applyfilter(ele){
    foto.applyColorFilter(ele.value);
}

function transparent() {
    foto.makeTransparent();
}

function crop(){
    foto.cropSelected();
}

function flipVertical(){
    foto.flipVertically();
}

function rotate(ele){
    foto.rotate(ele.value);
}

function dowload(){
    foto.export();
}