import React, { useContext, useState } from "react";


import {FaCheckCircle, FaEdit, FaUndoAlt} from 'react-icons/fa'
import {FaTrash} from 'react-icons/fa'
import { API_JS } from "../../services/baseURL";

import  "./index.css"
import { ApiContext } from './../../contexts/ApiContext';

interface CardProps{
    id: number,
    nome: string,
    atividade_principal: string,
    abertura: string,
    situacao: string,
    cep: string,
    cnpj: string,
    capital_social: string,
    email: string,
    descricao: string
}

const border ={
    border: "0.1rem solid var(--title-color)",
    borderRadius: "4px",
    padding: "0 0 0 0.3rem",
}

export default function Card(props:CardProps){

    const [edit, setEdit] = useState(true);
    const [nome, setNome] = useState(`${props.nome}`);
    const [atividade_principal, setAtividadePrincipal] = useState(`${props.atividade_principal}`);
    const [abertura, setAbertura] = useState(`${props.abertura}`);
    const [situacao, setSituacao] = useState(`${props.situacao}`);
    const [cep, setCep] = useState(`${props.cep}`);
    const [cnpj, setCnpj] = useState(`${props.cnpj}`);
    const [capital_social, setCapitalSocial] = useState(`${props.capital_social}`);
    const [email, setEmail] = useState(`${props.email}`);
    const [descricao, setDescricao] = useState(`${props.descricao}`);

    const { setResquest } = useContext(ApiContext)

    function handleEdit(){
        console.log(edit)
        !edit? setEdit(true): setEdit(false)
        if(edit === false){
            handleSaveEdit();
        }
    }

    function handleUndoEdit(){
        setNome(`${props.nome}`);
        setAtividadePrincipal(`${props.atividade_principal}`);
        setAbertura(`${props.abertura}`);
        setSituacao(`${props.situacao}`);
        setCep(`${props.cep}`);
        setCnpj(`${props.cnpj}`);
        setCapitalSocial(`${props.capital_social}`);
        setEmail(`${props.email}`);
        setDescricao(`${props.descricao}`);
    }
    function handleSaveEdit(){
        setNome(`${nome}`);
        setAtividadePrincipal(`${atividade_principal}`);
        setAbertura(`${abertura}`);
        setSituacao(`${situacao}`);
        setCep(`${cep}`);
        setCnpj(`${cnpj}`);
        setCapitalSocial(`${capital_social}`);
        setEmail(`${email}`);
        setDescricao(`${descricao}`);

        API_JS.put(`/empresas/${props.id}`,{
            nome,
            atividade_principal,
            abertura,
            situacao,
            cep,
            cnpj,
            capital_social,
            email,
            descricao
        })
        .then(res =>{
            console.log(res);
            setResquest('Method: put');
        })
        .catch(err =>{
            console.log(err);
        })
    }
    function handleDeletCard(){
        API_JS.delete(`/empresas/${props.id}`)
        .then(res =>{
            setResquest('Method: delete');
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    return(
        <div className="container-card">
            <div className="container-icons">
                {
                edit?
                    (
                        <>
                            <FaEdit className="icon-2" onClick={handleEdit} size={30} color={"B2B2B2"} />
                            <FaTrash className="icon" onClick={handleDeletCard} size={30} color={"B2B2B2"} />
                        </>
                    )
                    :
                    (
                        <>
                            <FaCheckCircle className="icon-2" onClick={handleEdit} size={30} color={"B2B2B2"} />
                            <FaUndoAlt className="icon" onClick={handleUndoEdit} size={30} color={"B2B2B2"} />
                        </>
                    )
                }
            </div>
            
            <h1 className="title-card">Empresa:
                <input
                    onChange={e => setNome(e.target.value)}
                    type="text" 
                    className="text-card" 
                    disabled={edit} 
                    style={edit?{}:border} 
                    value={nome} 
                />
            </h1>
            <h1 className="title-card">Atividade principal:
                <input
                    onChange={e => setAtividadePrincipal(e.target.value)}
                    type="text" 
                    className="text-card"
                    disabled={edit} 
                    style={edit?{}:border} 
                    value={atividade_principal} 
                />
            </h1>
            <div className="container-card-sub">
                <div>
                    <h1 className="title-card">Abertura:
                        <input
                            onChange={e => setAbertura(e.target.value)}
                            type="text" 
                            className="text-card" 
                            disabled={edit} 
                            style={edit?{}:border} 
                            value={abertura} 
                        />
                    </h1>
                    <h1 className="title-card">Situacao:
                        <input
                            onChange={e => setSituacao(e.target.value)}
                            type="text" 
                            className="text-card"
                            disabled={edit} 
                            style={edit?{}:border} 
                            value={situacao} 
                        />
                    </h1>
                    <h1 className="title-card">Capital social:
                        <input
                            onChange={e => setCapitalSocial(e.target.value)}
                            type="text"
                            className="text-card" 
                            disabled={edit} 
                            style={edit?{}:border} 
                            value={capital_social} 
                        />
                    </h1>
                </div>
                <div>
                    <h1 className="title-card">CNPJ:
                        <input
                            onChange={e => setCnpj(e.target.value)}
                            type="text" 
                            className="text-card" 
                            disabled={edit} 
                            style={edit?{}:border} 
                            value={cnpj} 
                        />
                    </h1>
                    <h1 className="title-card">CEP:
                        <input
                            onChange={e => setCep(e.target.value)}
                            type="text" 
                            className="text-card" 
                            disabled={edit} 
                            style={edit?{}:border} 
                            value={cep} 
                        />
                    </h1>
                    <h1 className="title-card">Email:
                        <input
                            onChange={e => setEmail(e.target.value)}
                            type="text"
                            className="text-card" 
                            disabled={edit} 
                            style={edit?{}:border} 
                            value={email} 
                        />
                    </h1>
                </div>
            </div>
            <h1 className="title-card">Descrição:
                        <textarea
                            onChange={e => setDescricao(e.target.value)}
                            className="text-card" 
                            disabled={edit} 
                            style={edit?{}:border} 
                            value={descricao} 
                            cols={30} rows={2}
                        />
                    </h1>
        </div>
    )
}