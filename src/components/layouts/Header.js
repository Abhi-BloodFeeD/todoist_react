import React from 'react';
import{FaPizzaSlice} from 'react-icons/fa';
export const Header=()=>{
    return(
      <header className="header" data-testid="header">
        <nav>
          <div className="logo">
            <img src="/images/logo.png" alt="Todo List"/>
          </div>
          <div className="settings">
            <ul>
              <li>+</li>
              <FaPizzaSlice/>
            </ul>
          </div>
        </nav>
      </header>
     );
};