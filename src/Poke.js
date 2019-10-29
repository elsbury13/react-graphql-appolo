import React from 'react'

const Poke = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <img src={props.pokemon.pic} className="card-subtitle mb-2 text-muted" />
            <h5 className="card-title">#{props.pokemon.id} {props.pokemon.name}</h5>
            <p className="card-subtitle mb-2 text-muted">{props.pokemon.desc}</p>
            <div>
                <p className="card-subtitle mb-2 text-muted">Height: {props.pokemon.height}</p>
                <p className="card-subtitle mb-2 text-muted">Weight: {props.pokemon.weight}</p>
                </div>
            <div>
                Type:
                <ul>
                {
                  props.pokemon.types.map((item, i) => (
                    <p key={i} className="card-subtitle mb-2 text-muted">
                        <li>{item.name}</li>
                    </p>
                  ))
                }
                </ul>
            </div>
            {props.pokemon.evolution.length !== 0 ?
                <div>
                    Evolution:
                    <ul>
                    {
                        props.pokemon.evolution.map((item, i) => (
                            <p key={i} className="card-subtitle mb-2 text-muted">
                                <li>{item.name}</li>
                                <li>{item.url}</li>
                            </p>
                        ))
                    }
                    </ul>
                </div>
            :
                <div></div>
            }
        </div>
    </div>
)

export default Poke
