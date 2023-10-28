import {React} from 'react';
import { Button, Container, Grid } from '@mui/material';
import '../App.css';
import { Link } from 'react-router-dom';

function SplashScreen(){

    const buttonStyle = {
        borderRadius: '25px', // 원하는 둥글기 정도로 설정
      };
    
    return (
        <>
            <Container style={{backgroundColor:'#3163ad'}}>
                <Grid container className='binbox'>
                    <Grid item xs={12}></Grid>
                </Grid>
                <Grid container className='binbox'>
                    <Grid item xs={12} style={{
                        fontSize:"3em"
                    }}>
                        나만을 위한 선배<br/>
                        생성형 AI
                    </Grid>
                </Grid>
                <Grid container className='binbox2'>
                    <Grid item xs={12} style={{
                        fontSize:'2em'
                    }}>
                        대 선 배
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4}>
                        <Button variant='contained' color='info' sx={{ color: 'black', backgroundColor: 'white'}} style={buttonStyle}
                            component={Link} to="/onboarding">
                            <div style={{color:"black"}}>Get start</div>
                        </Button></Grid>
                    <Grid item xs={8}></Grid>
                </Grid>
                <Grid container className='binbox3'>
                    <Grid item xs={12} >
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={9}>
                        <img src='/img/캐릭터.png'></img>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default SplashScreen