import React from 'react';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {url: undefined}
    }
    
    async componentDidMount() {
        // load pdf.js script:
        const pdfPromise = new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = '//mozilla.github.io/pdf.js/build/pdf.js';
            script.async = true;

            const removeScriptEvents = () => {
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
            };
            const onLoad = () => {
                removeScriptEvents();
                resolve(true);
            }
            const onError = () => {
                removeScriptEvents();
                resolve(false);
            }
            
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);

            document.body.appendChild(script);
        });
        
        // Fetch resume from server
        const fetchResumePromise = new Promise((resolve) => {
            const url = 'https://us-central1-deokjdotcom.cloudfunctions.net/app';

            fetch(url)
            .then(response => response.blob())
            .then( blob => resolve(blob))
            .catch((e) => resolve(false));
        })

        const [ pdfJsLoaded, blob ] = await Promise.all([pdfPromise, fetchResumePromise]);
        if(!pdfJsLoaded || !blob) return; // failed loading pdfJs or resume.

        // instance to access pdf.js
        const pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

        // get a url reference for the blob
        const blobUrl = URL.createObjectURL(blob);

        // render pdf
        pdfjsLib.getDocument(blobUrl).promise.then((pdf) => {

            pdf.getPage(1).then((page) => {
                const scale = 1.5;
                const viewport = page.getViewport({scale: scale});
    
                // Prepare canvas using PDF page dimensions
                const canvas = document.getElementById('the-canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
    
                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext);
            });
        })
    }

    render() {
        return (
            <div>
                updating...<br/>
                <canvas id="the-canvas" style={{position: "inherit", transform: "none"}}></canvas>
            </div>
        )
    }
}
