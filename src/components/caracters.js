export default function Caracters(props){
    
    const {character, setCaracters} = props;
    const resetcaracter = () => {
        setCaracters(null)
    }
    console.log(character)
    return(
        <div className="characters">
            <h1>personaje</h1>
            <span className="back-home" onClick={resetcaracter}> volver a la home</span>

            <div className="container-characters">
                {character.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                            {character.status  === "Alive" ? (
                                <>
                                    <span className="alive"/>
                                    alive
                                </>
                            ): (
                                <>
                                    <span className="dead"/>
                                    dead
                                </>

                            )}

                        </h6>


                        <p> 
                            <span className="text-gray">exportpisosio:</span>
                            <span>{character.episode.length}</span>
                        </p> 

                        <p>
                            <span className="text-grey">Especie:</span>
                            <span>{character.species}</span>
                        </p>

                        </div>
                        
                       
                    </div>
                ))}
            </div>

            <span className="back-home" onClick={resetcaracter}> volver a la home</span>
        </div>
    )
}
