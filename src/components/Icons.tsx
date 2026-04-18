import * as React from "react";

export const GitHubLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.341-3.369-1.341-.454-1.152-1.11-1.459-1.11-1.459-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

export const LinkedInLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const TwitterLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" />
  </svg>
);

export const ReactLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
  </svg>
);

export const NextJsLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M16 16L9 7" />
    <path d="M15 7V16" />
  </svg>
);

export const TypeScriptLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M14 10H18" />
    <path d="M16 10V16" />
    <path d="M7 10H11" />
    <path d="M9 10V16" />
  </svg>
);

export const FirebaseLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3.5 19.5L12 3.5L20.5 19.5H3.5Z" />
    <path d="M12 13L8 19.5" />
    <path d="M12 13L16 19.5" />
  </svg>
);

export const NodeJsLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" />
    <path d="M12 8V16" />
    <path d="M16 12H8" />
  </svg>
);

export const TailwindLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 12.5C12 12.5 10 14.5 7 14.5C4 14.5 2 12.5 2 12.5C2 12.5 4 10.5 7 10.5C10 10.5 12 12.5 12 12.5ZM12 12.5C12 12.5 14 10.5 17 10.5C20 10.5 22 12.5 22 12.5C22 12.5 20 14.5 17 14.5C14 14.5 12 12.5 12 12.5Z" />
    <path d="M12 7.5C12 7.5 10 9.5 7 9.5C4 9.5 2 7.5 2 7.5C2 7.5 4 5.5 7 5.5C10 5.5 12 7.5 12 7.5Z" />
    <path d="M12 17.5C12 17.5 14 15.5 17 15.5C20 15.5 22 17.5 22 17.5C22 17.5 20 19.5 17 19.5C14 19.5 12 17.5 12 17.5Z" />
  </svg>
);

export const StripeLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 12.5C8 11.1 9.1 10 10.5 10H14.5C15.9 10 17 11.1 17 12.5V12.5C17 13.9 15.9 15 14.5 15H9.5C8.1 15 7 13.9 7 12.5" />
    <path d="M12 7V17" />
  </svg>
);

export const FigmaLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="6" r="3" />
    <circle cx="15" cy="6" r="3" />
    <circle cx="15" cy="12" r="3" />
    <path d="M6 12C6 10.3 7.3 9 9 9H12V15H9C7.3 15 6 13.7 6 12Z" />
    <path d="M6 18C6 16.3 7.3 15 9 15H12V18C12 19.7 10.7 21 9 21V21C7.3 21 6 19.7 6 18Z" />
  </svg>
);

export const MongoDBLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2C12 2 7 7 7 12C7 17 12 22 12 22C12 22 17 17 17 12C17 7 12 2 12 2Z" />
    <path d="M12 7V17" />
  </svg>
);

export const DockerLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="10" width="4" height="4" rx="0.5" />
    <rect x="8" y="10" width="4" height="4" rx="0.5" />
    <rect x="13" y="10" width="4" height="4" rx="0.5" />
    <rect x="8" y="5" width="4" height="4" rx="0.5" />
    <path d="M3 16C3 16 3 19 8 19C13 19 21 16 21 12C21 8 19 8 19 8" />
  </svg>
);

export const PremiumSparkle = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5L12 3Z" fill="currentColor" />
    <path d="M19 4L19.7 6.3L22 7L19.7 7.7L19 10L18.3 7.7L16 7L18.3 6.3L19 4Z" fill="currentColor" />
  </svg>
);
