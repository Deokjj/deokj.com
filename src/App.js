import React from 'react';
import MyResume from './MyResume';
import { Container, Button, Typography, Box } from '@material-ui/core';

export default class App extends React.Component {
    render() {
        return (
            <Box style={{textAlign:'center'}}>
                <Box mt={2.5}>
                    <Typography variant="h5">
                        This website is being revamped 🤗
                    </Typography>
                </Box>
                <Box mt={1}>
                    <Typography variant="subtitle2">
                        Please scroll down if you'd like to view previous portfolio (Last updated on Fab 2019)
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
                        Go to Version 0 (last updated on Fab 2019)
                    </Button>
                </Box>
            </Box>
        )
    }
}
