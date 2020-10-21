import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import cinema from '../../assets/images/cinema.png';
import '../../assets/global.css'
import './style.css'
import Button from '../../components/Button';

function ListarFilmes() {
  const [filmes, setFilmes] = useState([]);

  const listar = () => {
    fetch('http://localhost:5000/api/filmes',{
      method: 'GET',
      headers: {
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
    .then(response => response.json())
    .then(dados => {
      setFilmes(dados);
    })
    .catch(erro => console.error(erro))
  }

  return (
    <div className="Filme">
      <Header description="Veja a lista de filmes"/>
      <main>
        <h1>Filmes</h1>
        <div className="centro">
          <img className="cinema" src={cinema} alt="filmes"/>
        </div>
        <h2>Lista de Filmes</h2>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Titulo do Filme</td>
              <td>Gênero</td>
            </tr>
          </thead>
          <tbody>
            {
              filmes.map((item:any) => {
                return(
                  <tr>
                    <td>{item.titulo}</td>
                    <td>{item.genero.nome}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <form onSubmit={event => {
            event.preventDefault();
            listar();
        }}>
            <div className="form1">
                <div className="btn">
                    <Button value="Listar filmes" />
                </div>
            </div>
        </form>
      </main>
      <Footer/>
    </div>
  );
}

export default ListarFilmes;