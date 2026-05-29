import Logo from "./Logo"
function Footer(){
    return (
        <footer className="bg-yellow-300 flex flex-col items-center h-32 pt-4">
            <Logo/>
            <p>Alguns direitos reservados</p>
        </footer> 

    )
}
export default Footer