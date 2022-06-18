import * as React from "react";
import {
  Admin,
  Resource,
  Datagrid,
  List,
  TextField,
  ReferenceField,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput,
  ReferenceArrayField,
  SelectInput,
  SelectArrayInput,
  Create,
  ChipField,
  SingleFieldList
} from 'react-admin';
import localStorageDataProvider from 'ra-data-local-storage';

export const VerticalList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const VerticalEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const VerticalCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const DepartmentList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="vertical_id" reference="verticals">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const DepartmentEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="vertical_id" reference="verticals">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const DepartmentCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="vertical_id" reference="verticals">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const RoleList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const RoleEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const RoleCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const TeamList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="department_id" reference="departments">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const TeamEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="department_id" reference="departments">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const TeamCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="department_id" reference="departments">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const PersonList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceField source="team_id" reference="teams">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceArrayField source="role_id" reference="roles">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const PersonEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="team_id" reference="teams">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceArrayInput source="role_id" reference="roles">
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const PersonCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceInput source="team_id" reference="teams">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceArrayInput source="role_id" reference="roles">
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const ProjectList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ReferenceArrayField source="team_id" reference="teams">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <TextField source="name" />
    </Datagrid>
  </List>
);

export const ProjectEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceArrayInput source="team_id" reference="teams">
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const ProjectCreate = () => (
  <Create redirect="list">
    <SimpleForm>
      <TextInput source="id" />
      <ReferenceArrayInput source="team_id" reference="teams">
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

const dataProvider = localStorageDataProvider({
  defaultData: {
    verticals: [
      { id: 0, name: "vertical 1" }
    ],
    departments: [
      { id: 0, vertical_id: 0, name: "department 1" }
    ],
    roles: [
      { id: 0, name: "role 1" }
    ],
    teams: [
      { id: 0, department_id: 0, name: "team 1" }
    ],
    people: [
      { id: 0, team_id: 0, role_id: [0], name: "a person" }
    ],
    projects: [
      { id: 0, team_id: [0], name: "important project" }
    ]
  }
});

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="verticals" list={VerticalList} edit={VerticalEdit} create={VerticalCreate} />
    <Resource name="departments" list={DepartmentList} edit={DepartmentEdit} create={DepartmentCreate} />
    <Resource name="roles" list={RoleList} edit={RoleEdit} create={RoleCreate} />
    <Resource name="teams" list={TeamList} edit={TeamEdit} create={TeamCreate} />
    <Resource name="people" list={PersonList} edit={PersonEdit} create={PersonCreate} />
    <Resource name="projects" list={ProjectList} edit={ProjectEdit} create={ProjectCreate} />
  </Admin>
);

export default App;
