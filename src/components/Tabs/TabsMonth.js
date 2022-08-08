import * as React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import TabPanel from './TabsPanel';
import { ListTransaction } from '../../data/ListTransaction';
import CardTransaction from '../card/CardTransaction';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MonthTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let data = ListTransaction
  data = JSON.parse(JSON.stringify(data))

  console.log(data)

  const trans = [...data]

  trans.sort((a, b) => a.date > b.date ? 1 : (a.date === b.date) ? ((a.type > b.type) ? 1 : - 1) : - 1)
  // console.log(trans)

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Last Month" {...a11yProps(0)} />
          <Tab label="This Month" {...a11yProps(1)} />
          <Tab label="Future" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={1}>
        <div className='bg-white rounded-4 shadow' >
          <div className='fw-bold text-center py-2 fs-5' style={{ color: '#22577A' }}>Transaction</div> 
          <hr className='m-0 p-0'/>
          <div className='overflow pt-2' style={{height: '460px'}}>
            {trans.map(item => (
              <CardTransaction item={item} img={item.category.img} category={item.category.name} result/>
            ))}
          </div>
        </div>
      </TabPanel>
    </div>
  );
}