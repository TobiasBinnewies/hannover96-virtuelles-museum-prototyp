import { Admin, ListGuesser, Resource } from 'react-admin'
import { dataProvider } from "ra-data-simple-prisma";

const ReactAdmin = () => {
  return (
    <Admin dataProvider={dataProvider("/api/admin")}>
      <Resource name="user" list={ListGuesser}/>
    </Admin>
  );
};

export default ReactAdmin;
