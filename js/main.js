//Array de todos los Ids
let acumulardorIdsNom = [];
let acumulardorIdsApe = [];

//Array de los Ids que no tienen valores vacios
let idsNoVacioNomb=[];
let idsNoVacioApe=[];


//Array de Nombres y Apellidos
let arrNombres = [];
let arrApellidos=[];

//Limitadores
let maximoNombres = 3;
let maximoApellidos = 2;


//Muestra los nombres y apellidos de los integrantes

function obtenerDatos(id){
    let datos=[];
    let nombre1= "nombre"+id+"-1";
    let nombre2= "nombre"+id+"-2";
    let apellido1 = "apellido"+id+"-1";
    let apellido2 = "apellido"+id+"-2";
    let resultado= [];

    acumulardorIdsNom.push(nombre1, nombre2);
    acumulardorIdsApe.push(apellido1, apellido2);

    arrNombres.push((document.getElementById(nombre1).value), (document.getElementById(nombre2).value))
    arrApellidos.push((document.getElementById(apellido1).value),(document.getElementById(apellido2).value))

    datos.push((document.getElementById(nombre1).value), (document.getElementById(nombre2).value),(document.getElementById(apellido1).value.toUpperCase()),(document.getElementById(apellido2).value.toUpperCase()))

    for (let i = 0; i <= 3; i++) {
        if(datos[i] != ""){
            if(datos[i>=2]){
                resultado.push(datos[i]);
            }
            else if(i==0){
                idsNoVacioNomb.push(nombre1)
            }
            else if(i==1){
                idsNoVacioNomb.push(nombre2)
            }
            else if(i==2){
                idsNoVacioApe.push(apellido1)
            }
            else if(i==3){
                idsNoVacioApe.push(apellido2)
            }
            resultado.push(datos[i]);
        }     
    }

    console.log(`Integrante n°${id}: ${resultado.join(" ")}`);

    if(id==3){
        coincidenciaNombres();
        coincidenciaApellidos();
    }
}


//Búsca coincidencias de Nombres

function coincidenciaNombres(){
    const arrNombresFilter = arrNombres.filter(arrNombre => arrNombre != "");
    let auxiliarNombres = [];
    let auxiliarIdsNom = []

    for (let i = 0; i<= arrNombresFilter.length-1; i++) {
        for(let j=0; j<=arrNombresFilter.length-1; j++){

            if(arrNombresFilter[i] == arrNombresFilter[j] && (i!=j)){  
                auxiliarIdsNom.push(idsNoVacioNomb[i])
            }
            if(arrNombresFilter[i] == arrNombresFilter[j] && (i!=j && i<j)){  
                auxiliarNombres.push(arrNombresFilter[i])
            }
        }
    }

    if(auxiliarNombres.length<=0){
        console.log("No hubo coincidencias en los nombres")
    }
    else{
        console.log(`Hay coincidencia en éste nombre: ${auxiliarNombres}`)
        let ingreseUnColor = prompt("Ingrese un color para destacar los resultados de coincidencia de Nombres");

        for (let i = 0; i <= auxiliarIdsNom.length-1; i++) {
            document.getElementById(auxiliarIdsNom[i]).style.color = ingreseUnColor;   
        }
    }   

}


//Buscar coincidencia de Apellidos

function coincidenciaApellidos(){
    const arrApellidosFilter = arrApellidos.filter(arrApellidos => arrApellidos != "");
    let auxiliarApellidos = [];
    let auxiliarIdsApe = []

    for (let i = 0; i<= arrApellidosFilter.length-1; i++) {
        for(let j=0; j<=arrApellidosFilter.length-1; j++){

            if(arrApellidosFilter[i] == arrApellidosFilter[j] && (i!=j)){  
                auxiliarIdsApe.push(idsNoVacioApe[i])
            }
            if(arrApellidosFilter[i] == arrApellidosFilter[j] && (i!=j && i<j)){  
                auxiliarApellidos.push(arrApellidosFilter[i])
            }
        }
    }


    if(window.confirm("Desea buscar coincidencias de Apellidos?")){
        if(auxiliarApellidos.length<=0){
            alert("No hubo coincidencias en los apellidos")
        }
        else{
            alert(`Hay coincidencia en éste apellido: ${auxiliarApellidos}`)
            console.log(`Hay coincidencia en éste apellido: ${auxiliarApellidos}`)
            let ingreseUnColor = prompt("Ingrese un color para destacar los resultados de coincidencia de Apellidos");
            
            for (let i = 0; i <= auxiliarIdsApe.length-1; i++) {
                document.getElementById(auxiliarIdsApe[i]).style.color = ingreseUnColor;   
            }
        } 
    }
}

//Valida que se complete los campos obligatorios

function validar(id){
    let nombre = document.getElementById("nombre"+id+"-1");
    let apellido = document.getElementById("apellido"+id+"-1");

    if(nombre.value === null || nombre.value === '' || apellido.value === null || apellido.value === ''){
        alert("Complete los campos obligatorios * del integrante n°"+id)
    }
    else{
        obtenerDatos(id)
        let boton= document.getElementById("boton"+id).disabled= true
        let div = document.getElementById("div"+(id+1)).classList.remove("deshabilitado");
    }
}