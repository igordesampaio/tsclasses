// src/pages/Services.jsx
function Services() {
  return (
   <div> <div>
      <h1>Serviços</h1>
      <p>Conheça nossos serviços personalizados para você aprender inglês mais rápido.</p>
    </div>
    <div>

      <div className="text-center mb-4">
        <h1 className="fw-bold">FAST ENGLISH!</h1>
        <h4>Qual o tamanho da sua dúvida?</h4>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">

        <div className="col ">
          <div className="card h-100">
            <img src="/Imagens/img30.png" className="card-img-top img-fluid w-75 mx-auto d-block" alt="Produto 1" />
            <div className="card-body">
              <h5 className="card-title">Aulas Particulares</h5>
              <p className="card-text">
                Aulas personalizadas focadas no seu ritmo.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img src="/Imagens/img60.png" className="card-img-top img-fluid w-75 mx-auto d-block" alt="Produto 2" />
            <div className="card-body">
              <h5 className="card-title">Conversação</h5>
              <p className="card-text">
                Pratique inglês real com situações do dia a dia.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img src="/Imagens/img120.png" className="card-img-top img-fluid w-75 mx-auto d-block" alt="Produto 3" />
            <div className="card-body">
              <h5 className="card-title">Aulas para Viagem</h5>
              <p className="card-text">
                Prepare-se para viajar com segurança e comunicação clara.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
   </div> 
  );
}

export default Services;
