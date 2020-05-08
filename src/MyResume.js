import React from 'react';
import { Grid, Box, CircularProgress, Typography, Button } from '@material-ui/core';
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
        this.state = {
            url: undefined,
            resumePageLoaded: false,
            error: false
        };
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
        if(!blob) {
            this.setState({error:true});
            return; // failed loading resume.
        }

        // get a url reference for the blob
        const blobUrl = URL.createObjectURL(blob);
        this.setState({url: blobUrl});
    }

    render() {
        const {url, resumePageLoaded, error} = this.state;

        const screenWidth = window.screen.width
        const hasLargeScreen = screenWidth > 611
        const width = hasLargeScreen ? 612 : screenWidth;
        const height = width * 1.294;

        return (
            <Grid container justify="center" style={{ minHeight: height, marginTop: 8, padding: 16, background: 'lightgray'}}>
                <>
                {!error && url && (
                        <Document
                            file={url}
                            externalLinkTarget="_blank"
                            loading={""}
                            error={() => this.setState({error:true})}
                        >
                            <Page 
                            pageNumber={1}
                            width={width}
                            loading={""}
                            onLoadSuccess={() => this.setState({resumePageLoaded: true})}
                            error={() => this.setState({error:true})}
                            />
                        </Document>
                )}
                {!error && (!url || !resumePageLoaded) && (
                    <Box style={{margin: 'auto'}}>
                        <CircularProgress
                        style={{color:'darkgray'}}
                        size={hasLargeScreen? 100 : 50}
                        />
                        <Box mt={1} mb={10}>
                            <Typography variant="subtitle1">Loading Resume...</Typography>
                        </Box>
                    </Box>
                )}
                {error && (
                    <Box>
                    <Box mt={1} mb={2}>
                        Error occured while rendering resume.
                    </Box>
                        <Button style={{textTransform:'inherit', textDecoration: 'underline'}} color="primary" component='a' href="https://drive.google.com/file/d/12IWT6BrpOIXidTcYHYeSX2ndFnZfZ_Tc/view?usp=sharing" target="_blank">
                            Open resume
                        </Button>
                    </Box>
                )}
                </>
            </Grid>
        )
    }
}