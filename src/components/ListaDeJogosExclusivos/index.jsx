import { useState } from "react";
import { jogosExclusivos } from "../../../dados";
import ItemJogos from "../ItemJogos";
import styles from "./ListaDeJogosExclusivos.module.css"

export default function ListaDeJogosExclusivos () {

  const [listaJogos, setListaJogos] = useState(jogosExclusivos);
  
  const handleFiltrarJogoPlataforma = (plataforma) => {
    const jogosBuscados = jogosExclusivos.filter((jogo) => {
      return jogo.plataforma === plataforma
    })
    return setListaJogos(jogosBuscados);
  }

  const handleLimparFiltro = () => {
    setListaJogos(jogosExclusivos)
  }


  return (
    <div className={styles.container_principal}>
      <h2>Lista de Jogos Exclusivos</h2>
      <div className={styles.container_btns}>
        <button onClick={() => handleFiltrarJogoPlataforma("xbox")}>XBOX</button>
        <button onClick={() => handleFiltrarJogoPlataforma("playstation")}>PLAYSTATION</button>
        <button onClick={() => handleFiltrarJogoPlataforma("nintendo")}>NINTENDO</button>
        <button onClick={() => handleLimparFiltro()} style={{textTransform: 'uppercase'}}>Limpar Filtro</button>
      </div>
      <div className={styles.container_jogos}>
        {listaJogos.map((jogo) => (
          <ItemJogos
            key={jogo.id}
            nome={jogo.nome}
            plataforma={jogo.plataforma}/>
        ))}
      </div>
    </div>
  )
}