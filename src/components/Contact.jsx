import React from 'react';

function Contact() {
    const contactStyle = {
        color: 'white',
        fontSize: '1.5vw',
        width: '40vw',
        margin: '0 auto'
    
    };
    
    const h1Style = {
        fontSize: '2.5vw',
        textAlign: 'center',
    };

    const ulStyle = {
        textAlign: 'left',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center'
    };

    const liStyle = {
        marginRight: '1vw'

    };

    return (
    <div style={contactStyle}>
        <h1 style={h1Style}>Contact</h1>
        <ul style={ulStyle}>
            <li style={liStyle}>
                <a href="https://www.elizhargrave.com/games">Website</a>
            </li>
            <li style={liStyle}>
                <a href="https://bsky.app/profile/elizhargrave.bsky.social">BlueSky</a>
            </li>
            <li style={liStyle}>
                <a href="https://boardgamegeek.com/boardgamedesigner/111338/elizabeth-hargrave">BGG</a>
            </li>
            <li style={liStyle}>
                <a href="https://elizhargrave.substack.com/">Substack</a>
            </li>
        </ul>
    </div>
    );
}
    export default Contact;