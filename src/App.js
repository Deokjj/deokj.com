import React from 'react';
import MyResume from './MyResume';
import { Button, Typography, Box } from '@material-ui/core';

export default class App extends React.Component {
    render() {
        return (
            <Box style={{textAlign:'center'}}>
                <Box mt={2.5}>
                    <Typography variant="h5">
                        This website is being revamped <span role="img" aria-label="hug emoji">🤗</span>
                    </Typography>
                </Box>
                <Box mt={1}>
                    <Typography variant="subtitle2">
                        Link to previous portfolio is on the bottom of the page
                    </Typography>
                </Box>
                <MyResume />
                <Box mt={2} mb={4}>
                    <Button 
                    style={{textTransform:'inherit'}}
                    variant="outlined" 
                    color="primary"
                    component="a"
                    href="/v0"
                    target="_blank"
                    > 
                        Go to previous portfolio (last updated on Feb 2019)
                    </Button>
                </Box>
            </Box>
        )
    }
}
