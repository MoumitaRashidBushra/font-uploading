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

        axios.post('http://localhost:5173/font-uploading/upload.php', formData, {
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
        axios.get('http://localhost:5173/font-uploading/get_fonts.php') // Replace with your actual font list endpoint
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

    // Function to handle editing a font (you can implement this)
    const handleEdit = (font) => {
        // Implement edit functionality here
    };

    // Function to handle deleting a font (you can implement this)
    const handleDelete = (font) => {
        // Implement delete functionality here
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Font Management</h1>
            <input type="file" accept=".ttf" onChange={handleFileChange} multiple />
            {uploading && <p>Uploading...</p>}
            {/* Display the uploaded fonts in a table */}
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2">Font Name</th>
                        <th className="p-2">Preview Text</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {fonts.map((font) => (
                        <tr key={font.id}>
                            <td className="p-2">{font.name}</td>
                            <td className="p-2">{font.previewText}</td>
                            <td className="p-2">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
                                    onClick={() => handleEdit(font)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => handleDelete(font)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FontManagement;
