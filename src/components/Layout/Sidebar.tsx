import React, { useState } from 'react';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from 'react-pro-sidebar';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';

import { Link } from 'react-router-dom';
import { tokens } from '../../assets/theme/theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';

interface IMenuItem {
  title: string;
  to: string;
  icon: React.ReactNode;
  isSelected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Item = ({ title, to, icon, isSelected, setSelected }: IMenuItem) => {
  return (
    <MenuItem
      routerLink={<Link to={to} />}
      onClick={() => setSelected(title)}
      icon={icon}
      active={isSelected === title}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarLayout = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();
  const [isSelected, setSelected] = useState('Dashboard');

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        '& .sidebar': {
          background: `${colors.primary[400]} !important`,
          borderRight: `${colors.primary[400]} !important`,
        },
        '& .sidebar-inner': {
          backgroundColor: 'transparent !important',
        },
        '& .menu-anchor:hover': {
          color: '#868dfb !important',
          backgroundColor: 'transparent !important',
        },
        '& .menu-anchor': {
          backgroundColor: 'transparent !important',
        },
      }}
    >
      <Sidebar>
        <Menu>
          <MenuItem
            icon={
              collapsed ? (
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
              ) : undefined
            }
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  hildr
                </Typography>
                <IconButton
                  onClick={() => {
                    collapseSidebar();
                  }}
                >
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!collapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center">
                <Avatar sx={{ width: 56, height: 56 }} />
              </Box>

              <Box textAlign="center">
                <Typography sx={{ m: '10px 0 0 0 ' }}>User Name</Typography>
                <Typography>User Title</Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={collapsed ? undefined : '10%'}>
            <Item
              title="Dashboard"
              to="/app"
              icon={<HomeOutlinedIcon />}
              isSelected={isSelected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Team"
              to="/app/team"
              icon={<PeopleOutlinedIcon />}
              isSelected={isSelected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Info"
              to="/app/contacts"
              icon={<ContactsOutlinedIcon />}
              isSelected={isSelected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balance"
              to="/app/invoices"
              icon={<ReceiptOutlinedIcon />}
              isSelected={isSelected}
              setSelected={setSelected}
            />
            <Item
              title="Profile Form"
              to="/app/form"
              icon={<PersonOutlinedIcon />}
              isSelected={isSelected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/app/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              isSelected={isSelected}
              setSelected={setSelected}
            />
            <Item
              title="FAQs"
              to="/app/faq"
              icon={<HelpOutlinedIcon />}
              isSelected={isSelected}
              setSelected={setSelected}
            />
            <Item
              title="Bar Chart"
              to="/app/bar"
              icon={<BarChartOutlinedIcon />}
              isSelected={isSelected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/app/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              isSelected={isSelected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/app/line"
              icon={<TimelineOutlinedIcon />}
              isSelected={isSelected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/app/geography"
              icon={<MapOutlinedIcon />}
              isSelected={isSelected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarLayout;
