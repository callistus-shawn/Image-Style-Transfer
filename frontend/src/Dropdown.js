import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useState } from 'react';


function Drop({passAction})
{
    const [Action,SetAction]=useState('Select Style');
    
    const select=(e)=>{
        passAction(e)
        SetAction(e)

    }    
    
    return (
        <>

        {/*dropdown style*/}
        <style type="text/css">
                {`
            .btn-flat {
            background-color: white;
            color:rgba(31,61,186,1) ;

            }

            .btn-xl {
            padding: 0.8rem 3rem;
            font-size: 1.8rem;
            font-weight: bold;
                }
            .dropdown-item{
            background-color: white;
            color:rgba(31,61,186,1) ;
            font-size: 1.5rem;
            font-weight: bold;
                }
            `}
            </style>


    <DropdownButton className="dd" variant="flat" size="xl "title={Action} onSelect={select}>
        <Dropdown.Item eventKey="Monet">Monet</Dropdown.Item>
        <Dropdown.Item eventKey="Ukiyo-e">Ukiyo-e</Dropdown.Item>
        <Dropdown.Item eventKey="Pencil">Pencil</Dropdown.Item>
    </DropdownButton>
    </>     
  );
}

export default Drop