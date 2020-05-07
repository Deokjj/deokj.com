import React from 'react';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {url: undefined}
    }
    
    // async componentDidMount() {
    //     const blob = await fetch(
    //         "https://drive.google.com/uc?export=download&id=12IWT6BrpOIXidTcYHYeSX2ndFnZfZ_Tc",
    //         {
    //             method: "GET",
    //             mode: 'no-cors'
    //         })
    //         .then(res => res.blob());
    // const url = window.URL.createObjectURL(blob);

    // console.log(url);
    // this.setState({url});
    // }

    docuFn = (...args) => console.log(args);

    render() {
        const {url} = this.state;

        return (
            <div>
                updating...
            </div>
        )
    }
}
