import {Value} from '../utils/provValue'

const Table = ({prov}) =>{
    return (
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
            <th scope="col">No</th>
              <th scope="col">Province</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Recovered</th>
              <th scope="col">Death</th>
            </tr>
          </thead>
          <tbody>
            {Value(prov)}
          </tbody>
        </table>
    )
};

export default Table;