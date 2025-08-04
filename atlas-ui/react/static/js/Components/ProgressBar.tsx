import React from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  color?: 'indigo' | 'blue' | 'purple' | 'cyan' | 'green';
  size?: 'sm' | 'xs';
  showPercentage?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max,
  label,
  color = 'indigo',
  size = 'xs',
  showPercentage = false
}) => {
  const percentage = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  
  const colorClasses = {
    indigo: {
      bg: 'bg-indigo-500/20',
      fill: 'bg-gradient-to-r from-indigo-500 to-indigo-400',
      text: 'text-indigo-400'
    },
    blue: {
      bg: 'bg-blue-500/20',
      fill: 'bg-gradient-to-r from-blue-500 to-blue-400',
      text: 'text-blue-400'
    },
    purple: {
      bg: 'bg-purple-500/20',
      fill: 'bg-gradient-to-r from-purple-500 to-purple-400',
      text: 'text-purple-400'
    },
    cyan: {
      bg: 'bg-cyan-500/20',
      fill: 'bg-gradient-to-r from-cyan-500 to-cyan-400',
      text: 'text-cyan-400'
    },
    green: {
      bg: 'bg-green-500/20',
      fill: 'bg-gradient-to-r from-green-500 to-green-400',
      text: 'text-green-400'
    }
  };

  const sizeClasses = {
    xs: 'h-1.5',
    sm: 'h-2'
  };

  const colors = colorClasses[color];
  const height = sizeClasses[size];

  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="text-gray-400">{label}</span>
          {showPercentage && (
            <span className={`${colors.text} font-medium`}>
              {percentage.toFixed(0)}%
            </span>
          )}
        </div>
      )}
      
      <div className={`w-full ${colors.bg} rounded-full overflow-hidden ${height}`}>
        <div
          className={`${colors.fill} ${height} rounded-full transition-all duration-700 ease-out shadow-sm`}
          style={{ width: `${percentage}%` }}
        >
          {/* Subtle glow effect */}
          <div className={`w-full h-full ${colors.fill} opacity-50 animate-pulse`} />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;