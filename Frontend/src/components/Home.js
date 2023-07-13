import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import FotoMapa from "./FotoMapa";
import Saludo from "./Saludo";
import Logos from "./Logos";
import InfoCanino from "./InfoCanino";
import SearchBar from "./SearchBar";
import "./SearchBar.css";

export default function Home() {

    return (
        <div>
            <InfoCanino />
            <Logos />
            <Saludo />
            <FotoMapa />
            <SearchBar />
            <NavBar />
        </div>
    );
}
