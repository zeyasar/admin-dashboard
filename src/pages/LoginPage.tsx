import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Modal from '@mui/material/Modal';
import Image from "../assets/mayzorlogin.png";
import logo from "../assets/logo.png";
import './loginpage.css'
import { InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = React.useState('')
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)  => {
    setEmail(e.target.value)
}
// const formIsValid: any = () => {
// }

const validateEmail:any = (input:any) => {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(input);
}

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validateEmail(email);
    if (isValid) {
      navigate('/users')
      sessionStorage.setItem("user", `${email}`);
    } else {
      setOpen(true)
    }


  };

  

  return (
    <div 
    style={{
    minHeight:'100vh',
    backgroundImage:`url(${Image})`, 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    display:"flex",
        alignItems: "center",
        justifyContent: "center"}}>
           <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            İnvalid Email...
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please enter valid Email adress!!!
          </Typography>
        </Box>
      </Modal>
      <Container component="main" maxWidth="xs">
      <Box
          sx={{
            width:'50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'white',
            marginX:'auto',
            padding:2,
            borderRadius: '60px 60px 0px 0px'
          }}
        >
          <img src={logo} alt="logo" className="logo"/>
        </Box>
        <Box className='login'
          sx={{

            display: 'flex',
            flexDirection: 'column',
            paddingX:5
          }}
        >
          <Typography component="h1" variant="h5" sx={{paddingY:3}} className='header'>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ px: 1, py: 7 }}>
          <InputLabel   sx={{color:'#4C5F82', textAlign:'left'}} >
            E mail Adress
          </InputLabel>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              placeholder="emre@mayzor.net"
              onChange={handleChange}
            />
            <div className="checkbox">
            <FormControlLabel
            sx={{color:'#4C5F82'}}
              control={<Checkbox value="remember" color="primary"/>}
              label="Remember me"
            />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs={12} my={2}>
                <Link href="#" variant="body2" >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs={12} mb={3}>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
 


    </div>
  );
}
