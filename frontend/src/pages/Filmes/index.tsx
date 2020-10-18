import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Input from '../../components/Input';
import cinema from '../../assets/images/cinema.png';
import trash from '../../assets/images/trash.png';
import refresh from '../../assets/images/refresh.png';
import '../../assets/global.css'
import './style.css'

function Filmes() {
  const [idFilme, setIdFilme] = useState(0);
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [filmes, setFilmes] = useState([]);
  const [generos, setGeneros] = useState([]);


  useEffect(() => {
    listar();
  }, [])

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

  const deletar = (id:number) => {
    if (window.confirm('Deseja excluir o Filme?')) {
      fetch('http://localhost:5000/api/filmes/' + id, {
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
    fetch('http://localhost:5000/api/filmes/' + id, {
      method: 'GET',
      headers: {
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
    .then(response => response.json())
    .then(dados => {
      setIdFilme(dados.idFilme);
      setIdFilme(dados.titulo);
      setIdFilme(dados.idGenero);
    })
    .catch(erro => console.error(erro))
  }

  const salvar = () => {
    const form = {
      titulo: titulo,
      genero: genero
    };

    const method = (idFilme === 0? 'POST' : 'PUT');
    const urlRequest = (idFilme === 0? 'http://localhost:5000/api/filmes' : 'http://localhost:5000/api/filmes/' + idFilme);

    fetch(urlRequest, {
      method: method,
      body:JSON.stringify(form),
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer' + localStorage.getItem('token-filmes')
      }
    })
    .then(() => {
      alert('Filme cadastrado')
      setIdFilme(0);
      setTitulo('');
      setGenero('');
      listar()
    })
    .catch(erro => console.error(erro))
  }

  return (
    <div className="Filme">
      <Header description="Cadastre os filmes de sua preferência"/>
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
              <td>Ações</td>
            </tr>
          </thead>
          <tbody>
            {
              filmes.map((item:any) => {
                return(
                  <tr key={item.idFilme}>
                    <td>{item.titulo}</td>
                    <td>{item.genero}</td>
                    <td>
                      <img className="icon" src={refresh} onClick={() => update(item.idFilme)} alt=""/>
                      <img className="icon" src={trash} onClick={() => deletar(item.idFilme)} alt=""/>
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
          <Input type="text" label="Nome do Filme" name="labelFilme" placeholder="Título do Filme" value= {titulo} onChange={e => setTitulo(e.target.value)}/>
          <div className="select">
            <select id="selectGenero" name="genero" onChange={e => setGenero(e.target.value)} value={genero}>
              <option value="0">Selecione um Gênero</option>
              {
                generos.map((item: any) => {
                  return <option value={item.idGenero}>{item.nome}</option>
                })
              }
            </select>
          </div>
          <div className="btn2">
            <div className="btn">
              <Button value="Salvar"/>
            </div>
          </div>
        </form>
      </main>
      <Footer/>
    </div>
  );
}

export default Filmes;