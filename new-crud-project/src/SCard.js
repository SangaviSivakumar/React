// src/components/SCard.js
import React from 'react'
import {
  Card,
  Image,
  Icon,
  CardContent,
  CardHeader,
  CardDescription
} from 'semantic-ui-react'

const SCard = ({ id, title, pic, category, RemoveData }) => (
  <Card>
    <Image src={pic} wrapped ui={false} />
    <CardContent>
      <CardHeader>{title}</CardHeader>
      <CardDescription>
        ID: {id}
      </CardDescription>
    </CardContent>
    <CardContent extra>
      <Icon name='tag' />
      {category}
    </CardContent>
    <button onClick={() => RemoveData(id)} style={{ margin: "10px" }}>
      Remove
    </button>
  </Card>
)

export default SCard
