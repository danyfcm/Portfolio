$('.container').on('mouseenter', function () {

    document.querySelectorAll(".parallax-wrap").forEach(parallaxWrap =>

        parallaxWrap.addEventListener(
            "mousemove", ({ layerX, layerY }) => {
                parallaxWrap.style.setProperty("--x", layerX);
                parallaxWrap.style.setProperty("--y", layerY);
            }
        ),

    );
    
});

// Mudar --Shift
var optionNapoleon = document.getElementById('optionNapoleon');
optionNapoleon.addEventListener('input', e => { changeShiftValue('imageNapoleon', optionNapoleon.value) });

var optionCapa = document.getElementById('optionCapa');
optionCapa.addEventListener('input', e => { changeShiftValue('imageCapa', optionCapa.value) });

var optionSoldados = document.getElementById('optionSoldados');
optionSoldados.addEventListener('input', e => { changeShiftValue('imageSoldados', optionSoldados.value) });

var optionPedra1 = document.getElementById('optionPedra1');
optionPedra1.addEventListener('input', e => { changeShiftValue('imagePedra1', optionPedra1.value) });

var optionPedra2 = document.getElementById('optionPedra2');
optionPedra2.addEventListener('input', e => { changeShiftValue('imagePedra2', optionPedra2.value) });


function changeShiftValue(image ,optionValue){
    document.getElementById(image).style.setProperty('--shift', optionValue)
}

function changeShiftDefault(){
    
    optionNapoleon.value = 8;
    optionCapa.value     = 7;
    optionSoldados.value = 5;
    optionPedra1.value   = 8;
    optionPedra2.value   = 6;

    changeShiftValue('imageNapoleon',   optionNapoleon.value)
    changeShiftValue('imageCapa',       optionCapa.value    )
    changeShiftValue('imageSoldados',   optionSoldados.value)
    changeShiftValue('imagePedra1',     optionPedra1.value  )
    changeShiftValue('imagePedra2',     optionPedra2.value  )
}
// ====== || =======