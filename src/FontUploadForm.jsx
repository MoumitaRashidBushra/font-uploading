import React, { useState } from 'react';

const FontUploadForm = () => {
    const [fonts, setFonts] = useState([]);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        const files = e.target.files;
        const newFonts = [];

        setUploading(true);

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = (event) => {
                const fontData = {
                    id: new Date().getTime() + i, // Generate a unique ID
                    name: file.name,
                    previewText: 'Sample Preview', // You can generate a preview as needed
                };

                newFonts.push(fontData);

                if (newFonts.length === files.length) {
                    setFonts((prevFonts) => [...prevFonts, ...newFonts]);
                    setUploading(false);
                }
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input
                type="file"
                accept=".ttf"
                onChange={handleFileChange}
                multiple
            />
            {uploading && <p>Uploading...</p>}
            {/* Display the uploaded fonts */}
            <ul>
                {fonts.map((font) => (
                    <li key={font.id}>
                        {font.name} - {font.previewText}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FontUploadForm;
