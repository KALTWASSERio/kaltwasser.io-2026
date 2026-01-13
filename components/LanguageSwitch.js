function LanguageSwitch({ currentLang, onToggle }) {
    return (
        <button 
            onClick={onToggle}
            className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-[var(--primary-color)] transition-colors px-3 py-1 rounded-full border border-gray-200 hover:border-[var(--primary-color)]"
        >
            <span className="uppercase">{currentLang}</span>
            <div className="icon-globe text-base"></div>
        </button>
    );
}