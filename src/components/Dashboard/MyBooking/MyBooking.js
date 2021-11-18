import * as React from 'react';
import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuth from '../../../hooks/useAuth';

const lightTheme = createTheme({ palette: { mode: 'light' } });

const MyBooking = () => {
    const [booking,setBooking] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/booking/${user?.email}`)
       .then(res => res.json())
       .then(result => setBooking(result));
     }, [user.email]);

     const handleDelete = id=>{
         const confirm = window.confirm('Are you sure to delete booking?');
         if(confirm){
             fetch(`http://localhost:5000/booking/${id}`, {
                method:'DELETE'
             })
             .then(res=>res.json())
             .then(data=>{
                 const remaining =booking.filter(book=>book._id!== id);
                 setBooking(remaining);
                 if(data.deletedCount){
                    alert('Booking deleted!')
                 }
             })
         }
     };

    return (
        <Container>
        <h2>My Booking</h2>
        <Grid container spacing={2}  columns={{ xs: 4, sm: 8, md: 12 }}>
        {booking.map(book=><Grid item xs={4} sm={8} md={6} key={book?._id}>
          <ThemeProvider theme={lightTheme}>
          <Card sx={{ boxShadow: 2, border: 0}}>
            <CardContent>
            <Typography sx={{textAlign: 'start', m:1}} variant="h5" component="div">
              Order Title: {book?.title}
            </Typography>
            <Typography sx={{textAlign: 'start', m:1}} variant="h5" component="div">
              Recipient Name: {book?.name}
            </Typography>
            <Typography sx={{textAlign: 'start', m:1}} variant="h5" component="div">
              Recipient Email: {book?.email}
            </Typography>
            <Typography sx={{textAlign: 'start', m:1}} variant="h5" component="div">
              Address: {book?.address}
            </Typography>
            <Typography sx={{textAlign: 'start', m:1}} variant="h5" component="div">
              Total : {book?.price}
            </Typography>
            <Typography sx={{textAlign: 'start', m:1}} variant="h5" component="div">
              Status : {book?.status}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={()=>handleDelete(book?._id)} variant="contained" size="medium" sx={{mx:'auto',  backgroundColor:"#900C3F"}} startIcon={<DeleteIcon />}>Delete</Button>
          </CardActions>
        </Card>
        </ThemeProvider>
        </Grid>)}
      </Grid>
    </Container>
    );
};

export default MyBooking;