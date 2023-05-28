import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMoon } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <header>
        <div className="row">
            <div className="col-4">
                <img id="ilogo" src="../Assets/logo/logo-tách nền.png" alt="img logo" />
                <p id="plogo">
                <span>D</span>REAM <span>H</span>OLIDAY
                </p>
            </div>
            <div className="col-4">
                <button id="btnmoon">
                <FontAwesomeIcon icon={faMoon}/>
                </button>
                <img src="/Tu/acseets/img/profile.png" alt="Avatar" />
                <p className="name">Triệu Tuấn Tú</p>
            </div>
        </div>
        </header>
  );
};

export default Header;