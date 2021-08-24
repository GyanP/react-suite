import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Dropdown, FlexboxGrid, Radio, RadioGroup } from 'rsuite';

import {
  requestDataFromApi,
  requestDisplayDataItem,
} from '../../redux/actions';
import DisplayV1 from './DisplayV1';
import DisplayV2 from './DisplayV2';

const { Item } = Dropdown;

const DataDisplay = () => {
  // States
  const [activeKeyValue, setActiveKeyValue] = useState('');
  const [activeDisplay, setActiveDisplay] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestDisplayDataItem()); //eslint-disable-next-line
  }, []);

  // selectors
  const reducerData = useSelector((state) => state.suiteReducer);
  const { displayDataItem = [], apiData = [] } = reducerData;

  //  Function to manage display data item selection
  const onHandleMenuSelect = async (activeKey) => {
    setActiveKeyValue(activeKey);
    await getData(activeKey);
  };

  //  Function to request data from api
  const getData = (activeKey) => {
    dispatch(requestDataFromApi(activeKey));
  };

  return (
    <Container>
      <FlexboxGrid justify='space-between'>
        <FlexboxGrid.Item colspan={24} md={12}>
          <Dropdown
            appearance='default'
            activeKey={activeKeyValue}
            title={'Choose any one'}
            onSelect={onHandleMenuSelect}
          >
            {displayDataItem &&
              displayDataItem.map((item, key) => (
                <Item eventKey={item.key} key={key}>
                  {item.name}
                </Item>
              ))}
          </Dropdown>
        </FlexboxGrid.Item>

        <FlexboxGrid.Item colspan={24} md={12}>
          <RadioGroup
            inline
            name='activeDisplay'
            value={activeDisplay}
            onChange={(value) => {
              setActiveDisplay(value);
            }}
          >
            <Radio value={true}>MyDataDisplayWidget V1</Radio>
            <Radio value={false}>MyDataDisplayWidget V2</Radio>
          </RadioGroup>
        </FlexboxGrid.Item>
      </FlexboxGrid>

      {activeDisplay ? (
        <DisplayV1 apiData={apiData} /> /* v1 ui */
      ) : (
        <DisplayV2 apiData={apiData} /> /* v2 ui */
      )}
    </Container>
  );
};

export default DataDisplay;
