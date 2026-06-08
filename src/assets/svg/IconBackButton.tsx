export const IconBackButton = ({ width = 12, height = 12, fill = 'none', stroke = '#4F4FFF', strokeWidth = 2 }: { width?: number, height?: number, fill?: string, stroke?: string, strokeWidth?: number }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);