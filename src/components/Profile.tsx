import { useParams, useNavigate } from "react-router-dom";
import React, {  useContext, useEffect } from "react";
import {
  Avatar,
  Container,
  Box,
  Button,
  FormControl,
  InputLabel,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteIcon from "@mui/icons-material/Delete";
import editIcon from "../assets/editIcon.png";
import {
  UsersContext,
  UsersContextType,
} from "../context/UsersContext";


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

  const { findUser, editItem, setEditItem, updateUserById } = useContext(UsersContext) as UsersContextType


  const uid = Number(id)
  

  useEffect(() => {
    findUser(uid)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditItem({ ...editItem, [e.target.name]: e.target.value }); 
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    updateUserById(uid, editItem)
    console.log(editItem)
  }

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
              <Avatar alt="user" src={editItem.avatar} sx={{ width: 150, height: 150 }} />
            </Badge>
          </Box>
          <Box sx={{ padding: "20px" }}>
            <form
              style={{
                display: "flex",
                width: "300px",
                flexDirection: "column",
              }}
              onSubmit={handleSubmit}
            >
              <FormControl style={{ marginBottom: "10px" }}>
                <InputLabel htmlFor="fullname">
                  Adı-Soyadı
                </InputLabel>
                <BootstrapInput
                  id="fullname"
                  type="text"
                  name="fullname"
                  value={editItem.fullname}
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
                  value={editItem.phone}
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
                  name="email"
                  value={editItem.email}
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
                  value={editItem.birthday}
                  onChange={handleChange}
                />
              </FormControl>
              <Box>
              <Button  startIcon={<DeleteIcon />} >Hesabı Sil</Button>
              <Button variant="contained" type="submit">Hesabı Güncelle</Button>
            
              </Box>
            </form>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
