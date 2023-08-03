'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChangeEventHandler, FormEventHandler, MouseEventHandler, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { errorCountSlice, selectErrorCount } from '@/lib/redux'
import AlertPicker from './AlertPicker'

export default function Home() {
  const dispatch = useDispatch()
  const [password, setPassword] = useState("")
  const [isUserTrying, setIsUserTrying] = useState(false)
  const errorCount: number = useSelector(selectErrorCount)

  const handleFocus = () => {
    setIsUserTrying(true)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("yo")
    dispatch(errorCountSlice.actions.increment());
    setIsUserTrying(false)
    setPassword("")
  }

  const hasError = errorCount > 0;
  const isAlertVisible = hasError && !isUserTrying

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome!</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit}>

          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Please enter your password" onChange={handleChange} onFocus={handleFocus} value={password} />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-6">
            <div>
              <Button type="submit">Log in</Button>
            </div>
            {
              isAlertVisible &&
              <div>
                <AlertPicker errorCount={errorCount} />
              </div>
            }
          </CardFooter>
        </form>

      </Card>
    </main >
  )
}
