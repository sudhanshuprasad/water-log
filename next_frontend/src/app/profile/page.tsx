import Navbar from '@/components/Navbar'
import React from 'react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Profile = async() => {

    const { getUser } = getKindeServerSession()
    const user = await getUser()

    return (
        <div>
            <Navbar />
            hello {user?.given_name} {user?.family_name}
        </div>
    )
}

export default Profile
