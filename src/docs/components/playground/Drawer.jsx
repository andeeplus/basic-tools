import React, { useState } from 'react';
import { Drawer, Box, Button, Text } from '../../../components';

const positions = ['top', 'bottom', 'left', 'right', 'custom-top'];

const text = {
  top: 'Adaptive content',
  bottom: 'Adaptive content',
  left: 'Please remember to set my width and height, when using the left drawer',
  right: 'Please remember to set my width and height, when using the right drawer',
  'custom-top':
    'Please be aware you can override the default placement to fit your needs (i.e. Nav Header).'
};

const getSpecificInfoText = (position) => text[position];

const DrawerStory = () => {
  const [openDrawer, setOpenDrawer] = useState();

  const closeDrawer = () => setOpenDrawer();

  return (
    <>
      <Box
        flexDirection="column"
        as="div"
        height="600px"
        width="100%"
        alignItems="center"
        justifyContent="center"
        bg="gray"
      >
        {positions.map((position) => {
          const topWithCustomPlacement = position === 'custom-top';
          return (
            <Drawer
              key={position}
              open={position === openDrawer}
              onDismiss={closeDrawer}
              maxWidth={['left', 'right'].includes(position) ? 400 : '100%'}
              side={topWithCustomPlacement ? 'top' : position}
              maxHeight={topWithCustomPlacement && 'fit-content'}
              {...(topWithCustomPlacement
                ? {
                    placement: {
                      key: 'top',
                      value: {
                        top: 80,
                        right: 0,
                        bottom: 0
                      }
                    }
                  }
                : {})}
            >
              <Box flexDirection="column" p={3}>
                <Text variant="title.lg">{`This is a ${position} drawer`}</Text>
                <Text variant="p.default">{getSpecificInfoText(position)}</Text>
              </Box>
            </Drawer>
          );
        })}
        <Box
          width="100%"
          position="absolute"
          my="auto"
          left={0}
          right={0}
          alignItems="center"
          flexDirection="column"
        >
          <Text mb={5}>Please, click one of the buttons below</Text>
          <Box>
            {positions.map((position) => (
              <Button mt={2} key={position} onClick={() => setOpenDrawer(position)}>
                {position}
              </Button>
            ))}
            <Button variant="outlined" mt={2} onClick={closeDrawer}>
              Close
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DrawerStory;
