import Link from 'next/link';
import IncorrectPasswordAlert from './IncorrectPasswordAlert';

export default function AfterAttempt2() {
  return (
    <IncorrectPasswordAlert>
      Having trouble?<br />
      You can <Link href="" className="underline">reset your password.</Link>
    </IncorrectPasswordAlert >
  )
}
