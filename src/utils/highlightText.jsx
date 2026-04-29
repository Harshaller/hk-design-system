export function highlightText(text, searchTerm, highlightClass = 'bg-yellow-200 dark:bg-yellow-800 font-semibold') {
  if (!searchTerm || !text) return text;
  
  const regex = new RegExp(`(${searchTerm})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => 
    regex.test(part) ? (
      <span key={index} className={highlightClass}>
        {part}
      </span>
    ) : part
  );
}