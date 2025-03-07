import React from "react"
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null
    }
  }
 render(){
   return(
     <div>Meu-App</div>
   )
 }
}

export default App
