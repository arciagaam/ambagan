import { NextResponse } from 'next/server'
import { apiErrorHandler } from './apiErrorHandler'

export function apiHandler(handler: (req: Request, ...args: any) => Promise<NextResponse>) {
    return async function wrappedHandler(req: Request) {
        try {
            return await handler(req)
        } catch (error) {
            const formatted = apiErrorHandler(error)
            return NextResponse.json({ error: formatted.message }, { status: formatted.status })
        }
    }
}
