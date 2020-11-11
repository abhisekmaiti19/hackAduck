import React, { Component } from 'react'
import {Link} from 'gatsby';
import logo from '../../images/logo.png';



export default class Navbar extends Component {


    state={
        navbarState: false,
        navbarClass: "collapse navbar-collapse",
        menus: [{
            id:1,
            text:"Home",
            url:'/',
        },
        
        ,{
            id:2,
            text:"About Us",
            url:'/about',
        },{
            id:3,
            text:"Services",
            url:'/service',
        },{
            id:4,
            text:"Contact",
            url:'/contact',
        }
    
    ]

    }

    myToggler = ( )=>{
        this.state.navbarState ? this.setState({
            navbarState: false,
            navbarClass: "collapse navbar-collapse"
        }) : this.setState({
            navbarState: true,
            navbarClass: "collapse navbar-collapse show"
        })
    }

    render() {
        return (
           <nav className="navbar sticky-top navbar-expand-lg bg-theme navbar-dark">
                <Link to="/" className="navbar-brand ml-5">
                    <img src={logo} alt="brand logo" width = "80px"/>
                </Link>

                <button className="navbar-toggler" type="button" onClick={this.myToggler}
                data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                 aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
                
                <div className={this.state.navbarClass}>
                    <ul className="navbar-nav ml-auto mr-5">
                    {this.state.menus.map(menu => {
                        return (
                            <li key={menu.id}className="nav-item active">
                            <Link to={menu.url} className="nav-link  text-dark">
                                {menu.text}
                            </Link>
                        </li>
                        )
                    })}
                        
                    </ul>
                </div>
           </nav>
        )
    }
}
