import { Box, useTheme } from '@mui/material';
import { Header } from 'components/Header';
import { tokens } from 'assets/theme/theme';
import { StatBox } from 'components/StatBox/StatBox';
import EmailIcon from '@mui/icons-material/Email';
import { ProgressCircle } from 'components/Progress_Circle/ProgressCircle';

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
        {/* Rows */}
        <Box
          sx={{
            gridColumn: 'span 3',
            bgcolor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* <StatBox title="12,361" subtitle="Emails Sent" /> */}
        </Box>
      </Box>
    </Box>
  );
};
