import { Box, useTheme } from '@mui/material';
import { ResponsiveChoropleth } from '@nivo/geo';
import { mockGeographyData as data } from 'data/mockData';
import { countries } from 'data';
import { tokens } from '../../assets/theme/theme';

export const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const props = {
    features: countries.features,
    domain: [0, 1000000],
    // colors: 'nivo',
    unknownColor: '#666666',
    label: 'properties.name',
    valueFormat: '.2s',
    // enableGraticule: true,
    // graticuleLineColor: '#dddddd',
    borderWidth: 0.5,
    borderColor: '#ffffff',
    theme: {
      axis: {
        domain: {
          line: {
            stroke: colors.grey[100],
          },
        },
        legend: {
          text: {
            fill: colors.grey[100],
          },
        },
        ticks: {
          line: {
            stroke: colors.grey[100],
            strokeWidth: 1,
          },
          text: {
            fill: colors.grey[100],
          },
        },
      },
      legends: {
        text: {
          fill: colors.grey[100],
        },
      },
      tooltip: {
        container: {
          color: colors.grey[400],
        },
      },
    },
  };

  return (
    <ResponsiveChoropleth
      data={data}
      {...props}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={
        !isDashboard
          ? [
              {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -150,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#ffffff',
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};
