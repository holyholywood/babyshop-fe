import * as MUIicon from '@mui/icons-material'
interface MenuInterface {
  id: number
  name: string
  url: string
  icon: keyof typeof MUIicon
}

export const Menu: MenuInterface[] = [
  {
    id: 1,
    name: 'Items',
    url: '/items',
    icon: 'FolderOutlined'
  },
  {
    id: 2,
    name: 'Stocks',
    url: '/stocks',
    icon: 'ArticleOutlined'
  },
  {
    id: 3,
    name: 'Transactions',
    url: '/tramsactions',
    icon: 'PaymentsOutlined'
  },
  {
    id: 4,
    name: 'Incoming Items',
    url: '/incomign-items',
    icon: 'CheckBoxOutlined'
  },
  {
    id: 5,
    name: 'Exit Items',
    url: '/exit-items',
    icon: 'IndeterminateCheckBoxOutlined'
  },
  {
    id: 6,
    name: 'Users',
    url: '/users',
    icon: 'PersonOutlineOutlined'
  }
]
