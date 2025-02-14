// Parece html, porem ele está dentro do JS
function App (){
  return (
  <div
  style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8 }}>
      <label 
      htmlFor="nome"
      style={{display: 'block', marginBottom: 4}}>
        Nome:
      </label>
      <input
      type="text"
      id="none"
      style={{paddingTop: 8, paddingBottom: 8, borderStyele: 'hidden', width: '100%', borderRadius: 8, outline:'none'}}/>
  <button
  style={{marginTop: 12, paddingBottom: 8, backgroundColor: "blueviolet", color:"white", border: "none", width:"100%", borderRadius: 8  }}>
  Enviar
  </button>
      </div>
  )
}

export default App