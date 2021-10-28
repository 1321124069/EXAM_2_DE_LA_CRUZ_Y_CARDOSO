
function datos (){
    alert("Bienvenido al sistema de registro de reservaciones");
    let cant = parseInt(prompt("Cuantas reservaciones quieres hacer"));
    let nombres = [];
    let fechas = [];
    let mesas = [];
    let confirmados = [];
    var contareser = 0;
    let confirs = 0;
    let mujeres = 0;
    let suma = 0;
    for (let i = 1; i <= cant; i++){
        let nombre = prompt("Ingresa el nombre al que se reserva");
        let fecha = prompt("Ingresa la fecha");
        let mesa = prompt ( "que mesa quiere")
        var confirmado = prompt("Ingrese si es confirmado (S/N)");
        if (confirmado == "S"){
            confirs++;
        }else{
            mujeres++;
        }
      

        nombres.push(nombre);
        fechas.push(fecha);
        mesas.push(mesa);
        confirmados.push(confirmado);
    
        alert("Reservacion hecha")
    }
    contareser = confirs + mujeres;
    console.log(nombres);
    console.log(fechas);
    console.log(mesas);
    console.log(confirmados);
 
    menu(contareser, confirs, mujeres,nombres, mesas );

}

function cantidad(contareser){
    alert("Se han registrado " + contareser + " reservaciones");
}

function cantidads (confirs, mujeres){
    alert("Hay " + confirs + " confirmados")
    alert("Hay " + mujeres + " no confirmados")
    
}


function ocupa(mesas, nombres){
    let mesa = prompt("Ingresa la mesa a observar");
     for (let i = 0; i < mesas.length; i++){
        if (mesa == mesas[i]){
            alert("Elseñor " + nombres[i] + " ocupa la mesa " + mesas[i]);
        }
    }
}
   


datos();

function menu(contareser, confirs, mujeres,nombres, mesas){
    let cont = 1;
    while (cont == 1){
        let Opc = prompt("Ingresa la opcion que desas" + "\n" + "1. Cantidad de reservaciones" + "\n" + "2. mesas confirmadas" + "\n" + "\n" + "\n" + "\n" + "3. mesa ocupada" + "\n" + "4. Salir");
        switch(Opc){
            case "1":
                cantidad(contareser);
                break;
            case "2":
                cantidads(confirs, mujeres);
                break;
            case "3":
                ocupa(mesas, nombres);
                break;
            case "4":
                cont = 0;
                break;
            }
    }
}