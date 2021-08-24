import { Table } from 'rsuite';
const { Column, HeaderCell, Cell } = Table;

const DisplayV1 = ({ apiData }) => {
  let keys = [];
  if (apiData && apiData[0]) keys = Object.keys(apiData[0]);

  return (
    <div>
      {apiData && apiData.length > 0 ? (
        <Table hover={true} height={500} data={apiData} className='table-wrap'>
          {keys.map((item, key) =>
            !['openfda', 'product_colors'].includes(item) ? (
              <Column
                width={200}
                resizable
                key={key}
                fixed={key === 0 ? true : false}
              >
                <HeaderCell className='table-header-cell'>
                  {item.replaceAll('_', '  ')}
                </HeaderCell>
                <Cell dataKey={item} />
              </Column>
            ) : null
          )}
        </Table>
      ) : null}
    </div>
  );
};
export default DisplayV1;
