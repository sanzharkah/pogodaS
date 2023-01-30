import React from 'react';
import module from './Header.module.scss'


function Header(props) {
    return (
        <header className={module.header}>
            <div className={module.header_content}>
                <ul>
                    <li>
                        Главное 1
                    </li>

                    <li>
                        Главное 2
                    </li>
                    
                    <li>
                        Главное 3
                    </li>

                </ul>
            </div>
        </header>
    );
}

export default Header;