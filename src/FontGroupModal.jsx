// FontGroupModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const FontGroupModal = ({ isOpen, onClose }) => {
    const [selectedFonts, setSelectedFonts] = useState([]);
    const [remainingFonts, setRemainingFonts] = useState([]);

    const handleAddFont = (font) => {
        // Move the font from 'remainingFonts' to 'selectedFonts'
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <h2>Font Grouping</h2>
            <div>
                <h3>Selected Fonts</h3>
                {/* Display selected fonts */}
                {/* Provide a button to remove fonts from 'selectedFonts' */}
            </div>
            <div>
                <h3>Remaining Fonts</h3>
                {/* Display remaining fonts */}
                <button onClick={handleAddFont}>Add Font</button>
            </div>
        </Modal>
    );
};

export default FontGroupModal;
