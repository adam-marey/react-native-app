import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from '../components/forms';
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const categories = [
  {
    backgroundColor: '#05595B',
    icon: 'book-open-variant',
    label: 'Books',
    value: 8,
  },
  {
    backgroundColor: '#94B49F',
    icon: 'book-open-variant',
    label: 'Novels',
    value: 8,
  },
  {
    backgroundColor: '#398AB9',
    icon: 'book-open-variant',
    label: 'Magazines',
    value: 8,
  },
  {
    backgroundColor: '#778ca3',
    icon: 'application',
    label: 'Other',
    value: 9,
  },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
