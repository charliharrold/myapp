// the following code was written almost entirely by chatgpt... thanks!

import React, { useState } from 'react';

import rosetta from "../../resources/rosetta.jpg";
import thistle from "../../resources/thistle.jpg";
import windySkye from "../../resources/windy skye.jpg";
import aachen from "../../resources/aachen.jpg";
import amsterdam from "../../resources/amsterdam.jpg";
import avignon from "../../resources/avignon.jpg";
import barcelona from "../../resources/barcelona.jpg";
import berlin from "../../resources/berlin.jpg";
import bigBen from "../../resources/big ben.jpg";
import bruges from "../../resources/bruges.jpg";
import buckinghamPalace from "../../resources/buckingham palace.jpg";
import hohenwerfen from "../../resources/burg hohenwerfen (austria).jpg";
import mauterndorf from "../../resources/burg mauterndorf (austria).jpg";
import chartres from "../../resources/chartres cathedral.jpg";
import cologne from "../../resources/cologne cathedral.jpg";
import culloden from "../../resources/culloden.jpg";
import czechiaWater from "../../resources/czechia.jpg";
import dundee from "../../resources/dundee.jpg";
import edinburgh from "../../resources/edinburgh.jpg";
import eilean from "../../resources/eilean donan.jpg";
import frankenstein from "../../resources/frankenstein's castle.jpg";
import frankfurt from "../../resources/frankfurt.jpg";
import glasgow from "../../resources/glasgow.jpg";
import heathrow from "../../resources/heathrow planes.jpg";
import inverness from "../../resources/inverness.jpg";
import juno from "../../resources/juno beach.jpg";
import konigstein from "../../resources/konigstein (germany).jpg";
import pontGard from "../../resources/le pont du gard.jpg";
import liechtenstein from "../../resources/liechtenstein.jpg";
import luxembourg from "../../resources/luxembourg.jpg";
import madrid from "../../resources/madrid.jpg";
import marksburg from "../../resources/marksburg castle (germany).jpg";
import melroseDam from "../../resources/melrose dam.jpg";
import melrose from "../../resources/melrose.jpg";
import monaco from "../../resources/monaco.jpg";
import montSaintMichel from "../../resources/mont saint-michel.jpg";
import neuschwanstein from "../../resources/neuschwanstein castle (germany).jpg";
import versailles from "../../resources/palace versailles.jpg";
import paris from "../../resources/paris.jpg";
import planeVancouver from "../../resources/plane over vancouver.jpg";
import prague from "../../resources/prague.jpg";
import rheinfels from "../../resources/rheinfels castle (germany).jpg";
import salzburg from "../../resources/salzburg.jpg";
import skye from "../../resources/skye.jpg";
import stirling from "../../resources/stirling castle.jpg";
import switzerland from "../../resources/switzerland.jpg";
import urquhart from "../../resources/urquhart and loch ness.jpg";
import valencia from "../../resources/valencia.jpg";
import verdonGorge from "../../resources/verdon gorge.jpg";
import vienna from "../../resources/vienna.jpg";
import vimyRidge from "../../resources/vimy ridge.jpg";
import waterloo from "../../resources/waterloo.jpg";
import york from "../../resources/york.jpg";

