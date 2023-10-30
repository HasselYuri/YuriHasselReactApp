import { Link } from "react-router-dom"

export default function Contato() {
    return (
        <div className="content">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="row align-items-center">
                            <div className="col-lg-7 mb-5 mb-lg-0">
                                <h2 className="mb-5">Quer contratar um serviço? <br/> É muito fácil!</h2>
                                <form className="border-right pr-5 mb-5" method="post" id="contactForm" name="contactForm" novalidate="novalidate">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" className="form-control" name="fname" id="fname" placeholder="Nome"/>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <input type="text" className="form-control" name="lname" id="lname" placeholder="Sobrenome"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <input type="text" className="form-control" name="email" id="email" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <textarea className="form-control" name="message" id="message" cols="30" rows="7" placeholder="Descreva sua necessidade. Vamos descobrir como resolver juntos."></textarea>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="submit" value="Enviar mensagem" className="btn btn-primary rounded-0 py-2 px-4"/>
                                                <span className="submitting"></span>
                                        </div>
                                    </div>
                                </form>
                                <div id="form-message-warning mt-4"></div>
                                
                            </div>
                            <div className="col-lg-4 ml-auto">
                                <h3 className="mb-4">Seu contato estara apoiando um Jovem Programador</h3>
                                <p>O curso permite que jovens possam se capacitar em Tecnologia da Informação através do parceiro de ensino, o Senac SC - Serviço Nacional de Aprendizagem Comercial - que dispõe de ampla experiência na área de formação e capacitação de profissionais e disponibilizará as instalações em aproximadamente 20 municípios de Santa Catarina.</p>
                                <p><Link to="https://www.jovemprogramador.com.br/">Leia Mais</Link></p>
                            </div>
                            
                            <br></br>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        </div>
    )
}