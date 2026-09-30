import { Code2, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import CvDownload from './CvDownload'
const links = [['Home','/'], ['Projects','/projects'], ['Experience','/experience'], ['Achievements','/achievements'], ['About','/about'], ['Contact','/contact']]
export default function Navbar() {
 const [open,setOpen] = useState(false); const close=()=>setOpen(false)
 return <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur"><nav className="container flex min-h-16 items-center justify-between gap-4"><Link to="/" onClick={close} className="text-sm font-bold tracking-tight">ROSS CEDRIC<br className="sm:hidden" /> NAZARENO</Link><div className="hidden items-center gap-5 lg:flex">{links.map(([n,to])=><NavLink key={to} to={to} end={to==='/'} className={({isActive})=>`text-sm ${isActive?'text-teal font-semibold':'text-muted hover:text-ink'}`}>{n}</NavLink>)}</div><div className="hidden items-center gap-3 lg:flex"><a href="https://github.com/0ced0" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted hover:text-teal"><Code2 size={19}/></a><CvDownload compact/></div><button className="lg:hidden p-2 text-ink" onClick={()=>setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open?<X/>:<Menu/>}</button></nav>{open&&<div className="border-t border-line bg-paper lg:hidden"><div className="container grid py-3">{links.map(([n,to])=><NavLink key={to} to={to} end={to==='/'} onClick={close} className="py-3 text-sm font-medium">{n}</NavLink>)}<div className="flex gap-4 border-t border-line pt-3"><a href="https://github.com/0ced0" target="_blank" rel="noreferrer" className="text-sm text-teal">GitHub</a><CvDownload compact/></div></div></div>}</header>
}
