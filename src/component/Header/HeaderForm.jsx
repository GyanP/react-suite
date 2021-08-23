import { Nav, Icon } from 'rsuite';
const { Item } = Nav;

const HeaderForm = ({ navItem, activeNav, onHandleSelect }) => {
  return (
    <Nav
      appearance='tabs'
      reversed
      activeKey={activeNav}
      onSelect={onHandleSelect}
    >
      {navItem &&
        navItem.map((item, key) =>
          item.icon !== '' ? (
            <Item
              eventKey={item.key}
              icon={<Icon icon={item.icon} />}
              key={key}
            >
              {item.value}
            </Item>
          ) : (
            <Item eventKey={item.key}>{item.value}</Item>
          )
        )}
    </Nav>
  );
};
export default HeaderForm;
