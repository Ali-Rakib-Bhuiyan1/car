import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const lightTheme = createTheme({ palette: { mode: 'light' } });


const CustomerReviews = () => {
    const [reviews,setReviews] = useState([]);

      useEffect(() => {
        fetch('http://localhost:5000/reviews')
       .then(res => res.json())
       .then(result => {
           console.log(result)
           setReviews(result)});
    }, []);

    return (
        <div>
           <Container sx={{mt:5, mb:8}}>
                <Typography sx={{fontWeight: 700, textAlign: 'center', mb:4, mt:5 }} variant="h4" component="div">
                 Customer Reviews
                </Typography>
                <Grid container spacing={2}  columns={{ xs: 4, sm: 8, md: 12 }}>
                {reviews.map(review=><Grid item xs={4} sm={8} md={6} key={review?._id}>
                <ThemeProvider theme={lightTheme}>
                  <Card sx={{ boxShadow: 2, border: 0}}>
                    <CardContent>
                    <Typography sx={{textAlign: 'start', m:1 }} variant="h6" component="div">
                        Customer Name : {review?.name}
                    </Typography>
                    <Typography sx={{textAlign: 'start', m:1 }} variant="h6" component="div">
                        Customer View : {review?.review}
                    </Typography>
                    <Typography sx={{textAlign: 'start', m:1 }} variant="h6" component="div">
                        Rating : <Rating name="read-only" value={review?.rating} readOnly />
                    </Typography>
                </CardContent>
              </Card>
            </ThemeProvider>
          </Grid>)}
        </Grid>
        </Container>
        </div>
    );
};

export default CustomerReviews;