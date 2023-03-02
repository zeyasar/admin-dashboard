import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import deleteIcon from "../assets/delete.png";
import {
  IUserType,
  UsersContext,
  UsersContextType,
} from "../context/UsersContext";
import { useContext } from "react";
import { IconButton, Typography } from "@mui/material";
import "./users.css";
import { useNavigate } from "react-router-dom";
import { useConfirm } from "material-ui-confirm";



const Users = () => {
  const { users, setUsers } = useContext(UsersContext) as UsersContextType;
  const navigate = useNavigate();

  const confirm = useConfirm();

  const handleDelete = (id:number) => {
    confirm({ description: 'Kullanıcıyı silmek üzeresiniz, bu işlem geri alınamaz.',
    title:'Emin misiniz?',
    confirmationText: 'Sil',
    cancellationText:'Vazgeç'
  })
      .then(() => setUsers(users.filter((other) => other.id !== id)))
      .catch(() => console.log("Silme işlemi iptal edildi."));
  };
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, overflow: "hidden" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TableContainer
              component={Paper}
              sx={{ px: 3, maxHeight: "100vh" }}
            >
              <Table
                sx={{ minWidth: 650 }}
                stickyHeader
                aria-label="sticky table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell align="center">Ad-Soyad</TableCell>
                    <TableCell align="center">E-mail</TableCell>
                    <TableCell align="center">Telefon</TableCell>
                    <TableCell align="center">Durum</TableCell>
                    <TableCell align="center">İşlem</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user: IUserType, index: number) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell align="left">
                        <Box sx={{ display: "flex", ml: 2 }}>
                          <Avatar alt="avatar" src={user.avatar} />
                          <Typography ml={2} sx={{ my: "auto" }}>
                            {user.fullname}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell align="left">{user.email}</TableCell>
                      <TableCell align="center">{user.phone}</TableCell>

                      <TableCell align="left">
                        <Typography
                          className={`${
                            user.status === "Aktif" ? "green" : ""
                          } text`}
                        >
                          {user.status}
                        </Typography>
                      </TableCell>
                      <TableCell align="center" sx={{ display: "flex" }}>
                        <IconButton
                          onClick={() => navigate(`/profile/${user.id}`)}
                        >
                          <EditIcon sx={{ color: "#B8BFCC" }} />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(user.id)}>
                          <img src={deleteIcon} alt="delete" />
                        </IconButton>
                        
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Users;
