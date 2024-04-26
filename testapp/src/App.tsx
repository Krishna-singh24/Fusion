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

const App = () => {
  return (
    <div className='p-32'>
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
      {/* <Checkbox label='Remember Me' color='warning' /> */}
      {/* <Image></Image> */}
      <div style={{ width: 600 }}>
        {/* <Alert
          color='success'
          title='Some title'
          description='Laborum fuga assumenda in non sunt. Quam voluptates est molestiae quis. Amet tempore eveniet perferendis voluptas laudantium vel voluptates. Ut et eos hic nam consequatur.'
        /> */}
        <Button color='success' padding='xs' radius='xl' fullWidth>Lorem ipsum dolor sit amet.</Button>

      </div>
      {/* <FileInput></FileInput> */}

    </div>
  )
}

export default App
