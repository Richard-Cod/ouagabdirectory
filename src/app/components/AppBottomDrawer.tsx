import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { HeartIcon } from '@heroicons/react/24/solid';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function AppBottomDrawer({ButtonComp,Content,anchor} : {ButtonComp:any,Content:any,anchor:Anchor}) {
    const [isOpen, setisOpen] = React.useState(false)

  const toggleDrawer = (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setisOpen(open);
    };

  return (
    <div>
        <React.Fragment key={anchor}>
          <span className='cursor-pointer' onClick={toggleDrawer(anchor, true)}>
            {ButtonComp}
          </span>
          <Drawer
            anchor={anchor}
            open={isOpen}
            onClose={toggleDrawer(anchor, false)}
          >
            <div
                className=''
                style={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
                >
                {Content}
            
            </div>
          </Drawer>
        </React.Fragment>
    </div>
  );
}

AppBottomDrawer.defaultProps = {
    anchor : "bottom"
}