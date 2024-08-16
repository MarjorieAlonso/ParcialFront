import { useState } from "react";
import Card from "./Card";
import  styles from"./Css/Form.module.css"
const Form = () => {
  const [nombre, setNombre] = useState("");
  const [pelicula, setPelicula] = useState("");
  const [error, setError] = useState("");
  const [envioDato, setEnvioDato] = useState(null);

  const onHandleNombre = (e) => {
    setNombre(e.target.value);
    console.log(e.target.value);
  };

  const onHandlePelicula = (e) => {
    setPelicula(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const nombreValido = nombre.length >= 3 && !nombre.startsWith(" ");
    const peliculaValida = pelicula.length >= 6;
    
    if (nombreValido && peliculaValida) {
      setError("");
      setEnvioDato({ nombre, pelicula });
    } else {
      setError("Por favor chequea que la información sea correcta");
      setEnvioDato(null);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmit}>
        <label className={styles.label}>Nombre</label>
        <input type="text" value={nombre} onChange={onHandleNombre} />
        <label>Pelicula favorita</label>
        <input type="text" value={pelicula} onChange={onHandlePelicula} />
        <button type="submit">Enviar formulario</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {envioDato && (
        <Card nombre={envioDato.nombre} pelicula={envioDato.pelicula} />
      )}
    </div>
  );
};

export default Form;
