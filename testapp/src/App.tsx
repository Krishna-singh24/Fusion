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

const radioOptions = [
  { label: 'Radio 1', value: 'Option 1' },
  { label: 'Radio 2', value: 'Option 2' },
  { label: 'Radio 3', value: 'Option 3' }
];

const tableData = [
  { id: 1, name: 'John Doe', email: 'john@mail.com', phone: '1234567890' },
  { id: 2, name: 'Jane Doe', email: 'john2@mail.com', phone: '1234567890' },
  { id: 3, name: 'John Smith', email: 'smith@mail.com', phone: '1234567890' }
];

const App = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [checked, setChecked] = useState(false);

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
        {/* <Flex direction='row' justifyContent='' alignItems='center'>
          <h1 className='text-2xl'>Hello World</h1>
          <Button color='success' padding='xs' radius='xl' >Lorem ipsum dolor sit amet.</Button>
        </Flex> */}
        {/* <Input variant='outlined' label='Some label' /> */}
        {/* <Grid children={undefined}></Grid> */}
        {/* <Avatar image='/avatar.webp'size='xl' /> */}

        {/* <FileInput
        label='Upload File'
        onChange={(file) => console.log(file)}
        contraints='image/*'
        style={{width: 250}}
      /> */}
        {/* <Alert title='Error' description='Login Failed' color='danger'/> */}
        {/* use modal component */}
        {/* <Button  color='success' size='md' variant='outlined'> Button</Button> */}

        {/* <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          // headerContent={<p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">Featured</p>}
          bodyContent={<>
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Modal title
            </h3>
            <p className="mt-2 text-gray-500 dark:text-neutral-400">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <a
              className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
              href="#"
            >
              Card link
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </>}

        // footerContent={
        //   <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
        //     Last updated 5 mins ago
        //   </p>
        // }
        />

        <Button className='mt-5' color='primary' onClick={() => {
          console.log('skjdshj');
          setModalOpen(true)
        }}>Open Modal</Button> */}

        {/* <Pagination currentPage={page} totalPages={10} onPageChange={setPage} /> */}

        {/* <Radio options={radioOptions} onChange={(value) => console.log(value)} checked={''} /> */}

        {/* <Search onSearch={v => console.log(v)} placeholder={''} /> */}

        {/* <Checkbox options={checkboxOptions} onChange={(value) => console.log(value)} /> */}


        {/* <Select options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' }
          ]} onChange={(value) => console.log(value)} /> */}

        {/* <Slider min={0} max={100} value={50} onChange={(value) => console.log(value)} /> */}

        <Switch checked={checked} onChange={setChecked} color='red' label={' Label '} />
        {
          checked ? <p>Checked</p> : <p>Not Checked</p>
        }
        {/* <Table data={tableData} columns={['id', 'name', 'email', 'phone']} /> */}

        {/* <Textarea label='Some label' /> */}


      </Container>

      {/* customizable search input library component designed using tailwind */}
    </div>
  )
}

export default App
