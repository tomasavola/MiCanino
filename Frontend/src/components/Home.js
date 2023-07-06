import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import FotoMapa from "./FotoMapa";
import Saludo from "./Saludo";
import Logos from "./Logos";

export default function Home() {
    return (
        <div>
            <Logos />
            <Saludo /> 
            <FotoMapa />
            <NavBar />
        </div>

    )

}
