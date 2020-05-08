import React from 'react';
import { Grid } from '@material-ui/core';
import './pdfAnnotation.css';
import { pdfjs, Document, Page } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const scriptLoadPromise = (url) => new Promise((resolve) => {
//     const script = document.createElement('script');
//     script.src = url;
//     script.async = true;

//     const removeScriptEvents = () => {
//         script.removeEventListener('load', onLoad);
//         script.removeEventListener('error', onError);
//     };
//     const onLoad = () => {
//         removeScriptEvents();
//         resolve(true);
//     }
//     const onError = () => {
//         console.log('false');
//         removeScriptEvents();
//         resolve(false);
//     }
    
//     script.addEventListener('load', onLoad);
//     script.addEventListener('error', onError);

//     document.body.appendChild(script);
// });

export default class MyResume extends React.Component {
    constructor() {
        super();
        this.state = {url: undefined};
    }

    async componentDidMount() {
        // Fetch resume from server
        const fetchResumePromise = new Promise((resolve) => {
            const url = 'https://us-central1-deokjdotcom.cloudfunctions.net/app';

            fetch(url)
            .then(response => response.blob())
            .then( blob => resolve(blob))
            .catch((e) => resolve(false));
        })
        const blob = await fetchResumePromise;
        if(!blob) return; // failed loading resume.

        // get a url reference for the blob
        const blobUrl = URL.createObjectURL(blob);
        this.setState({url: blobUrl});
    }

    render() {
        const {url} = this.state;
        return (
            <Grid container justify="center" style={{ marginTop: 8, padding: 16, background: 'lightgray'}}>
                {url && (
                        <Document
                            file={url}
                        >
                            <Page pageNumber={1}/>
                        </Document>
                )}
            </Grid>
        )
    }
}
