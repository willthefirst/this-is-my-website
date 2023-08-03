'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { errorCountSlice, selectErrorCount } from '@/lib/redux'
import AlertPicker from './AlertPicker'

export default function Home() {
  const dispatch = useDispatch()
  const [password, setPassword] = useState("")
  const errorCount: number = useSelector(selectErrorCount)

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value)
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(errorCountSlice.actions.increment());
    setPassword("")
  }

  const hasError = errorCount > 0;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Welcome!</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Please enter your password" onChange={handleChange} value={password} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-6">
          <div>
            <Button onClick={handleClick}>Log in</Button>
          </div>
          {
            hasError &&
            <div>
              <AlertPicker errorCount={errorCount} />
            </div>
          }
        </CardFooter>
      </Card>
    </main >
  )
}
