"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import { auth } from "@/auth";
async function Navbar() {
    const [open, setOpen] = useState(false)
    const session = await auth();
    if (!session) {
        return <p className='text-center'>Not logged in</p>;
    }
    return (
        <nav className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-semibold text-slate-900">Advotek</Link>
                        <p className="ml-3 text-sm text-slate-500 hidden md:block">Trusted local lawyers</p>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-sm text-slate-700 hover:text-teal-600">Home</Link>
                        <Link href="/contact" className="text-sm text-slate-700 hover:text-teal-600">Contact</Link>
                        <Link href="/payment" className="text-sm text-slate-700 hover:text-teal-600">Payment</Link>
                        <Link href="#"
                            // do changes here in signin button
                            onClick={() => signIn()}
                            className="bg-teal-600 text-white px-4 py-2 rounded text-sm">{session.user?.id||"Sign In"}</Link>
                    </div>

                    <div className="md:hidden">
                        <button
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            onClick={() => setOpen(!open)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {open && (
                <div className="md:hidden border-t border-gray-100">
                    <div className="px-4 pt-4 pb-4 space-y-2">
                        <Link href="/" className="block text-slate-700 py-2">Home</Link>
                        <Link href="/contact" className="block text-slate-700 py-2">Contact</Link>
                        <Link href="/payment" className="block text-slate-700 py-2">Payment</Link>
                        <Link href="/login" className="block bg-teal-600 text-white text-center rounded py-2">SignUp</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;