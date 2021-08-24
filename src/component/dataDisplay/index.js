import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Dropdown, FlexboxGrid } from 'rsuite';
import {
  requestDataFromApi,
  requestDisplayDataItem,
} from '../../redux/actions';
import DisplayV1 from './DisplayV1';
const { Item } = Dropdown;

const DataDisplay = () => {
  // States
  const [activeKeyValue, setActiveKeyValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestDisplayDataItem()); //eslint-disable-next-line
  }, []);

  // selectors
  const reducerData = useSelector((state) => state.suiteReducer);
  const { displayDataItem = [], apiData = [] } = reducerData;

  //  Function to manage display data item selection
  const onHandleSelect = async (activeKey) => {
    setActiveKeyValue(activeKey);
    await getData(activeKey);
  };

  const getData = (activeKey) => {
    dispatch(requestDataFromApi(activeKey));
  };

  return (
    <Container>
      <Dropdown
        appearance='default'
        activeKey={activeKeyValue}
        title={'Choose any one'}
        onSelect={onHandleSelect}
      >
        {displayDataItem &&
          displayDataItem.map((item, key) => (
            <Item eventKey={item.key} key={key}>
              {item.name}
            </Item>
          ))}
      </Dropdown>
      <DisplayV1 apiData={apiData} />
    </Container>
  );
};

export default DataDisplay;
