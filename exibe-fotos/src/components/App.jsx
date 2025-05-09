//rafce
import React from 'react'
import Busca from './Busca'
import env from  'react-dotenv'
// import { createClient } from 'pexels'
import pexelsClient from '../utils/pexelsClient'
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'
import Imagem from './Imagem'
class App extends React.Component {

  //delcarar uma variavel de intancia chamada client que nasce vaelndo null
  // implementar a função apropriada do ciclo de vida para fazer a inicialização, chamando a função createClient
  //obrserve que a createClient recebe, como parametro, a chave API, que pode ser acessada por env.PEXELS_KEY

  // pexelsclient = null

  state = {
    photos: []
  }

  componentDidMount(){
    // this.pexelsclient = createClient(env.PEXELS_KEY)
    
  }
  
  // onBuscaRealizada = (termo) => {
  //   this.pexelsclient.photos.search({
  //     query: termo,
  //     per_page: 10
  //   }).then(result => this.setState({photos: result.photos}))

  // }

  onBuscaRealizada = (termo) =>{
    pexelsClient.get('/search', {
      params: {query: termo}
    }).then((result) => this.setState({photos: result.data.photos}))
  }

  render(){
    return (
      <div className='grid justify-content-center'>
        <div className='col-12'>
          <PexelsLogo/>
          <h1 className='text-center'>Exibir uma lista de...</h1>
        </div>
        <div className='col-12'>
          <Busca 
          dica="Digite algo que deseja ver..."
          onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className="col-12">
          <ListaImagens photos={this.state.photos}/>
        </div>
      </div>
    )
  }
  
}

export default App

{/* <ListaImagens photos={this.state.photos.map(photo => {
  return{
    src: photo.src.small, alt: photo.alt
  } */}
{/* })}/> */}
{/* {
  this.state.photos.map((photo, key) => {
    return(
      // <Imagem src={photo.src.small} alt={photo.alt}/>
      <div>
        <img src={photo.src.small} alt={photo.alt}/>
      </div>
    )
  })
} */}