const databaseURL = 'https://landing-51be0-default-rtdb.firebaseio.com/data.json';
let sendData = () => { 
    // Obtén los datos del formulario
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()); // Convierte FormData a objeto
    
    // new Date().toLocaleString( locales, options )
    data['saved'] = new Date().toLocaleString('es-CO', { timeZone: 'America/Guayaquil' })
    
    // Realiza la petición POST con fetch
    fetch(databaseURL, {
        method: 'POST', // Método de la solicitud
        headers: {
            'Content-Type': 'application/json' // Especifica que los datos están en formato JSON
        },
        //Serializar(convertir a texto)
        body: JSON.stringify(data) // Convierte los datos a JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        //Deserializar convertir el texto al objeto
        return response.json(); // Procesa la respuesta como JSON
    })
    .then(result => {
        alert('Agradeciendo tu preferencia, nos mantenemos actualizados y enfocados en atenderte como mereces'); // Maneja la respuesta con un mensaje
        form.reset()//hace que desparezcan los datos cada vez que se envian 
        
        // Recuperación de datos
        getData();
    })
    .catch(error => {
        alert('Hemos experimentado un error. ¡Vuelve pronto!'); // Maneja el error con un mensaje
    });
 }

 let getData = async()=>{
    try {

        // Realiza la petición fetch a la URL de la base de datos
        const response = await fetch(databaseURL);

        // Verifica si la respuesta es exitosa
        if (!response.ok) {
          alert('Hemos experimentado un error. ¡Vuelve pronto!'); // Maneja el error con un mensaje
        }

        // Convierte la respuesta en formato JSON
        const data = await response.json();

        if(data != null) {

            // Cuente el número de suscriptores registrados por fecha a partir del objeto data
            let countSuscribers = new Map()
            if (Object.keys(data).length > 0) {
                for (let key in data) {

                    let { email, saved } = data[key]
                       
                    let date = saved.split(",")[0]
                       
                    let count = countSuscribers.get(date) || 0;
                    countSuscribers.set(date, count + 1)
                }
            }
            // END

            // Genere y agregue filas de una tabla HTML para mostrar fechas y cantidades de suscriptores almacenadas 
            if (countSuscribers.size > 0) {

                subscribers.innerHTML = ''

                for (let [date, count] of countSuscribers) {
                    let rowTemplate = `
                        <tr>
                            <th scope="row">*</th>
                            <td>${date}</td>
                            <td>${count}</td>
                        </tr>`
                    subscribers.innerHTML += rowTemplate
                }
            }
            // END

        }

      } catch (error) {
        // Muestra cualquier error que ocurra durante la petición
        alert('Hemos experimentado un error. ¡Vuelve pronto!'); // Maneja el error con un mensaje
      }
 }

let ready = () => {
    console.log('DOM está listo')
    getData();
}

let loaded = () => {
    console.log('Iframes e Images cargadas')
    let myform = document.getElementById('form');
    myform.addEventListener('submit',(eventSubmit)=>{
        eventSubmit.preventDefault();
        //me regresa el cursor dentro del input
        const emailElement = document.querySelector('.form-control-lg');
        const emailText = emailElement.value;

        if (emailText.length === 0) {
          emailElement.focus()

          emailElement.animate(
            [
                { transform: "translateX(0)" },
                { transform: "translateX(50px)" },
                { transform: "translateX(-50px)" },
                { transform: "translateX(0)" }
            ],
            {
                duration: 400,
                easing: "linear",
            }
        )
        return;

        }

        const preferenceElement = document.querySelector('#formPreference');
        const preferenceValue = preferenceElement.value;

        if (!preferenceValue) {
            preferenceElement.focus();

            preferenceElement.animate(
                [
                    { transform: "translateX(0)" },
                    { transform: "translateX(50px)" },
                    { transform: "translateX(-50px)" },
                    { transform: "translateX(0)" }
                ],
                { duration: 400, easing: "linear" }
            );

            return;
        }

        sendData();

    });
 
}



window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded)