import { Carousel, List, Loader, Placeholder } from 'rsuite';
const { Paragraph } = Placeholder;

const DisplayV2 = ({ apiData, isLoading }) => {
  let keys = [];
  if (apiData && apiData[0]) keys = Object.keys(apiData[0]);

  return (
    <div>
      {isLoading ? (
        <Paragraph rows={8} className='custom-slider'>
          <Loader center content='loading' />
        </Paragraph>
      ) : apiData && apiData.length > 0 ? (
        <Carousel className='custom-slider' shape='bar'>
          {apiData.map((item, index) => (
            <List autoScroll bordered hover key={index}>
              {keys.map((itemKey, itemIndex) =>
                !['openfda', 'product_colors'].includes(itemKey) ? (
                  <List.Item key={index + itemIndex} index={index + itemIndex}>
                    <div className='list-item-wrap'>
                      <h6 className='head'>
                        {itemKey.replaceAll('_', '  ')} :{' '}
                      </h6>
                      <div className='head-value'>{item[itemKey]} </div>
                    </div>
                  </List.Item>
                ) : null
              )}
            </List>
          ))}
        </Carousel>
      ) : null}
    </div>
  );
};
export default DisplayV2;
