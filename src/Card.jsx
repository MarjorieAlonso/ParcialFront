
//import React from "react";
import styles from "./Css/Card.module.css" 



const Card = ({nombre, pelicula}) => {
    return(
        <div className={styles.cardContainer}>
        <h3> Tu nombre es {nombre}</h3>
        <h3> Tu pelicula favorita es {pelicula}</h3>
            
            </div>
    )

}
      
export default Card