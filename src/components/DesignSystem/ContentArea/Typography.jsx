export function Typography({ colors }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Typography System</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Text Colors</h3>
          <div className="space-y-4">
            <p style={{ color: colors.text.primary }} className="text-xl">
              Primary Text: {colors.text.primary}
            </p>
            <p style={{ color: colors.text.secondary }} className="text-xl">
              Secondary Text: {colors.text.secondary}
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Headings</h3>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold" style={{ color: colors.text.primary }}>Heading 1</h1>
            <h2 className="text-3xl font-bold" style={{ color: colors.text.primary }}>Heading 2</h2>
            <h3 className="text-2xl font-bold" style={{ color: colors.text.primary }}>Heading 3</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Typography;