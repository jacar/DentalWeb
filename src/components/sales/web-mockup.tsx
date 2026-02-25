'use client'

import { motion } from 'framer-motion'
import { Check, Calendar, Users, Star, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'

export function WebMockup() {
    return (
        <div className="relative w-full max-w-[800px] aspect-[16/10] bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden flex flex-col group/mockup">
            {/* Browser Header */}
            <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="flex-grow mx-4">
                    <div className="h-6 w-full max-w-[400px] bg-white border border-slate-200 rounded-md mx-auto" />
                </div>
            </div>

            {/* Mockup Content */}
            <div className="flex-grow flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-20 lg:w-48 bg-slate-50 border-r border-slate-200 p-4 lg:p-6 space-y-6 hidden sm:block">
                    <div className="h-8 w-8 lg:w-32 bg-teal-100 rounded-lg" />
                    <nav className="space-y-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-4 w-full bg-slate-200 rounded-full opacity-50" />
                        ))}
                    </nav>
                </div>

                {/* Main Dashboard */}
                <div className="flex-grow p-6 lg:p-10 bg-white overflow-y-auto">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-10">
                        <div className="space-y-4">
                            <div className="h-4 w-32 bg-teal-100 rounded-full" />
                            <div className="h-10 w-64 bg-slate-900 rounded-xl" />
                        </div>
                        <div className="h-12 w-12 rounded-full bg-teal-50 flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-teal-600" />
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-6 mb-10">
                        {[
                            { label: 'Pacientes', value: '1.2k', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                            { label: 'Rating', value: '4.9', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50' },
                            { label: 'Citas Hoy', value: '12', icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-50' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className={`p-4 rounded-2xl ${stat.bg} space-y-2`}
                            >
                                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                                <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Chart UI Simulation */}
                    <div className="bg-slate-50 rounded-2xl p-6 h-40 flex items-end gap-2 justify-between">
                        {[40, 70, 45, 90, 65, 80, 50, 85, 45, 75].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: 1 + i * 0.05, duration: 0.8 }}
                                className="flex-grow bg-teal-500/20 rounded-t-lg group-hover/mockup:bg-teal-500/40 transition-colors"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Elements for depth */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] right-[-5%] w-48 bg-white p-4 rounded-xl shadow-2xl border border-slate-100 z-20 hidden md:block"
            >
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                        <Check className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-slate-900">Cita Confirmada</div>
                        <div className="text-[10px] text-slate-500 italic">Dr. García • 10:30 AM</div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[15%] left-[-5%] w-44 bg-slate-900 p-4 rounded-xl shadow-2xl z-20 hidden md:block"
            >
                <div className="flex items-center justify-between mb-3 text-white">
                    <Sparkles className="w-5 h-5 text-teal-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Growth</span>
                </div>
                <div className="text-2xl font-black text-white">+84%</div>
                <div className="text-[10px] text-teal-400 font-bold">Pacientes nuevos</div>
            </motion.div>
        </div>
    )
}
