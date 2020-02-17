import React from 'react'
import { NextPage } from 'next'

interface InitialProps {
  greeting: string
}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = props => {
  return (
    <div>
      <h1>{props.greeting}</h1>
    </div>
  )
}

IndexPage.getInitialProps = async () => ({
  greeting: 'Hi username'
})

export default IndexPage
