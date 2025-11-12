import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 300);
    }, []);

    return (
        <div className="container">
            <h1 className={visible ? "fade-in" : "hidden"}>
                ¡Bienvenido a mi proyecto React con Vite, me alegro! 🚀
            </h1>
            <p className={visible ? "fade-in" : "hidden"}>
                Esta es una oracion de prueba. Lucas
            </p>
            <p className={visible ? "fade-in" : "hidden"}>          
                Cambio realizado por Brunodev
            </p>
        </div>
    );
}

export default App;
