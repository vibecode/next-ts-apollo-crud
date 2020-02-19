import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import {
  TaskComponent,
  useTaskQuery,
  useTaskLazyQuery
} from '../generated/graphql'
import UpdateTaskForm from '../components/UpdateTaskForm'
import { withApollo } from '../lib/apollo'

interface InitialProps {
  id: number
}

interface AllProps extends InitialProps {}

const UpdatePage: NextPage<AllProps, InitialProps> = ({ id }) => {
  const [getTask, { loading, error, data }] = useTaskLazyQuery({
    variables: { id }
  })

  useEffect(() => {
    if (id) {
      getTask()
    }
  }, [id])

  const task = data && data.task ? data.task : null

  return (
    <Layout>
      {id ? (
        loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>An error occurrred.</p>
        ) : task ? (
          <UpdateTaskForm
            initialInput={{
              id: task.id,
              title: task.title
            }}
          />
        ) : (
          <p>Could not find the task.</p>
        )
      ) : (
        <p>Invalid id.</p>
      )}
    </Layout>
  )
}

UpdatePage.getInitialProps = async ctx => {
  const { id } = ctx.query

  return {
    id: typeof id === 'string' ? Number(id) : NaN
  }
}

export default withApollo({ ssr: true })(UpdatePage)
