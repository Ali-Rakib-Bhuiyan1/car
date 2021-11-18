import * as React from 'react';
import {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuth from '../../../hooks/useAuth';


const lightTheme = createTheme({ palette: { mode: 'light' } });

const ManageOrder = () => {
    const [booking,setBooking] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/allBookingProduct')
       .then(res => res.json())
       .then(result => {
           console.log(result)
           setBooking(result)});
     }, [booking]);

     const handleUpdate = id =>{
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(user),
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                alert('Status Updated!');
            }
        })
    }


    return (
        <Container sx={{mt:5, mb:5}}>
          <h2>Manage all Orders</h2>
          <Grid container spacing={2}  columns={{ xs: 4, sm: 8, md: 12 }}>
                {booking.map(book=><Grid item xs={4} sm={8} md={6} key={book?._id}>
                <ThemeProvider theme={lightTheme}>
                  <Card sx={{ boxShadow: 2, border: 0}}>
                    <CardContent>
                    <Typography sx={{textAlign: 'start', m:1}} variant="h5" component="div">
                        Product Name: {book?.title}
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
                    <Typography sx={{textAlign: 'start', m:1}}  variant="h5" component="div" >
                       Total : {book?.price}
                    </Typography>
                </CardContent>
                <CardActions>
                  { book?.status==='Pending'?
                    <Button onClick={()=>handleUpdate(book._id)}  variant="contained" size="medium" sx={{mx:'auto'}}>Pending</Button>
                  :
                    <Button  variant="contained" size="medium" sx={{mx:'auto'}}>Shipped</Button>
                  }
                </CardActions>
              </Card>
            </ThemeProvider>
          </Grid>)}
        </Grid>
        </Container>
    )
};

export default ManageOrder;