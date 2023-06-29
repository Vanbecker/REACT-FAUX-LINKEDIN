import React from 'react';

const Header = () => {
    return (
        <header>
            <div class="imgheader"><img src="https://media.giphy.com/media/MSh3UVXTQplsvMRFTx/giphy.gif" alt="gitlinkedin" /></div>
            <h1>Rémi Le Gall</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#">Accueil</a>
                    </li>
                    <li>
                        <a href="#">Mon profil</a>
                    </li>
                    <li>
                        <a href="#">Réseau</a>
                    </li>
                    <li>
                        <a href="#">Emplois</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
