import { NextResponse } from "next/server"

export function middleware(request) {
  console.log('ハロー');
  // return Response.json({
  //   msg: 'ようこそ'
  // })
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  // matcher: ['/about/:path*', '/tasks/:path*']
  matcher: ['/about/:path*']
}