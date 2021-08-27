import React, { useContext, useEffect, useState } from "react";
import consultaSelect from '../../assets/icones/consultaSelect.svg'
import home from '../../assets/icones/home.svg'
import Sidebar from './../../components/Sidebar/index';
import Button from './../../components/Button/index';

import  "./index.css"
import Card from "../../components/Card";
import { Link } from "react-router-dom";
import { API_JS } from "../../services/baseURL";
import { ApiContext } from './../../contexts/ApiContext';

interface CardResponse{
    id: number,
    nome: string,
    atividade_principal: string,
    abertura: string,
    situacao: string,
    cep: string,
    cnpj: string,
    capital_social: string,
    email: string,
    descricao: string,
}

export default function Company(){
    const [cards, setCards] = useState<CardResponse[]>([]);
    const { resquest} = useContext(ApiContext)
    
    useEffect(()=>{
        API_JS.get("/empresas/")
        .then(res =>{
            setCards(res.data);
        })
        .catch(err =>{
            console.log(err);
        })
    },[resquest])
    return(
        <main>
            <section>
                <Sidebar iconConsult={consultaSelect} iconHome={home}></Sidebar>
            </section>
            <section className="container-company">
                <div className="container-infor-company">
                    <h1 className="title-campany">Empresas</h1>
                    <Link to="/">
                        <Button onClick={()=>{}} css="btn-company" title="Nova consulta" />
                    </Link>
                </div>
                <div className="container-card-company">
                    {
                        cards.map((card: CardResponse ) =>(
                            <Card
                                key={card.id}
                                id={card.id}
                                nome={card.nome}
                                cep={card.cep}
                                situacao={card.situacao}
                                cnpj={card.cnpj}
                                email={card.email}
                                abertura={card.abertura} 
                                atividade_principal={card.atividade_principal} 
                                capital_social={parseInt(card.capital_social).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} 
                                descricao={card.descricao} 
                            />   
                        ))
                    }
                </div>
            </section>
        </main>
    )
}