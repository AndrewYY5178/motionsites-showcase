import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Template } from '../data/templates';

interface TemplateCardProps {
  template: Template;
  index: number;
}

export default function TemplateCard({ template, index }: TemplateCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group cursor-pointer"
      onClick={() => navigate(`/templates/${template.id}`)}
    >
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden anddream-shadow transition-shadow hover:shadow-lg">
        {/* Gradient color strip */}
        <div className={`h-2 bg-gradient-to-r ${template.gradient}`} />

        <div className="p-5 sm:p-6">
          {/* Category tag */}
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600 mb-3">
            <Sparkles className="w-3 h-3" strokeWidth={1.5} />
            {template.category}
          </span>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-anddream-lime transition-colors">
            {template.title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
            {template.summary}
          </p>

          {/* View button */}
          <div className="flex items-center gap-1.5 text-sm font-medium text-gray-400 group-hover:text-gray-900 transition-colors">
            <span>View Template</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
