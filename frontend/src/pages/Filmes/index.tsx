import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Input from '../../components/Input';
import cinema from '../../assets/images/cinema.png';
import imgtrash from '../../assets/images/trash.png';
import imgrefresh from '../../assets/images/refresh.png';
import '../../assets/global.css'
import './style.css'

function Filmes() {
  const [idFilme, setIdFilme] = useState(0);
    const [Filme, setFilme] = useState('');
    const [Filmes, setFilmes] = useState([]);
    const [genero, setGenero] = useState('');
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        listar();
        listarGeneros();
    }, []);

    const listarGeneros = () => {
        fetch('http://localhost:5000/api/Generos', {
            method: 'GET',
            headers: {

                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setGeneros(dados);
            })
            .catch(erro => console.error(erro));
    }

    const listar = () => {
        fetch('http://localhost:5000/api/Filmes', {
            method: 'GET',
            headers: {

                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })

            .then(response => response.json())
            .then(dados => {
                setFilmes(dados);
            })
            .catch(erro => console.error(erro));
    }

    const trash = (id: number) => {
        if (window.confirm('Deseja excluir o Filme?')) {
            fetch('http://localhost:5000/api/Filmes/' + id, {
                method: 'DELETE',
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('token-filmes')
                }

            })
                .then(response => response.json())
                .then(dados => {
                    listar();
                })
                .catch(erro => console.error(erro));
        }
    }

    const refresh = (id: number) => {
        fetch('http://localhost:5000/api/Filmes/' + id, {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setIdFilme(dados.idFilme);
                setFilme(dados.titulo);
            })
            .catch(erro => console.error(erro));
    }

    const salvar = () => {
        const form = {
            titulo: Filme,
            IdGenero: genero
        };

        const method = (idFilme === 0 ? 'POST' : 'PUT');
        const urlRequest = (idFilme === 0 ? 'http://localhost:5000/api/Filmes' : 'http://localhost:5000/api/Filmes/' + idFilme);

        fetch(urlRequest, {
            method: method,
            body: JSON.stringify(form),
            headers: {
                'content-type': 'application/json',
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(() => {
                alert('Filme cadastrado');
                setIdFilme(0);
                setFilme('');
                listar();
            })
            .catch(erro => console.error(erro));
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
              Filmes.map((item:any) => {
                return(
                  <tr key={item.idFilme}>
                    <td>{item.titulo}</td>
                    <td>{item.genero}</td>
                    <td>
                      <img className="icon" src={imgrefresh} onClick={() => refresh(item.idFilme)} alt="Atualizar"/>
                      <img className="icon" src={imgtrash} onClick={() => trash(item.idFilme)} alt="Deletar"/>
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
          <Input type="text" label="Cadastrar filme" name="labelFilme" placeholder="Título do Filme" value= {Filme} onChange={e => setFilme(e.target.value)}/>
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