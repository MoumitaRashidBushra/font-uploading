import React, { useState } from 'react';
import Modal from 'react-modal';

const FontGroupModal = ({ isOpen, onClose }) => {
    const [selectedFonts, setSelectedFonts] = useState([]);
    const [remainingFonts, setRemainingFonts] = useState([]);

    const handleAddFont = (font) => {
        // Move the font from 'remainingFonts' to 'selectedFonts'
        // You need to implement this logic
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Font Grouping</h2>
            <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Selected Fonts</h3>
                <ul>
                    {selectedFonts.map((font, index) => (
                        <li key={index} className="flex justify-between items-center border-b py-2">
                            {font.name}
                            <button
                                onClick={() => handleRemoveFont(font)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-2">Remaining Fonts</h3>
                <ul>
                    {remainingFonts.map((font, index) => (
                        <li key={index} className="flex justify-between items-center border-b py-2">
                            {font.name}
                            <button
                                onClick={() => handleAddFont(font)}
                                className="text-green-500 hover:text-green-700"
                            >
                                Add Font
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </Modal>
    );
};

export default FontGroupModal;
