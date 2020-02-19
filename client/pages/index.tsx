import React from 'react'
import { NextPage } from 'next'
import { TaskStatus, useTasksQuery } from '../generated/graphql'
import Layout from '../components/Layout'
import TaskList from '../components/TaskList'
import CreateTaskForm from '../components/CreateTaskForm'
import { withApollo } from '../lib/apollo'

interface InitialProps {}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = props => {
  const { loading, error, data, refetch } = useTasksQuery({
    fetchPolicy: 'cache-and-network'
  })
  const tasks = data && data.tasks ? data.tasks : []
  return (
    <Layout>
      {loading && (!data || !data.tasks) ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred.</p>
      ) : (
        <>
          <CreateTaskForm onTaskCreated={refetch} />
          <TaskList tasks={tasks} />
        </>
      )}
    </Layout>
  )
}

IndexPage.getInitialProps = async ctx => ({
  filter: {
    status:
      typeof ctx.query.status === 'string'
        ? (ctx.query.status as TaskStatus)
        : undefined
  }
})

export default withApollo({ ssr: true })(IndexPage)
