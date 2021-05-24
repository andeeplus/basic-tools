import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';
import Text from '../Text';

const context = createContext({
  activeTabId: 'a',
  changeTab: () => {}
});

const Tab = ({ id, children, ...props }) => {
  const { activeTabId, changeTab } = useContext(context);
  return (
    <Text
      css="transition: all .3s ease"
      variant={activeTabId === id ? 'link.cta' : 'link.default'}
      mx={3}
      onClick={() => changeTab(id)}
      {...props}
    >
      {children}
    </Text>
  );
};

Tab.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node
};

const TabPanel = ({ whenActive, children, ...props }) => {
  const tab = useContext(context);
  return tab.activeTabId === whenActive ? <Box {...props}>{children}</Box> : null;
};

TabPanel.propTypes = {
  whenActive: PropTypes.string,
  children: PropTypes.node
};

const TabSwitcher = ({ children, defaultTab }) => {
  const [activeTabId, setActiveTab] = useState('a');
  const changeTab = (newTabId) => {
    setActiveTab(newTabId);
  };

  useEffect(() => {
    if (defaultTab) {
      changeTab(defaultTab);
    }
  }, []);

  return (
    <context.Provider
      value={{
        activeTabId,
        changeTab
      }}
    >
      {children}
    </context.Provider>
  );
};

TabSwitcher.propTypes = {
  children: PropTypes.node,
  defaultTab: PropTypes.string
};

export default TabSwitcher;

export { Tab, TabPanel };
