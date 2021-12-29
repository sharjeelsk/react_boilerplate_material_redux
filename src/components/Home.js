import React from 'react'
import Header from './Header/Header'
import "./Home.scss"
import {ReactComponent as Border} from '../Images/roughborder.svg'

function Home() {
    return (
        <div>
            <section className="section1">
            <div className="row">

            {/* classicon square colum 1 */}
            <div className="pt-5 col-4">
            <div className="mt-3 ml-auto classiconsquare">
            <h3>Adventurer</h3>
            </div>

            <div className="mt-3 ml-auto classiconsquare">
            <h3>Jack of all trades</h3>
            </div>

            <div className="mt-3 ml-auto classiconsquare">
            <h3>Archafter</h3>
            </div>

            <div className="mt-3 ml-auto classiconsquare">
            <h3>Enchanter</h3>
            </div>
            </div>    
            {/* classicon square colum 1 end */}


            {/* mid container */}
            <div className="mx-auto middiv ">
            <h1>Adventurer</h1>
            <p>1/500</p>
            <p>
            Incididunt enim enim fugiat amet ex anim sunt amet consectetur sunt dolore proident magna exercitation. Laborum commodo nisi exercitation nulla dolore veniam occaecat. Id fugiat anim exercitation officia dolor. Nisi duis laboris elit occaecat proident dolore et reprehenderit dolore dolore veniam do pariatur. Amet sint exer
            </p>

            <div className="ethcont">
                <span className="spanlarge">RESERVE
                <br />
                </span>
                <span className="spansmall">.01ETH.</span>
            </div>
            </div>
            {/* mid container */}

            
            {/* classicon square colum 1 */}
            <div className="pt-5 col-4">
            <div className="mt-3 mr-auto classiconsquare">
            <h3>Adventurer</h3>
            </div>

            <div className="mt-3 mr-auto classiconsquare">
            <h3>Jack of all trades</h3>
            </div>

            <div className="mt-3 mr-auto classiconsquare">
            <h3>Archafter</h3>
            </div>

            <div className="mt-3 mr-auto classiconsquare">
            <h3>Enchanter</h3>
            </div>
            </div>    
            {/* classicon square colum 1 end */}

            

            </div>
            <Border style={{position:"absolute",top:"98vh"}} />




            </section>


            
            <div  className="row align-items-center justify-content-between bottomsection1">
                <div className="col-2">
                    <h2 className="frizregular lightgold">Tabletop</h2>
                    <p className="subheading">RPG-Ready</p>
                </div>
                <div className="col-2 borderleft">
                    <h2 className="frizregular lightgold">6+</h2>
                    <p className="subheading">Professions</p>
                </div>
                <div className="col-2 borderleft">
                    <h2 className="frizregular lightgold">Unique</h2>
                    <p className="subheading">Loot & Gear</p>
                </div>
                <div className="col-2 borderleft">
                    <h2 className="frizregular lightgold">Amazing</h2>
                    <p className="subheading">NFT Art</p>
                </div>
                <div className="col-2 borderleft">
                    <h2 className="frizregular lightgold">Crafting</h2>
                    <p className="subheading">Guilds</p>
                </div>
                <div className="col-2 borderleft">
                    <h2 className="frizregular lightgold">Passive</h2>
                    <p className="subheading">Income</p>
                </div>
            </div>
        </div>
    )
}

export default Home
