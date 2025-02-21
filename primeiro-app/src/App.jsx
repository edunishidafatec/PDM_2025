// Parece html, porem ele está dentro do JS
import './styles.css'
function App (){
  const estiloBotao = {marginTop: 12, paddingBottom: 8, backgroundColor: "blueviolet", color:"white", border: "none", width:"100%", borderRadius: 8  }
  const textoDoRotulo = 'Nome:'
  const obterTextoDoBotao = () => 'Enviar'
  const aoClicarNoBotao = () => alert('Clicou')
  return (
  <div
  style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8 }}>
      <label 
      htmlFor="nome"
      className='rotulo'
      style={{display: 'block', marginBottom: 4}}>
        {textoDoRotulo}
      </label>
      <input
      type="text"
      id="none"
      style={{paddingTop: 8, paddingBottom: 8, borderStyele: 'hidden', width: '100%', borderRadius: 8, outline:'none'}}/>
  <button
  onClick={aoClicarNoBotao} // Poderia fazer direto aqui, sem uso de const
  style={estiloBotao}>
  {obterTextoDoBotao()}
  </button>
      </div>
  )
}

export default App