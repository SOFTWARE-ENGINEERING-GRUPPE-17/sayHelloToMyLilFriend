import React, { useState } from "react";

import Dropzone from "react-dropzone";


//Start of Dropzone function to be able to drag and drop images onto the website for easier use.
//More needs to be added in Rent.js and Park.js for more valid use later on.
export default function Dropzones() {
    const [fileNames, setFileNames] = useState([]);
    const handleDrop = acceptedFiles =>
        setFileNames(acceptedFiles.map(file => file.name));

    return (
        <div className="Dropzone_tester">
            <Dropzone
                onDrop={handleDrop}
                accept="image/*"
                minSize={1024}
                maxSize={3072000}
            >
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />
                        <p>Drag'n'drop images, or click to select files</p>
                    </div>
                )}
            </Dropzone>
            <div>
                <strong>Files:</strong>
                <ul>
                    {fileNames.map(fileName => (
                        <li key={fileName}>{fileName}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}