import { Stack } from '@mui/system'
import Head from 'next/head'
import React from 'react'
import Sidebar from '../molecules/Sidebar'

const BaseLayout = ({ children, PageTitle }: { children: React.ReactNode; PageTitle: string }) => {
  return (
    <>
      <Head>
        <title>{PageTitle}</title>
      </Head>
      <Stack component='main' direction={'row'}>
        <Sidebar />
        <section>{children}</section>
      </Stack>
    </>
  )
}

export default BaseLayout
