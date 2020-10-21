import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Input from '../../components/Input';
import theater from '../../assets/images/theater.png';
import refresh from '../../assets/images/refresh.png';
import trash from '../../assets/images/trash.png';
import '../../assets/global.css'
import './style.css'

function Genero() {

  const [idGenero, setIdGenero] = useState(0);
  const [genero, setGenero] = useState('');
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    listar();
  }, [])

  const listar = () => {
    fetch('http://localhost:5000/api/generos',{
      method: 'GET',
      headers: {
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
    .then(response => response.json())
    .then(dados => {
      setGeneros(dados);
    })
    .catch(erro => console.error(erro))
  }

  const deletar = (id:number) => {
    if (window.confirm('Deseja excluir o Gênero?')) {
      fetch('http://localhost:5000/api/generos/' + id, {
        method: 'DELETE',
        headers: {
          authorization: 'Bearer' + localStorage.getItem('token-filmes')
        }
      })
      .then(response => response.json())
      .then(dados => {
        listar()
      })
      .catch(erro => console.error(erro))
    }
  }

  const update = (id:number) => {
    fetch('http://localhost:5000/api/generos/' + id, {
      method: 'GET',
      headers: {
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
    .then(response => response.json())
    .then(dados => {
      setIdGenero(dados.idGenero);
      setIdGenero(dados.nome);
    })
    .catch(erro => console.error(erro))
  }

  const salvar = () => {
    const form = {
      nome: genero
    };

    const method = (idGenero === 0? 'POST' : 'PUT');
    const urlRequest = (idGenero === 0? 'http://localhost:5000/api/generos' : 'http://localhost:5000/api/generos/' + idGenero);

    fetch(urlRequest, {
      method: method,
      body:JSON.stringify(form),
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
    .then(() => {
      alert('Gênero cadastrado')
      setIdGenero(0);
      setGenero('');
      listar()
    })
    .catch(erro => console.error(erro))
  }

  return (
    <div className="Genero">
      <Header description="Cadastre os gêneros dos filmes"/>
      <main>
        <h1>Gêneros</h1>
        <div className="centro">
          <img className="theater" src={theater} alt="generos"/>
        </div>
        <h2>Lista de Gêneros</h2>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Gêneros</td>
              <td>Ações</td>
            </tr>
          </thead>
          <tbody>
            {
              generos.map((item:any) => {
                return(
                  <tr key={item.idGenero}>
                    <td>{item.idGenero}</td>
                    <td>{item.nome}</td>
                    <td>
                      <img className="icon" src={refresh} onClick={() => update(item.idGenero)} alt="Atualizar"/>
                      <img className="icon" src={trash} onClick={() => deletar(item.idGenero)} alt="Deletar"/>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <form onSubmit={ event => {
          event.preventDefault();
          salvar();
        }}>
          <Input type="text" label="Cadastrar Gênero" name="genero" placeholder="Gênero" value= {genero} onChange={e => setGenero(e.target.value)}/>
          <div className="btn">
            <Button value="Salvar"/>
          </div>
        </form>
      </main>
      <Footer/>
    </div>
  );
}

export default Genero;