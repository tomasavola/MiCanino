import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Mapa from "./Mapa";
import Saludo from "./Saludo";
import Logos from "./Logos";
import InfoCanino from "./InfoCanino";

export default function Home() {

    return (
        <div>
            <InfoCanino />
            <Logos />
            <Saludo />
            <Mapa />
            <NavBar />
        </div>
    );
}
