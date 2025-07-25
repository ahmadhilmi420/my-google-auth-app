import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
  const { data } = useSession()
  if (!data) {
    return <div>No session data available</div>
  }

  const { accessToken } = data as { accessToken?: string }
  return <div>Access Token: {accessToken || "Not available"}</div>
}