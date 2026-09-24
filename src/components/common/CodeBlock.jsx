import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '../../utils/helpers';
import './CodeBlock.css';

export default function CodeBlock({ code = '', language = 'bash', title = '' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(code);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="codeblock-container">
      <div className="codeblock-header">
        <span className="codeblock-title">{title || language}</span>
        <button
          type="button"
          className="codeblock-copy-btn"
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check size={14} className="text-success" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="codeblock-content">
        <code>{code}</code>
      </pre>
    </div>
  );
}
