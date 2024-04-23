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

const App = () => {
  return (
    <div className='p-32'>
      {/* <Avatar size='xl'>sj</Avatar> */}
      {/* <Avatar image='/avatar.webp' /> */}
      {/* <Button color='danger' padding='xs' >nice</Button> */}
      {/* <Input variant='outlined' label='Some label' radius='xl' /> */}
      {/* <Search>search</Search> */}

      <Card>
        <h1>Something happened</h1>
      </Card>
      {/* <Select></Select> */}
      {/* <Checkbox></Checkbox> */}
      {/* <Image></Image> */}
      <div style={{ width: 600 }}>
        {/* <Alert title='Some title'
          description='Laborum fuga assumenda in non sunt. Quam voluptates est molestiae quis. Amet tempore eveniet perferendis voluptas laudantium vel voluptates. Ut et eos hic nam consequatur.'
        /> */}
      </div>

    </div>
  )
}

export default App
