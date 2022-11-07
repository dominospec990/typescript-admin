import { Box, useTheme } from '@mui/material';
import { GeographyChart } from 'components/Geography';
import { Header } from 'components/Header';
import { tokens } from '../../../assets/theme/theme';

export const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Geo Chart" />
      <Box
        height="75vh"
        // border={`1px solid ${colors.grey[100]}`}
        // borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};
