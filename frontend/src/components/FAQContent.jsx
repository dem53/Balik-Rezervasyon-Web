import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    
    const [activeIndex, setActiveIndex] = useState(null);
    const { t } = useTranslation();

    const questions = t('FaqContent.questions', { returnObjects: true });

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto p-5 mt-6 bg-gray-100 rounded-lg shadow-md">
            <div className="border-t border-gray-200">
                {questions.map((item, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <div
                            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-200 transition"
                            onClick={() => toggleAnswer(index)}
                        >
                            <span className="font-light text-xs md:text-sm font-sans">{item.question}</span>
                            <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                                ▼
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="p-4 py-8 text-xs md:text-sm font-semibold font-sans bg-gray-50">
                                - {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
