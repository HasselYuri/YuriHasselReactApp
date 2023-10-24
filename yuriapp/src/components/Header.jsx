import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            Colocar algo aqui dps
                        </span>
                    </button>
                    <div className="collapse navbar-collapse ms-md-auto justify-content-end" id="navbarNav">
                        <ul class="nav nav-pills nav-fill">
                            <li class="nav-item">
                                <Link to="/" className="nav-link">Home</Link> 
                            </li>
                            <li class="nav-item">
                            <Link to="/maisSobre" className="nav-link">Mais Sobre Mim</Link> 
                            </li>
                            <li class="nav-item">
                            <Link to="/contato" className="nav-link">Contato</Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}