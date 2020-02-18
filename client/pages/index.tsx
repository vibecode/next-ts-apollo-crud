import React from 'react'
import { NextPage } from 'next'
import { withApollo } from '../lib/apollo'
import { TasksComponent, TaskStatus } from '../generated/graphql'

interface InitialProps {
  greeting: string
}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = props => {
  return (
    <div>
      <TasksComponent variables={{ status: TaskStatus.Active }}>
        {({ loading, error, data }) => {
          if (loading) return <p>loading</p>
          if (error) return <p>Error</p>

          const tasks = data && data.tasks ? data.tasks : []

          return (
            <ul>
              {tasks.map(({ title, status, id }) => (
                <li key={id}>
                  <p>{title}</p>
                  <p>{status}</p>
                </li>
              ))}
            </ul>
          )
        }}
      </TasksComponent>
    </div>
  )
}

IndexPage.getInitialProps = async () => ({
  greeting: 'Hi username'
})

export default withApollo({ ssr: true })(IndexPage)
