import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Construction, Sparkles } from 'lucide-react';
import { templates } from '../../data/templates';

export default function TemplatePlaceholder() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const template = templates.find((t) => t.id === id);

  if (!template) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Template Not Found</h1>
          <p className="text-gray-400 mb-4">The template "{id}" does not exist.</p>
          <button
            onClick={() => navigate('/')}
            className="text-sm font-medium text-gray-900 hover:underline"
          >
            ← Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Gallery
          </button>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${template.gradient} flex items-center justify-center`}>
              <Sparkles className="w-5 h-5 text-white" strokeWidth={1.5} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{template.title}</h1>
              <p className="text-sm text-gray-400">{template.category}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
            <Construction className="w-10 h-10 text-gray-400" strokeWidth={1.5} />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            This template will be generated from the MotionSites AI Prompt and customized
            with the AndDream brand identity. Stay tuned!
          </p>
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-left">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              Original Prompt Preview
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              {template.summary}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
