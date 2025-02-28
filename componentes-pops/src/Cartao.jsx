
const Cartao = (props) => {
    return (
        <div className="card">
            {/*cabecalho do cartao 8*/}
            <div className="card-header text-muted"> {props.cabecalho}</div>
            {/*corpo do cartao*/}
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}

export default Cartao
