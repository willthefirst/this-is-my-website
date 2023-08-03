import AfterAttempt1 from "./alerts/AfterAttempt1"
import AfterAttempt2 from "./alerts/AfterAttempt2"

type Props = {
  errorCount: number
}

export default function AlertPicker({ errorCount = 0 }: Props) {
  if (errorCount <= 0) {
    return null
  } else if (errorCount === 1) {
    return <AfterAttempt1 />
  } else {
    return <AfterAttempt2 />
  }
}

