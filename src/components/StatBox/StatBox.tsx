import { Box, Typography, useTheme } from '@mui/material';

import { tokens } from 'assets/theme/theme';
import { ProgressCircle } from '../Progress_Circle/ProgressCircle';

export interface StatBoxProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  progress: number;
  increase: number;
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
    <Box>
      <Box>
        {icon}
        <Typography variant="h4">{title}</Typography>
      </Box>
      <ProgressCircle progress={progress} />
      <Box>
        <Typography variant="h5">{subtitle}</Typography>
        <Typography>{increase}</Typography>
      </Box>
    </Box>
  );
};
