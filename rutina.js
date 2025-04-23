//CREE UNA CLASE PORQUE SE ME HACE MAS COMODO
// EN SI, LO QUE HAGO ES CREAR EL CONSTRUCTOR CON LOS ELEMENTOS A TRABAJAR, TIMPO A ESTUDIAR QUE SERA IGUAL AL TIEMPO DE ESTUDIO QUE LE PASAREMOS.
//UN ARREGLO VACIO PARA ALMACENAR LAS RUTINAS.
//LUEGO UNA FUNCION PARA NO IR TANTO NUMERO NEGATIVO COMO UN NUMERO QUE SOBRE PASE LAS 24HORAS.
// LUEGO CREAMOS CONDICIONES PARA DE MAYOR I GUAL O MENOR IGUAL, PARA ARCHIVAR EL RANGO DE HORAS QUE PUEDEN LLEVAR ESA RUTINA.
// EL METODO PUNTO PUSH QUE ESTAMOS CANSADO DE VERLO, QUE ES PARA AGREGAR ALGO AL ARREGLO, EJEMPLO
//[MANZANA, BANANA], .PSUH AGREGA LO QUE LE PASES PERO AL FINAL [MANZANA, BANANA, SANDIA]; COMO ESTA VACIO AGREGARA O SERA EL PRIMERO EN LA LISTA "LO QUE LE HAYAMOS PASADO"
//USAMOS ELSE IF Y LAS MISMAS CONDICIONES PERO PARA DIFERENTES HORAS. VERY EAZY.
//LUEGO AL FINAL LE PASAMOS LO QUE DESEAMOS 
// ESTO ESTA HECHO TALMENTE POR MI DESDE 0, CUALQUIER CONSULTA DEJARMELA SABER A MI DISCORD# --> nehemias809
//USTEDES PUEDEN AGREGARLE LAS RUTINAS EN FORMA DE MINUTOS COMO QUIERAN, SI QUIEREN TENER MABOS DEBERAN HACER UNOS PEQUEÑOS CAMBIOS.
class RutinaEstudio {
    constructor(tiempoestudio) {
        this.tiempoAestudiar = tiempoestudio;
        this.rutinasdeEstudio = [];
    }

    generatiempoestudio(){

        if (this.tiempoAestudiar <= 0) {
            return { error: "Tu tiempo de estudio debe ser mayor a 0" };
        } else if (this.tiempoAestudiar > 24) {
            return { error: "Tu tiempo excede las horas disponibles (debe ser de 1 a 24 horas)" };
        }
         
            // Verificar si el tiempo de estudio está dentro de los rangos definidos
            if(this.tiempoAestudiar >= 1 && this.tiempoAestudiar <= 6) {
                this.rutinasdeEstudio.push(`Rutina de estudio adaptable 
                5 minutos: Repaso rápido de lo aprendido anteriormente
                25 minutos: Estudio enfocado en un tema o área importante
                5 minutos: Breve descanso puedes estirarte, caminar un poco, o descansar la vista
                25 minutos: Continuación del estudio en el mismo tema o en otro si es necesario
                5 minutos: Resumen de lo aprendido, organizar notas y establecer la próxima sesión de estudio
                
                🔁 Repite ese ciclo cada hora en caso de ser solo una hora haz solamente un procedimiento.
                No importa si es en la:
                🍽️ Medio día 
                🌆 Tarde (4-5 horas)
                🌙 Noche (2-3 horas)
    
                💡Tips:
                - Apaga redes mientras estudias
                - Toma agua cada hora
                - No comas pesado al estudiar
                `);
            }
            else if(this.tiempoAestudiar >= 7 && this.tiempoAestudiar <= 12) {
                this.rutinasdeEstudio.push(`Rutina de estudio adaptable 
                5 minutos: Repaso rápido de lo aprendido anteriormente
                25 minutos: Estudio enfocado en un tema importante
                5 minutos: Breve descanso (estírate o respira)
                25 minutos: Continuación del tema o cambio a otro
                5 minutos: Resumen de ese bloque
    
                🔁 Repite ese ciclo cada hora.
    
                📌 Cada 3 ciclos cada una hora.
                15 a 30 minutos de descanso largo — almuerza, camina, despeja la mente.
    
                💡 Consejo:
                - Alterna materias para no saturarte.
                - En las últimas 2 horas: repaso general y organización de tareas pendientes.
                `);
            }
            else if(this.tiempoAestudiar >= 13 && this.tiempoAestudiar <= 18) {
                this.rutinasdeEstudio.push(`Rutina de estudio adaptable
                - 70 minutos: Estudio profundo (con lectura o análisis)
                - 10 minutos: Descanso breve
                - 50 minutos: Práctica activa (resolver problemas, escribir)
                - 30 minutos: Descanso largo (comida, paseo, música)
    
                🔁 Repetir 3 veces este ciclo (aprox. 6-7 horas útiles)
                - Luego: 
                - 1 hora: Revisión de errores y dudas
                - 1 hora: Crear mapas mentales/resúmenes
                - 30 minutos: Desconexión mental total`);
            }
            else if(this.tiempoAestudiar >= 19 && this.tiempoAestudiar <= 24) {
                this.rutinasdeEstudio.push(`Rutina de estudio adaptable.
                - 60 minutos: Estudio concentrado (tema nuevo)
                - 10 minutos: Descanso físico
                - 60 minutos: Aplicación práctica (ejercicios o ejemplos)
                - 20 minutos: Creatividad libre (diagrama, resumen visual)
    
                🔁 Repetir este ciclo dependiendo de tus horas libre, aquí depende de ti como lo quieras organizar.
    
                - Últimas 2 horas:
                - 1 hora: Simulación de examen o presentación
                - 1 hora: Repaso completo + relajación mental sin pantallas`);
            }

            return { rutinas: this.rutinasdeEstudio };
        }
    }


const estudiante = new RutinaEstudio(2);
estudiante.generatiempoestudio();
console.log(estudiante.rutinasdeEstudio);
module.exports = { RutinaEstudio };