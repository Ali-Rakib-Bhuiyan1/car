import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import ExplorePlant from '../../ExplorePlant/ExplorePlant';
import usePlants from '../../../hooks/usePlants';

const ExplorePlants = () => {
    const [plants] = usePlants([]);

    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ mt: 5, mb: 8 }} >
                <Typography sx={{fontWeight: 700, textAlign: 'center', mb:2, mt:2, color:"#900C3F"}} variant="h4" component="div">
                   Explore Our Plants
                </Typography>
                <Grid container spacing={{ xs: 2, md: 4 }}  columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                      plants.map(plant=><ExplorePlant key={plant._id} plant={plant}></ExplorePlant>)
                    }
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default ExplorePlants;