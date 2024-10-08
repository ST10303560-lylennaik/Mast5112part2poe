export type RootStackParamList = {
    Home: { menuItems: MenuItem[] } | undefined;
    AddMenuItem: { setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>; menuItems: MenuItem[] };
    Login: undefined; 
  };
  
  export interface MenuItem {
    name: string;
    description: string;
    course: string;
    price: string;
  }
  