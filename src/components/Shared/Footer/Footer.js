import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Footer = () => {
    return (
      <Box sx={{ flexGrow: 1, mb:0, mt: 0.5, backgroundColor:"#F4F5F3" }}>
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         <Grid item xs={4} sm={8} md={4} sx={{display: 'flex', justifyContent: 'space-around'}}>
                  <Card sx={{ minWidth: 275 , boxShadow: 0, border: 0 , backgroundColor:"#F4F5F3"}}>
                     <CardContent>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="h5" component="div">
                        aments-car World
                        </Typography>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="body2" >
                           Home
                        </Typography>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="body2" >
                           Explore aments-car
                        </Typography>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="body2" >
                           About
                        </Typography>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="body2" >
                           Contact
                        </Typography>
                     </CardContent>
                  </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{display: 'flex', justifyContent: 'space-around'}}>
                  <Card sx={{ minWidth: 275 , boxShadow: 0, border: 0, backgroundColor:"#F4F5F3"}}>
                     {/* <CardContent>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="h5" component="div">
                           Our Plants
                        </Typography>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="body2">
                           Indoor plants
                        </Typography>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="body2" >
                           Home decor
                        </Typography>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="body2" >
                           Gift items
                        </Typography>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="body2" >
                           Small plants
                        </Typography>
                     </CardContent> */}
                  </Card>
            </Grid>
            <Grid item xs={4} sm={4} md={4} sx={{display: 'flex', justifyContent: 'space-around'}}>
                  <Card sx={{ minWidth: 275 , boxShadow: 0, border: 0, backgroundColor:"#F4F5F3"}}>
                     <CardContent>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="h5" component="div">
                        Our Address
                        </Typography>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="body2" >
                           Block #G, Road -12
                        </Typography>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="body2" >
                           Gulshan
                        </Typography>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="body2" >
                           Dhaka, Bangladesh
                        </Typography>
                        <Typography sx={{textAlign: 'center', m:1, color:"#900C3F"}} variant="body2" >
                           Call Now  +234567891
                        </Typography>
                     </CardContent>
                  </Card>
            </Grid>
         </Grid>
         <Typography sx={{textAlign: 'center', mt:1, mb:0, pb: 1, color:"#900C3F", fw:'bold'}} variant="body2" >
            Copyright 2021 All Rights Reserved.
         </Typography>
      </Box>
    );
};

export default Footer;