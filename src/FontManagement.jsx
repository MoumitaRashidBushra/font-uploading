import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FontManagement = () => {
    const [fonts, setFonts] = useState([]);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e) => {
        const files = e.target.files;
        const formData = new FormData();

        setUploading(true);

        for (let i = 0; i < files.length; i++) {
            formData.append('file[]', files[i]);
        }

        axios.post('upload.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then((response) => {
                if (response.data.success) {
                    alert(response.data.message);
                    // After successful upload, fetch the updated font list
                    fetchFontList();
                } else {
                    alert(response.data.message);
                }
                setUploading(false);
            })
            .catch((error) => {
                alert('Error uploading font.');
                setUploading(false);
            });
    };

    // Fetch the list of fonts from the server
    const fetchFontList = () => {
        axios.get('get_fonts.php') // Replace with your API endpoint
            .then((response) => {
                if (response.data.success) {
                    setFonts(response.data.fonts);
                } else {
                    alert(response.data.message);
                }
            })
            .catch((error) => {
                alert('Error fetching font list.');
            });
    };

    useEffect(() => {
        // Initial fetch of the font list when the component loads
        fetchFontList();
    }, []);

    return (
        <div>
            <h1>Font Management</h1>
            <input type="file" accept=".ttf" onChange={handleFileChange} multiple />
            {uploading && <p>Uploading...</p>}
            {/* Display the uploaded fonts */}
            <ul>
                {fonts.map((font) => (
                    <li key={font.id}>
                        {font.name} - {font.previewText}
                        <button onClick={() => handleEdit(font)}>Edit</button>
                        <button onClick={() => handleDelete(font)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FontManagement;
