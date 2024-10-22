import React from 'react';

function Header() {
    const headerStyle = {
        backgroundImage: `url("/elizabeth-hargrave.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '40vw',
        width: '40vw',
        color: '#ffaaff',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: '1.25vw',
        textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
        display: 'flex',
        margin: '0 auto'

      };

    return (
    <header style={headerStyle}>
        <h1>Elizabeth Hargrave</h1>
    </header>
    );
}
    export default Header;