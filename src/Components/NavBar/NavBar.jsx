import Cart from "../CartWidget/CartWidget"
import gallery from '../NavBar/gallery.png';
function NavBar(){
    return(
        <nav className="bar center">
            <div className="wrap">
                <div className="navOptions"><li>Ofertas</li></div>
                <div className="navOptions"><li>Publicados Recientemente</li></div>
                <div className="navOptions"><li>Tematica</li></div>
                <div className="navOptions"><li>Publicar</li></div>
                <div><Cart/></div>
            </div>
        </nav>
    )
}
export default NavBar