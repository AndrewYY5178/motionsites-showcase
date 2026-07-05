import { motion } from 'framer-motion';
import { Sparkles, LayoutGrid, FileText } from 'lucide-react';
import TemplateCard from '../components/TemplateCard';
import { templates } from '../data/templates';

export default function Gallery() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-600 mb-6"
            >
              <Sparkles className="w-4 h-4 text-anddream-lime" strokeWidth={1.5} />
              Powered by MotionSites AI Prompts
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4"
            >
              AndDream{' '}
              <span className="text-anddream-lime bg-gray-900 px-2 py-0.5 rounded-lg">
                灵感库
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl"
            >
              精选 9 套 AI 生成的 Landing Page 模版，来自 MotionSites 的顶级设计 Prompt。
              每个模版均可一键生成、自由定制、直接部署。
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center">
                  <LayoutGrid className="w-5 h-5 text-anddream-lime" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">9</div>
                  <div className="text-sm text-gray-400">Landing Pages</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">108</div>
                  <div className="text-sm text-gray-400">Component Prompts</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-anddream-lime/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-gray-900" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-400">Free & Open</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none opacity-[0.03]">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-anddream-lime blur-3xl" />
          <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-gray-900 blur-3xl" />
        </div>
      </section>

      {/* Template Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Landing Page Templates
            </h2>
            <p className="text-gray-400 mt-1">Click to preview and customize each template</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {templates.map((template, index) => (
            <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
