import React, { useContext, useState } from "react";
import Sidebar from './../../components/Sidebar/index';
import jsonp from "jsonp";


import homeSelect from '../../assets/icones/homeSelect.svg';
import consulta from '../../assets/icones/consulta.svg';
import Button from "../../components/Button";
import { Link } from 'react-router-dom';
import  "./index.css"
import { API_JS, baseURL } from "../../services/baseURL";
import { ApiContext } from './../../contexts/ApiContext';

interface ModelResponse{
    nome: string,
    atividade_principal:[{text:string, code:string,}],
    abertura: string,
    situacao: string,
    cep: string,
    cnpj: string,
    capital_social: string,
    email: string,
}

// 62173620009306 Ex

export default function Home(){
    const [cnpjInput, setCnpjInput] = useState<number | string>();
    const {setResquest} = useContext(ApiContext)

    async function handleConsult(){
        jsonp(`${baseURL}${cnpjInput}`,  (err, data: ModelResponse) => {
            if (err) {
                console.error(err.message);
            } else {
                setResquest("Method: POST");
                console.log(data)
                let valueObj = {               
                    nome: data.nome,
                    atividade_principal:data.atividade_principal[0].text,
                    abertura: data.abertura,
                    situacao:data.situacao,
                    cep:data.cep,
                    cnpj: data.cnpj,
                    capital_social: data.capital_social,
                    email: data.email,
                    descricao: "",
                }
                API_JS.post("/empresas",valueObj)
                .then(res=>{console.log(res)})
                .then(err=>{console.log(err)})
            }
        });
    }

    return(
        <main>
            <section>
                <Sidebar iconConsult={consulta} iconHome={homeSelect}></Sidebar>
            </section>
            <section className="container-home">
                <div className="container-infor">
                    <h1 className="title">Buscar informações</h1>
                    <h1 className="title">sem sair de casa.</h1>
                    <p className="text">E muito fácil consultar o CNPJ de uma empresa </p>
                    <h5 className="text">basta informar no campo abaixo o CNPJ da empresa que desejar buscar.</h5>
                <div>
                    <input
                        className="input-value" 
                        placeholder="Número do CNPJ"
                        value={cnpjInput}
                        onChange={e => setCnpjInput(e.target.value)}
                        type="number" 
                    />
                    <Link to="/company">
                        <Button onClick={handleConsult} css="btn" title="Consulta" />
                    </Link>
                </div>
                    <h5 className="text">Os dados recebidos são direto da Receita Federal</h5>
                    <h5 className="text">a fonte mais confiavel para obter</h5>
                    <h5 className="text">esse dados.</h5>
                </div>
            </section>
        </main>
    )
}