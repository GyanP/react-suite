import { Nav, Icon, FlexboxGrid } from 'rsuite';
const { Item } = Nav;

const HeaderNav = ({ navItem, activeNav, onHandleSelect }) => {
  return (
    <FlexboxGrid justify='center'>
      <Nav
        appearance='tabs'
        reversed
        activeKey={activeNav}
        onSelect={onHandleSelect}
        className='nav'
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
              <Item eventKey={item.key} key={key}>
                {item.value}
              </Item>
            )
          )}
      </Nav>
    </FlexboxGrid>
  );
};
export default HeaderNav;
