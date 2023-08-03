'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MouseEventHandler } from 'react'

export default function Home() {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event): void => {
    throw new Error('Function not implemented.')
  }

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
                <Label htmlFor="name">Password</Label>
                <Input id="name" placeholder="Please enter your password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleClick}>Log in</Button>
        </CardFooter>
      </Card>
    </main>
  )
}
