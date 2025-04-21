import { NextResponse } from "next/server"
import { createClient } from "@/utils/supabase/server"

export async function POST(request: Request) {
  const { email } = await request.json()
  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }
  const supabase = await createClient()
  const { error } = await supabase
    .from('landing_page_contact_form')
    .insert([
      {
        email,
        subject: 'Chrome extension instructions request',
        message: 'Please send me instructions to install the Chrome extension.',
      },
    ])
  if (error) {
    console.error(error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ ok: true }, { status: 201 })
}