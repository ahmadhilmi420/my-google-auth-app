"use client";

import { handleSignIn, handleSignOut, handleSignInWithGithub, handleSignOutWithGithub } from "../../lib/auth";
import { useSession } from "next-auth/react";

export default function HomePage() {
	const { data: session } = useSession();

	return (
		<main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
			<div className="mb-8 text-center max-w-xl rounded-2xl bg-white shadow-lg p-10">
				<h1 className="text-3xl font-bold mb-6">Welcome to Next.js with NextAuth.js</h1>
				<p className="text-lg mb-4">This is a simple example of authentication using NextAuth.js with Google and GitHub providers.</p>
				{session ? (
					<div>
						<h2 className="text-lg font-medium text-gray-700">Welcome, {session.user.name}!</h2>
						<button onClick={handleSignOut} className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600">
							Sign Out
						</button>
					</div>
				) : (
					<button onClick={handleSignIn} className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
						Sign in with Google
					</button>
				)}

				<h2 className="text-lg font-black text-gray-900 mt-4 p-4 items-center">OR</h2>
				{session ? (
					<div>
						<h2 className="text-lg font-medium text-gray-700">Welcome, {session.user.name}!</h2>
						<button onClick={handleSignOutWithGithub} className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600">
							Sign Out with Github
						</button>
					</div>
				) : (
					<button onClick={handleSignInWithGithub} className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
						Sign in with Github
					</button>
				)}
			</div>
		</main>
	);
}
