import React from 'react'
import "./Home.scss"
import {ReactComponent as Border} from '../Images/roughborder.svg'
import Planet from '../Images/planet.png'
import Planet2 from '../Images/planet2.png'

function Home() {
    const [image,setImage]=React.useState({img1:false,img2:false})
    return (
        <div>
            <section className="section1">
            <header>
                <div className="row align-items-center justify-content-between m-auto">
                    <div className="col-sm-12 col-xs-12 col-md-4 col-lg-3 col-xl-3">
                        <div className="logodiv"></div>
                    </div>

                    <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-6 row align-items-center justify-content-between">
                    <h2 className="frizregular lightgold m-auto ">NFT Marketplace</h2>
                    <h2 className="frizregular lightgold m-auto ">NFT Character Sheet</h2>
                    <h2 className="frizregular lightgold m-auto ">White Paper</h2>
                    </div>

                    <div className="col-sm-12 col-xs-12 col-md-4 col-lg-3 col-xl-3">
                    <div className="ml-auto connectdiv"></div>
                    </div>
                </div>
            </header>



            <div className="row pt-5">

            {/* classicon square colum 1 */}
            <div className="pt-5 col-4">
            <div className="mt-3 ml-auto classiconsquare">
            <img onClick={()=>setImage({img1:false,img2:true})} src={Planet2} alt="planet"  height={50} width={50} />
            <h3>Adventurer</h3>
            </div>

            <div className="mt-3 ml-auto classiconsquare">
            <img onClick={()=>setImage({img1:false,img2:true})} src={Planet2} alt="planet"  height={50} width={50} />
            <h3>Jack of all trades</h3>
            </div>

            <div className="mt-3 ml-auto classiconsquare">
            <img onClick={()=>setImage({img1:false,img2:true})} src={Planet2} alt="planet"  height={50} width={50} />
            <h3>Archafter</h3>
            </div>

            <div className="mt-3 ml-auto classiconsquare">
            <img onClick={()=>setImage({img1:false,img2:true})} src={Planet2} alt="planet"  height={50} width={50} />
            <h3>Enchanter</h3>
            </div>
            </div>    
            {/* classicon square colum 1 end */}


            {/* mid container */}
            <div className="mx-auto middiv ">
            <h1>Adventurer</h1>
            <p>1/500</p>
            <p>
            Incididunt enim enim fugiat amet ex anim sunt amet consectetur sunt dolore proident magna exercitation. Laborum commodo nisi exercitation nulla dolore veniam occaecat. Id fugiat anim exercitation officia dolor. Nisi duis laboris elit occaecat proident 
            </p>
            <img src={image.img1?Planet:Planet2} alt="planet" height={100} width={100} />

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
            <div className="mt-3 mr-auto classiconsquare" >
            <img onClick={()=>setImage({img1:true,img2:false})} src={Planet} alt="planet"  height={50} width={50} />
            <h3>Adventurer</h3>
            </div>

            <div className="mt-3 mr-auto classiconsquare">
            <img onClick={()=>setImage({img1:true,img2:false})} src={Planet} alt="planet"  height={50} width={50} />
            <h3>Jack of all trades</h3>
            </div>

            <div className="mt-3 mr-auto classiconsquare">
            <img onClick={()=>setImage({img1:true,img2:false})} src={Planet} alt="planet"  height={50} width={50} />
            <h3>Archafter</h3>
            </div>

            <div className="mt-3 mr-auto classiconsquare">
            <img onClick={()=>setImage({img1:true,img2:false})} src={Planet} alt="planet"  height={50} width={50} />
            <h3>Enchanter</h3>
            </div>
            </div>    
            {/* classicon square colum 1 end */}

            

            </div>
            <Border style={{position:"absolute",top:"98vh",width:"100vw"}} />




            </section>


            
            <div  className="row align-items-center justify-content-between bottomsection1">
                <div className="col-sm-6 col-xs-6 col-md-2 col-lg-2 col-xl-2">
                    <h2 className="frizregular lightgold">Tabletop</h2>
                    <p className="subheading">RPG-Ready</p>
                </div>
                <div className="col-sm-6 col-xs-6 col-md-2 col-lg-2 col-xl-2 borderleft">
                    <h2 className="frizregular lightgold">6+</h2>
                    <p className="subheading">Professions</p>
                </div>
                <div className="col-sm-6 col-xs-6 col-md-2 col-lg-2 col-xl-2 borderleft">
                    <h2 className="frizregular lightgold">Unique</h2>
                    <p className="subheading">Loot & Gear</p>
                </div>
                <div className="col-sm-6 col-xs-6 col-md-2 col-lg-2 col-xl-2 borderleft">
                    <h2 className="frizregular lightgold">Amazing</h2>
                    <p className="subheading">NFT Art</p>
                </div>
                <div className="col-sm-6 col-xs-6 col-md-2 col-lg-2 col-xl-2 borderleft">
                    <h2 className="frizregular lightgold">Crafting</h2>
                    <p className="subheading">Guilds</p>
                </div>
                <div className="col-sm-6 col-xs-6 col-md-2 col-lg-2 col-xl-2 borderleft">
                    <h2 className="frizregular lightgold">Passive</h2>
                    <p className="subheading">Income</p>
                </div>
            </div>
        </div>
    )
}

export default Home
