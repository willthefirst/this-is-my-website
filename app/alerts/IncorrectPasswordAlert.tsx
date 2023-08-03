import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export default function IncorrectPasswordAlert({ children }: Props) {
  return (
    <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Incorrect Password</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
