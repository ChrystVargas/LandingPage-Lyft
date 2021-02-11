let intervalo;
let btnIndex = 0;
let btnPosicion = 0;

pantallaMove(237, 1);

function pantallaMove(acml, btns) {
    btns = (btns == 5) ? 1 : btns;
    btns = (btns == 4) ? 0 : btns;

    let acumular = acml;
    let btn = btns;
    intervalo = setInterval(() => {
        acumular = acumular + 237;

        let interfaz = document.querySelector('.contentInterfazt');
        btnIndex = btn;
        btnPosicion = acumular;
        
        let buttonMovil = document.getElementsByClassName('buttonMovil')[btn];
        interfaz.style.transform = `translateX(-${acumular}px)`;
        interfaz.style.transition = `300ms ease-in-out 0s`;
        reiniciar(btn);
        buttonMovil.style.background = `black`;
        btn = (btn == 3) ? -1 : btn;

        btn++;


        if (btn == 1) {
            setTimeout(() => {
                interfaz.style.transform = `translateX(-237px)`;
                interfaz.style.transition = `0ms ease-in-out 0s`;
                acumular = 237;
            }, 1000);
        }
    }, 4000);
}

function reiniciar(indbtn) {

    let btnMovil = document.getElementsByClassName('buttonMovil')[0];
    btnMovil.style.background = `white`;
    btnMovil = document.getElementsByClassName('buttonMovil')[1];
    btnMovil.style.background = `white`; 
    document.getElementsByClassName('titPaso');
    btnMovil = document.getElementsByClassName('buttonMovil')[2];
    btnMovil.style.background = `white`;
    btnMovil = document.getElementsByClassName('buttonMovil')[3];
    btnMovil.style.background = `white`;

    if (indbtn == 0) {
        document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 1';
        document.getElementsByClassName('descpPaso')[0].innerHTML = 'Abre la app y activa el modo conductor.';
    } else if (indbtn == 1) {
        document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 2';
        document.getElementsByClassName('descpPaso')[0].innerHTML = 'Aceptar un pedido de viaje.';
    } else if (indbtn == 2) {
        document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 3';
        document.getElementsByClassName('descpPaso')[0].innerHTML = 'Recoge a tu pasajero.';
    } else if (indbtn == 3) {
        document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 4';
        document.getElementsByClassName('descpPaso')[0].innerHTML = 'Cuando termina el viaje, la app procesa el pago desde la tarjeta de crédito que guardó el pasajero.';
    }
}

document.querySelectorAll(".buttonMovil").forEach((element, index) => {
    indexBtn = element.onclick = () => {
        let indexBtn
        indexBtn = index;
        let acumular;

        if (indexBtn == 0) {
            acumular = 237;
            document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 1';
            document.getElementsByClassName('descpPaso')[0].innerHTML = 'Abre la app y activa el modo conductor.';
        } else if (indexBtn == 1) {
            acumular = 474;
            document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 2';
            document.getElementsByClassName('descpPaso')[0].innerHTML = 'Aceptar un pedido de viaje.';
        } else if (indexBtn == 2) {
            acumular = 711;
            document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 3';
            document.getElementsByClassName('descpPaso')[0].innerHTML = 'Recoge a tu pasajero.';
        } else if (indexBtn == 3) {
            acumular = 948;
            document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 4';
            document.getElementsByClassName('descpPaso')[0].innerHTML = 'Cuando termina el viaje, la app procesa el pago desde la tarjeta de crédito que guardó el pasajero.';
        }

        let interfaz = document.querySelector('.contentInterfazt');
        let buttonMovil = document.getElementsByClassName('buttonMovil')[indexBtn];
        interfaz.style.transform = `translateX(-${acumular}px)`;
        interfaz.style.transition = `300ms ease-in-out 0s`;
        reiniciar();
        buttonMovil.style.background = `black`;

        btnIndex = indexBtn;
        btnPosicion = acumular;

        clearInterval(intervalo);
        indexBtn = (indexBtn == 3) ? -1 : indexBtn;
        pantallaMove(acumular, indexBtn + 1);
    }
});

