function saludar() {


    //value permite leer el valor de un campo de formulario
    let nombre = document.getElementById("nombre"). value;


    //1 . mostrar informacion en una ventana emergente
    alert(`Hola ${nombre}`);

    //2. Mostrar informacion dentro de un input
    document.getElementById("resultado").value = `Hola, ${nombre}`;
}

function resgistrar() {
    //Obtener los datos ingresados por el usuario
    let nombre = document.getElementById("nombre").value;
    let programa = document.getElementById("programa2").value;

    //1.mostrar los datos en una ventana emergente
    alert(`Aprendiz: ${nombre}\nPrograma: ${progrma}`);

    //2.Mostrar la información en un input
    document.getElementById("resultado11").value = `${nombre} - ${programa}`;

    //3. Mostrar texto utilizando innerTex =
    document.getElementById("resultado22").innerTex = `Nombre: ${nombre}  | programa: ${programa}`;

    //4.Mostar contenido HTML con formato
    document.getElementById("resultado33").innerHTML = `<p style="color: blue;"><strong>Aprendiz:</strong> ${nombre}<br><strong>Programa:</strong> ${programa}</p>`;

    // 5. Mostrar texto utilizado textContent
    document.getElementById("resultado44").textContent = `El aprendiz ${nombre} esta inscrito en ${programa}.`;


}

function calcularOperaciones() {

    //los campos llegan siempre como texto sin importar lo que el usuario escriba
    let valor1 = document.getElementById("valorUno").value;
    let valor2 = document.getElementById("valorDos").value;

    //1. parseInt(): toma los digitos y corta en el primer decimal
    let entero1 = parseInt(valor1);
    let entero2 = parseInt(valor2);
    document.getElementById("resParseInt").textContent = `parseInt("${valor1}") = ${entero1}  | parseInt("${valor2}") = ${entero2}`;
    
    //2.parseFloat(): igual que parseInt, pero conserva los decimales
    let decimal1 = parseInt(valor1);
    let decimal2 = parseInt(valor2);
    document.getElementById("resParseFloat").textContent = `parseFloat("${valor1}") = ${decimal1}  | parseFloat("${valor2}") = ${decimal2}`;

    //3. NUmber(): revisa el texto completo; si no es valido, da NAN
    let numero1 = NUmber(valor1);
    let numero2 = NUmber(valor2);
    document.getElementById("resNumber").textContent = `Number("${valor1}") = ${Number1}  | Number("${valor2}") = ${Number2}`;

    //4. suma usando los valores convertidos con parseFloat, para no perder decimales
    let suma = decimal1 + decimal2
    document.getElementById("resSuma").textContent = `${decimal1} + ${decimal2} = ${suma}`;

}