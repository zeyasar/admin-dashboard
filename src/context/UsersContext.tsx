import { createContext, useState } from "react";

export interface IUserType {
  avatar: string;
  fullname: string;
  email: string;
  phone: string;
  birthday: string;
  id: number;
  status: string;
}

export interface UsersContextType {
  users: IUserType[];
  editItem:IUserType;
  setEditItem:any;
  updateUserById:any;
  deleteUser: (id: number) => void;
  findUser: (id: number) => void;
}

export const UsersContext = createContext<UsersContextType | undefined>(
  undefined
);

const UsersContextProvider = (props: any) => {
  const initialUsers: IUserType[] = [
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1022.jpg",
      fullname: "Arthur Schumm",
      email: "Ashleigh85@gmail.com",
      phone: "386-479-1165",
      birthday: "1997-07-04",
      id: 1,
      status: "Aktif",
    },
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/946.jpg",
      fullname: "Alonzo Effertz",
      email: "Raymundo.Borer@yahoo.com",
      phone: "237-922-1984",
      birthday: "1961-09-12",
      id: 2,
      status: "Yasaklandı",
    },
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/129.jpg",
      fullname: "Sheri Bins",
      email: "Nya.Russel@gmail.com",
      phone: "492-344-0446",
      birthday: "1993-09-16",
      id: 3,
      status: "Aktif",
    },
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/451.jpg",
      fullname: "Carl Hermiston",
      email: "Virgil_Runte16@hotmail.com",
      phone: "342.766.9476",
      birthday: "1966-06-20",
      id: 4,
      status: "Aktif",
    },
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/411.jpg",
      fullname: "Troy Harber",
      email: "London79@yahoo.com",
      phone: "806-435-5851",
      birthday: "1991-02-25",
      id: 5,
      status: "Aktif",
    },
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/211.jpg",
      fullname: "Barbara Emmerich",
      email: "Hailee_Herzog@yahoo.com",
      phone: "968-621-0421",
      birthday: "1967-05-01",
      id: 6,
      status: "Yasaklandı",
    },
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/643.jpg",
      fullname: "Jesse Herzog",
      email: "Albin.Fritsch@yahoo.com",
      phone: "565-200-7357",
      birthday: "1959-10-02",
      id: 7,
      status: "Kısıtlandı",
    },
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/390.jpg",
      fullname: "Grant Kozey",
      email: "Layne_Tillman47@hotmail.com",
      phone: "1-852-293-7089",
      birthday: "2004-10-24",
      id: 8,
      status: "Aktif",
    },
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/49.jpg",
      fullname: "Mrs. Perry Harvey",
      email: "Stefan_Ankunding@hotmail.com",
      phone: "848-656-3226",
      birthday: "1978-07-08",
      id: 9,
      status: "Aktif",
    },
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/986.jpg",
      fullname: "Claire Farrell",
      email: "Delmer_Feest86@hotmail.com",
      phone: "421.274.2331",
      birthday: "1991-02-11",
      id: 10,
      status: "Yasaklandı",
    },
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/754.jpg",
      fullname: "Joseph Kulas",
      email: "Lorine.Buckridge@yahoo.com",
      phone: "1-372-837-2812",
      birthday: "1947-07-23",
      id: 11,
      status: "Aktif",
    },
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1224.jpg",
      fullname: "Jamie Bednar",
      email: "Carlotta.Smitham@gmail.com",
      phone: "(710) 681-2790",
      birthday: "1994-03-15",
      id: 12,
      status: "Aktif",
    },
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/185.jpg",
      fullname: "Ms. Rafael Murazik",
      email: "Edgar_Wehner95@gmail.com",
      phone: "755-366-7115",
      birthday: "1964-12-07",
      id: 13,
      status: "Aktif",
    },
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/631.jpg",
      fullname: "Alicia Greenfelder",
      email: "Polly.Gleichner@hotmail.com",
      phone: "941.635.7245",
      birthday: "1995-12-27",
      id: 14,
      status: "Kısıtlandı",
    },
    {
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1163.jpg",
      fullname: "Ronnie Thiel",
      email: "Aubrey_Hagenes7@yahoo.com",
      phone: "789-205-1123",
      birthday: "1999-05-23",
      id: 15,
      status: "Aktif",
    },
  ];
  const [users, setUsers] = useState<IUserType[]>(initialUsers);

  const initialItem: IUserType = {
    avatar: "",
    fullname: "",
    email: "",
    phone: "",
    birthday: "",
    id: 1,
    status: "",
  };
  const [editItem, setEditItem] = useState(initialItem);

  const deleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const findUser = (id: number) => {
    const data:any = users.find((user) => user.id === id);
    setEditItem(data);
  };

  
  const updateUserById = (id: number, data: IUserType) => {
    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return { ...user, ...data };
      }
      return user;
    });
    setUsers(updatedUsers);
  };
  

  const contextValue: UsersContextType = {
    users,
    deleteUser,
    findUser,
    editItem,
    setEditItem,
    updateUserById,
  };
  return (
    <UsersContext.Provider value={contextValue}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
