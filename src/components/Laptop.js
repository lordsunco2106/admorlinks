    import React, { Component } from 'react';
    import '../App.css';
    import { Link } from 'react-router-dom';


    
const laptop = [

    {
    sku:"1",
    name:" NAME: HP 15(CORE i3)",
    brand: " BRAND: HP",
    series: " SERIES: HP 15 core i3",
    pics: "img/hp-15.jpg",
    display: " DISPLAY: 15.6inch",
    displayresolution: " RESOLUTION: 1366 x 768 pixel",
    processor: " PROCESSOR: Intel core i3(6th Gen)",
    memory: " MEMORY: RAM: 4 GB DDR 1TB Harddisk",
    operatingsystem: " OPERATING SYSTEM: 64-bit",
    graphics: " GRAPHICS: Intel HD 520",
    usb: "Sd card reader, VGA port, Microphone jack, Headphones jack, USB 20 SLOTS (1) ",
    batterycell: " 65 W AC ADAPTER, 4 CELL",
    money: "145000 (Negotiable)"
    },
    {
    sku:"2",
    name:" NAME: HP 15 (INTEL CELERON) ",
    brand: " BRAND: HP",
    series: " SERIES: HP 15 intel celeron",
    pics: " img/hp-celeron.jpg",
    display: " DISPLAY: 15.6inch diagonal HD BrightView LED-backlit(1366 x 768)",
    displayresolution: " ",
    processor: " PROCESSOR: Intel celeron N2810",
    memory: " MEMORY: 2GB 1600MHz sd RAM(1 x2 GB), HARDDRIVE: 500GB 5400 rpm SATA, 750GB HDD",
    operatingsystem: " OPERATING SYSTEM: FreeDOS",
    graphics: " GRAPHICS: Intel HD Graphics",
    usb: "2 USB 2.0,1 HEADPHONES/MICROPHONES COMBO, 1 VGA, 1HDMI ",
    batterycell: "45W AC POWER ADAPTER, 4 CELL(41 WHr) Li-ion ",
    money: "105000 (Negotiable)"
    },
    {
    sku:"3",
    name:" NAME: HP PAVILLION G6",
    brand: " BRAND: HP",
    series: " SERIES: PAVILLION",
    pics: " img/hp-pavillion.png",
    display: " DISPLAY: 15.6inch HD",
    displayresolution: " RESOLUTION: 1366 x 768",
    processor: " PROCESSOR: Intel Pentium B960",
    memory: " MEMORY: RAM: 6GB DDR3, 750GB HDD",
    operatingsystem: " OPERATING SYSTEM: windows OS",
    graphics: " GRAPHICS: Intel HD Graphics",
    usb: " ",
    batterycell: " ",
    money: " (Negotiable)"
    },
    {
    sku:"4",
    name:" NAME: HP PAVILLION X360",
    brand: " BRAND: HP",
    series: " SERIES: PAVILLION",
    pics: "img/hp-envy-x360.jpg",
    display: " DISPLAY: 14.00inch",
    displayresolution: " RESOLUTION: 1920 x 1080 pixels",
    processor: " PROCESSOR: core i5",
    memory: " MEMORY: RAM: 16GB 28GB Harddisk",
    operatingsystem: " OPERATING SYSTEM: windows 10",
    graphics: " GRAPHICS: Intel Integrated HD Graphics 520",
    usb: "Touch Screen: YES",
    batterycell: " ",
    money: " (Negotiable)"
    },
    {
    sku:"5",
    name:" NAME: HP ENVY 17",
    brand: " BRAND: HP",
    series: " SERIES: ENVY",
    pics: "img/hp-envy-17.png",
    display: " DISPLAY: 17.30inch",
    displayresolution: " RESOLUTION: 1920 x 1080 pixels",
    processor: " PROCESSOR: core i7",
    memory: " MEMORY: RAM: 16GB 512 Harddisk",
    operatingsystem: " OPERATING SYSTEM: windows 10",
    graphics: " GRAPHICS: DDR5",
    usb: "Touch Pad: YES",
    batterycell: " ",
    money: " (Negotiable)"
    },
    {
    sku:"6",
    name:" MAC",
    brand: " BRAND: APPLE",
    series: " SERIES: MAC",
    pics: "img/mac.jpg",
    display: " ",
    displayresolution: "(1280 x 800 native resolution) ",
    processor: " 1.83 GHz Core Duo(T2400)",
    memory: " STORAGE: 60 GB HDD, MEMORY: RAM: 512 MB, VRAM: 64 MB",
    operatingsystem: " ",
    graphics: "Intel GMA 950",
    usb: " ",
    batterycell: " ",
    money: " (Negotiable)"
    }
    ];
    
    export const infoLaptop =     {
        
    sku:"1",
    name:" NAME: HP 15(CORE i3)",
    brand: " BRAND: HP",
    series: " SERIES: HP core i3",
    pics: "img/hp-15.jpg",
    display: " DISPLAY: 15.6inch",
    displayresolution: " RESOLUTION: 1366 x 768 pixel",
    processor: " PROCESSOR: Intel core i3(6th Gen)",
    memory: " MEMORY: RAM: 4 GB DDR 1TB Harddisk",
    operatingsystem: " OPERATING SYSTEM: 64-bit",
    graphics: " GRAPHICS: Intel HD 520",
    usb: "Sd card reader, VGA port, Microphone jack, Headphones jack, USB 20 SLOTS (1) ",
    batterycell: " 65 W AC ADAPTER, 4 CELL",
    money: "145,000 (Negotiable)"
        }

    function searchingFor(terms){
        return function(x){
            return x.name.toLowerCase().includes(terms.toLowerCase()) || !terms; 
        }   
    }
    class Laptop extends Component {
        constructor(props){
        super(props);
            this.state = {
                laptop:laptop ,
                terms: " ",
            }
            this.searchHandler = this.searchHandler.bind(this);
        }
        searchHandler(event){
this.setState({ terms: event.target.value})
        }
       render() {
            return (
                <div className="container-fluid">
                <h1 className="text-uppercase text-title mt-4 text-center">
                ADMOR LINKS<span className="text-green">Laptops</span>
                </h1>
                
                <div className="text-center my-5">
                <form>
              <input type="text" placeholder="Search here..." className="searchstyle" onChange={this.searchHandler}>
              
              </input>  
                </form>
                </div>
               
                
                {
                    this.state.laptop.filter(searchingFor(this.state.terms)).map( cut => 
                        <div key={laptop.sku}>
                       <div className="row my-3">
                       <div className="col-md-4">
                       <p><img src={cut.pics} className="img-fluid" alt="product"></img></p>
                       </div>
                      <div className="col-md-8 show">
                       <div className="col-md-3 spacing">
                       <p>{cut.name}</p>
                       <p>{cut.memory}</p>
                       
                       </div>
                       <div className="col-md-3 spacing">
                       <p>{cut.operatingsystem}</p>
                       <p>{cut.graphics}</p>
                       
                       </div>    
                       <div className="col-md-3 spacing">
                       <p>{cut.displayresolution}</p>
                       <p>{cut.processor}</p>
                       <p>{cut.money}</p>
                       </div>                                        
                       </div>
                       </div> 
                       
                        
                        </div>
                        
                        )
                }
                <div>
                <Link to="/default">
                <button className="btn btn-primary text-uppercase right">
                Proceed
                </button>
                </Link>
                </div>
                <br />
                <br />

                <hr></hr>
                <div className="row">
                        <div className="col-md-4">
                        <h5 className="text-capitalize text-center text-title">Contact us</h5>
                        <p className="text-muted text-center"> Call us from 8:00am to 7:00pm</p>
                        <p className="text-red text-center contact">08068824971</p>
               <p className="text-uppercase text-center text-muted"><strong>Head Office: Admor links system limited,</strong> No 18b lalubu road, opposite glo office, 
               beside fcmb oke-ilewo <strong>abeokuta.</strong>
                 </p>
                        </div>
                    <div className="col-md-4">
                    <h5 className="text-center text-capitalize text-title">Quick Links</h5>
                    <Link to="/default">
                    <p className="text-center text-muted">About us</p>
                    </Link>
                    <Link to="/default">
                    <p className="text-center text-muted">FAQS</p>
                    </Link>
                    <Link to="/default">
                    <p className="text-center text-muted">Order Tracking</p>
                    </Link>
                    <Link to="/terms">
                    <p className="text-center text-muted">Terms & Conditions</p>
                    </Link>
                    </div>
                    <div className="col-md-4">
                    <h5 className="text-center text-capitalize text-title">Product Categories</h5>
                    <ul type="none" className="cate text-center">
                    <li>
                    <Link to="/accesslists"><span className="text-muted">Accessories</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/laptop"><span className="text-muted">Laptops</span>
                    </Link>
                    </li>
                    <li>
                    <Link to="/"><span className="text-muted">Phones</span>
                    </Link>
                    </li>
                    
                     </ul>
                    </div>
    
    
                </div>
                <footer className="foots">
                <div className="text-center mt-5 foot">
           <p> &copy; 2020  Admor Links System Limited. All Rights Reserved</p>
           </div>
                     
           </footer>
                </div>
                
                
            )
        }
    }
    
    export default Laptop
    