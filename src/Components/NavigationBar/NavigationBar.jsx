import { Button, Navbar } from 'flowbite-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Event } from '../../models/index';
import '../../../public/favicon.ico'

function NavigationBar() {
    let navigate=useNavigate();

    async function getModels() {
      const events =await DataStore.query(Event); 
      console.log(events);
    }

    async function getUserInfo() {
      const user = await Auth.currentAuthenticatedUser();
      console.log('attributes:', user.attributes);
    }
  return (
    <>
        <Navbar
        fluid={true}
        rounded={true}
        >
        <Navbar.Brand href="https://flowbite.com/">
            <img
            src="logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Terna EMS
            </span>
        </Navbar.Brand>
        <div className="flex md:order-2 gap-2">
            <Button>Sign In</Button>
            <Button>Install PWA</Button>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
        <Navbar.Link><div className='cursor-pointer'>Home</div></Navbar.Link>
        <hr></hr>
        <Navbar.Link><div className='cursor-pointer'>Sign Up</div></Navbar.Link>
        <hr></hr>
        <Navbar.Link><div className='cursor-pointer'>Get User</div></Navbar.Link>
        <hr></hr>
        <Navbar.Link><div className='cursor-pointer'>Admin Page</div></Navbar.Link>
        <hr></hr>
        <Navbar.Link><div className='cursor-pointer'>Get Events</div></Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    </>
  )
}

export default NavigationBar