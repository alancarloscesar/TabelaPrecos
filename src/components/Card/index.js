import React from 'react'
import './card.css'
import Img1 from '../../assets/item1.png'
import Img2 from '../../assets/item2.png'
import Img3 from '../../assets/item3.png'

export default function Card(){
    return(
    <>
    <h1 className='titulo'>PLANOS</h1>
    <div className='ControllerCards'>
        <div className='CardContainer'>
            <header>
                <p>Basico</p>
            </header>
            <img src={Img1} alt='Imagem do card'/>
            <main className='ContainerMain'>
                <div className='MainPreco'>
                    <h2>R$39,90</h2>
                    <h3>/mês</h3>
                </div>
                <div className='MainContext'>
                    <h3>1 Gb espaço</h3>
                    <h3>10 contas email</h3>
                    <h3>10k acessos / mês</h3>
                    <h3>Suporte entre 24 horas</h3>
                </div>
            </main>
            <button>Começar</button>
        </div>

        <div className='CardContainer CardContainerMeio'>
            <header>
                <p>Iniciante</p>
            </header>
            <img src={Img2} alt='Imagem do card'/>
            <main className='ContainerMain'>
                <div className='MainPreco'>
                    <h2>R$59,90</h2>
                    <h3>/mês</h3>
                </div>
                <div className='MainContext'>
                    <h3>3 Gb espaço</h3>
                    <h3>40 contas email</h3>
                    <h3>Acessos ilimitados / mês</h3>
                    <h3>Suporte entre 24 horas</h3>
                </div>
            </main>
            <button>Começar</button>
        </div>

        <div className='CardContainer'>
            <header>
                <p>Empresas</p>
            </header>
            <img src={Img3} alt='Imagem do card'/>
            <main className='ContainerMain'>
                <div className='MainPreco'>
                    <h2>R$99,90</h2>
                    <h3>/mês</h3>
                </div>
                <div className='MainContext'>
                    <h3>50 Gb espaço</h3>
                    <h3>Contas ilimitadas email</h3>
                    <h3>Acessos ilimitados / mês</h3>
                    <h3>Suporte Privado</h3>
                </div>
            </main>
            <button>Começar</button>
        </div>
    </div>
    </>
    )
}