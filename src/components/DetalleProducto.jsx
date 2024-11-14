
const DetalleProducto = () => {
  return (
    <div className="container py-5"> 
      <div className="row"> 
        <div className="col-md-6"> 
          <img src="https://scontent.faep14-2.fna.fbcdn.net/v/t1.6435-9/83945758_132216964941988_4753168606299160576_n.png?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHEMD1v74ya37crCbBwGZ2H4CaVEXWfCNfgJpURdZ8I17zQCIVpeD8GBDSiCBb3qq0&_nc_ohc=Kq0CRdT6LGEQ7kNvgG7xiRe&_nc_zt=23&_nc_ht=scontent.faep14-2.fna&_nc_gid=APOlsv9vb2Y7WW7cF1YRKgT&oh=00_AYCLbY9GDtKVSzuTtEueK9ntmiQeyQJBE5vFTDEp8-1RrQ&oe=675DFA09" className="img-fluid" alt="" /> 
        </div> 
          <div className="col-md-6"> 
            <h1>Apunte!</h1> 
            <h4 className="text-muted">Apunte 1</h4> 
            <h3 className="text-primary">$50</h3> 
            <h5 className="text-success">Entrega inmediata</h5> 
            <button className="btn btn-primary mt-4" type="button">Añadir al carrito</button> 
          </div> 
      </div> 
    </div>
  )
}

export default DetalleProducto