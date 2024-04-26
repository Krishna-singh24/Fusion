import React from 'react'
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

const checkboxOptions = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
  { label: 'Option 3', value: 'Option 3' }
];

const App = () => {
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
      {/* <Checkbox options={checkboxOptions} onChange={(value) => console.log(value)} /> */}
      {/* <Image></Image> */}
        {/* <Alert
          color='success'
          title='Some title'
          description='Laborum fuga assumenda in non sunt. Quam voluptates est molestiae quis. Amet tempore eveniet perferendis voluptas laudantium vel voluptates. Ut et eos hic nam consequatur.'
        /> */}
        {/* <Button color='success' padding='xs' radius='xl' fullWidth>Lorem ipsum dolor sit amet.</Button> */}

      {/* <FileInput></FileInput> */}

      <Container size='5xl'>
        {/* <h1 className='text-2xl bg-blue-400'>Hello world</h1> */}

        

      </Container>
    </div>
  )
}

export default App
