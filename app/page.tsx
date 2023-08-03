import Image from 'next/image'

export default function Home() {
  return (
    <main className="font-serif flex min-h-screen flex-col items-center p-24">
      <h1 className="text-xl" aria-details="There, i ESCAPED the single quote ESLint, are you happy?">
        Will&rsquo;s Website
      </h1>
      <label htmlFor='password'>Please enter your password:
      </label>
      <input type="password" id="password" name="password" maxLength={25} />
    </main>
  )
}
