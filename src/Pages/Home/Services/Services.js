import React from 'react';
import cavity from '../../../images/cavity.png';
import fluoride from '../../../images/fluoride.png';
import whitening from '../../../images/whitening.png';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Services = () => {


    const services = [
        {
            name: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at temporibus ullam voluptates accusamus hic tempore natus modi dolores beatae.',
            img: fluoride
        },
        {
            name: 'Cavity Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at temporibus ullam voluptates accusamus hic tempore natus modi dolores beatae.',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at temporibus ullam voluptates accusamus hic tempore natus modi dolores beatae.',
            img: whitening
        }
    ];

    return (
        <div>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 2, color: 'success.main' }} variant="h5" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: 500,mb:2 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Box >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <Service service={service} key={service.name}></Service>)
                        }
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Services;