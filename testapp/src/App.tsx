import React, { useState } from 'react'
import Button from './components/Button'
import Search from './components/Search'
import Input from './components/Input'
import Card from './components/Card'
import Select from './components/Select'
import Checkbox from './components/Checkbox'
import Image from './components/Image'
import Alert from './components/Alert'
import Avatar from './components/Avatar'
import FileInput from './components/FileInput'
import Container from './components/Container'
import Flex from './components/Flex'
import Modal from './components/Modal'
import Pagination from './components/Pagination'
import Radio from './components/Radio'
import Slider from './components/Slider'
import Switch from './components/Switch'
import Table from './components/Table'
import Textarea from './components/Textarea'
import Grid from './components/Grid'

const checkboxOptions = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
  { label: 'Option 3', value: 'Option 3' }
];

const tableData = [
  { id: 1, name: 'John Doe', email: 'john@mail.com', phone: '1234567890' },
  { id: 2, name: 'Jane Doe', email: 'john2@mail.com', phone: '1234567890' },
  { id: 3, name: 'John Smith', email: 'smith@mail.com', phone: '1234567890' }
];

const App = () => {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {/* <Avatar size='xl'>sj</Avatar> */}
      {/* <Avatar image='/avatar.webp' /> */}
      {/* <Input variant='outlined' label='Some label' /> */}
      {/* <Search>search</Search> */}

      {/* <Card withBorder>
        <Card.Header>
          <h1 className='text-lg'>Some title</h1>
          </Card.Header>
          <Card.Body>
          <p className='text-sm'>Laborum fuga assumenda in non sunt. Quam voluptates est molestiae quis. Amet tempore eveniet perferendis voluptas laudantium vel voluptates. Ut et eos hic nam consequatur.</p>
          </Card.Body>
          <Card.Footer>
          <Button color='danger'>Delete</Button>
          </Card.Footer>
        </Card> */}
      {/* <Select></Select> */}
     
      {/* <Image></Image> */}
      {/* <Alert
          color='success'
          title='Some title'
          description='Laborum fuga assumenda in non sunt. Quam voluptates est molestiae quis. Amet tempore eveniet perferendis voluptas laudantium vel voluptates. Ut et eos hic nam consequatur.'
        /> */}
      {/* <Button color='success' padding='xs' radius='xl' fullWidth>Lorem ipsum dolor sit amet.</Button> */}

      {/* <FileInput
        label='Upload File'
        onChange={(file) => console.log(file)}
        contraints='image/*'
        style={{width: 300}}
      /> */}

      <Container style={{ marginTop: 30 }} size='5xl' >
      {/* <Flex direction='column' alignItems='center'>
          <h1 className='text-2xl'>Hello World</h1>
          <Button color='success' padding='xs' radius='xl' fullWidth>Lorem ipsum dolor sit amet.</Button>
        </Flex> */}
         {/* <Input variant='outlined' label='Some label' /> */}
        {/* <Grid children={undefined}></Grid> */}
      {/* <Avatar image='/avatar.webp'size='xl' /> */}
      {/* <Checkbox options={checkboxOptions} onChange={(value) => console.log(value)} /> */}
       {/* <FileInput
        label='Upload File'
        onChange={(file) => console.log(file)}
        contraints='image/*'
        style={{width: 250}}
      /> */}
        {/* <Alert title='Error' description='Login Failed' color='danger'/> */}
        {/* use modal component */}
        {/* <Button  color='success' size='md' variant='outlined'> Button</Button> */}

        {/* <Modal isOpen={modalOpen} onClose={() => console.log('closed')} title='Some title'>
          <p className='text-sm'>Laborum fuga assumenda in non sunt. Quam voluptates est molestiae quis. Amet tempore eveniet perferendis voluptas laudantium vel voluptates. Ut et eos hic nam consequatur.</p>
        </Modal>

        <Button className='mt-5' color='primary' onClick={() => {
          console.log('skjdshj');
          setModalOpen(true)
        }}>Open Modal</Button> */}

        {/* <Pagination currentPage={2} totalPages={10} onPageChange={(page) => console.log(page)} /> */}

        {/* <Radio options={checkboxOptions} onChange={(value) => console.log(value)} checked={''} /> */}

        {/* <Search onSearch={v => console.log(v)} /> */}


        {/* <Select options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' }
          ]} onChange={(value) => console.log(value)} /> */}

        {/* <Slider min={0} max={100} value={50} onChange={(value) => console.log(value)} /> */}

        {/* <Switch checked={true} onChange={(checked) => console.log(checked)} color='red' /> */}
        {/* <Table data={tableData} columns={['id', 'name', 'email', 'phone']} /> */}

        <Textarea label='Some label' />


      </Container>

      {/* customizable search input library component designed using tailwind */}
    </div>
  )
}

export default App
