import { IconButton, InputBase, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../assets/theme/theme';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SidebarLayout from './Sidebar';

const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3px">
        {' '}
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <main className="content">
        <Navbar />

        {children}
      </main>
    </>
  );
};
