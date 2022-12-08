import React, { Component } from 'react';
import { Navbar, Nav, Offcanvas} from 'react-bootstrap';
import { NavLink} from 'reactstrap';
import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

  constructor (props) {
    super(props);

      this.toggleNavbar = this.toggleNavbar.bind(this);

      this.state = {
        collapsed: true,
      };


      window.addEventListener('scroll', function () {
          var minOffset = 965;
          let has_class = document.body.classList.contains("scroll_navbar");
          if (minOffset < window.scrollY) {
              document.body.classList.add('scroll_navbar');
          }
          else if (has_class) {
              document.body.classList.remove('scroll_navbar');
          }
      });
    }


    toggleNavbar () {
        this.setState({
            collapsed: !this.state.collapsed
        });

    }
    
    home () {
        window.location.href("/");
    };
    direction () {
        window.location.href("/Direction");
    };
    contact () {
        window.location.href("/Contact");
    };

    render() {
            return (
                <header className='navbar-outer navbar-expand-lg fixed-top'>
                <Navbar expand="sm" className='container-fluid navbar-inner'>
                    <div className='container'>
                    <Navbar.Brand className='navbar-brand' href="/BudgetMos/">Бюджет <br/> для <br/> граждан</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                    <Navbar.Offcanvas id={`offcanvasNavbar-expand-sm`} aria-labelledby={`offcanvasNavbarLabel-expand-sm`} placement="end">
                        <div className='offcanvas-item'>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`} className="text-title">
                            <h1 className='text-main'>Бюджет для граждан</h1>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="flex-grow-1 pe-3">
                                <NavLink tag={ Link } className = "text-main" to="/" onClick={this.home} >Бюджет</NavLink>
                                <NavLink tag={ Link } className = "text-main" to="/Direction" onClick={this.direction}>Направления</NavLink>
                            </Nav>
                            <Nav className="flex-grow-2 pe-3">
                                <NavLink tag={ Link } className = "text-main nav-link" to ="/Contact" onClick={this.contact}>Контакты</NavLink>
                            </Nav>
                        </Offcanvas.Body>
                        </div>
                    </Navbar.Offcanvas> 
                    </div>
                </Navbar>
                </header>
            );
        }
}
