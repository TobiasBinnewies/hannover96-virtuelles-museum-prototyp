"use client";

import { Admin, Create, EditGuesser, ListGuesser, Resource, SimpleForm, TextInput } from 'react-admin'
import { dataProvider } from "ra-data-simple-prisma";

const UserCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="email" label="E-Mail" />
        <TextInput source="username" label="Username" />
        <TextInput source="password" label="Password" />
      </SimpleForm>
    </Create>
  );
};

const SectionCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" label="Title" />
        <TextInput source="date" label="Date" />
        <TextInput source="description" label="Description" />
        <TextInput source="content" label="Content" />
        <TextInput source="model" label="Model" />
        <TextInput source="arLink" label="Ar Link" />
        <TextInput source={"images"} label="Images"/>
      </SimpleForm>
    </Create>
  );
};

const ReactAdmin = () => {
  return (
    <div className={"mt-20"}>
      <Admin dataProvider={dataProvider("/api/admin")}>
        <Resource name={'user'} list={ListGuesser} edit={EditGuesser} create={UserCreate}/>
        <Resource name={"section"} list={ListGuesser} edit={EditGuesser}/>
        <Resource name={"sectionImage"} list={ListGuesser} edit={EditGuesser}/>
      </Admin>
    </div>
  );
};

export default ReactAdmin;