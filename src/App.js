import * as React from 'react';
import * as Mui from '@material-ui/core'

function renderRow(props) {
  const { index, style } = props;

  return (
    <Mui.ListItem style={style} key={index} component="div" disablePadding>
      <Mui.ListItemIcon>
        <Mui.ListItemText primary={`Item ${index + 1}`} />
      </Mui.ListItemIcon>
    </Mui.ListItem>
  );
}

export default function VirtualizedList() {
  return (
    <Mui.Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <Mui.ListItemText
        height={400}
        width={360}
        itemSize={46}
        itemCount={200}
        overscanCount={5}
      >
        {renderRow}
      </Mui.ListItemText>
    </Mui.Box>
  );
}
