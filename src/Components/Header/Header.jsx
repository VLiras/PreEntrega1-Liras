import Search from "../Search/SearchBar"
function Header(){
    return(
        <div className="header">
            <div className="first">
                <a href="#">DeepAudio</a>
            </div>
            <div>
                <Search/>
            </div>
            <div>
                <section className="user"><i class="fa-regular fa-circle-user"></i></section>
            </div>
        </div>
    )
}
export default Header