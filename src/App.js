import React from 'react';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {url: undefined}
    }
    
    async componentDidMount() {
        // load pdf.js script:
        const pdfPromise = new Promise((response,reject) => {
            const script = document.createElement('script');
            script.src = '//mozilla.github.io/pdf.js/build/pdf.js';
            script.async = true;

            const removeScriptEvents = () => {
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
            };
            const onLoad = () => {
                removeScriptEvents();
                console.log('loaded');
                response(true);
            }
            const onError = () => {
                removeScriptEvents();
                reject('error occurred during script load.');
            }
            
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);

            document.body.appendChild(script);
        });

        await pdfPromise;

        // instance to access pdf.js
        const pdfjsLib = window['pdfjs-dist/build/pdf'];
        pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

        const url = 'https://cors-anywhere.herokuapp.com/' + 'https://drive.google.com/uc?export=download&id=12IWT6BrpOIXidTcYHYeSX2ndFnZfZ_Tc';

        pdfjsLib.getDocument(url).promise.then((pdf) => {
            console.log('page loaded');

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
                page.render(renderContext).promise.then(() => 'page rendered');
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