document.getElementsByClassName('svgAdelante')[0].addEventListener('click', function () {

    btnIndex = btnIndex + 1;
    btnIndex = (btnIndex == 4) ? 0 : btnIndex;
    btnIndex = (btnIndex == 5) ? 1 : btnIndex;

    if (btnIndex == 0) {
        btnPosicion = 1185;
        document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 1';
        document.getElementsByClassName('descpPaso')[0].innerHTML = 'Abre la app y activa el modo conductor.';
    } else if (btnIndex == 1) {
        btnPosicion = 474;
        document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 2';
        document.getElementsByClassName('descpPaso')[0].innerHTML = 'Aceptar un pedido de viaje.';
    } else if (btnIndex == 2) {
        btnPosicion = 711;
        document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 3';
        document.getElementsByClassName('descpPaso')[0].innerHTML = 'Recoge a tu pasajero.';
    } else if (btnIndex == 3) {
        btnPosicion = 948;
        document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 4';
        document.getElementsByClassName('descpPaso')[0].innerHTML = 'Cuando termina el viaje, la app procesa el pago desde la tarjeta de crédito que guardó el pasajero.';
    }

    let interfaz = document.querySelector('.contentInterfazt');
    
    let buttonMovil = document.getElementsByClassName('buttonMovil')[btnIndex];    
    
    interfaz.style.transform = `translateX(-${btnPosicion}px)`;
    btnPosicion = btnPosicion
    
    interfaz.style.transition = `300ms ease-in-out 0s`;
    reiniciar();
    buttonMovil.style.background = `black`;

    if (btnIndex == 0) {
        setTimeout(() => {
            interfaz.style.transform = `translateX(-237px)`;
            interfaz.style.transition = `0ms ease-in-out 0s`;
            acumular = 237;
        }, 300);
    }

    clearInterval(intervalo);
    btnIndex = (btnIndex == 3) ? -1 : btnIndex;

    pantallaMove(btnPosicion, btnIndex + 1);
}, false);

document.getElementsByClassName('svgAtras')[0].addEventListener('click', function () {

    btnIndex = btnIndex - 1;
    btnIndex = (btnIndex == -1) ? 3 : btnIndex;
    btnIndex = (btnIndex == -2) ? 2 : btnIndex;
    
    if (btnIndex == 0) {
        btnPosicion = 237;
        document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 1';
        document.getElementsByClassName('descpPaso')[0].innerHTML = 'Abre la app y activa el modo conductor.';
    } else if (btnIndex == 1) {
        btnPosicion = 474;
        document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 2';
        document.getElementsByClassName('descpPaso')[0].innerHTML = 'Aceptar un pedido de viaje.';
    } else if (btnIndex == 2) {
        btnPosicion = 711;
        document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 3';
        document.getElementsByClassName('descpPaso')[0].innerHTML = 'Recoge a tu pasajero.';
    } else if (btnIndex == 3) {
        btnPosicion = 0;
        document.getElementsByClassName('titPaso')[0].innerHTML = 'PASO 4';
        document.getElementsByClassName('descpPaso')[0].innerHTML = 'Cuando termina el viaje, la app procesa el pago desde la tarjeta de crédito que guardó el pasajero.';
    }


    let interfaz = document.querySelector('.contentInterfazt');
    
    let buttonMovil = document.getElementsByClassName('buttonMovil')[btnIndex];

    interfaz.style.transform = `translateX(-${btnPosicion}px)`;
    interfaz.style.transition = `300ms ease-in-out 0s`;
    reiniciar();
    buttonMovil.style.background = `black`;
    
    if (btnIndex == 3) {
        setTimeout(() => {
            interfaz.style.transform = `translateX(-948px)`;
            interfaz.style.transition = `0ms ease-in-out 0s`;
            acumular = 948;
        }, 500);
    }

    clearInterval(intervalo);
    btnIndex = (btnIndex == 0) ? 4 : btnIndex;    
    
    pantallaMove(btnPosicion, btnIndex + 1);
}, false);

let posicionAnterior = 0;
let cont = 1;

document.querySelectorAll(".preguntasApp").forEach((element, index) => {
    indexBtn = element.onclick = () => {
        let indexBtn
        let alto
        indexBtn = index;

        if (indexBtn == 0) {
            alto = 230;
        } else if (indexBtn == 1) {
            alto = 203;
        } else if (indexBtn == 2) {
            alto = 263;
        } else if (indexBtn == 3) {
            alto = 96;
        } else if (indexBtn == 4) {
            alto = 56;
        } else if (indexBtn == 5) {
            alto = 76;
        } else if (indexBtn == 6) {
            alto = 56;
        }

        document.getElementsByClassName('respuestasApp')[posicionAnterior].style.height = '0px';
        document.getElementsByClassName('btnPreguntamenos')[posicionAnterior].style.display = 'none';
        document.getElementsByClassName('btnPreguntamas')[posicionAnterior].style.display = 'block';

        if (indexBtn != posicionAnterior) {
            cont = 1;
        }

        if (cont == 1) {    
            
            let respuestas = document.getElementsByClassName('respuestasApp')[indexBtn];
            respuestas.style.height = `${alto}px`;
            document.getElementsByClassName('btnPreguntamas')[indexBtn].style.display = 'none';
            document.getElementsByClassName('btnPreguntamenos')[indexBtn].style.display = 'block';

            cont = 0    
        } else {
            cont = 1
        }

        posicionAnterior = indexBtn;
    }
});