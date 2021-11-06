import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { PrendaContext } from '../context/prendas';


const Prendas = () => {
    const { prendas } = useContext(PrendaContext);

    if (!prendas.length) {
        return <h3>No prendas Available</h3>
    }

    return (
        <section className="books">
            {prendas.map(({ image, id, title }) => (
                <article key={id} className="book">
                    <div className="book-image">
                        <img src={image} alt={title} />
                    </div>
                    <Link to={`prendas/${id}`} className="btn book-link">details</Link>
                </article>
            ))}
        </section>
    )
}

export default Prendas
