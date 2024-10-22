import React from 'react';

function About() {
    const aboutStyle = {
        color: 'white',
        fontSize: '1.5vw',
        width: '40vw',
        margin: '0 auto'
    
    };
    
    const h1Style = {
        fontSize: '2.5vw',
        textAlign: 'center',
    };

    const pStyle = {
        textAlign: 'left',
    };

    return (
    <div style={aboutStyle}>
        <h1 style={h1Style}>About</h1>
        <p style={pStyle}>
            Elizabeth Hargrave is an American game designer. She has designed several games, including Wingspan, which won the 2019 Kennerspiel des Jahres for best connoisseur game of the year, Tussie-Mussie and Mariposas.
        </p>
    </div>
    );
}
    export default About;