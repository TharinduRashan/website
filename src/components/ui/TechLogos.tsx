import React from "react";

interface TechLogoProps {
  name: string;
  className?: string;
}

export function TechLogo({ name, className = "w-6 h-6" }: TechLogoProps) {
  switch (name.toLowerCase()) {
    case "react":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>React</title>
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#00D8FF" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" stroke="#00D8FF" strokeWidth="1.6" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" stroke="#00D8FF" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="1.8" fill="#00D8FF" />
        </svg>
      );

    case "angular":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Angular</title>
          <polygon points="12,2 22,5.5 19.5,18 12,22 4.5,18 2,5.5" fill="#DD0031" />
          <polygon points="12,4 12,20 18,17 20,6.5" fill="#C3002F" />
          <path d="M12 6L7 17H9.2L10.3 14.5H13.7L14.8 17H17L12 6ZM12 9.8L13.1 12.8H10.9L12 9.8Z" fill="white" />
        </svg>
      );

    case "vue":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Vue.js</title>
          <polygon points="2,3 12,20 22,3 17,3 12,12 7,3" fill="#41B883" />
          <polygon points="7,3 12,12 17,3 13.5,3 12,6 10.5,3" fill="#35495E" />
        </svg>
      );

    case "node":
    case "nodejs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Node.js</title>
          <path d="M12 2L21 7.2V17.5L12 22.7L3 17.5V7.2L12 2Z" fill="#5FA04E" />
          <path d="M12 4L19 8V16L12 20L5 16V8L12 4Z" fill="#339933" />
          <path d="M11 9H13V15H11V9Z" fill="white" />
        </svg>
      );

    case "dotnet":
    case ".net":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>.NET</title>
          <rect width="24" height="24" rx="5" fill="#512BD4" />
          <text x="12" y="16" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            .NET
          </text>
        </svg>
      );

    case "java":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Java</title>
          <path
            d="M8 17C8 17 6 18 12 18C18 18 16 17 16 17M6 19C6 19 4 21 12 21C20 21 18 19 18 19"
            stroke="#5382A1"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M13 3C13 3 15 6 12 9C9 12 12 14 12 14" stroke="#E76F00" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M10 5C10 5 12 7 10 10C8 13 11 15 11 15" stroke="#E76F00" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "js":
    case "javascript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>JavaScript</title>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <text x="14" y="18" fill="#000000" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            JS
          </text>
        </svg>
      );

    case "ts":
    case "typescript":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>TypeScript</title>
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <text x="14" y="18" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            TS
          </text>
        </svg>
      );

    case "openai":
    case "chatgpt":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>OpenAI</title>
          <circle cx="12" cy="12" r="10" fill="#10A37F" />
          <path
            d="M12 7C10.5 7 9.5 8 9.5 9.5M12 7C13.5 7 14.5 8 14.5 9.5M12 7V17M12 17C10.5 17 9.5 16 9.5 14.5M12 17C13.5 17 14.5 16 14.5 14.5M7 12C7 10.5 8 9.5 9.5 9.5M7 12C7 13.5 8 14.5 9.5 14.5M17 12C17 10.5 16 9.5 14.5 9.5M17 12C17 13.5 16 14.5 14.5 14.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "claude":
    case "anthropic":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Anthropic Claude</title>
          <circle cx="12" cy="12" r="10" fill="#D97757" />
          <path d="M12 5V19M5 12H19M7 7L17 17M17 7L7 17" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "huggingface":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Hugging Face</title>
          <circle cx="12" cy="12" r="10" fill="#FFD21E" />
          <circle cx="9" cy="10" r="1.5" fill="#000000" />
          <circle cx="15" cy="10" r="1.5" fill="#000000" />
          <path d="M8 14C9.5 16.5 14.5 16.5 16 14" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case "langchain":
    case "rabbit":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>LangChain</title>
          <circle cx="12" cy="12" r="10" fill="#E26D2D" />
          <path d="M8 15V13C8 10 11 8 13 8C14.5 8 16 9.5 16 11V15" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="10" cy="11" r="1" fill="white" />
        </svg>
      );

    case "uipath":
    case "ui":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Automation</title>
          <rect width="24" height="24" rx="4" fill="#FA4616" />
          <text x="12" y="16" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            Ui
          </text>
        </svg>
      );

    case "python":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Python</title>
          <path
            d="M11.8 3C8.5 3 8.7 4.4 8.7 4.4L8.7 5.9H12V6.6H5.4C4 6.6 3 7.8 3 9.7C3 11.6 4.1 12.3 4.1 12.3L5.2 12.3V10.7C5.2 9.1 6.5 9.1 6.5 9.1H9.8C11.1 9.1 12 8.2 12 7V4.4C12 4.4 12.3 3 11.8 3ZM10.5 4.3C10.9 4.3 11.2 4.6 11.2 5C11.2 5.4 10.9 5.7 10.5 5.7C10.1 5.7 9.8 5.4 9.8 5C9.8 4.6 10.1 4.3 10.5 4.3Z"
            fill="#3776AB"
          />
          <path
            d="M12.2 21C15.5 21 15.3 19.6 15.3 19.6L15.3 18.1H12V17.4H18.6C20 17.4 21 16.2 21 14.3C21 12.4 19.9 11.7 19.9 11.7L18.8 11.7V13.3C18.8 14.9 17.5 14.9 17.5 14.9H14.2C12.9 14.9 12 15.8 12 17V19.6C12 19.6 11.7 21 12.2 21ZM13.5 19.7C13.1 19.7 12.8 19.4 12.8 19C12.8 18.6 13.1 18.3 13.5 18.3C13.9 18.3 14.2 18.6 14.2 19C14.2 19.4 13.9 19.7 13.5 19.7Z"
            fill="#FFD43B"
          />
        </svg>
      );

    case "kotlin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Kotlin</title>
          <polygon points="2,2 12,2 2,12" fill="#7F52FF" />
          <polygon points="12,2 22,2 2,22 2,12" fill="#C711E1" />
          <polygon points="22,2 22,12 12,22 2,22" fill="#E4485D" />
        </svg>
      );

    case "flutter":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Flutter</title>
          <polygon points="14,2 4,12 7.5,15.5 17.5,5.5" fill="#02569B" />
          <polygon points="11,19 7.5,15.5 14,9 17.5,12.5" fill="#0175C2" />
          <polygon points="14,22 10.5,18.5 14,15 17.5,18.5" fill="#29B6F6" />
        </svg>
      );

    case "swift":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Swift</title>
          <circle cx="12" cy="12" r="10" fill="#F05138" />
          <path
            d="M17 15C14 16 11 14 9 10C11 11 13 11 14 10C11 9 9 7 9 5C11 7 14 8 16 8C14 7 13 5 13 5C16 7 18 10 17 15Z"
            fill="white"
          />
        </svg>
      );

    case "aws":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>AWS</title>
          <text x="12" y="13" fill="#232F3E" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            aws
          </text>
          <path d="M5 16C9 19 15 19 19 16" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "gcp":
    case "googlecloud":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Google Cloud</title>
          <circle cx="12" cy="12" r="8" fill="#4285F4" />
          <path d="M9 13C8 13 7 12 7 11C7 10 8 9 9 9C9.5 7.5 11 6.5 12.5 6.5C14 6.5 15.5 7.5 16 9C17 9 18 10 18 11C18 12 17 13 16 13H9Z" fill="white" />
        </svg>
      );

    case "azure":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Microsoft Azure</title>
          <polygon points="5,19 11,3 15,3 7,19" fill="#008AD7" />
          <polygon points="12,14 15,8 19,19 12,19" fill="#0078D4" />
        </svg>
      );

    case "kubernetes":
    case "k8s":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Kubernetes</title>
          <circle cx="12" cy="12" r="10" fill="#326CE5" />
          <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M12 3V7M12 17V21M3 12H7M17 12H21" stroke="white" strokeWidth="1.5" />
        </svg>
      );

    case "docker":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Docker</title>
          <rect width="24" height="24" rx="4" fill="#2496ED" />
          <path
            d="M6 14H18C17 17 14 18 10 18C7 18 6 16 6 14ZM8 10H10V12H8V10ZM11 10H13V12H11V10ZM14 10H16V12H14V10ZM11 7H13V9H11V7Z"
            fill="white"
          />
        </svg>
      );

    case "figma":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Figma</title>
          <rect x="7" y="3" width="5" height="5" rx="2.5" fill="#F24E1E" />
          <rect x="12" y="3" width="5" height="5" rx="2.5" fill="#FF7262" />
          <rect x="7" y="8" width="5" height="5" rx="2.5" fill="#A259FF" />
          <rect x="12" y="8" width="5" height="5" rx="2.5" fill="#1ABCFE" />
          <rect x="7" y="13" width="5" height="5" rx="2.5" fill="#0ACF83" />
        </svg>
      );

    case "grafana":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Grafana</title>
          <circle cx="12" cy="12" r="9" stroke="#F46800" strokeWidth="2.5" fill="none" />
          <circle cx="12" cy="12" r="4" fill="#F46800" />
        </svg>
      );

    case "zendesk":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Zendesk</title>
          <rect width="24" height="24" rx="4" fill="#03363D" />
          <path d="M7 8H17L7 16H17" stroke="#17494D" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case "datadog":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <title>Monitoring</title>
          <rect width="24" height="24" rx="4" fill="#632CA6" />
          <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" fill="none" />
          <path d="M12 9V12L14 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <div className="w-5 h-5 rounded bg-slate-200 text-slate-700 flex items-center justify-center text-[10px] font-bold">
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
