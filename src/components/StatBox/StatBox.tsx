import { Box, Typography, useTheme } from '@mui/material';

import { tokens } from 'assets/theme/theme';
import { ProgressCircle } from '../Progress_Circle/ProgressCircle';

export interface StatBoxProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  progress: number;
  increase: string;
}

export const StatBox = ({
  title,
  subtitle,
  icon,
  progress,
  increase,
}: StatBoxProps) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}

          <Typography variant="h4">{title}</Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="5px">
        <Typography variant="h5">{subtitle}</Typography>
        <Typography>{increase}</Typography>
      </Box>
    </Box>
  );
};
