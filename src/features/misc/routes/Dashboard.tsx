import { Box, useTheme } from '@mui/material';
import { Header } from 'components/Header';
import { tokens } from 'assets/theme/theme';
import { StatBox } from 'components/StatBox/StatBox';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

export const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
      </Box>
      <Box></Box>
      {/* Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: '140px',
          gap: '20px',
        }}
      >
        {/* Row */}
        <Box
          sx={{
            gridColumn: 'span 3',
            bgcolor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
            progress={0.75}
            increase="+14%"
          />
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            bgcolor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="840,000"
            subtitle="Sales"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
            progress={0.55}
            increase="+34%"
          />
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            bgcolor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="12,240"
            subtitle="New Clients"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
            progress={0.45}
            increase="+4%"
          />
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            bgcolor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="1,000,361"
            subtitle="Traffic"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
            progress={0.95}
            increase="+24%"
          />
        </Box>
      </Box>
    </Box>
  );
};
