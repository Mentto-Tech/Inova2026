import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.css'

const options = [
    { value: "/inovaskill2026", label: "InovaSkill CIT-Alta Paulista" },
    { value: "/spai-aracatuba", label: "InovaSkill CIT-Araçatuba" },
    { value: "/spai-bauru", label: "InovaSkill CIT-Bauru" },
    { value: "/spai-assis", label: "InovaSkill CIT-Assis" }
];

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Selecionar edição...");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const matchedOption = options.find(option => 
            location.pathname === option.value || location.pathname.startsWith(option.value + '/')
        );
        if (matchedOption) {
            setSelectedOption(matchedOption.label);
        } else {
            setSelectedOption("Selecionar edição...");
        }
    }, [location.pathname]);

    const handleSelect = (option) => {
        setSelectedOption(option.label);
        setIsOpen(false);
        navigate(option.value);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.custom-select-wrapper')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <header className={`home-novo-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="logo-container" onClick={() => navigate("/")}>
                <div className="logo-glow"></div>
                <img src="/LogoInovaSkillGeral.png" alt="InovaSkill" className="header-logo-geral" />
            </div>
            <nav className="nav-menu">
                <div className={`custom-select-wrapper ${isOpen ? 'open' : ''}`}>
                    <div
                        className="nav-modern-select"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span>{selectedOption}</span>
                        <div className="select-arrow">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>

                    {isOpen && (
                        <div className="select-options-container">
                            {options.map((option) => (
                                <div
                                    key={option.value}
                                    className="select-option"
                                    onClick={() => handleSelect(option)}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

