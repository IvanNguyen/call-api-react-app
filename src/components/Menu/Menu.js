import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';


const menus =[
    {
        name: 'Trang chu',
        to: '/',
        exact: true
    },
    {
        name: 'Quan ly san pham',
        to: '/product-list',
        exact: false
    }
];

const MenuLink = ({label,to,activeOnlyWhenExact}) => {
    return(
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({match})=>{
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link
                            to={to}
                        >{label}</Link>
                    </li>
                )
            }}
        ></Route>
    )
}

class Menu extends Component {
    
    render(){
        return(            
                <div className="navbar navbar-default">
                    <a href="#menu"className="navbar-brand" >CALL API</a>
                     <ul className="nav navbar-nav">
                        {this.showMenus(menus)}
                     </ul>
                </div>               
        )
    }
    showMenus = (menus) => {
        var result = null;
        if(menus.length > 0) {
            result = menus.map((menu,index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    ></MenuLink>
                )
            })
        }
        return result;
    }
}
export default Menu;