import { useRouter } from 'next/router'

import { useCurrentUser } from '../../api/user/hooks'

export default function Profile() {
  const router = useRouter()
  const user = useCurrentUser()
  
  if (user) {
    router.replace(`/users/${user._id}`)
    return (<></>)
  }

  router.replace('/signin')
  return (<></>)
}