// Sample data for gallery
const photoData = [
    {
        id: 1,
        src: rosetta,
        title: 'Rosetta Stone',
        description: <p>I've always thought that the Rosetta Stone was an incredible historical object.
            I had no idea that it was housed at the British Museum, so it was a wonderful surprise when I visited.
            The area around the display was packed with people, but that didn't take away the magic.
            <br></br>
            <br></br>
            More information about the Rosetta Stone can be found <a href="https://en.wikipedia.org/wiki/Rosetta_Stone">here</a>.
        </p>,
    },
    {
        id: 2,
        src: switzerland,
        title: 'Switzerland',
        description: <p>
        </p>,
    },
    {
        id: 3,
        src: aachen,
        title: 'Aachen Cathedral',
        description: <p>
        </p>,
    },
    {
        id: 4,
        src: bigBen,
        title: 'London - Big Ben and Palace of Westminster',
        description: <p>London was our last stop of this two month trip, so we were pretty exhausted by the time
            we got there. We had a lovely wander around London the night we arrived and saw most of the big attractions.
            Unfortunately it was 33 degrees on our second day in London, and our air conditioning at the hotel wasn't
            working, so we weren't feeling super up for walking around. We didn't manage to make it to the Tower of London,
            but that will just be the first thing we do on our next trip back!
        </p>,
    },
    {
        id: 5,
        src: salzburg,
        title: 'Salzburg',
        description: <p>
        </p>,
    },
    {
        id: 6,
        src: frankfurt,
        title: 'Frankfurt',
        description: <p>
        </p>,
    },
    {
        id: 7,
        src: thistle,
        title: 'Scottish Thistle',
        description: <p>I've always liked the thistle, probably because it is the national emblem of Scotland.
            After moving to Canada, I didn't return to Scotland for 5 years, so the thistle has only become more
            meaningful to me over time as it's a reminder of home.
            <br></br>
            <br></br>
            The thistle has a long history in Scotland, learn more about it <a href="https://en.wikipedia.org/wiki/Thistle#Scottish_thistle">here</a>.
        </p>,
    },
    {
        id: 8,
        src: valencia,
        title: 'Valencia Beach',
        description: <p>
        </p>,
    },
    {
        id: 9,
        src: versailles,
        title: 'Palace of Versailles',
        description: <p>
        </p>,
    },
    {
        id: 10,
        src: windySkye,
        title: 'The Isle of Skye',
        description: <p>While in Scotland, we took a day trip to Skye. I visited Skye as a kid and remembered it being beautiful
            so I was excited to be able to go back. Our tour guide was wonderful, and we learned a lot about the
            myths and legends surrounding the Isle of Skye.
            <br></br>
            <br></br>
            This photo was taken in a particularly windy (and beautiful) spot!
            <br></br>
            <br></br>
            Learn more about the Isle of Skye <a href="https://en.wikipedia.org/wiki/Isle_of_Skye">here</a>.
        </p>,
    },
    {
        id: 11,
        src: melrose,
        title: 'Melrose',
        description: <p>
        </p>,
    },
    {
        id: 12,
        src: pontGard,
        title: 'Le Pont du Gard',
        description: <p>
        </p>,
    },
    {
        id: 13,
        src: buckinghamPalace,
        title: 'Buckingham Palace',
        description: <p>
        </p>,
    },
    {
        id: 14,
        src: dundee,
        title: 'Dundee',
        description: <p>
        </p>,
    },
    {
        id: 15,
        src: amsterdam,
        title: 'Amsterdam\'s Canals',
        description: <p>
        </p>,
    },
    {
        id: 16,
        src: chartres,
        title: 'Chartres',
        description: <p>
        </p>,
    },
    {
        id: 17,
        src: berlin,
        title: 'Berlin',
        description: <p>
        </p>,
    },
    {
        id: 18,
        src: cologne,
        title: 'Cologne Cathedral',
        description: <p>
        </p>,
    },
    {
        id: 19,
        src: madrid,
        title: 'Madrid',
        description: <p>
        </p>,
    },
    {
        id: 20,
        src: juno,
        title: 'Juno Beach',
        description: <p>
        </p>,
    },
    {
        id: 21,
        src: glasgow,
        title: 'Glasgow',
        description: <p>
        </p>,
    },
    {
        id: 22,
        src: prague,
        title: 'Prague',
        description: <p>
        </p>,
    },
    {
        id: 23,
        src: edinburgh,
        title: 'Edinburgh Castle',
        description: <p>
        </p>,
    },
    {
        id: 24,
        src: heathrow,
        title: 'Planes Over Heathrow',
        description: <p>
        </p>,
    },
    {
        id: 25,
        src: eilean,
        title: 'Eilean Donan Castle',
        description: <p>
        </p>,
    },
    {
        id: 26,
        src: skye,
        title: 'Isle of Skye',
        description: <p>
        </p>,
    },
    {
        id: 27,
        src: montSaintMichel,
        title: 'Mont Saint-Michel',
        description: <p>
        </p>,
    },
    {
        id: 28,
        src: paris,
        title: 'From the Eiffel Tower',
        description: <p>
        </p>,
    },
    {
        id: 29,
        src: czechiaWater,
        title: 'Beautiful Czechia',
        description: <p>
        </p>,
    },
    {
        id: 30,
        src: bruges,
        title: 'Bruges / Brugge',
        description: <p>
        </p>,
    },
    {
        id: 31,
        src: luxembourg,
        title: 'Lunch in Luxembourg',
        description: <p>
        </p>,
    },
    {
        id: 32,
        src: marksburg,
        title: 'Marksburg',
        description: <p>
        </p>,
    },
    {
        id: 33,
        src: monaco,
        title: 'Monaco',
        description: <p>
        </p>,
    },
    {
        id: 34,
        src: neuschwanstein,
        title: 'Neuschwanstein Castle',
        description: <p>
        </p>,
    },
    {
        id: 35,
        src: barcelona,
        title: 'Catedral de Barcelona',
        description: <p>
        </p>,
    },
    {
        id: 36,
        src: avignon,
        title: 'Avignon',
        description: <p>
        </p>,
    },
    {
        id: 37,
        src: vimyRidge,
        title: 'Vimy Ridge',
        description: <p>
        </p>,
    },
    {
        id: 38,
        src: york,
        title: 'York Minster',
        description: <p>
        </p>,
    },
    {
        id: 39,
        src: konigstein,
        title: 'Konigstein Fortress',
        description: <p>
        </p>,
    },
    {
        id: 40,
        src: verdonGorge,
        title: 'Verdon Gorge',
        description: <p>
        </p>,
    },
    {
        id: 41,
        src: stirling,
        title: 'Stirling Castle',
        description: <p>
        </p>,
    },
    {
        id: 42,
        src: liechtenstein,
        title: 'Liechtenstein',
        description: <p>
        </p>,
    },
    {
        id: 43,
        src: culloden,
        title: 'Culloden Battlefield',
        description: <p>
        </p>,
    },
    {
        id: 44,
        src: mauterndorf,
        title: 'Burg Mauterndorf',
        description: <p>
        </p>,
    },
    {
        id: 45,
        src: inverness,
        title: 'Inverness',
        description: <p>
        </p>,
    },
    {
        id: 46,
        src: frankenstein,
        title: 'Frankenstein\'s Castle',
        description: <p>
        </p>,
    },
    {
        id: 47,
        src: hohenwerfen,
        title: 'Burg Hohenwerfen',
        description: <p>
        </p>,
    },
    {
        id: 48,
        src: waterloo,
        title: 'Waterloo Battlefield',
        description: <p>
        </p>,
    },
    {
        id: 49,
        src: vienna,
        title: 'Vienna',
        description: <p>
        </p>,
    },
    {
        id: 50,
        src: planeVancouver,
        title: 'View From the Plane',
        description: <p>
        </p>,
    },
    {
        id: 51,
        src: urquhart,
        title: 'Urquhart Castle',
        description: <p>
        </p>,
    },
    {
        id: 52,
        src: rheinfels,
        title: 'Rheinfels Castle',
        description: <p>
        </p>,
    },
    {
        id: 53,
        src: melroseDam,
        title: 'Little Dam in Melrose',
        description: <p>
        </p>,
    },

];

const PhotoGallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
    };

    const handleClose = () => {
        setSelectedPhoto(null);
    };

    return (
        <div style={styles.container}>
            {/* Title and Introduction */}
            <div style={styles.header}>
                <h1>Europe - Summer 2024</h1>
                <p>I recently went on a 2 month adventure around Europe and it was incredible!
                    This was my first semester off since starting university, and I'm very glad that I decided to give myself a break.
                    Here, I'll share some of my favourite pictures from the trip.</p>
            </div>

            {/* Photo Gallery Grid */}
            <div style={styles.gallery}>
                {photoData.map((photo) => (
                    <img
                        key={photo.id}
                        src={photo.src}
                        alt={photo.title}
                        style={styles.thumbnail}
                        onClick={() => handlePhotoClick(photo)}
                    />
                ))}
            </div>

            {/* Modal for Selected Photo */}
            {selectedPhoto && (
                <div style={styles.modalOverlay} onClick={handleClose}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <span style={styles.closeButton} onClick={handleClose}>&times;</span>
                        <div style={styles.modalBody}>
                            <img src={selectedPhoto.src} alt={selectedPhoto.title} style={styles.largeImage} />
                            <div style={styles.description}>
                                <h2>{selectedPhoto.title}</h2>
                                <p>{selectedPhoto.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    header: {
        marginBottom: '20px',
        textAlign: 'center',
    },
    gallery: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    thumbnail: {
        maxWidth: '300px', // Updated max width for thumbnail
        maxHeight: '300px', // Updated max height for thumbnail
        margin: '10px',
        cursor: 'pointer',
        objectFit: 'contain',
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        position: 'relative',
        maxWidth: '90%',
        maxHeight: '90%',
        display: 'flex',
        flexDirection: 'column',
    },
    modalBody: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    largeImage: {
        maxWidth: '50%',
        maxHeight: '80vh',
        width: 'auto',
        height: 'auto',
        marginRight: '20px',
        objectFit: 'contain',
    },
    description: {
        maxWidth: '40%',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '24px',
        cursor: 'pointer',
    },
};

export default PhotoGallery;
