import { useParams, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  Avatar,
  Container,
  Box,
  Button,
  FormControl,
  InputLabel,
  FilledInput,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import editIcon from "../assets/editIcon.png";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 99,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));


const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 50,
  height: 50,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "Fatih",
    lastName: "Kocabıyık",
    userName: "FFK",
    phone: "0564 789 27 98",
    mail: "asdasd@gmail.com",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Container>
        <Box sx={{ display: "flex" }}>
          <IconButton onClick={() => navigate("/users")}>
            <ArrowBackIosIcon color="primary" />
          </IconButton>
          <Typography sx={{ my: "auto" }}>Kullanıcı_</Typography>
        </Box>
        <div style={{ display: "flex", height: "70vh" }}>
          <Box sx={{ mt: 3 }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={<SmallAvatar alt="circle" src={editIcon} />}
            >
              <Avatar alt="user" sx={{ width: 150, height: 150 }} />
            </Badge>
          </Box>
          <Box sx={{ padding: "20px" }}>
            <form
              style={{
                display: "flex",
                width: "300px",
                flexDirection: "column",
              }}
            >
              <FormControl style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="fullname">
                  Adı-Soyadı
                </InputLabel>
                <BootstrapInput
                  id="fullname"
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="phone">
                  Telefon
                </InputLabel>
                <BootstrapInput
                  id="phone"
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="mail">
                  Email
                </InputLabel>
                <BootstrapInput
                  id="mail"
                  type="email"
                  name="mail"
                  value={form.mail}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="birthday">
                  Doğum Tarihi
                </InputLabel>
                <BootstrapInput
                  id="birthday"
                  type="date"
                  name="birthday"  
                  value=''
                  onChange={handleChange}
                />
              </FormControl>
              <Box>
              <Button>Save Profile</Button>
              <Button>Save Profile</Button>
              </Box>
            </form>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
